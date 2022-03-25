'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3d18eee32b4768b751bf93958f69a03c",
"index.html": "c539cbc844e54c2a5fd6b5dbf45f5f8f",
"/": "c539cbc844e54c2a5fd6b5dbf45f5f8f",
"main.dart.js": "7d94f1e1234fc237c5636fd3451495d3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c15e2ab2778e5ac93848cc0e9295262d",
"assets/images/promoExt/AD.png": "2d77dbbc85a36c5e93e80c94c0af4f48",
"assets/images/promoExt/AD-13-Big.png": "4c4ca5f14bfd686955190d3962b44fa4",
"assets/images/promoExt/Group%252029767.png": "a2c960a991d8bd4f4e99e01cd2445759",
"assets/images/promoExt/promoSuc1.png": "896c212493d171a027153349d0b49a35",
"assets/images/promoExt/AD%25204.png": "21e56697e944a6cfea73ed84760b9e4c",
"assets/images/promoExt/AD%25205.png": "91bdd8a563a8daa16313e4787bb2040f",
"assets/images/promoExt/AD-11-Big.png": "affcbb511e27a1fa2446a097f0cbebc5",
"assets/images/promoExt/AD-11-Big-2.png": "10e7197bc09cceb815bf3de5ed5db029",
"assets/images/promoExt/americanExpress.png": "81e3886f2354cec4fd59b068ad76b00e",
"assets/images/promoExt/visa.png": "5447055f5f5114fe904df6bf1367ad8d",
"assets/images/promoExt/Ad10.png": "a63d4eb1bdceead56fbc746b6dad7db1",
"assets/images/promoExt/AD%25203.png": "418488df98ceb5301ce899afd21d77da",
"assets/images/promoExt/promoExt1.png": "182bbf177f3f283554cdd768fa6f231b",
"assets/images/promoExt/Ad%25201.png": "9c6ceda744cbd39850f62c333a996c1e",
"assets/images/promoExt/AD-13-Small.png": "ccf899bc31db998a9080b99ff38ff779",
"assets/images/promoExt/promoExt2b_1.png": "2dfca00573de7ecb086834318d613e41",
"assets/images/promoExt/AD-09-Small.png": "803690474f6a2e8610f661ba280b38e7",
"assets/images/promoExt/Ad-10-Small.png": "0a43bc6dac2387c7d3e6dd244a346654",
"assets/images/promoExt/AD-16-Big.png": "f95ffe0042576470bebe82324a7f56c3",
"assets/images/promoExt/masterCard.png": "b93616096f8067d055183b64c9ad9234",
"assets/images/promoExt/Ad-17-Big.png": "add925506c42e7345f29cc83014bd249",
"assets/images/promoExt/unionPay.png": "33b1a8671f07d5786623e2c4b8f12e54",
"assets/images/promoExt/AD-15-Big-2.png": "da0ef248ca3e9db25c02ca4a35261edb",
"assets/images/promoExt/Ad-11-Small.png": "32456ef925e112c10e168055ff26f3f1",
"assets/images/coverimage.png": "97d90458cbc73f2ccf0d2f4b248632c8",
"assets/images/promo2.png": "070a9a6e795f70ae54e709992957d94b",
"assets/images/privi2.png": "f92c75bcf7409ab4e1753c2a37b03150",
"assets/images/promo1.png": "baa5637eb980ac7d9396a6b8d5387103",
"assets/images/privi1.png": "67ef00530f112ba241d4a49e6651fe4c",
"assets/images/promoSuccess/Ad-02-Big.png": "b131d25cced3e108fb253106d40d2770",
"assets/images/promoSuccess/AD-12-Big.png": "edc779fd12e1fa7588d08f04870d64db",
"assets/images/promoSuccess/AD-13-Big.png": "23d14cf8cfbb8b8fb14dc53474e0077e",
"assets/images/promoSuccess/AD-03-Big.png": "8094b5ee162bc650c61dad8d80045cbf",
"assets/images/promoSuccess/Ad-01-Big.png": "d3ca76a88b190cf7c7684fee22dd0cd0",
"assets/images/promoSuccess/AD-11-Big.png": "85f6f50494b2110b2137d3347311ae37",
"assets/images/promoSuccess/AD-11-Big-2.png": "92ac58bf8563ce00f6cde6c3463887c6",
"assets/images/promoSuccess/Ad10.png": "23760533d858f5e245d424082aa56eb2",
"assets/images/promoSuccess/Ad-09-Big.png": "9680e184c5685ea946cd177a23fe1680",
"assets/images/promoSuccess/Ad-19-Big.png": "e608e667ac80b53e9154c8840975810a",
"assets/images/promoSuccess/Ad-10-Big.png": "f2560dce8956e96287a5311bcf5179cd",
"assets/images/promoSuccess/AD-05-Big.png": "9a38bc8d9be021e0685486bee11743be",
"assets/images/promoSuccess/AD-15-Big.png": "8c0380ac96e221cd2e943a073622eacf",
"assets/images/promoSuccess/AD-14-Big.png": "a819f66e049d2f62968597b1d57113cb",
"assets/images/promoSuccess/AD-04-Big.png": "83a0f735d0e29f9059e1d48b77d7a1c5",
"assets/images/promoSuccess/AD-16-Big.png": "04335f1d04ba6c348ad9f437bf9a4908",
"assets/images/promoSuccess/Ad-17-Big.png": "5ee22e06c330953ee3edd6e207dd9ed1",
"assets/images/promoSuccess/Ad-07-Big.png": "de2ee1888bdb5c3e9c3f178da9419557",
"assets/images/fees.svg": "87f81a500d758e629f1cf1b74643c6cc",
"assets/images/applycreditcard.svg": "3eb86b3c67552af856587af93471ed98",
"assets/images/advertisecard.png": "b6c4f55f09412b523172ab1a9db4398e",
"assets/images/icon/reward_active.png": "5b3d849d24b61ca0137b9e7ad6853c00",
"assets/images/icon/home_active.png": "aa07a683d21f3d5d1a0b0e165cc52242",
"assets/images/icon/creditcard_active.png": "ccaefaad7de98b3de7f2e44add102d02",
"assets/images/icon/reward_passive.png": "7f3f44f9b60235cd46c27bfb5039aa57",
"assets/images/icon/creditcard_passive.png": "64180f2ba91799f9e806fe2225b4180a",
"assets/images/icon/home_passive.png": "0d6462f15ca7d6be7dc9b2c5cd7bdaf0",
"assets/images/icon/more_passive.png": "c1df460e0b00ea54c23ff1391fd89156",
"assets/images/icon/more_active.png": "2fe265728b6c19578e62be192b2e4984",
"assets/AssetManifest.json": "a9f5f0d782da42e16f3b4ba6a2849a7f",
"assets/NOTICES": "997f73ec063abb9a0ff3a6b05a402d46",
"assets/FontManifest.json": "6b02cebfb4a233a36105a3f78f871fe4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/NotoSansThai-SemiBold.ttf": "10a9f39db2cb9a591d0a33165884e418",
"assets/fonts/NotoSans-Regular.ttf": "d5649a4a1b2eeb6b7add5a310414c48e",
"assets/fonts/NotoSansThai-Regular.ttf": "063fbe0a3997ebf3fb9846ab1fee795b",
"assets/fonts/NotoSansThai-Bold.ttf": "3849bbb298895c8e679761df32cec536",
"assets/fonts/NotoSansThai-Light.ttf": "ba1a644843e984013cf8240376ac2abf",
"assets/fonts/NotoSans-Bold.ttf": "91fd88919f019f29caee6cfe0f5d88bc",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
