# API Fetch
Javascript proporciona la función ***fetch*** (en realidad es un método de la interfaz **GlobalFetch** implementada por  [Window](https://developer.mozilla.org/es/docs/Web/API/Window) y [WorkerGlobalScope](https://developer.mozilla.org/es/docs/Web/API/WorkerGlobalScope)) que permite realizar peticiones de http.
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

Hay que tener en cuenta que al ser el body un ReadableStream, solamente puede ser leido una vez. Para conocer si el body ya ha sido leido, se puede consultar la propiedad **bodyUsed** (explicada más adelante).

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
## Mixin Body
Las interfaces **Response** y **Request**, que contienen toda la información de una respuesta y una petición respectivamente, heredan de la interface (mixin) **Body**. **Body** presenta los siguientes atributos y métodos.

### Atributos de Body
- **body** -> Stream ([ReadableStream](https://developer.mozilla.org/es/docs/Web/API/ReadableStream)) con el *body* de la respuesta.
- **bodyUsed** -> booleano que indica que el body ya ha sido leido.
<a id="metodos-body"></a>
### Métodos de body
- **arrayBuffer()** -> Retorna una promesa que en su resolución proporciona un arrayBuffer con los datos del body.
- **blob()** -> Retorna una promesa que en su resolución proporciona un Blob con los datos del body.
- **formData()** -> Retorna una promesa que en su resolución proporciona un objeto [FormData](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/FormData) con los datos del body.
- **json()** -> Retorna una promesa que en su resolución proporciona un objeto JSON con los datos del body.
- **text()** -> Retorna una promesa que en su resolución proporciona un string con los datos del body.

## La interface Response
La interface **Response** hereda de la interface (mixin) **Body** y contiene toda la información relativa a una respuesta http.

### Atributos de Response
- **headers** -> Objeto [Headers](https://developer.mozilla.org/es/docs/Web/API/Headers) con las cabeceras de la respuesta http.
- **ok** -> booleano que indica si la respuesta fue exitosa (estado en el rango  200-299).
- **redirected** -> booleano que indica que la respuesta es una redirección.
- **status** -> Código http del *status* de la respuesta (200, 404, 500).
- **statusText** -> Mensaje del *status* de la respuesta.
- **type** -> Tipo de respuesta (basic, cors, ...) [referencia de type](https://developer.mozilla.org/es/docs/Web/API/Response/type).
- **url** -> URL completa de la petición.

### Métodos de Response
Además de los [métodos indicados en Body](#metodos-body) Response declara los métodos siguientes.
- **clone()** -> Retorna una copia del objeto *Response*.
- **error()** -> Método estático que retorna un objeto *Response* correspondiente a un error de conexión.
- **redirect()** -> Retorna un nuevo objeto *Response* resultante de reemplazarle la url y opcionalmente el estado (estado de redirección) ([referencia de *redirect*](https://developer.mozilla.org/es/docs/Web/API/Response/redirect)).

