self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('eaglercraft-cache-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/eaglercraft/index.html',
                '/eaglercraft/styles.css',
                '/eaglercraft/script.js',
                '/eaglercraft/icon-192x192.png',
                '/eaglercraft/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
