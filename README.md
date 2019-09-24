# emoji-stripper
Strips emojis from strings

Javascript:
```javascript
function stripEmojis(str) {
    return str.replace(/[\u{a9}\u{ae}\u{200d}\u{203c}\u{2049}\u{20e3}\u{2122}\u{2139}\u{2194}-\u{2199}\u{21a9}-\u{21aa}\u{231a}-\u{231b}\u{2328}\u{23cf}\u{23e9}-\u{23f3}\u{23f8}-\u{23fa}\u{24c2}\u{25aa}-\u{25ab}\u{25b6}\u{25c0}\u{25fb}-\u{25fe}\u{2600}-\u{2604}\u{260e}\u{2611}\u{2614}-\u{2615}\u{2618}\u{261d}\u{2620}\u{2622}-\u{2623}\u{2626}\u{262a}\u{262e}-\u{262f}\u{2638}-\u{263a}\u{2640}\u{2642}\u{2648}-\u{2653}\u{265f}-\u{2660}\u{2663}\u{2665}-\u{2666}\u{2668}\u{267b}\u{267e}-\u{267f}\u{2692}-\u{2697}\u{2699}\u{269b}-\u{269c}\u{26a0}-\u{26a1}\u{26aa}-\u{26ab}\u{26b0}-\u{26b1}\u{26bd}-\u{26be}\u{26c4}-\u{26c5}\u{26c8}\u{26ce}-\u{26cf}\u{26d1}\u{26d3}-\u{26d4}\u{26e9}-\u{26ea}\u{26f0}-\u{26f5}\u{26f7}-\u{26fa}\u{26fd}\u{2702}\u{2705}\u{2708}-\u{270d}\u{270f}\u{2712}\u{2714}\u{2716}\u{271d}\u{2721}\u{2728}\u{2733}-\u{2734}\u{2744}\u{2747}\u{274c}\u{274e}\u{2753}-\u{2755}\u{2757}\u{2763}-\u{2764}\u{2795}-\u{2797}\u{27a1}\u{27b0}\u{27bf}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{2b50}\u{2b55}\u{3030}\u{303d}\u{3297}\u{3299}\u{fe0f}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{1f191}-\u{1f19a}\u{1f1e6}-\u{1f1ff}\u{1f201}-\u{1f202}\u{1f21a}\u{1f22f}\u{1f232}-\u{1f23a}\u{1f250}-\u{1f251}\u{1f300}-\u{1f321}\u{1f324}-\u{1f393}\u{1f396}-\u{1f397}\u{1f399}-\u{1f39b}\u{1f39e}-\u{1f3f0}\u{1f3f3}-\u{1f3f5}\u{1f3f7}-\u{1f4fd}\u{1f4ff}-\u{1f53d}\u{1f549}-\u{1f54e}\u{1f550}-\u{1f567}\u{1f56f}-\u{1f570}\u{1f573}-\u{1f57a}\u{1f587}\u{1f58a}-\u{1f58d}\u{1f590}\u{1f595}-\u{1f596}\u{1f5a4}-\u{1f5a5}\u{1f5a8}\u{1f5b1}-\u{1f5b2}\u{1f5bc}\u{1f5c2}-\u{1f5c4}\u{1f5d1}-\u{1f5d3}\u{1f5dc}-\u{1f5de}\u{1f5e1}\u{1f5e3}\u{1f5e8}\u{1f5ef}\u{1f5f3}\u{1f5fa}-\u{1f64f}\u{1f680}-\u{1f6c5}\u{1f6cb}-\u{1f6d2}\u{1f6d5}\u{1f6e0}-\u{1f6e5}\u{1f6e9}\u{1f6eb}-\u{1f6ec}\u{1f6f0}\u{1f6f3}-\u{1f6fa}\u{1f7e0}-\u{1f7eb}\u{1f90d}-\u{1f93a}\u{1f93c}-\u{1f945}\u{1f947}-\u{1f971}\u{1f973}-\u{1f976}\u{1f97a}-\u{1f9a2}\u{1f9a5}-\u{1f9aa}\u{1f9ae}-\u{1f9ca}\u{1f9cd}-\u{1f9ff}\u{1fa70}-\u{1fa73}\u{1fa78}-\u{1fa7a}\u{1fa80}-\u{1fa82}\u{1fa90}-\u{1fa95}\u{e0062}-\u{e0063}\u{e0065}\u{e0067}\u{e006c}\u{e006e}\u{e0073}-\u{e0074}\u{e0077}\u{e007f}]/gu, "");
}
```

PHP:
```php
function stripEmojis($str) {
    return preg_replace('/[\x{a9}\x{ae}\x{200d}\x{203c}\x{2049}\x{20e3}\x{2122}\x{2139}\x{2194}-\x{2199}\x{21a9}-\x{21aa}\x{231a}-\x{231b}\x{2328}\x{23cf}\x{23e9}-\x{23f3}\x{23f8}-\x{23fa}\x{24c2}\x{25aa}-\x{25ab}\x{25b6}\x{25c0}\x{25fb}-\x{25fe}\x{2600}-\x{2604}\x{260e}\x{2611}\x{2614}-\x{2615}\x{2618}\x{261d}\x{2620}\x{2622}-\x{2623}\x{2626}\x{262a}\x{262e}-\x{262f}\x{2638}-\x{263a}\x{2640}\x{2642}\x{2648}-\x{2653}\x{265f}-\x{2660}\x{2663}\x{2665}-\x{2666}\x{2668}\x{267b}\x{267e}-\x{267f}\x{2692}-\x{2697}\x{2699}\x{269b}-\x{269c}\x{26a0}-\x{26a1}\x{26aa}-\x{26ab}\x{26b0}-\x{26b1}\x{26bd}-\x{26be}\x{26c4}-\x{26c5}\x{26c8}\x{26ce}-\x{26cf}\x{26d1}\x{26d3}-\x{26d4}\x{26e9}-\x{26ea}\x{26f0}-\x{26f5}\x{26f7}-\x{26fa}\x{26fd}\x{2702}\x{2705}\x{2708}-\x{270d}\x{270f}\x{2712}\x{2714}\x{2716}\x{271d}\x{2721}\x{2728}\x{2733}-\x{2734}\x{2744}\x{2747}\x{274c}\x{274e}\x{2753}-\x{2755}\x{2757}\x{2763}-\x{2764}\x{2795}-\x{2797}\x{27a1}\x{27b0}\x{27bf}\x{2934}-\x{2935}\x{2b05}-\x{2b07}\x{2b1b}-\x{2b1c}\x{2b50}\x{2b55}\x{3030}\x{303d}\x{3297}\x{3299}\x{fe0f}\x{1f004}\x{1f0cf}\x{1f170}-\x{1f171}\x{1f17e}-\x{1f17f}\x{1f18e}\x{1f191}-\x{1f19a}\x{1f1e6}-\x{1f1ff}\x{1f201}-\x{1f202}\x{1f21a}\x{1f22f}\x{1f232}-\x{1f23a}\x{1f250}-\x{1f251}\x{1f300}-\x{1f321}\x{1f324}-\x{1f393}\x{1f396}-\x{1f397}\x{1f399}-\x{1f39b}\x{1f39e}-\x{1f3f0}\x{1f3f3}-\x{1f3f5}\x{1f3f7}-\x{1f4fd}\x{1f4ff}-\x{1f53d}\x{1f549}-\x{1f54e}\x{1f550}-\x{1f567}\x{1f56f}-\x{1f570}\x{1f573}-\x{1f57a}\x{1f587}\x{1f58a}-\x{1f58d}\x{1f590}\x{1f595}-\x{1f596}\x{1f5a4}-\x{1f5a5}\x{1f5a8}\x{1f5b1}-\x{1f5b2}\x{1f5bc}\x{1f5c2}-\x{1f5c4}\x{1f5d1}-\x{1f5d3}\x{1f5dc}-\x{1f5de}\x{1f5e1}\x{1f5e3}\x{1f5e8}\x{1f5ef}\x{1f5f3}\x{1f5fa}-\x{1f64f}\x{1f680}-\x{1f6c5}\x{1f6cb}-\x{1f6d2}\x{1f6d5}\x{1f6e0}-\x{1f6e5}\x{1f6e9}\x{1f6eb}-\x{1f6ec}\x{1f6f0}\x{1f6f3}-\x{1f6fa}\x{1f7e0}-\x{1f7eb}\x{1f90d}-\x{1f93a}\x{1f93c}-\x{1f945}\x{1f947}-\x{1f971}\x{1f973}-\x{1f976}\x{1f97a}-\x{1f9a2}\x{1f9a5}-\x{1f9aa}\x{1f9ae}-\x{1f9ca}\x{1f9cd}-\x{1f9ff}\x{1fa70}-\x{1fa73}\x{1fa78}-\x{1fa7a}\x{1fa80}-\x{1fa82}\x{1fa90}-\x{1fa95}\x{e0062}-\x{e0063}\x{e0065}\x{e0067}\x{e006c}\x{e006e}\x{e0073}-\x{e0074}\x{e0077}\x{e007f}]/u', "", $str);
}
```