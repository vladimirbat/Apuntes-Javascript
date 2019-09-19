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
## Variables por defecto
La asignación de una variable puede tener despues del valor el modificador **!default**. Esto permite indicar el valor que tomará la variable si no se le asigna un valor (si no se reescrive) o si tiene asignado el valor null. Por tanto asginar null a una variable conlleva que tome su valor por defecto. Ejemplo:

```scss
    // _library.scss
    $black: #000 !default;
    $border-radius: 0.25rem !default;
    $box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

    code {
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    }
```

```scss
    // style.scss
    $black: #222;
    $border-radius: 0.1rem;

    @import 'library';
```
Como se puede ver en el ejemplo, el archivo style.scss da valor a las variables $black y $border-radius y **posteriormente** importa library.scss. Dado que las mencionadas variables en library.scss están declaradas como default, no se tomarán los valores que tienen en library.scss sino los valores declarados en style.scss. Por lo tanto no se produce la reescritura de dichas variables porque tienen el valor default. Solamente los valores default se aplicarian a la clase code si no tuvieran asignado previamente un valor (o este fuera null).

## Alcance (scope) de variables

Las variables globales (declaradas/asignadas fuera de cualquier bloque, normalmente delimitado con llaves {}) son visibles desde cualquier parte del documento, siempre que acceda a ellas en un punto posterior del documento sass.

Las variables locales (declaradas/asignadas dentro de un bloque, normalmente delimitado con llaves {}) son visibles solamente dentro del bloque en el que están declaradas/asignadas. Ejemplo: 
```scss
    $global-variable: global value;
    .content {
        $local-variable: local value;
        global: $global-variable;
        local: $local-variable;
    }

    .sidebar {
        global: $global-variable;
    }
```
Si en un bloque, se declara/asigna una variable con el mismo nombre que una variable global, dentro de ese bloque (y después de la variable global) la variable global no sería visible (a este efecto se le denomina *Shadowing*).

Nota los bloques de control del fujo (@if{}, ...) no añaden un nivel local de ambito de declaración de variables.

Si se necesita asignar un valor a una variable global (y previamente declarada) desde dentro de un bloque, se puede emplear el modificacor **!global**.

## Variables de tipo map

En Sass se puede asignar a una variable un mapa de pares clave/valor. Esto se indica mediante parentesis y pares clave/valor separados por coma.

```scss
    $theme-colors: (
        "success": #28a745,
        "info": #17a2b8,
        "warning": #ffc107,
    );
```
Posteriormente se puede acceder al valor de una de las claves de la variable de tipo mapa mediante la función **map-get**.
```scss
    .alert {
        background-color: map-get($theme-colors, "warning");
    }
```