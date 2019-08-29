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

## Ejemplos básicos
### Ejemplo 1: petición GET a un endpoint que retorna JSON
A continuación se muestra un ejemplo básico de una petición GET a un endpoint que retorna un JSON.
```javascript
fetch('http://my-json-server.typicode.com/vladimirbat/Apuntes-Javascript/clientes/1')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
```
Este ejemplo se puede mejorar agregando la condición de que solamente si se ha obtenido una respuesta correcta 2XX, se analizará el body. Para ello se puede emplear el atributo **ok** de la respuesta.
```javascript
  fetch('http://my-json-server.typicode.com/vladimirbat/Apuntes-Javascript/clientes/1')
    .then(function(response) {
      if(!response.ok){
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    }).catch(() => {
      console.log('Se produjo un error');
    });
  });
```
En este caso si se reemplaza en la url *clientes* por *clients* se recibirá una respuesta 404 del servidor y en la consola se mostrará *Se produjo un error*.
### Ejemplo 2: petición GET a un endpoint que retorna datos binarios (Blob)
A continuación se muestra un ejemplo básico de una petición GET a un endpoint que retorna una imagen (Binary Large OBject [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)).
```javascript
const myImage = document.querySelector('.my-image');
fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg')
	.then(res => res.blob())
	.then(res => {
		const objectURL = URL.createObjectURL(res);
		myImage.src = objectURL;
});
```

## Mixin Body <a name="mixin-body"></a>
Las interfaces **Response** y **Request**, que contienen toda la información de una respuesta y una petición respectivamente, heredan de la interface (mixin) **Body**. **Body** que representa la parte de la información de una petición http correspondiente al body de dicha petición. **Body** presenta los siguientes atributos y métodos.

### Atributos de Body <a name="atributos-body"></a>
- **body** -> Stream ([ReadableStream](https://developer.mozilla.org/es/docs/Web/API/ReadableStream)) con el *body* de la respuesta.
- **bodyUsed** -> booleano que indica que el body ya ha sido leido.

### Métodos de body <a name="metodos-body"></a>
- **arrayBuffer()** -> Retorna una promesa que en su resolución proporciona un arrayBuffer con los datos del body.
- **blob()** -> Retorna una promesa que en su resolución proporciona un Blob con los datos del body.
- **formData()** -> Retorna una promesa que en su resolución proporciona un objeto [FormData](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/FormData) con los datos del body.
- **json()** -> Retorna una promesa que en su resolución proporciona un objeto JSON con los datos del body.
- **text()** -> Retorna una promesa que en su resolución proporciona un string con los datos del body.

## La interface Response
La interface **Response** hereda de la interface (mixin) **Body** y contiene toda la información relativa a una respuesta http.

### Atributos de Response
Además de los [atributos indicados en Body](#atributos-body) **Response** declara los atributos siguientes:
- **headers** -> Objeto [Headers](https://developer.mozilla.org/es/docs/Web/API/Headers) con las cabeceras de la respuesta http.
- **ok** -> booleano que indica si la respuesta fue exitosa (estado en el rango  200-299).
- **redirected** -> booleano que indica que la respuesta es una redirección.
- **status** -> Código http del *status* de la respuesta (200, 404, 500).
- **statusText** -> Mensaje del *status* de la respuesta.
- **type** -> Tipo de respuesta (basic, cors, ...) [referencia de type](https://developer.mozilla.org/es/docs/Web/API/Response/type).
- **url** -> URL completa de la petición.

### Métodos de Response
Además de los [métodos indicados en Body](#metodos-body) **Response** declara los métodos siguientes:
- **clone()** -> Retorna una copia del objeto *Response*.
- **error()** -> Método estático que retorna un objeto *Response* correspondiente a un error de conexión.
- **redirect()** -> Retorna un nuevo objeto *Response* resultante de reemplazarle la url y opcionalmente el estado (estado de redirección) ([referencia de *redirect*](https://developer.mozilla.org/es/docs/Web/API/Response/redirect)).

## La interface Request
La función **fetch**, en lugar de recibir como argumento un string con la url de la petición, puede recibir un objeto **Request** (herdero de [Body](#mixin-body)).

El constructor de los **Request** recibe como primer argumento, la URL y como segundo, un objeto JSON con la configuración adicional:
```javascript
new Request(url: string, config: any)
```
A continuación se muestra un ejemplo de una petición POST en a que se envía (*Content-Type*) información en formato JSON y la recibe teambién en ese formato (*Accept*).
```javascript
var request = new Request('https://example.com/api/users', {
	method: 'POST',
	body: JSON.stringify({nombre: 'Daniel', apellidos: 'Valiente'})
	headers: new Headers({
		  'Accept': 'application/json',
      'Content-Type': 'application/json'
  })
});
fetch(request).then(function() { /* gestión de la respuesta */ });

```
El objeto de configuración (**config**) del Request puede contener las siguientes propiedades:

| propiedad   | valores                        | Descripción                                                                    |
| ----------  | ------------------------------ |--------------------------------------------------------------------------------|
| method      | GET, POST, PUT, DELETE, HEAD   | Método http por el que se envía la petición                                    |
| url         | (string)                       | URL de la petición      |
| headers     | Objeto Header o JSON           | Contiene las cabeceras que se enviarán en la petición                          |
| referrer    | (string)                       | desde donde se realiza la petición ??????????????????                          |
| mode        | cors, no-cors, same-origin     | Tratamiento de política del mismo origen y CORS de la petición                 |
| credentials | omit(default), include, same-origin | Indica si las cookies con credenciales deben ser enviadas siempre (include), solo si es al mismo dominio (same-orgin) o no se envian (omit)                |
| redirect    | follow, error, manual          |                                                                                |
| integrity   |                                |                                                                                |
| cache       | default, reload, no-cache      | Módo de cacheo de la petición                                                  |
| body        | ( Blob, BufferSource, FormData, [URLSearchParams](#url-search-params), USVString, o ReadableStream)                       | Datos que se van a enviar (Hay que convertirlo a string)                       |

Nota: otra sintaxis alternativa de fetch es pasar un como primer argumento la url y como segundo un objeto JSON con la configuración. De este modo no se emplea explicitamente un objeto **Request**.
```javascript
fetch('https://example.com/api/users', {
	method: 'POST',
	body: JSON.stringify({nombre: 'Daniel', apellidos: 'Valiente'})
	headers: new Headers({
		  'Accept': 'application/json',
      'Content-Type': 'application/json'
	})
}).then(function() { /* gestión de la respuesta */ });
```
### Ejemplo de envío de un formulario empleando la clase FormData
```javascript
  const formData = new FormData(document.getElementById('formulario'));
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const config =  {
      method: 'POST',
      body: formData
  };
  fetch(url, config)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          console.log(data);
      });
```
### Ejemplo de envío de un archivo
```javascript
var formData = new FormData();
var fileField = document.querySelector("input[type='file']");

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
```

## Interface Header
La interface Header puede recibir en su constructor un objeto JSON con las cabeceras que se quieren enviar.
```javascript
	var headers = new Headers({
		  'Accept': 'application/json',
      'Content-Type': 'application/json'
	});
```
Por otra parte, la interfaz presenta los siguientes métodos para leer/escribir y eliminar cabederas:
- **set(name: string, value: string)** -> agrega una cabecera si no existía, de lo contrario la remmplaza.
- **append(name: string, value: string)** -> agrega una cabecera si no existía, de lo contrario concatena el valor indicado.
- **delete(name: string)** -> elimina una cabecera.
- **get(name: string)** -> retorna un string con el valor de la cabecera indicada.
- **has(name: string)** -> retorna un booleano indicando si la cabecera indicada está incluida.
- **keys()** -> retorna un iterator con los *nombres* de las cabeceras incluidas.
- **values()** -> retorna un iterator con los *valores* de las cabeceras incluidas.
- **entries()** -> retorna un iterator de los pares clave/valor correspondientes a las cabeceras. Dichos pares se reciben como un array con el nombre en la posición 0 y el valor en la posición 1.


## clase URLSearchParams <a name="url-search-params"></a>
La clase URLSearchParams permite el trabajo con parámetros de tipo QueryString. En su constructor recibe un string con la URL con la que se quiere trabajar.

El método entries() o directamente el propio objeto se puede recorrer con un bucle for...of donde cada elemento será un array con la clave en la posición 0 y el valor en la posición 1.
```javascript
  var params = new URLSearchParams('a=hola&b=adios');
  for (var param of params) {
      console.log(param[0], '->', param[1]);
  }
```

Empleando la deconstrucción de arrays de ES6, lo mismo se puede hacer de la siguiente forma:
```javascript
  var params = new URLSearchParams('a=hola&b=adios');
  for (const [key, value] of params) {
      console.log(key, '->', value);
  }
```

### Métodos
- **append(name, value)** -> Agrega un parámetro con el nombre y valor indicado.
- **set(name, value)** -> Establece o reemplaza si ya existe el valor del parámetro indicado.
- **get(name): string** -> Retorna el valor del pámetro indicado (si hubiera varios, solamente retorna el primero).
- **has(name): boolean** -> Indica si el parámetro con el nombre indicado existe.
- **delete(name)** -> Elimina el parámetro con el nombre indicado.
- **forEach(callback)** -> Ejecuta la función sumistrada por cada uno de los parámetros contenidos. La estructura de dicha función debe ser *function(value, key)*.
- **entries(): iterator** -> Retorna un iterador donde cada elemento será un array con la clave en la posición 0 y el valor en la posición 1.
- **keys(): iterator** -> Retorna un iterador con las claves.
- **values(): iterator** -> Retorna un iterador con los valores.
- **getAll(name): string[]** -> Retorna un array de string con todos los valores del parámentro indicado.
- **sort(): void** -> Ordena alfabeticamente por nombre los parámetros.
- **toString(): string** -> Retorna un string con la queryString sin la '?'.

## CORS
La politica del mismo origen indica que desde JavaScript solamente se puede obtener datos mediante peticiones http que cumplan:
- Que pertenecen al mismo dominio y puerto (mismo origen).
- Que dichos recursos son servidos con la cabecera **'Access-Control-Allow-Origin'** que apunte a nuestro dominio o a \*.

El API Fetch permite realizar peticiones que no cumplan ninguna de estas condiciones, mediante la configuración **mode: 'no-cors'**. A continuación se muestra un ejemplo.
Su JavaScript es el siguiente:
```javascript
  function analizarRespuesta(response)  {
      console.log('OBJETO RESPONSE:', response);
  }
  function gestionarErrores(error){
      console.log('Se produjo un error', error);
  }
  document.addEventListener('DOMContentLoaded', function(event){
      var config = {
          mode: 'no-cors'
      }
      var url = 'https://elpais.com/iconos/v2.x/v2.0/logos/elpais-economia.svg';
      fetch(url, config)
          .then(analizarRespuesta)
          .catch(gestionarErrores);
      setTimeout(() => {
          document.getElementById('imagen').src = url;
      },5000);
  });
```
Y el código HTML del body del document es este:
```html
  <body>
        <div>
            <img id="imagen" alt="imagen no cargada"/>
        </div>
  </body>
```
Primero se realiza la petición con fetch de una imagen de otro servidor. El el servidor para dicha imagen no está permitido el CORS.
Por lo tanto,el fetch produciría un error.  

Si en la configuración del fetch se incluye **mode: 'no-cors'**, la petición se hace, aunque su body y sus headers no son accesibles. A esto se le denomina una ***respuesta opaca***. La utilidad de las *respuestas opacas* es que quedan cacheadas en disco, siempre que el usuario tenga habilitada esa opción en el navegador.

Pasados 5 segundos se lanza la asignación de la url de la imagen cacheada al *src* de un elemento IMG del DOM.

Si se visualiza con las DevTools del navegador las dos peticiones de red de la imagen, en la segunda se indica que en realidad se ha tomado de cache de disco (Status Code: 200  (from disk cache)) y además se verá que el tiempo de carga es sustancialmente inferior.

**Nota**: para realizar este ensayo, no debe estar activado el *disble caché* de las DevTools y se debe haber borrado el caché previo (ctrl + shift + supr).
## Enlaces de interés
- [clase URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)
- [What is an opaque response?](https://blog.fullstacktraining.com/what-is-an-opaque-response/)

[Volver al índice de temas](../../README.md)
