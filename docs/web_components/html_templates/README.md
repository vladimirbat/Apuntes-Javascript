# HTML Template

La etiqueta ***template*** permite contener un fragmento HTML que no es renderizado por el navegador. Esto constituye un mecanismo de plantillas de código cuyo contenido (Fragmento HTML) puede ser insertado (y renderizado), cuando sea necesario, en el punto del DOM que se desee.

## Uso de HTML Template de forma independiente

A continuación se muestra la declaración de una plantilla:

```html
<template id="plantilla">
    <div>
        <ul>
            <li>A</li>
            <li>B</li>
        </ul>
    </div>
</template>
<div><button id="mostrarPlantilla">Mostrar Plantilla</button></div>
<div id="marco">

</div>
```

El siguiente ejemplo de código JavaScript establece que al pulsar el botón (*#mostrarPlantilla*) se inserta una copia (clon) del contenido de la plantilla (*#plantilla*) en el interior del elemento *#marco*.

```javascript
document.querySelector('#mostrarPlantilla').addEventListener('click', () => {
    const plantilla = document.querySelector("#plantilla");
    const content = plantilla.content;
    const fragment = content.cloneNode(true);
    const destino = document.querySelector('#marco');
    destino.appendChild(fragment);
});
```
## Uso de HTML Template con Custom Elements
Las plantillas HTML cobran mayor potencia en su uso con Custom Elememnts pues se pueden particularizar con el uso de:
- Slots (etiqueta ***slot***) 
- Estilos encapsulados dentro del Custom Element.



