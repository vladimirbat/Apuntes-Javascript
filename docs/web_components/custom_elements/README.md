# Custom Elements
Es el API que, de forma nativa para el navegador, permite la creación componentes reutilizables, con funcionalidad propia, que se incluyen en el HTML de una página mediante una etiqueta personalizada asociada a dicho componente.





Se puede indicar los attributos de entrada cuyos cambios queremos que sean observados, para ello, el método *get observedAttributes* debe retornar un array con los nombres de los atributos observados.

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

