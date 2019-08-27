# API Fetch
Javascript proporciona la función fetch que permite realizar peticiones de http.
## Uso básico
```javascript
    fetch(url: string): Promise
```
<pre>
</pre>
En su forma más sencilla, fetch recibe un string con la url sobre la cual se realizará una petición GET. La respuesta es una promesa cuya resolución será:
- Si se ha podido hacer la conexión (independientemente de que el código de respuesta sea 200, 404, 500, ...), en ese caso se ejecutará el then. 
- En caso de un error de conexión, se ejecutará el handler de catch.

El método then proporciona un objeto [Response](https://developer.mozilla.org/es/docs/Web/API/Response) con la información obtenida de la respuesta del servidor. 