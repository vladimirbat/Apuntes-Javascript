# PWA
## Introduccción
Los Service Workers son los elementos más importantes de una PWA y se caracterizan por:
- Posibilidad de interceptar las peticiones fetch lanzadas desde la aplicación.
- Posibilidad de cachear la respuesta de las peticiones fetch interceptadas.
- Se ejecutan de un hilo independiente al hilo principal de ejecución de la aplicación, por lo que no afectan al rendimiento de esta.

## Registro de un Service Worker
Los service worker se declaran en un archivo js separado y en el lugar del árbol de archivos superior de la rama en la que se quiera que este tenga efecto (si se desea que sea aplicable a toda la aplicación, entonces se debe crear el archivo en el directorio raiz de esta). En el siguiente ejemplo se crea un archivo *service-worker.js* inicialmente vacio. En un script del *index.html* se lanzará el proceso de registro del Service Worker de la siguiente manera.

```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
    .then(registration => console.log('Service Worker registrado: ', registration))
    .catch(err => console.error('Fallo en el registro:', err));
  });
}
```
