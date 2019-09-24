"use strict";

const axios = require("axios");
const fs = require("fs");
const _ = require("lodash");

let instructions;
let unicodeUrl = "https://unicode.org/Public/emoji/12.0/emoji-test.txt";

main();

async function main() {
    instructions = await getInstructions();

    writePHPFunction(instructions);
    writeJavascriptFunction(instructions);
}

function writePHPFunction(instructions) {
    let regex = `'/[`;

    for (const instruction of instructions) {
        if (instruction.length == 2) {
            regex += `\\x{${instruction[0]}}-\\x{${instruction[1]}}`;
        } else {
            regex += `\\x{${instruction[0]}}`;
        }
    }

    regex += `]/u'`;

    fs.writeFileSync("dist/strip_emojis.php", renderTemplateFile("php", {
        regex,
        header: getHeader()
    }), {
        encoding: 'utf8'
    });
}

function writeJavascriptFunction(instructions) {
    let regex = `/[`;

    for (const instruction of instructions) {
        if (instruction.length == 2) {
            regex += `\\u{${instruction[0]}}-\\u{${instruction[1]}}`;
        } else {
            regex += `\\u{${instruction[0]}}`;
        }
    }

    regex += `]/gu`;

    fs.writeFileSync("dist/strip_emojis.js", renderTemplateFile("js", {
        regex,
        header: getHeader()
    }), {
        encoding: 'utf8'
    });
}

function getHeader() {
    return `Built using ${unicodeUrl} (${Date()})`;
}

function renderTemplateFile(file, data) {
    let fileContents = fs.readFileSync("templates/" + file, {
        encoding: 'utf8'
    });

    for (const key in data) {
        const value = data[key];

        fileContents = fileContents.replace(new RegExp(`%%${key}%%`, 'gi'), value);
    }

    return fileContents;
}

async function getInstructions() {
    let {
        data
    } = await axios.get(unicodeUrl);

    data = data.split("\n");
    data = data.filter(line => line.match(/^[0-9a-fA-F]/) !== null);

    let allCodes = [];
    for (const line of data) {
        const codeArea = line.split(";")[0];
        allCodes.push(...codeArea.trim().split(" "));
    }

    allCodes = _.uniq(allCodes);

    allCodes.sort((a, b) => {
        return parseInt("0x" + a) - parseInt("0x" + b);
    });

    allCodes = allCodes.filter(code => parseInt("0x" + code) >= 0x00A9);

    let sequenceStart = null;
    const instructions = [];

    for (let i = 0; i < allCodes.length; i++) {
        const previousCode = allCodes[i - 1] ? parseInt("0x" + allCodes[i - 1]) : null;
        const currentCode = parseInt("0x" + allCodes[i]);
        const nextCode = allCodes[i + 1] ? parseInt("0x" + allCodes[i + 1]) : null;

        const isStartSequence = currentCode - 1 !== previousCode && currentCode + 1 === nextCode;
        const isEndSequence = currentCode - 1 === previousCode && currentCode + 1 !== nextCode;
        const isMiddleSequence = currentCode - 1 === previousCode && currentCode + 1 === nextCode;

        if (isStartSequence) {
            sequenceStart = currentCode;
        } else if (isEndSequence) {
            instructions.push([
                sequenceStart.toString(16),
                currentCode.toString(16)
            ]);

            sequenceStart = null;
        } else if (isMiddleSequence) {
            continue;
        } else {
            instructions.push([currentCode.toString(16)]);
        }
    }

    return instructions;
}