
var openRequest;
var db;
const nombreTabla = 'personas';
var ultimoId = -1;

function readAll() {
    db.transaction(nombreTabla).objectStore(nombreTabla).openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
            const element = cursor.value;
            console.log("ELEMENTO:", element.nombre);
            cursor.continue();
        }
        else {
            console.log('fin lista');
        }
    };
}



function readElement() {
    db.transaction(nombreTabla).objectStore(nombreTabla).get(ultimoId).onsuccess = function(event) {
        const element = event.target.result;
        console.log("LEIDO:", element.nombre);
    };
}


function addElement(){
    console.log('--------- Insertar --------');
    const id = Math.round(10000 * Math.random());
    const element = {id, nombre: `pepe${id}`, apellidos: `garcia`};
    const tx = db.transaction(nombreTabla, "readwrite");
    tx.oncomplete = (event) => console.log('TX - inserción correcta', element);
    tx.onerror  = (err) => console.log('TX - error en insercion de', element, 'error:', err );
    const personasStore = tx.objectStore(nombreTabla);
    const addReequest = personasStore.add(element);
    addReequest.addEventListener('success', (err) => {
        console.log('STORE - add OK');
        ultimoId = id;
        readAll();
    })
}


function openOk(event) {
        console.log('OPEN OK:', event.target); // Misma referencia que openRequest.
        console.log('Referencia: ', event.target == openRequest); // true
        console.log('BBDD:', event.target.result);
        db = event.target.result;
}

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
        db.createObjectStore(nombreTabla, {keyPath: 'id'});
    }
}

function init() {
    openRequest = window.indexedDB.open('mi-bbdd', 1);
    openRequest.addEventListener('success', openOk);
    openRequest.addEventListener('upgradeneeded', openUpgrade);
    document.getElementById('btnInsertar').addEventListener('click', addElement);
    document.getElementById('btnLeer').addEventListener('click', readElement);
}

document.addEventListener('DOMContentLoaded', init);
