// featherfied.com used to serve the HomeKeep app from this address. If a browser still has
// HomeKeep's old offline helper registered here, this file replaces it, clears its saved copy
// of the old page and switches itself off, so the browser shows the current home page.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (event) {
  event.waitUntil((async function () {
    var keys = await caches.keys();
    await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    await self.registration.unregister();
    var pages = await self.clients.matchAll({ type: "window" });
    pages.forEach(function (p) { p.navigate(p.url); });
  })());
});
