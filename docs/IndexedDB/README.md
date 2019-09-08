# IndexedDB API
## Introducción
IndexedDB es una base de datos que permite guardar grandes cantidades (más de 250MB) de información al contrario que localStorage (2.5MB - 10MB). Sus características son:
- Datos guardados en forma de pares clave-valor.
- Funcionamiento asíncrono para no bloquear la aplicación.
- Transaccional.
- Solamente accesible desde paginas del sitio (protocolo + dominio + puerto) que la creo.
- Puede almacenar objetos JavaScript, strings, datos binarios (ArrayBuffer y Blob).

## Elementos

- **Base de Datos**: IDBDatabase
- **Almacén de datos (tabla)**: IDBObjectStore
- **Índice**: IDBIndex
- **Transacción**: IDBTransaction
- **solicitud de operación**: IDBRequest
- **puntero a datos**: IDBCursor
- **Colección de clave primaria**: IDBKeyRange

## Biblioteca Promised IndexedDB (idb)
La biblioteca Promised IndexedDB de jakearchibald encapsula el API IndexedDB para trabajar con este API pero con Promesas en lugar de con callbacks:
    https://github.com/jakearchibald/idb

## Creación de la Base de datos
Para la creación de la bbdd se ejecuta el método **open** que recibe tres argumentos:
- nombre de la bbdd.
- versión de la bbdd.
- callback (opcional) de la función de actualización de versión de la bbdd.
Y retorna una promesa que se resolverá cuando la bbdd se haya creado.
La creacíon más sencilla de una bbdd (sin actualización), se realiza como en el siguiente ejemplo.
```javascript
var dbPromise = idb.open('mi-bbdd', 1);
```
Después de ejecutar este código en las DevToools > Application > IndexedDB se puede ver la bbdd creada y la versión que se ha instalado.
El objeto suministrado por el then de la promesa es de tipo IDBDatabase y apunta a la base de datos creada (o recuperada). De modo que la sintaxis de open y el then de la promesa resuelta será:
```javascript
var dbPromise = idb.open(dbNombre: string, version: number, callback?: Function);
dbPromise.then(function (database: IDBDatabase) {

})
```

## Actualización
