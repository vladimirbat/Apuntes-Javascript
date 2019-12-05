## Eventos tactiles

# Orden de ejecución de los eventos
En los dispositivos táctiles, cuando se pulsa con el dedo un elemento, los eventos que dicho elemento recibe y su orden es el siguiente:

1. **touchstart**
2. cero o más eventos **touchmove**, dependiendo del movimiento del dedo
3. **touchend**
4. **mousemove**
5. **mousedown**
6. **mouseup**
7. **click**

# Evitar que se ejecuten tanto eventos tactiles y de ratón simulaneamente
Como se ha indicado en el apartado anterior, los navegadores de dispositivos táctiles, ante un toque del usuario disparan tanto los eventos táctiles como los de ratón. Esto lo hacen para poder responder adecuadamente aunque la página solamente se haya desarrollado para eventos de ratón.

En ocasiones pueden producirse conflictos con la funcionalidad deseada, cuando frente a una acción táctil, se disparan tanto eventos táctiles como de ratón. El ejemplo más claro de esto sería que el usuario inicie una acción de arrastrar un elemento y además se dispare su evento de click (que seguramente nos será lo que se desea). Para ello, en los eventos táctiles, se puede ejecutar **preventDefault()** lo que hará que los eventos de ratón no se disparen. Por lo que esta sería la solución adecuada:

```javascript
    miCuadrado.addEventListener('touchmove', (event) => {
        event.preventDefault();
    });
```


[Volver al índice de temas](../../README.md)
