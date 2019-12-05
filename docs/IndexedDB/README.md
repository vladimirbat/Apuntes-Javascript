# IndexedDB API
## Introducción
IndexedDB es una base de datos que permite guardar grandes cantidades (más de 250MB) de información al contrario que localStorage (2.5MB - 10MB). Sus características son:
- Datos guardados en forma de pares clave-valor.
- Funcionamiento asíncrono para no bloquear la aplicación.
- Transaccional.
- Solamente accesible desde paginas del sitio (protocolo + dominio + puerto) que la creo.
- Puede almacenar objetos JavaScript, strings, datos binarios (ArrayBuffer y Blob).

## Elementos

- **Objeto global del API**: IDBFactory
- **Objeto petición de apertura de base de datos**: IDBOpenDBRequest
- **Base de Datos**: IDBDatabase
- **Almacén de datos (tabla)**: IDBObjectStore
- **Índice**: IDBIndex
- **Transacción**: IDBTransaction
- **solicitud de operación**: IDBRequest
- **puntero a datos**: IDBCursor
- **Colección de clave primaria**: IDBKeyRange


## Creación de la Base de datos
Para la creación de la bbdd se ejecuta el método **open** que recibe dos argumentos:
- nombre de la bbdd.
- versión de la bbdd.

Y retorna un objeto [IDBOpenDBRequest](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest) que tiene tres eventos principales:
- **[success](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/success_event)**: se ejecutará si la bbdd se ha creado/recuperado correctamente.
- **[error](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/error_event)**: si no se ha podido crear/recuperar la bbdd.
- **[upgradeneeded](https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)**: si se detecta que la versión indicada no corresponde con la de la bbdd existente en el navegador y por lo tanto debe actualizarse.

```javascript
    var openRequet = window.indexedDB.open('mi-bbdd', 1);
```
Después de ejecutar este código en las DevToools > Application > IndexedDB se puede ver la bbdd creada y la versión que se ha instalado.
La sintaxis de *open* es la siguiente:
```javascript
    indexedDB.open(dbNombre: string, version: number): IDBOpenDBRequest
```
Para ver como se asignan los callback de  en el API nativo, consultar el enlace siguiente: [Usando IndexedDB](https://developer.mozilla.org/es/docs/IndexedDB-840092-dup/Usando_IndexedDB).

## evento success
El objeto event suministrado por el evento success contienen los siguientes elementos:
- **event.target**: referencia al objeto IDBOpenDBRequest que tiene asignado el evento.
- **event.target.result**: referencia al objeto IDBDatabase que representa la base de datos abiert.

Por lo tanto,para obtener una referencia a la bbdd, tendríamos:
```javascript
    function openOk(event) {
        console.log('OPEN OK:', event.target); // Misma referencia que openRequest.
        console.log('Referencia: ', event.target == openRequest); // true
        console.log('BBDD:', event.target.result);
    }
    var openRequest = window.indexedDB.open('mi-bbdd', 1);
    openRequest.addEventListener('success', openOk);
```

## borrado
Para borrar la base de datos se puede emplear el método nativo del API:
```javascript
    indexedDB.deleteDatabase('mi-bbdd');
```
## Actualización
Cuando se ejecuta el método open, si el navegador tiene una versión de la bbdd guardada distinta de la que se indica en el método open, se lanzará el evento **upgradeneeded** para que en su manejador se realicen las tareas necesarias para actualizar desde la versión que hay en el navegador (**oldVersion**) a la versión (**newVersion**)que se ha indicado en el método open.

La estructura típica del manejador de evento de **upgradeneeded** será:
```javascript
function openUpgrade(event) {
    console.log('UPGRADE desde', event.oldVersion, 'a', event.newVersion);
    const db = event.target.result;
    switch (event.oldVersion) {
        case 0:
        console.log('Actualizando desde la version 0 ...');
        // Base de datos recién creada (oldVersion is 0)
        case 1:
        console.log('Actualizando desde la version 1 ...');
        // keyPath indica la ruta de propiedades dentro de cada objeto
        // que se guardará que identifica un índice (clave primaria o clave de búsqueda)
        db.createObjectStore('products', {keyPath: 'id'});
    }
}
```

No se agregan breaks para que se ejecuten todos los pasos para actualizar desde la versión antigua a la actual.
```javascript
openRequest.addEventListener('upgradeneeded', openUpgrade);
```

[Volver al índice de temas](../../README.md)
