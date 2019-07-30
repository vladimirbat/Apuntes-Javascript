# DOM (Document Obejct Model)
La carga de un documento html en un navegador, de forma simplificada, consiste en un proceso de análisis de las etiquetas html de dicho documento y su traducción (renderizado) a pixeles dentro del área de visulización (View Port) del navegador.

Como consecuencia del análisis de las etiquetas html del documento, el navegador crea, en memoria, una estructura de objetos anidados que tiene forma de árbol (es decir cada objeto puede tener cero, uno o más hijos) que representan los elementos que se mostrarán en el área de visualización (View Port). A esa estructura de objetos se le denomina D.O.M o ***DOM*** que son las siglas de ***Document Obejct Model***.

El DOM mantiene en todo momento la estructura de objetos que son visualizados en el navegador. En un primer momento el DOM tiene la estructura resultante de analizar el documento html recibido del servidor, pero posteriormente, mediante JavaScript se puede modificar el DOM y como consecuencia lo que visualiza (renderiza) en navegador.

## Objeto document
Todo script JavaScript ejecutado en un navegador tiene acceso a la variable de ambito global ***document***. Esta variable es el punto de acceso para lectura y modificación del DOM.

## Eventos del DOM
Los eventos permiten detectar circunstancias acontecidas en el navegador cómo la carga del documento, acciones de ratón o de teclado iniciadas por el usuario. Desde JavaScript se pueden detectar estos eventos e indicar que tareas se deben ejecutar cuando estos eventos se produzcan. Para ello a cada evento se le pueden asignar una o varias funciones (handlers o manejadores) que se ejecutarán asociadas a un evento.

Para asociar un handler a un elemento, además de una referencia al elemeno, se debe indicar el tipo de evento al cual asociar la función de respuesta al evento (handler).

Por ejemplo para detectar en qué momento el documento html ha sido cargado y parseado, estándo ya el DOM disponible, se dispone del evento de tipo ***DOMContentLoaded*** del objeto ***document***. Para asignar un evento a un elemento del DOM se emplea el método addEventListener:
<code>
    document.***addEventListener***('***DOMContentLoaded***', function(event){

    });
</code>
[Volver al índice de temas](../../README.md)