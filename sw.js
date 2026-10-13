
const CACHE_NAME = "unit-converter-v1";

const FILES_TO_CACHE = [
  "./",  
  "./area.html",
  "./area.js",
  "./converter.css",
  "./index.html",
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
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
