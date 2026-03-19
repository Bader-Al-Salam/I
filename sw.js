const CACHE_NAME = 'badr-salam-v2'; // تأكد أنه v2

const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './Maad.html',
    './Awad.html',
    './Taha.html',
    './Modar.html',
    './Tarage.html',
    './Tahane.html',
    './Marwa.html',
    './Rawda.html',
    './FatemaF.html',
    './FatemaM.html',
    './Aia.html',
    './Marwazainab.html',
    './Aliaa.html'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
