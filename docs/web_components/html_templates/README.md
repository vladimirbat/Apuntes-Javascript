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



## Personalización de plantillas mediante Slots

Definición de una plantilla con un slot (con nombre *texto*):

```html
    
    <template id="plantilla-util">
        <style>
            p {border: 1px solid black;}
        </style>
        <p><slot name="texto-interior">Mi texto predeterminado</slot></p>
    </template>
```

Uso de la plantilla asignandole un valor para su slot:

```html
    <plantilla-util>
        <ul slot="texto-interior">
            <li>¡Lunes!</li>
            <li>¡Martes!</li>
        </ul>
    </plantilla-util>
```

Nota la declaración del Custom Element **plantilla-util** sería:

```javascript
    customElements.define('plantilla-util',
        class extends HTMLElement {
            constructor() {
                super();
                let template = document.getElementById('plantilla-util');
                let templateContent = template.content;

                const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(templateContent.cloneNode(true));
            }
        }
    );
```