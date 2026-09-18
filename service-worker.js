/*
// Service worker cache version

const CACHE = "cie-campus-map-v1.3";

// Files needed for offline use
const FILES = [
    "./",
    "./index.html",
    "./style.css?v=1.3",
    "./script.js?v=1.3",
    "./manifest.json"
];

// Install service worker and save files to cache
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE).then(c => c.addAll(FILES))
    );
    self.skipWaiting();
});

// Remove old caches when a new version is activated
self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(a =>
            Promise.all(
                a.filter(x => x !== CACHE)
                 .map(x => caches.delete(x))
            )
        )
    );
    self.clients.claim();
});

// Use cached files when available for offline access
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(x =>
            x || fetch(e.request).catch(() =>
                caches.match("./index.html")
            )
        )
    );
});
*/