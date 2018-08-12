var dataCacheName = 'template-pwa';
var cacheName = 'template-pwa';
var filesToCache = [
  '/',
 "/font",
 "/img",
 "index.html",
 "manifest.json",
 "/src",
 "/src/0.js",
 "service-worker.js",
];

self.addEventListener('install', function(e) {
  // console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      // console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});