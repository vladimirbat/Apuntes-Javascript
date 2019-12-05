# Imagenes *responsivas*

## Uso del atributo media y diferentes fuentes (sources)
A continuación se muestra una estrategia de mostrar una imagen u otra en función del ancho del viewport empleando para ello el atributo media de la etiqueta source (dentro de una etiqueta picture). Cuando ninguna de las etiqueta source cumple la condición, entonces se muestra el interior de la etiqueta picture (lo mismo pasa con la etiqueta vídeo).

```html
<picture>
  <source media="(min-width: 650px)" srcset="grande.jpg">
  <source media="(min-width: 465px)" srcset="mediana.jpg">
  <img src="pequeña.jpg" alt="Flowers" style="width:auto;">
</picture>
```




[Volver al índice de temas](../../README.md)
