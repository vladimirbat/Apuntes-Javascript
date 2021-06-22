# Custom Properties (vars)

Las Custom Properties se declaran dentro de un ámbito css, este puede ser un selector específico y las variables solamente se aplicarán cuando ese selector se cumpla o dicho ámbito puede ser :root para que se apliquen a toda la página:

```css
    div.resaltado {
        --main-bg-color: brown;
    }
    :root {
        --main-bg-color: gray;
    }
```