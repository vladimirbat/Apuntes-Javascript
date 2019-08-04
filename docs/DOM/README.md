# DOM (Document Obejct Model)
La carga de un documento HTML en un navegador, de forma simplificada, consiste en un proceso de análisis de las etiquetas HTML de dicho documento y su traducción (renderizado) a pixeles dentro del área de visulización (View Port) del navegador.

Como consecuencia del análisis de las etiquetas HTML del documento, el navegador crea, en memoria, una estructura de objetos anidados que tiene forma de árbol (es decir cada objeto puede tener cero, uno o más hijos) que representan los elementos que se mostrarán en el área de visualización (View Port). A esa estructura de objetos se le denomina D.O.M o ***DOM*** que son las siglas de ***Document Obejct Model***.

El DOM mantiene en todo momento la estructura de objetos que son visualizados en el navegador. En un primer momento el DOM tiene la estructura resultante de analizar el documento HTML recibido del servidor, pero posteriormente, mediante JavaScript se puede modificar el DOM y como consecuencia lo que visualiza (renderiza) en navegador.

## Objeto document
Todo script JavaScript ejecutado en un navegador tiene acceso a la variable de ambito global ***document***. Esta variable es el punto de acceso para lectura y modificación del DOM.

## Eventos del DOM
Los eventos permiten detectar circunstancias acontecidas en el navegador cómo la carga del documento, acciones de ratón o de teclado iniciadas por el usuario. Desde JavaScript, se pueden detectar estos eventos e indicar qué tareas se deben ejecutar cuando estos eventos se produzcan. Para ello, a cada elemento se le pueden asignar una o varias funciones (handlers o manejadores) que se ejecutarán asociadas a un evento.

Para asociar un handler a un elemento, además de una referencia al elemeno, se debe indicar el tipo de evento al cual asociar la función de respuesta al evento (handler).

Por ejemplo para detectar en qué momento el documento HTML ha sido cargado y parseado, estándo ya el DOM disponible, se dispone del evento de tipo ***DOMContentLoaded*** del objeto ***document***. Para asignar un evento a un elemento del DOM se emplea el método addEventListener:

<pre>
    document.<b>addEventListener</b>('<b>DOMContentLoaded</b>', function(event){

    });
</pre>

Este evento (DOMContentLoaded) es muy importante por que determina el instante a partir del cual podemos acceder a los elementos del DOM para manipularlos (como se indica más delante) o añadirles eventos.

## Nodos del DOM
Los objetos detectados en un documento html fruto de realizarle una análisis DOM se denominand <b>Nodos</b>. Los nodos no solamente hacen referencia a las etiquetas del documento sino que pueden referise a otro tipo de elementos. A continuación se destacan los más básicos:

| Número  | Tipo      | Descripción                                                                    |
| ------- | --------- |--------------------------------------------------------------------------------|
| 1       | Element   | Representan al objeto generado a partir de una etiqueta HTML                   |
| 3       | Text      | Representan a un bloque de texto p.e.: el texto interior a una etiqueta        |
| 9       | Document  | Representan a todo el objeto Document resultante de analizar un documento HTML |

### Propiedades de los nodos del DOM
<pre>
    <b>parentNode</b>: nodo padre
    <b>childNodes</b>: matriz de nodos hijo
    <b>firstChild</b>: primer hijov
    <b>lastChild</b>: último hijo
    <b>id</b>: identificador 
    <b>className</b>: clase de estilo
    <b>tagName y nodeName</b>: Nombre de la etiqueta HTML
    <b>nodeType</b>: 1=Etiqueta; 3=texto; 9= objeto document
    <b>previousSibling</b>: hermano anterior
    <b>nextSibling</b>: hermano posterior
    <b>nodeValue</b>: texto de un nodo de texto
</pre>


## Elementos del DOM

## Buscar y obtener referencias a nodos del DOM

[Volver al índice de temas](../../README.md)