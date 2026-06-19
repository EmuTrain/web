'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6d082471849426cb7af740ebbb25495d",
"assets/AssetManifest.bin.json": "cc8bf375f07e0de8f2add2ec9f5de389",
"assets/AssetManifest.json": "4c5111b7cbab73cbbc8bc3b0e1fb8aa2",
"assets/assets/coach.json": "d590a8e0174c1cbc7bc91495e2379132",
"assets/assets/icon/app_icon.png": "9c18173a9493821fa9d358a7a1f8c923",
"assets/assets/icon/bureau/%25E4%25B8%258A%25E6%25B5%25B7%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "4b2f5325b3bc2e7105c047addc076f4c",
"assets/assets/icon/bureau/%25E4%25B9%258C%25E9%25B2%2581%25E6%259C%25A8%25E9%25BD%2590%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "e5e71e145824f8248361c6925503196f",
"assets/assets/icon/bureau/%25E5%2585%25B0%25E5%25B7%259E%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "0202fdbd0b1b86637f9bf6a39f751e54",
"assets/assets/icon/bureau/%25E5%258C%2597%25E4%25BA%25AC%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "0b53bd36105cbbf0b00bf80d427523ad",
"assets/assets/icon/bureau/%25E5%258D%2597%25E5%25AE%2581%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "1d18a2bb550de584a7dce02f053431ac",
"assets/assets/icon/bureau/%25E5%258D%2597%25E6%2598%258C%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "388aed8715cb2b8df649c622421078e6",
"assets/assets/icon/bureau/%25E5%2591%25BC%25E5%2592%258C%25E6%25B5%25A9%25E7%2589%25B9%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "801e2613228c3a0ea397a458be93eac1",
"assets/assets/icon/bureau/%25E5%2593%2588%25E5%25B0%2594%25E6%25BB%25A8%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "504553b854b9667d0134006ec0f57453",
"assets/assets/icon/bureau/%25E5%259B%25BD%25E9%2593%2581%25E9%259B%2586%25E5%259B%25A2.png": "d54788875f3fbb0ea88860160aa3da2b",
"assets/assets/icon/bureau/%25E5%25A4%25AA%25E5%258E%259F%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "eb3b4975b4c52a2bcba254fbae610e2a",
"assets/assets/icon/bureau/%25E5%25B9%25BF%25E4%25B8%259C%25E5%259F%258E%25E9%2599%2585.png": "78baaa274c69365abd50913750c3cba4",
"assets/assets/icon/bureau/%25E5%25B9%25BF%25E5%25B7%259E%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "80b1d0dbe11faa64436998b398e1b49b",
"assets/assets/icon/bureau/%25E6%2588%2590%25E9%2583%25BD%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "135c7af238e70b2172de2ccb47082718",
"assets/assets/icon/bureau/%25E6%2598%2586%25E6%2598%258E%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "7274ed65057746534f75d634c4ef1945",
"assets/assets/icon/bureau/%25E6%25AD%25A6%25E6%25B1%2589%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "b3a951344b0c3f72020a83297e860c28",
"assets/assets/icon/bureau/%25E6%25B2%2588%25E9%2598%25B3%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "8359f32abd2c854a9987a5174289b148",
"assets/assets/icon/bureau/%25E6%25B5%258E%25E5%258D%2597%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "b5edf9e7b1f6495edf6a29fd40b8cc05",
"assets/assets/icon/bureau/%25E8%25A5%25BF%25E5%25AE%2589%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "f19fdbb314c5108b49980e23750018b2",
"assets/assets/icon/bureau/%25E9%2583%2591%25E5%25B7%259E%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "de14040f29b9c87fb736f11661899eed",
"assets/assets/icon/bureau/%25E9%2593%2581%25E7%25A7%2591%25E9%2599%25A2.png": "089c124ed73dd5c33c5d7aab3a8c39b7",
"assets/assets/icon/bureau/%25E9%259D%2592%25E8%2597%258F%25E9%2593%2581%25E8%25B7%25AF%25E5%25B1%2580.png": "847a7cc358add1cda2b9ecb07abf1cda",
"assets/assets/icon/bureau/%25E9%25A6%2599%25E6%25B8%25AF%25E9%2593%2581%25E8%25B7%25AF%25E6%259C%2589%25E9%2599%2590%25E5%2585%25AC%25E5%258F%25B8.png": "c03c40ebe83e0bb7ba90f459f8d75870",
"assets/assets/icon/CrYinLang.png": "ec569d712abbb8d9cdea9f8c4f5eee9b",
"assets/assets/icon/llt.png": "20f4479e28ce8bb60122df8cfa850a00",
"assets/assets/icon/moefactory.png": "da3123f4b16547dc29d74308464876e8",
"assets/assets/icon/railgo.png": "eba4a64500814fbe014ee2f0baeface7",
"assets/assets/icon/railre.png": "a9bd92ea88109d0f438a70c770f2c0b4",
"assets/assets/icon/train/CJ6.png": "1955af044c6e638771273542d3eabe46",
"assets/assets/icon/train/CR200J.png": "630940439ab9bf2e9d258b4183529a2d",
"assets/assets/icon/train/CR200JC.png": "c5416feb244d5d047224803edd94042c",
"assets/assets/icon/train/CR220J.png": "df75956270e5a259fc2396dd74912375",
"assets/assets/icon/train/CR300AF.png": "07850469aee4067be6c3d25f6039b67e",
"assets/assets/icon/train/CR300BF.png": "7627a8a5a81b6063b4be4dc8e9866146",
"assets/assets/icon/train/CR400AF-J.png": "f9f780716358e3f8d77619ac62430511",
"assets/assets/icon/train/CR400AF-SZE.png": "29dd445ae99dcfe2e03ae17ca0c17b10",
"assets/assets/icon/train/CR400AF.png": "9d16bf4d9dcfcf839274289a78d50851",
"assets/assets/icon/train/CR400BF-0031.png": "ab3724e8ef930de2b00220f7733dc87a",
"assets/assets/icon/train/CR400BF-C-5162.png": "2eccaf4a9e80435ab404f9d118f66ba9",
"assets/assets/icon/train/CR400BF-C.png": "56aa1dc0bb3e3bed10e08f40c8ce5b30",
"assets/assets/icon/train/CR400BF-G-0051.png": "2403e00d6d202248ccf9d784d2600366",
"assets/assets/icon/train/CR400BF-J-0001.png": "2459ea04791dcd00a1d853a20efba13d",
"assets/assets/icon/train/CR400BF-J-0003.png": "cf2097abd4950275a0f6f5b6557c5580",
"assets/assets/icon/train/CR400BF-S.png": "07033779217638ecf2190092951b4b3a",
"assets/assets/icon/train/CR400BF-Z-0524.png": "94475c551f14a1502009003b7bb93196",
"assets/assets/icon/train/CR400BF-Z.png": "9c18173a9493821fa9d358a7a1f8c923",
"assets/assets/icon/train/CR400BF.png": "62b5c5dca44b30b26ae8bef707fa1af0",
"assets/assets/icon/train/CR450AF.png": "c49786eee756429edfd57d87148bc27e",
"assets/assets/icon/train/CR450BF.png": "df297f89bc9798fc5512c0acfba326a3",
"assets/assets/icon/train/CRH1A-A.png": "489cb9211392f206ea6b3383c9d5aa7d",
"assets/assets/icon/train/CRH1A.png": "b7c7ddf97ca1720007effe6a7f48c8d8",
"assets/assets/icon/train/CRH1E.png": "04c6aa1a94cf15325487c4c40ca5a993",
"assets/assets/icon/train/CRH2A-2460.png": "c6ea2c5a91d2193bad7841bf2ddbb7e2",
"assets/assets/icon/train/CRH2A.png": "599aa9e01c37dcc012d16ac1456e89d6",
"assets/assets/icon/train/CRH2BE.png": "3780c78ac70cc48a10b8388a62c139f4",
"assets/assets/icon/train/CRH2C.png": "65b1fb0546586cb524daa366c7fc3eb4",
"assets/assets/icon/train/CRH2E-NG.png": "4ca5250127548d8e22ddee8484d1c7fc",
"assets/assets/icon/train/CRH2J.png": "16d9020940a38ca6c4a1ba8b5b66c991",
"assets/assets/icon/train/CRH380A.png": "d57ec4d1c99fb27f257bc825feff70ea",
"assets/assets/icon/train/CRH380AD.png": "6ee76ca5786217fa84a846f606806776",
"assets/assets/icon/train/CRH380AJ.png": "a40ccaee30f6e5353905e33792001051",
"assets/assets/icon/train/CRH380AM.png": "3aca6907f83dc12aeac03863ebb8e50f",
"assets/assets/icon/train/CRH380B.png": "9748ee833f9bf5cf2d6f155980779674",
"assets/assets/icon/train/CRH380BJ-A.png": "c16de9be329e3aa991f08c3d6660d8cc",
"assets/assets/icon/train/CRH380BJ.png": "f8a5d62c6497a47fc1f83a32d0cff7fd",
"assets/assets/icon/train/CRH380CL.png": "7d1c093fd0c5876eab9575f6d5d87ad6",
"assets/assets/icon/train/CRH380D.png": "2ab873cd770c69f6f0e9a436ff2e7f1e",
"assets/assets/icon/train/CRH3A-A-GKCJ.png": "0f0bec23575ce39e49a87dbed255819e",
"assets/assets/icon/train/CRH3A-A-ZKCJ.png": "f8ceca6008326df6d6d9e02915c3dae6",
"assets/assets/icon/train/CRH3A-YC.png": "25cd8ff3bb7b99d4c722ba41cd63cc22",
"assets/assets/icon/train/CRH3A.png": "e299178180c722a88a20610d418af058",
"assets/assets/icon/train/CRH3C.png": "12c6026448f0246025c5bd089e951ca0",
"assets/assets/icon/train/CRH5A.png": "e5fcb71e0241dfc696476ed195c02db5",
"assets/assets/icon/train/CRH5E.png": "c7006956e41def2ef743c6a4623797ab",
"assets/assets/icon/train/CRH5G.png": "f49b6473ce51469a5bbb54b0739e3f2a",
"assets/assets/icon/train/CRH5J.png": "1dfcb93416a88b003540727a22f48251",
"assets/assets/icon/train/CRH6-2.png": "55718d2100f57dd6f26780b7a07b4bd7",
"assets/assets/icon/train/CRH6A.png": "5d33306179fb084030888f6aab76ce2e",
"assets/assets/icon/train/CRH6F.png": "6ac1bdf80b1c00840171100b2b806e4f",
"assets/assets/loco.json": "338c57e1208c9eeaa29f45a7d97b8c86",
"assets/assets/stations.json": "496bc7ae2e48542250a331708586f8f0",
"assets/assets/train.json": "e1fa7d53bd1933be00ad83ddc024c54d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "821deed3351aeebab269057766e84303",
"assets/NOTICES": "fe176f8552ea98d67de11a9578f2c673",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "97f15a8d4d0662858f81ea7d2ce019cb",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "97f15a8d4d0662858f81ea7d2ce019cb",
"icons/Icon-512.png": "97f15a8d4d0662858f81ea7d2ce019cb",
"icons/Icon-maskable-192.png": "e5b9fc3811096bafa933cb56e0551594",
"icons/Icon-maskable-512.png": "e5b9fc3811096bafa933cb56e0551594",
"index.html": "9c186affc34d35283f252dc8dcf36744",
"/": "9c186affc34d35283f252dc8dcf36744",
"main.dart.js": "966f69346f981e927297b24abc855f8d",
"manifest.json": "2a23afe9a1416053c2f4fe5b62418e18",
"version.json": "b1b140dc85cad2bf8beba9d0ef71113e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
