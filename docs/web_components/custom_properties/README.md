# Custom Properties (vars)

## Declaración
Las Custom Properties se declaran precedidas de dos guiones, dentro de un ámbito css, este puede ser un selector específico y las variables solamente se aplicarán cuando ese selector se cumpla o dicho ámbito puede ser :root para que se apliquen a toda la página:

```css
    div.resaltado {
        --main-bg-color: brown;
    }
    :root {
        --main-bg-color: gray;
    }
```
## Lectura de Custom Properties
Para leer en un bloque CSS el valor de una Custom Property, se emplea la función var() que recibe el nombre de la Custom Property (incluyendo los dos guiones)
```css
    div.resaltado {
        background-color: var(--main-bg-color);
    }
    p.coloreado {
        background-color: var(--main-bg-color);
    }
```