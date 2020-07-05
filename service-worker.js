/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "99133fe48c6569dacf1b951c64987195"
  },
  {
    "url": "assets/css/0.styles.0c11e1eb.css",
    "revision": "e9aca401bee0b51b67593f7b124399ef"
  },
  {
    "url": "assets/img/adapter-pattern.cacc7810.png",
    "revision": "cacc7810b86702e6308ec0e0f8a037d6"
  },
  {
    "url": "assets/img/bubbleSort.33a947c7.gif",
    "revision": "33a947c71ad62b254cab62e5364d2813"
  },
  {
    "url": "assets/img/complete-binary-tree.544586e4.png",
    "revision": "544586e497e928b2ce263e85065f5f8d"
  },
  {
    "url": "assets/img/countingSort.3c7ddb59.gif",
    "revision": "3c7ddb59df2d21b287e42a7b908409cb"
  },
  {
    "url": "assets/img/debounce.a8c64f6f.png",
    "revision": "a8c64f6f5e451a308a06946c6216a42b"
  },
  {
    "url": "assets/img/decorator-pattern.851a3a83.png",
    "revision": "851a3a83107a3ba4285bf95989c94039"
  },
  {
    "url": "assets/img/dom-dff.620cf3e9.png",
    "revision": "620cf3e957fb56ac57ee5f764517ef3d"
  },
  {
    "url": "assets/img/dom-diff-algorithm.5f71270a.svg",
    "revision": "5f71270a5e4f9703c453e7bd6b47a3f0"
  },
  {
    "url": "assets/img/dom-diff-alogrithm.d369b59f.png",
    "revision": "d369b59fa90b974e4951c3f292f7cbbc"
  },
  {
    "url": "assets/img/facade-pattern.5d369bf1.png",
    "revision": "5d369bf11ee2172f77b0ba47c2c0f958"
  },
  {
    "url": "assets/img/factory-pattern.426fd23e.png",
    "revision": "426fd23ee355c773042b29aff474df53"
  },
  {
    "url": "assets/img/full-binary-tree.5ca7f09f.png",
    "revision": "5ca7f09f2717e761cc887448b2f70ce4"
  },
  {
    "url": "assets/img/heapSort.7073c729.gif",
    "revision": "7073c729230e1a2c3c3c9207b25f6b43"
  },
  {
    "url": "assets/img/insertionSort.91b76e8e.gif",
    "revision": "91b76e8e4dab9b0cad9a017d7dd431e2"
  },
  {
    "url": "assets/img/instanceof.e28e04c9.png",
    "revision": "e28e04c9bf34f324ab12763d4c177a71"
  },
  {
    "url": "assets/img/iterator-pattern.2a441995.png",
    "revision": "2a441995eae3f87ff23402e1577cb029"
  },
  {
    "url": "assets/img/js-adapter-pattern.9c91a941.png",
    "revision": "9c91a941a68ab250307e7f4352a165ee"
  },
  {
    "url": "assets/img/js-decorator-pattern.64c91419.png",
    "revision": "64c91419f490f1ee8ceb00d60aae716e"
  },
  {
    "url": "assets/img/js-factory-pattern.691e70b8.png",
    "revision": "691e70b88a02741f456acc0ef49b93b1"
  },
  {
    "url": "assets/img/js-iterator-pattern.ba8b25cb.png",
    "revision": "ba8b25cbfe4ab5d02e689cb1963d8e10"
  },
  {
    "url": "assets/img/js-observer-pattern.7effd253.png",
    "revision": "7effd25350c8b9fb8c8d03b5f234704b"
  },
  {
    "url": "assets/img/js-proxy-pattern.68b52196.png",
    "revision": "68b52196b84c24316dd6d671f86b0996"
  },
  {
    "url": "assets/img/layout-paint.7ac7962d.png",
    "revision": "7ac7962d523327a81576d9f62e6945ea"
  },
  {
    "url": "assets/img/mergeSort.cdda3f11.gif",
    "revision": "cdda3f11c6efbc01577f5c29a9066772"
  },
  {
    "url": "assets/img/observer-pattern.35ceede6.png",
    "revision": "35ceede68ff77c4a2ec1fe5bec49a76f"
  },
  {
    "url": "assets/img/plans.6bb645e5.svg",
    "revision": "6bb645e5d65a2cbf3e05f8db4069ec34"
  },
  {
    "url": "assets/img/promise-process.a7df35c6.png",
    "revision": "a7df35c69491ec76fc50d71ca62aab3e"
  },
  {
    "url": "assets/img/prototype.cf29c15f.png",
    "revision": "cf29c15ff7f095f6a7582881ef1d408b"
  },
  {
    "url": "assets/img/proxy-pattern.10dd5d8d.png",
    "revision": "10dd5d8de08b5bb6e0ca94dba288f885"
  },
  {
    "url": "assets/img/quickSort.c411339b.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "assets/img/radixSort.6690b105.gif",
    "revision": "6690b1054909755ffcca96feb7a4d3ec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/selectionSort.1c7e20f3.gif",
    "revision": "1c7e20f306ddc02eb4e3a50fa7817ff4"
  },
  {
    "url": "assets/img/shellSort.1677445a.png",
    "revision": "1677445a57362fb423c59f5b005c5a68"
  },
  {
    "url": "assets/img/shellSort.671bd19a.gif",
    "revision": "671bd19a44faf77479d68805a083892c"
  },
  {
    "url": "assets/img/singleton-pattern.5aee4d8c.png",
    "revision": "5aee4d8c454bdc71270d058ecaf61c55"
  },
  {
    "url": "assets/img/throttle.61872b74.png",
    "revision": "61872b7435da5049178455374bb4e95d"
  },
  {
    "url": "assets/img/wechat-zhifubao-pay.c574ee9e.png",
    "revision": "c574ee9ea0fcc9370d0c3b5ac12a7981"
  },
  {
    "url": "assets/js/10.84e09f0e.js",
    "revision": "9f96369c75d18966e3a1923130ff7802"
  },
  {
    "url": "assets/js/11.289fcfe0.js",
    "revision": "528c7f160f6c3a8824e7624c5a9ad65d"
  },
  {
    "url": "assets/js/12.f99ceaea.js",
    "revision": "bca4ae9b2722043a0f5265e868c49323"
  },
  {
    "url": "assets/js/13.49d3fe8b.js",
    "revision": "05858d4f1b58093b5916955a02da677d"
  },
  {
    "url": "assets/js/14.5b71e3e7.js",
    "revision": "61942d745ce7efbeab0da71a34018324"
  },
  {
    "url": "assets/js/15.5ff72397.js",
    "revision": "5308510c8535552f499e7525ff5079d2"
  },
  {
    "url": "assets/js/16.d898286c.js",
    "revision": "075f32a6cd544e4f5dbb97ddc3303eb9"
  },
  {
    "url": "assets/js/17.2c1dab5d.js",
    "revision": "920fa61f1f194bc5635f705fb263237d"
  },
  {
    "url": "assets/js/18.177c26ff.js",
    "revision": "cce30e66656ddbc4ee2b89c9226e5f53"
  },
  {
    "url": "assets/js/19.ef5a8301.js",
    "revision": "eb9da1d2ec21a1ed4513c8edb7d0bbde"
  },
  {
    "url": "assets/js/2.d4abbb53.js",
    "revision": "53e098fcf7e13eb079b78e21a2528f22"
  },
  {
    "url": "assets/js/20.298e60da.js",
    "revision": "c201f4a9d98a7d455def89058af20e34"
  },
  {
    "url": "assets/js/21.3d61d7d2.js",
    "revision": "c179d4988c8d17e719a7ab200df8f9ea"
  },
  {
    "url": "assets/js/22.5283b5e3.js",
    "revision": "a6b72032052b78841d0c77c131f71e10"
  },
  {
    "url": "assets/js/23.30e66c98.js",
    "revision": "f1a7e56a325e0dba013fb227a423f5cf"
  },
  {
    "url": "assets/js/24.acf373a3.js",
    "revision": "86d9a6c353d916a73acb27582220e729"
  },
  {
    "url": "assets/js/25.5d995447.js",
    "revision": "5fc84b8e82985680004f2279c5f1a176"
  },
  {
    "url": "assets/js/26.00263fb4.js",
    "revision": "463f52f024ee45fe13ae5e35891bdccf"
  },
  {
    "url": "assets/js/27.1aa257a8.js",
    "revision": "a1b750601bf09f29a29ced2241a784f5"
  },
  {
    "url": "assets/js/28.98ce4547.js",
    "revision": "d2f111632b3e17f10c25acd272507538"
  },
  {
    "url": "assets/js/29.08cbf488.js",
    "revision": "f21d472684783576ef5208d9019ef7cb"
  },
  {
    "url": "assets/js/3.faae5906.js",
    "revision": "27c34dbc08df79418270a21649e72044"
  },
  {
    "url": "assets/js/30.c4c23f3d.js",
    "revision": "5dd52335aa6081fa273dfd6681cd3dbf"
  },
  {
    "url": "assets/js/31.bd852a8f.js",
    "revision": "52f7b6c0b3d3575a9737527dc401f283"
  },
  {
    "url": "assets/js/32.0024bd62.js",
    "revision": "e779f2dae5644acd489c73d8e9c6b187"
  },
  {
    "url": "assets/js/33.63af8e27.js",
    "revision": "9e460685cdf8fca9cf793bbaa04397b3"
  },
  {
    "url": "assets/js/34.c1831a98.js",
    "revision": "f2f34f3419cdef214ea5df9592b530ad"
  },
  {
    "url": "assets/js/35.023d7fac.js",
    "revision": "c75036ecae52bcca5db848c8cc4ff4a4"
  },
  {
    "url": "assets/js/36.82918eac.js",
    "revision": "bce6700d6047425242d7dae12ed91efa"
  },
  {
    "url": "assets/js/37.08393a25.js",
    "revision": "abca9ac7a58e11a171ad14a7df4befe4"
  },
  {
    "url": "assets/js/38.37188386.js",
    "revision": "cd22a01cb3246d3e2a08b4903ad78c62"
  },
  {
    "url": "assets/js/39.ae3c155f.js",
    "revision": "c8586f0e775dbfcd3e5b7d14dc9c6370"
  },
  {
    "url": "assets/js/4.870ae5f2.js",
    "revision": "c02603b612c540d37222ef2ae6affd59"
  },
  {
    "url": "assets/js/40.2b101d23.js",
    "revision": "6598be7f094cd4db6d8d4d23309143ad"
  },
  {
    "url": "assets/js/41.59978b62.js",
    "revision": "ce8b9e7f2851ff0bd82db50c1ac7e748"
  },
  {
    "url": "assets/js/42.6f72a5e1.js",
    "revision": "bed4de1920e69828f6cb4ccf9a275522"
  },
  {
    "url": "assets/js/43.1874c91b.js",
    "revision": "675088644431b8bfa75ac3660465b655"
  },
  {
    "url": "assets/js/44.6d6b7406.js",
    "revision": "9a200867d7f76f0e6dc610f88fa96753"
  },
  {
    "url": "assets/js/45.a6585aac.js",
    "revision": "6f6a9023bc093bf082766a76b93bb6c7"
  },
  {
    "url": "assets/js/46.9e8134f2.js",
    "revision": "349e581f3ca82eee7f52dbb43924020c"
  },
  {
    "url": "assets/js/47.fca7d17b.js",
    "revision": "abf21d6d9656fd71d6262d2dc3b5b7c0"
  },
  {
    "url": "assets/js/48.e092b4b7.js",
    "revision": "c5c0559c64b2c01af3fc496cf92dc43a"
  },
  {
    "url": "assets/js/49.aa0484fb.js",
    "revision": "92662fb6f7681bc6c25556681e596f73"
  },
  {
    "url": "assets/js/5.7521364a.js",
    "revision": "ae3ae7e675495ed3f901742c30590f9e"
  },
  {
    "url": "assets/js/50.83a2108d.js",
    "revision": "4e76d8edb2c0f380e0c65d0e51053f28"
  },
  {
    "url": "assets/js/51.82b5de6c.js",
    "revision": "f43e82b99e429e0cc6fe05b42715030b"
  },
  {
    "url": "assets/js/52.709bb69f.js",
    "revision": "412e75b1a27032b536d65058ae87abc4"
  },
  {
    "url": "assets/js/53.d740d345.js",
    "revision": "d3c6c75657e419d5c73ebd24c280b315"
  },
  {
    "url": "assets/js/54.47235702.js",
    "revision": "4c777f27316e7cf830fe719909fcaaae"
  },
  {
    "url": "assets/js/55.4651b57a.js",
    "revision": "23e17065ed1bc9be9679357d8d6202fe"
  },
  {
    "url": "assets/js/56.81c72215.js",
    "revision": "0b797391005a6408e3ee45eca836da7b"
  },
  {
    "url": "assets/js/57.1e320104.js",
    "revision": "ce069aced4ebcd040ccedbde736af4d0"
  },
  {
    "url": "assets/js/58.eafb70af.js",
    "revision": "f6f9bef1c19ffc07731e5f0b4fdc5f53"
  },
  {
    "url": "assets/js/59.5bf75cf0.js",
    "revision": "e152e91a28343363d3abcc1412cba13b"
  },
  {
    "url": "assets/js/6.30fcc442.js",
    "revision": "4edfcdc5a3884e3cd6c1996e9a26572b"
  },
  {
    "url": "assets/js/7.80807989.js",
    "revision": "f8030a6137427764b9e134443d355481"
  },
  {
    "url": "assets/js/8.7f986f3b.js",
    "revision": "70d26e720591d3f32a7419e86dd70a99"
  },
  {
    "url": "assets/js/9.11f6334a.js",
    "revision": "4709999fc6dda923e6c24a99f850ab7c"
  },
  {
    "url": "assets/js/app.603a76cc.js",
    "revision": "ed12743db172b8251aad2e9fc8772dcc"
  },
  {
    "url": "images/fe.png",
    "revision": "f9dcc0b2d1c469b2c11f779f75c2ac0f"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "990c5e0b1dfe6fb536ee09eec59465cd"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "f8dc7fb1af07531e2246e9830f51edc7"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "0c311dc8a891275aaf6c470b93aa2074"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "65093a8d112a4d8b45953084fbb16487"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "eff562dd276ec4a5989ed0fb74c7fea0"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a9af55f93b2cf1d325951fde149826f7"
  },
  {
    "url": "index.html",
    "revision": "b9cb2cc506c3c949c192f41cec0b2ebd"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/algorithms/binaryTree/index.html",
    "revision": "f40505e4e55242384f8b3faed42d1fb5"
  },
  {
    "url": "zh/algorithms/index.html",
    "revision": "26f3a6101a62a21ca94d183d36c8b7e6"
  },
  {
    "url": "zh/array/arrayMove/index.html",
    "revision": "afda578b7a4f3a3e93f7d1f4ccf5e4bb"
  },
  {
    "url": "zh/array/find/index.html",
    "revision": "ee0c85f87259bc17077b763361297cee"
  },
  {
    "url": "zh/array/index.html",
    "revision": "71ec2e3d0d4c8f49c92075a821debec6"
  },
  {
    "url": "zh/array/isArray/index.html",
    "revision": "e9f1fa38385f5022589e93ad6db83a88"
  },
  {
    "url": "zh/design-pattern/adapter-pattern/index.html",
    "revision": "c8e7b0d22a3b655c553ea8f37c79df88"
  },
  {
    "url": "zh/design-pattern/decorator-pattern/index.html",
    "revision": "51fe2c50f57c7d1448c0eae10562208c"
  },
  {
    "url": "zh/design-pattern/facade-pattern/index.html",
    "revision": "542d9d4018fba1dbf470861627f57d5b"
  },
  {
    "url": "zh/design-pattern/factory-pattern/index.html",
    "revision": "6b98e7ac84af911aad17d9b56aec3962"
  },
  {
    "url": "zh/design-pattern/index.html",
    "revision": "e1544ce445978cbd46f9892e94b1f554"
  },
  {
    "url": "zh/design-pattern/iterator-pattern/index.html",
    "revision": "e7595eee63ea99667a7ba205b27917ed"
  },
  {
    "url": "zh/design-pattern/observer-pattern/index.html",
    "revision": "937fce7ad561a72412ec03d195f9b64e"
  },
  {
    "url": "zh/design-pattern/proxy-pattern/index.html",
    "revision": "c05c6a38ce07124fd0184ab3a427d225"
  },
  {
    "url": "zh/design-pattern/singleton-pattern/index.html",
    "revision": "5a7a59b5cc9985386f9e9bf1e23f97b5"
  },
  {
    "url": "zh/es6/index.html",
    "revision": "67b9b38197275be99fde639974f5192a"
  },
  {
    "url": "zh/es6/promise/index.html",
    "revision": "0a95000415d291e4f87e151952d75ead"
  },
  {
    "url": "zh/function/debounce/index.html",
    "revision": "f803bc9bba7b1ea78e957417a0e7eedd"
  },
  {
    "url": "zh/function/index.html",
    "revision": "7fac2875c4923641396555070253d32b"
  },
  {
    "url": "zh/function/throttle/index.html",
    "revision": "5f9071175759c4cac25763d5c9fa670e"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "41491b791a4f5e441bd9f1200726ea5d"
  },
  {
    "url": "zh/how-to-write-docs/index.html",
    "revision": "cd4588f88eb4934747fc0c4f8b9f46d5"
  },
  {
    "url": "zh/math/binary/index.html",
    "revision": "50096cd6efb18a0175d5ab342b98c238"
  },
  {
    "url": "zh/math/factorial/index.html",
    "revision": "ba00f54080b74f725bd267a363e38e94"
  },
  {
    "url": "zh/math/fibonacci/index.html",
    "revision": "d154bc870b7b66544b9e228bde7e10c7"
  },
  {
    "url": "zh/math/gcd/index.html",
    "revision": "6826eaa751ad174e088c3a3b087f43f0"
  },
  {
    "url": "zh/math/index.html",
    "revision": "d01b66bea8b0f16054b09f5a5f101159"
  },
  {
    "url": "zh/math/lcm/index.html",
    "revision": "5f598f17420c909c2a841697d586201e"
  },
  {
    "url": "zh/math/pow/index.html",
    "revision": "3a2ccfa8dbdec3916a1190c40048c803"
  },
  {
    "url": "zh/object/index.html",
    "revision": "b073572a43be8b03d5cb52a687204fe4"
  },
  {
    "url": "zh/object/is/index.html",
    "revision": "e5be3d0b8ff036fc94effa9cae36aa5b"
  },
  {
    "url": "zh/primitive/apply/index.html",
    "revision": "a4ee8a8ec4085a414c558ebb04594ee4"
  },
  {
    "url": "zh/primitive/bind/index.html",
    "revision": "1294bb9d032838654ae9cdb86d910fa2"
  },
  {
    "url": "zh/primitive/call/index.html",
    "revision": "71b3ad31cd8f43b6e0d002c28435a7be"
  },
  {
    "url": "zh/primitive/index.html",
    "revision": "10a2597b6f97f84cc1c7fce6bc133f7b"
  },
  {
    "url": "zh/primitive/instanceof/index.html",
    "revision": "a365c9382c4b81f25df663179aa19283"
  },
  {
    "url": "zh/primitive/new/index.html",
    "revision": "cebedee7da5614fdf2431e1ba129d54f"
  },
  {
    "url": "zh/sort/bubbleSort/index.html",
    "revision": "900aec3ed5ad88a5e9c0cb1c4ab81bf4"
  },
  {
    "url": "zh/sort/bucketSort/index.html",
    "revision": "20932425da8dafea7dcf20b1a1c4c50b"
  },
  {
    "url": "zh/sort/countingSort/index.html",
    "revision": "6372e1c6c6381275822c42144bce4902"
  },
  {
    "url": "zh/sort/heapSort/index.html",
    "revision": "d813bd99cc3311910f5044ccc77e8466"
  },
  {
    "url": "zh/sort/index.html",
    "revision": "4dee80ea905a4c48b86bebfbffd2c4e1"
  },
  {
    "url": "zh/sort/insertionSort/index.html",
    "revision": "b4ad5f94267c0d146a2e7aa5012451a6"
  },
  {
    "url": "zh/sort/mergeSort/index.html",
    "revision": "aec92e8687f13a7fdd17bd797da0e686"
  },
  {
    "url": "zh/sort/quickSort/index.html",
    "revision": "0934ba4c4099bae799733cb4c7dd2eaa"
  },
  {
    "url": "zh/sort/radixSort/index.html",
    "revision": "9095ee75da776d39f60b897f5788e8ac"
  },
  {
    "url": "zh/sort/selectionSort/index.html",
    "revision": "463a352cf457f1e24270089cec238541"
  },
  {
    "url": "zh/sort/shellSort/index.html",
    "revision": "cb69fc6f784fd894961b80e1585ee907"
  },
  {
    "url": "zh/types/index.html",
    "revision": "ba01f1070e4e490d596c636aa5e01498"
  },
  {
    "url": "zh/utils/index.html",
    "revision": "512d60f418ce05fea2dcf533349565a4"
  },
  {
    "url": "zh/vdom-diff/index.html",
    "revision": "d70c5573e784581611be1a1ee79b94bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
