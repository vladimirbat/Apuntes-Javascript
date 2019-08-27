# API Fetch
Javascript proporciona la función ***fetch*** que permite realizar peticiones de http.
## Uso básico
La sintaxis básica de la función *fetch* es la siguiente:
```javascript
fetch(url: string): Promise
```

En su forma más sencilla, *fetch* recibe un string con la url sobre la cual se realizará una petición GET. La respuesta es una promesa cuya resolución será:
- Si se ha podido hacer la conexión (independientemente de que el código de respuesta sea 200, 404, 500, ...), en ese caso se ejecutará el ***then***. 
- En caso de un error de conexión, se ejecutará el handler de catch.

El método then proporciona un objeto [Response](https://developer.mozilla.org/es/docs/Web/API/Response) con la información obtenida de la respuesta del servidor.

La lectura del body de la respuesta se puede leer (mediante la propiedad ***body***) como un stream ([ReadableStream](https://developer.mozilla.org/es/docs/Web/API/ReadableStream)), pero en lugar de ello se emplean métodos de Response que internamente leen el stream completo y retornan una promesa que en cuyo ***then*** proporciona el dato completo.
- ***arrayBuffer()*** -> Retorna una promesa que en su resolución proporciona un arrayBuffer con los datos del body.
- ***blob()*** -> Retorna una promesa que en su resolución proporciona un Blob con los datos del body.
- ***formData()*** -> Retorna una promesa que en su resolución proporciona un objeto [FormData](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/FormData) con los datos del body.
- ***json()*** -> Retorna una promesa que en su resolución proporciona un objeto JSON con los datos del body.
- ***text()*** -> Retorna una promesa que en su resolución proporciona un string con los datos del body.

## Ejemplo básico: petición GET a un endpoint que retorna JSON
A continuación se muestra un ejemplo básico de una petición GET a un endpoint que retorna un JSON.
```javascript
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
```
## Interface Response
### Atributos de Response
- body
- bodyUsed
- headers
- ok
- redirected
- status
- statusText
- type
- url

### Métodos de Response
- ***arrayBuffer()*** -> Retorna una promesa que en su resolución proporciona un arrayBuffer con los datos del body.
- ***blob()*** -> Retorna una promesa que en su resolución proporciona un Blob con los datos del body.
- ***formData()*** -> Retorna una promesa que en su resolución proporciona un objeto [FormData](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/FormData) con los datos del body.
- ***json()*** -> Retorna una promesa que en su resolución proporciona un objeto JSON con los datos del body.
- ***text()*** -> Retorna una promesa que en su resolución proporciona un string con los datos del body.
- ***clone()*** -> Retorna una copia del objeto Response.
- ***error()*** -> Método estático que retorna un objeto Response correspondiente a un error de conexión.
- ***redirect()*** -> Retorna un nuevo objeto Response resultante de reemplazarle la url y opcionalmente el estado (estado de redirección) ([referencia de *redirect*](https://developer.mozilla.org/es/docs/Web/API/Response/redirect)).