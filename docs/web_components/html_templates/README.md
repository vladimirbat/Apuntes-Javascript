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
Las plantillas HTML adquieren mayor potencia en su uso en Custom Elememnts, pués se pueden particularizar con:
- Slots (etiqueta ***slot***) 
- Estilos encapsulados dentro del Custom Element.



## Personalización de plantillas mediante Slots

Definición de una plantilla con un slot (con nombre *texto-interior*):

```html
<template id="plantilla">
    <style>
        p {border: 1px solid black;box-shadow: 10px 5px 5px gray;padding: 2em;}
    </style>
    <p><slot name="texto-interior">Mi texto predeterminado</slot></p>
</template>
```

Uso de la plantilla asignandole un valor para su slot:

```html
<borde-con-sombra>
    <div slot="texto-interior">
        <ul>
            <li>¡Lunes!</li>
            <li>¡Martes!</li>
        </ul>
        <button>List</button>
    </div>
</borde-con-sombral>
```

Nota la declaración del Custom Element **borde-con-sombra** sería:

```javascript
    customElements.define('borde-con-sombra',
        class extends HTMLElement {
            constructor() {
                super();
                const plantilla = document.getElementById('plantilla');
                this.attachShadow({mode: 'open'}).appendChild(plantilla.content.cloneNode(true));
            }
        }
    );
```