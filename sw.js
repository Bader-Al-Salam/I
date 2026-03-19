const CACHE_NAME = 'badr-salam-v2'; // قمنا بتغيير رقم النسخة لتحديث الكاش القديم

// قائمة بجميع الملفات التي نريد حفظها ليعمل الموقع بدون إنترنت
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    // صفحات المدرسين (مهم جداً ليعمل التطبيق عند الضغط على البطاقات)
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
