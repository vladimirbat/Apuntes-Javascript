# Cache API
## clase Cache
Representa un objeto de caché que contiene una colección de elementos cacheados. Cada elemento está referenciado por una clave que puede ser un objeto Request o una URL (un string).
### Métodos

- **add(request: Request | string): Promise** -> Realiza la petición fetch indicada en request y almacena en caché la respuesta asociada a dicho request. Solamente tiene efecto si ***response.ok == true***.
- **addAll(requests: string[]): Promise** -> realiza a misma acción que add, pero con una colección de URL de peticiones pasadas como argumento.
- **delete(request: Request | string, options?: any): Promise** -> si encuentra la cache suministrada, elimina su petición. Si la encuentra, la promesa resuelve con true, si no la encuentra resuelve con false.
- **keys(): Promise** -> La promesa resuelve con el array de requests cacheadas.
- **match(request: Request | string, options?: any): Promise** -> Busca y resuelve con respuesta correspondiente a la request indicada que será un objeto Request o una URL (un string).
- **matchAll(requests: string[]): Promise** -> Resuleve con un array de respuestas correspondientes al array de peticiones suministrado.
- **put(request: Request | string, response: Response)** -> Guarda una respuesta (response) asociada a una petición (request). Se guarda independiente del ok del response, es decir aunque su status no sea 2XX, pudiento así guardarse respuestas opacas.

## CacheStorage (variable caches)
La interface **CacheStorage** proporciona los métodos disponibles para manejar la caché de un dominio/puerto. El acceso al API se realiza mediante la variable global **caches**.

- **open(key: string): Promise** -> La promesa resuelve con el objeto de la clase Cache asociado a la clave indicada.
- **match(request: Request | string, options?: any): Promise** -> Busca el request indicado en cualquiera de las colecciones de los objetos de la clase Cache almacenados en el CacheStorage. La promesa resuelve con el objeto Response asociado a la clave indicada.

## Instalación de un Service Worker que cachea archivos
A continuación se muestra como podría ser el evento install de un Service Worker que cachea archivos estáticos que usa desde la aplicación.

```javascript
const NOMBRE_APP_CACHE = 'NOMBRE_APP_CACHE';

const archivosCache = [
    '/',
    'style/main.css',
    'images/still_life_medium.jpg',
    'index.html',
    'pages/offline.html',
    'pages/404.html'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    console.log('INSTALL: Guardar en caché');
    event.waitUntil(
        caches.open(NOMBRE_APP_CACHE).then(cache => {
            return cache.addAll(archivosCache).then(() => {
                console.log('Archivos cacheados')
                return true;
            });
        })
    );
});
```
Nota: si no se quiere imprimir 'Archivos cacheados', se puede omitir el último then.

## Eliminación de cachés antiguos
Tras la instalación (con el cacheo de nuevos recursos) llevada a cabo en el evento *install*, se puede borrar los archivos cacheados que ya no van a ser empleados. Para ello se puede emplear en el evento **activate** el evento **waitUntil** para no terminar la activación hasta que no se hayan borrado todos los caches obsoletos. A continuación se muestra un ejemplo de como podría hacerse esto.

```javascript
    self.addEventListener('activate', event => {
        event.waitUntil(
            caches.keys().then(keys => Promise.all(
                keys.map(key => {
                    if (!archivosCache.includes(key)) {
                      return caches.delete(key);
                    }
                })
            )).then(() => {
                self.clients.claim();
                console.log('La versión 2 está lista para recibir peticiones (fetch)');
                return true;
            })
        );
    });
```
**Nota**: durante el waitUntil los fetch de los clientes quedan en un buffer hasta que termine la activación.

## Gestión de peticiones fetch empleando caché (Estrategia cache-first)

En este ejemplo se muestra como implementar una estrategia cache-first que si llega una peición fetch, primero la busca en caché y si la encuentra la retorna. Si por el contrario no existe en caché la pide a la red y la respuesta la clona, una para guardarla en caché y otra para retornarsela a la página.
```javascript

self.addEventListener('fetch', event => {
    console.log('Fetch event:', event.request.url);
    // 1.- a respondWidth se le debe pasar una promesa que resuelva
    // con un objeto Response.
    // 2.- caches.match(request:Request|string) retorna una promesa que resuelve en un
    // objeto Response está guardado en el caché o undefined si no lo está.
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                // Si existe en caché se retorna
                console.log('Encontrado', event.request.url, 'en caché');
                return response;
            }
            // Si no existe en caché intentamos pedirlo al servidor
            console.log('Fetch respuesta:', event.request.url);
            return fetch(event.request).then(response => {
              if(response.status === 404){
                  // Si no existe en el servidor se retorna la página de no encontrado.
                  return caches.open(NOMBRE_APP_CACHE).then(cache => {
                      return cache.match('pages/404.html');
                  });
              }
              // Si existe en el servidor se guarda una copia en caché y
              //  se retorna la respuesta.
              return caches.open(NOMBRE_APP_CACHE).then(cache => {
                cache.put(event.request.url, response.clone());
                return response;
              });
            });
        }).catch(error => {
            // Si el fetch ha lanzado catch es que no ha conexión
            // por lo tanto se retorna una página de ofline guardada en cache.
            console.log('Error, ', error);
            return caches.match('pages/offline.html');
        })
    );
});
```

Se pueden consultar otras estrategias de cacheo en:

[PWA Asset Caching Strategies *en codeburst.io*](https://codeburst.io/pwa-asset-caching-strategies-8a20c31b2181)

[Volver al índice de temas](../../README.md)
