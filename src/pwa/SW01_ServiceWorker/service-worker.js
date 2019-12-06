const version = 'V1'
const currentCacheName = `MI_CACHE_${version}`;
const archivosCache = ['/styles/index.css', '/img/mapa2.png'];

self.addEventListener('install', event => {
    console.log('EVENTO: install', self.registration.installing.state, version);
    // self.skipWaiting();
    event.waitUntil(
        caches.open(currentCacheName).then(function(cache) {
            return cache.addAll(archivosCache);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('EVENTO: activate ', self.registration.active.state, version);
    // self.clients.claim();
});

self.addEventListener('fetch', event => {
    // Ver apartado de caché para un tratamiento más completo
    const url = new URL(event.request.url);
    console.log('EVENTO: fetch', url.pathname, version);
    if (url.origin == location.origin && url.pathname == '/img/mapa1.jpg') {
        // 1.- a respondWidth se le debe pasar una promesa que resuelva
        // con un objeto Response.
        // 2.- caches.match(request:Request|string) retorna una promesa que resuelve en un
        // objeto Response está guardado en el caché o undefined si no lo está.
        event.respondWith(caches.match('/img/mapa2.png'));
    }
});

console.log('ServiceWorker leido', version);
