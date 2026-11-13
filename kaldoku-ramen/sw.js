const CACHE_NAME = 'kaldoku-v1';
const ASSETSTO_CACHE = [
  './',
  './index.html',
  './style.js',
  './app.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('intall', (event) => {
  event.waitUntil(
    caces.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.responWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
