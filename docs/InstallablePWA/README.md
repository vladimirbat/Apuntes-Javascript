# PWA instalable
Una PWA se puede instalar en un dispositivo movil como si fuera una aplicación nativa. Para ello hay que seguir los pasos indicados en los siguientes apartados.
## Archivo de Manifest
Se debe crear en el raíz de la aplicación un archivo de Manifest con el nombre ***manifest.json***. En este archivo se declaran características de la aplicación tales como nombre, archivo incial, idioma, colores e iconos con los que se instala.
```json
{
  "name": "Space Missions",
  "short_name": "Space Missions",
  "lang": "en-US",
  "start_url": "/index.html",
  "display": "standalone",
  "theme_color": "#FF9800",
  "background_color": "#FF9800",
  "icons": [
    {
      "src": "images/touch/icon-128x128.png",
      "sizes": "128x128"
    },
    {
      "src": "images/touch/icon-192x192.png",
      "sizes": "192x192"
    },
    {
      "src": "images/touch/icon-256x256.png",
      "sizes": "256x256"
    },
    {
      "src": "images/touch/icon-384x384.png",
      "sizes": "384x384"
    },
    {
      "src": "images/touch/icon-512x512.png",
      "sizes": "512x512"
    }
  ]
}
```

## Referencia en el index.html al Manifest y recursos de la PWA.

El html principal de la aplicación debe referenciar el archivo de manifest, así como los recursos de la PWA (iconos, que además deben encontrarse en las rutas indicadas) y otros elementos de configuración de la PWA como nombre y colores.

```html
<link rel="manifest" href="manifest.json">

<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="application-name" content="Space Missions">
<meta name="apple-mobile-web-app-title" content="Space Missions">
<meta name="theme-color" content="#FF9800">
<meta name="msapplication-navbutton-color" content="#FF9800">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="msapplication-starturl" content="/index.html">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link rel="icon" sizes="128x128" href="/images/touch/icon-128x128.png">
<link rel="apple-touch-icon" sizes="128x128" href="/images/touch/icon-128x128.png">
<link rel="icon" sizes="192x192" href="icon-192x192.png">
<link rel="apple-touch-icon" sizes="192x192" href="/images/touch/icon-192x192.png">
<link rel="icon" sizes="256x256" href="/images/touch/icon-256x256.png">
<link rel="apple-touch-icon" sizes="256x256" href="/images/touch/icon-256x256.png">
<link rel="icon" sizes="384x384" href="/images/touch/icon-384x384.png">
<link rel="apple-touch-icon" sizes="384x384" href="/images/touch/icon-384x384.png">
<link rel="icon" sizes="512x512" href="/images/touch/icon-512x512.png">
<link rel="apple-touch-icon" sizes="512x512" href="/images/touch/icon-512x512.png">
```

## Botón personalizado de instalación de la PWA
```javascript
let deferredPrompt;
// Evento previo a que se lance el cuadro de dialogo de instalación de la PWA
window.addEventListener('beforeinstallprompt', event => {

    // Evita que versiones anteriores a Chorme 67 muestren la opción de instalación automáticamente
    event.preventDefault();

    // Guarda el evento para luego
    deferredPrompt = event;

    // Evento click del botón para instalar la PWA
    document.querySelector('#installBtn').addEventListener('click', event => {

        // Muestra el cuadro de dialogo con el evento que habiamos guardado.
        deferredPrompt.prompt();

        // Se espera a la resolución de la promesa que indica que el usuario ha contestado
        deferredPrompt.userChoice
          .then((choiceResult) => {
            // Mostramos en la consola si ha aceptado o no
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
          });
    });

  // Visualizamos el botón de instalación que inicialmente estaba oculto (display=none)
  document.querySelector('#installBanner').style.display = 'flex';
});
```