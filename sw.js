
self.addEventListener('install', e => {
    e.waitUntill(
        caches.open("Statis").then(cache => {
            return cache.addAll(["index.html", "style.css", "app.js", "Pic_192.jpeg", "Pic_512.png","manifest.json","sw.js"]);
        })
    );
});

self.addEventListener("fetch", e => {

    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );

});





