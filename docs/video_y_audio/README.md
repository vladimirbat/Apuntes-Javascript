# Etiquetas Video y Audio

## Etiqueta \<video>
La etiqueta \<video> permite reproducir vídeos en el navegador sin necesidad de plugins adicionales. Sus principales atributos son:

- **autoplay**: si está presente este atributo el vídeo empezará a reproducirse tan pronto como esté preparado.
- **controls**: si está presente este atributo, se mostrarán los controles de control de reproducción (play, stop, etc).
- **height**: altura del reproductor de vídeo
- **width**: ancho del reproductor de vídeo.
- **loop**: si está presente este atributo, al terminar la reproducción del vídeo empezará de nuevo.
- **preload**: si está presente este atributo, el vídeo se cargará al cargarse la página. Este atributo se ignora si *autoplay* está presente.
- **src**: url del vídeo por defecto (*fallback*) si los formatos/codecs indicados en las etiquetas *source* anidadas no son soportados por el navegador.
- **poster**: url de la ímagen que se mostrará mientras el vídeo se carga.
- **muted**: si está presente el vídeo se reproducirá sin sonido.

[Audio/Video API](https://www.w3schools.com/TagS/ref_av_dom.asp)
