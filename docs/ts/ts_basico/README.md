# Conceptos básicos de TypeScript
TypeScript es un superconjunto de EcmaScript (ES2015 y posteriores). Es decir, incluye y amplia las características de EcmaScript.

Para entender TypeScript, es recomendable tener conocimientos previos de EcmaScript, por lo menos de los siguientes aspectos:
- Declaración de variables con let y const.
- Deconstrucción de objetos y matrices (arrays).
- Arrow functions (aka expresiones lambda).

## Tipado de variables
El primer elemento que introduce TypeScript es la posibilidad de, al declarar una variable, indicar el tipo de datos que albergará. Para ello después del nombre de la variable, separado por dos puntos, se indica el tipo de dato.
```typescript
    let precio: number;
    const nombre: string = 'Daniel';
```

| tipo    | Descripción                                            |
| ------------ | -------------------------------------------------------|
| number       | números enteros o con parte decimal. *let edad:number;      edad=20;* |
| string       | texto entre comillas (simples, dobles o invertidas).  |
| boolean      | puede tomar **true** o **false**.  |
| (matrices con tipo)   | Se pueden declarar arrays tipadas mediante Array o corchetes. Ejemplo *let m: Array<number>; let m:number[]* |
| any          | indica que admite cualquier tipo. Como una variable javascript clásica (sin tipo).  let dato:any; |
|  null        | tipo (y valor) que representa *ningún objeto*. |
|  undefined   | tipo (y valor) que representa *tipo (y valor no asignado*. |
|  void        | empleado en el valor de retorno de funciones para indicar que no retorna nada. |
|  never        | empleado en el valor de retorno de funciones para indicar que nunca retorna (nunca llega a ejecutar *return*) si no siempre se sale de la función lanzando una excepción. |


## Tipos de datos compuestos

(TO-DO)

tuplas: [number, string, boolean]
enumeraciones:   e
    num Color {Red, Green, Blue};     
    let c: Color = Color.Green;




## Tipado de funciones

(TO-DO)