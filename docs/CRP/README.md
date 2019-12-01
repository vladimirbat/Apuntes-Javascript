# Critical Render Path (CRP)

## CRP y hojas de estilo
El navegador descarga todas los archivos de estilos apuntados por etiquetas <link>, pero solamente son bloqueantes para el renderizado que no tenga atributo *media* o los que lo tengan y su evaluación sea #true#.
```css
    <link rel="stylesheet" href="estios1.css" />
    <link rel="stylesheet" href="estios1.css" media="screen and min-width=450px"/>
    <link rel="stylesheet" href="estios1.css" media="print"/>
```
En este ejemplo, si el ancho del viewport es de 500px, aunque se descargan todas las hojas de estilo, solamente bloquean el renderizado las dos primeras. Por el contrario, si el ancho del viewport fuera 400px, entonces solamente la primera bloquearía el renderizado.

## CRP y JavaScript
Si el navegador encuentra JavaScript en su lectura del HTML, detiene su construcción del DOM, ejecuta el JS y luego continua con la construcción del DOM.

Si el JavaScript está incluido en línea (dentro de la etiqueta \<script>), se ejecuta inmediatamente y el proceso puede ser relativamente rápido. Pero si el JavaScript está siendo referenciado por el atributo *src* de la etiqueta \<script>, entonces se debe descargar el archivo con el código para poder ejecutarlo y luego seguir construyendo el DOM.

> *Por lo tanto se puede decir que las \<script src="">, por defecto, impactan directamente en el CRP.*
