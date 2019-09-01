# Cache API
## clase Cache
Representa un objeto de caché que contiene una colección de elementos cacheados. Cada elemento está referenciado por una clave que puede ser un objeto Request o una URL (un string).
### Métodos

- **add(request: Request | string): Promise** -> Realiza la petición fetch indicada en request y almacena en caché la respuesta asociada a dicho request. Solamente tiene efecto si ***response.ok == true***.
- **addAll(requests: string[]): Promise** -> realiza a misma acción que add, pero con una colección de URL de peticiones pasadas como argumento.
- **delete(request: Request | string, options?: any): Promise** -> si encuentra y elimina la petición indicada, la promesa resuelve con true, si no la encuentra resuelve con false.
- **keys(): Promise** -> La promesa resuelve con el array de requests cacheadas.
- **match(request: Request | string, options?: any): Promise** -> Busca y resuelve con respuesta correspondiente a la request indicada que será un objeto Request o una URL (un string).
- **matchAll(requests: string[]): Promise** -> Resuleve con un array de respuestas correspondientes al array de peticiones suministrado.
- **put(request: Request | string, response: Response)** -> Guarda una respuesta (response) asociada a una petición (request). Se guarda independiente del ok del response, es decir aunque su status no sea 2XX, pudiento así guardarse respuestas opacas.

## CacheStorage (variable caches)
La interface **CacheStorage** proporciona los métodos disponibles para manejar la caché de un dominio/puerto. El acceso al API se realiza mediante la variable global **caches**.

- **open(key: string): Promise** -> La promesa resuelve con el objeto de la clase Cache asociado a la clave indicada.
- **match(request: Request | string, options?: any): Promise** -> Busca el request indicado en cualquiera de las colecciones de los objetos de la clase Cache almacenados en el CacheStorage. La promesa resuelve con el objeto Response asociado a la clave indicada. 
