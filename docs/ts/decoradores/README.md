# Decoradores en TypeScript
Los decoradores son elementos de TypeScript que permiten modificar o personalizar el comportamiento de un elemento elemento de código (clase, función, interface, método o atributo).
Los decoradores se declaran como funciones y se importan igual que si se importara la función de su declaración, pero su aplicación se realiza precedida de una arroba:

```typescript
    // ---- Declaración del decorador ----
    export function MiDecorador() {

    }

    // ---- Uso del decorador ----
    @MiDecorador
    class ClaseConDecorador {
        
    }
```


