# Variables Sass
Las variables sass empiezan por $ y se declaran a la vez que se les asigna un valor. Posteriormente, estas variables se usan con el mismo nombre (incluyendo el $).

```scss
    $base-color: #c6538c;
    $border-dark: rgba($base-color, 0.88);

    .alert {
    border: 1px solid $border-dark;
    }
```
## Las variables Sass son imperativas
Las variables Sass son imperativas lo que significa que se puede usar el valor después de asignarle un valor. Pero si más adelante en el código se le asigna otro valor, entonces solamente los usos posteriores (más adelante en el documento) de esa variable tomarán el nuevo valor, pero los usos anteriores al nuevo valor no tomarán el nuevo valor.
```scss
    $color1: #000000;
    .fondo-negro {
        background-color: $color1;
    }
    $color1: #444444;
    .fondo-gris {
        background-color: $color1;
    }
```
En el ejemplo, aunque las clases fondo-negro y fondo-gris tienen asignado para el color de fondo la variable $color1, fondo-negro tendrá el color #000000 y fondo-gris tendrá el color #444444.
## Nombres de variables con guiones medios y bajos
En la declaración de variables en Sass, el uso de guiones medios y bajos es equivalente. Es decir en el ejmplo anterior, aunque declaremos la variable con guíon medio y luego la usemos con guión bajo, serán la misma variable.
```scss
    $color-fondo: #000000;
    .fondo-negro {
        background-color: $color_fondo;
    }
```