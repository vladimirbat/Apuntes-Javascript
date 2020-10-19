# Módulos JavaScript: CommonJS, AMD, RequireJS, Módulos ES6 y UMD

Cuando las aplicaciones JavaScript van creciendo necesitan modularizarse (descomponerse en bloques funcionales) y además es recomendable bibliotecas que aportan soluciones publicas y probadas por la comunidad.

Los módulos JavaScript son unidades de código independientes y reutilizables. Inicialmente no existía ningún estandar al respecto y por eso surgieron varios sistemas cada uno oriendado a un tipo de uso.

## CommonJS (abreviado CJS)
Emplea:
- La función ***require('nombre biblioteca')*** para importar un módulo.
- La variable ***exports*** contienen un objeto sobre la cual (o sus atributos) se asignan los objetos/funciones exportados por el módulo.

```javascript
// unModulo.js
exports.hacerAlgo = function() { return "foo"; };

// otroModulo.js
var unModulo = require('unModulo'); // in the vein of node    
exports.hacerOtraCosa = function() { return unModulo.hacerAlgo() + "bar"; };
```

CommonJS no se creo para emplear en navegador pues la lectura de los módulos se realiza de forma síncrona. Por tanto su uso se realiza en aplicaciones back end.

Nota: Node.js hace una implementación particular de CommonJS, donde la exportación se realiza con la variable ***module.exports***.

## AMD
AMD (Asynchronous Module Definition) es una especificación que para el uso de módulos en navegadores ya que está enfocada a una carga de módulos asíncrona (función de callback cuando el módulo se ha cargado).

***RequireJS*** es la una implementación de la especificación AMD.

## ES 2015 (abreviado ESM)
En EcmaScript 6 (o 2015) se introdujo la declaración e importación de módulos con la sintaxis:

- Mediante la palabra reservada ***export*** se exporta un elemento del módulo con el nombre de su elemento (constante, función, clase).
- Mediante la sintaxis ***import {ElementosImportados} from 'NombreBiblioteca'*** se pueden importar los elementos declarados de la forma indicada en el punto anterior.
- Mediante la sintaxis ***export default*** se puede exportar un elemento de la biblioteca como export por defecto, el cual se puede importar como un bloque con la sintaxis ***import * as NombreValirable from 'NombreBiblioteca'***.

Hoy en día los módulos ES2015 pueden funcionar tanto en back ends como en el navegador, tienen una sintaxis sencilla y que puede funcionar de forma asíncrona.

## UMD
UMD (Universal Module Definition) es un formato de módulos que se puede emplear tanto en front como en back end. Implementa un patrón que permite usar módulos de tipo CommonJS y AMD.

UMD se suele usar como opción por defecto para tener compatibilidad tanto en navegador cómo en Node.js.