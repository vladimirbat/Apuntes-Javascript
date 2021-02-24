# Federación de módulos de Webpack 5
La nueva característica introducida en Webpack 5 llamada [*Federación de módulos (Module federation)*](https://webpack.js.org/concepts/module-federation/) permite:
- Cargar separadamente partes de la aplicación que se ha compilado.
- Hacer referencia a partes de la aplicación que no se conocen en tiempo de compilación.

Esta características facilitan la implementación de *Micro Front Ends* de modo que cada micro front end sea auto compilado y al mismo tiempo comparta bibliotecas con los otros microfrontends pero sin duplicar el código cargado en el navegador.

