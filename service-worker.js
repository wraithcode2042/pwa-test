self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('resent-app-cache-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/resent-app/rc192.png',
                '/resent-app/rc512.png'
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
