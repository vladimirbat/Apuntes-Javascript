# DOM (Document Obejct Model)
La carga de un documento html en un navegador, de forma simplificada, consiste en un proceso de análisis de las etiquetas html de dicho documento y su traducción (renderizado) a pixeles dentro del área de visulización (View Port) del navegador.

Como consecuencia del análisis de las etiquetas html del documento, el navegador crea, en memoria, una estructura de objetos anidados que tiene forma de árbol (es decir cada objeto puede tener cero, uno o más hijos) que representan los elementos que se mostrarán en el área de visualización (View Port). A esa estructura de objetos se le denomina D.O.M o ***DOM*** que son las siglas de ***Document Obejct Model***.

El DOM mantiene en todo momento la estructura de objetos que son visualizados en el navegador. En un primer momento el DOM tiene la estructura resultante de analizar el documento html recibido del servidor, pero posteriormente, mediante JavaScript se puede modificar el DOM y como consecuencia lo que visualiza (renderiza) en navegador.

## Objeto document
Todo script JavaScript ejecutado en un navegador tiene acceso a la variable de ambito global ***document***. Esta variable es el punto de acceso para lectura y modificación del DOM.


[Volver al índice de temas](../../README.md)