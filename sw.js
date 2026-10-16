
const CACHE_NAME = "unit-converter-v2";

const FILES_TO_CACHE = [
  "./",  
  "./area.html",
  "./area.js",
  "./converter.css",
  "./index.html",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./length.html",
  "./length.js",
  "./manifest.json",
  "./script.js",
  "./style.css",
  "./sw.js",
  "./temperature.html",
  "./temperature.js",
  "./time.html",
  "./time.js",
  "./volume.html",
  "./volume.js",
  "./weight.html",
  "./weight.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith("unit-converter-") && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
