# Custom Elements
Es el API que, de forma nativa para el navegador, permite la creación componentes reutilizables. Estos componentes tienen funcionalidad propia, que se incluyen en un documento HTML mediante una etiqueta personalizada asociada a dicho componente.

## Declaración e inserción de un Custom Element
Los Custom Elements se declaran como una clase JavaScript que hereda de ***HTMLElement***. 

```javascript
    class HolaMundoComponent extends HTMLElement{
        constructor(){
            super();
        }
        connectedCallback(){
            if(this.isConnected){
                const div = document.createElement('div');
                div.className = 'saludo'
                div.textContent = '¡Hola Mundo!';
                this.appendChild(div);
            }
        }
    }

    customElements.define('hola-mundo',HolaMundoComponent);
```
Mediante el método ***define*** del objeto ***window.customElements***, se declara públicamente en el documento HTML el Custom Element. Este método recibe dos argumentos:

- Etiqueta que se empleará para insertar el Custom Element en el HTML de la página. ***Esta etiqueta debe declararse en minusculas y con al menos un guión***.
- Clase JavaScript que implementa la funcionalidad del Custom Element.

Por último, el Custom Element se inserta en el documento HTML mediante el nombre de etiqueta declarado en el método ***define***.

```html
    <h1>Custom Element:</h1>
    <hola-mundo></hola-mundo>
```

## Atributos de un Custom Element

Un Custom Element puede recibir datos del exterior (resto del documento HTML) mediate atributos (o propiedades). Desde el Custom Event, esos atributos se pueden leer mediante el método ***getAttribute*** que recibe como argumento el nombre del atributo:

```javascript
    class HolaMundoComponent extends HTMLElement{
        constructor(){
            super();
        }
        connectedCallback(){
            if(this.isConnected){
                const div = document.createElement('div');
                div.className = 'saludo'
                const nombre = this.getAttribute('nombre');
                const apellidos = this.getAttribute('apellidos');
                div.textContent = `¡Hola ${nombre} ${apellidos}!` ;
                this.appendChild(div);
            }
        }
    }

    customElements.define('hola-mundo',HolaMundoComponent);
```

## Detección de cambios de los atributos de entrada

Se puede indicar los attributos de entrada cuyos cambios se quiere que sean observados, para ello, el método *static get observedAttributes* debe retornar un array con los nombres de los atributos observados.

```javascript
    static get observedAttributes () {
        return [ 'num' ];
    }
```

El método que se ejectuará cuando dichos atributos cambien será, *attributeChangedCallback*: 
```javascript
    attributeChangedCallback (attrName, oldValue, newValue) {
        console.log(attrName + ':',  oldValue , '->',  newValue);
    }
```


## métodos del ciclo de vída de un Custom Element

- **constructor** -> 
- **connectedCallback()** -> Cuando se inserta el Custom Element en el DOM (se puede ejecutar varias veces si se quita y se pone en el DOM). Para saber en cualquier momento si el Custom Element está conectado se puede leer el atributo ***isConnected***.
- **disconnectedCallback()** -> Cuando se quita el Custom Element del DOM, es el momento adecuado para liberar recursos.
- **attributeChangedCallback(attrName, oldValue, newValue)** -> Cuando el atributo cuyo nombre se recibe ha cambiado. Solamente los incluidos en el array retornado por el método estático *get observedAttributes* lanzan el evento *attributeChangedCallback*.
- **adoptedCallback()** -> Cuando el CustomElement es adoptado por otro document (ejecución de *document.addoptNode(element)*), cosa que se hace cuando se comparten nodos entre un iframe y su document contenedor.

