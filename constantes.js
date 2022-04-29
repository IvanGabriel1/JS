//----------------------------------------------------------
//Video 33: Módulos (import / export).
//Los modulos en JS significa que podemos mandar a llamar los archivos js no solo desde el archivo html, sino tambien desde otro archivo js.
export const PI = Math.PI;

export let usuario = "Jon";

const password = "qwerty";
//export default password;
/*
Con const y let NO podemos exportar con default en una sola linea asi:
export default const password = "qwerty";
Sino que se expresa abajo, como esta comentado en renglon 9.

Si podemos exportar por defecto en una sola linea las clases y funciones.
*/

const hello = () => console.log("Hola");

export function saludar() {
  console.log("Hola Modulos + ES6");
}
//export default: Cuando se exporte este archivo, cuando se mande a llamar esta funcion saludar, se va a exportar automaticamente (No va a hacer falta que en el otro archivo "modulos" en este caso, poner el import)

//Si ya mandaste a exportar algo por default entonces NO PODEMOS TENER DOS FUNCIONES O DOS OBJETOS O VARIABLES EXPORTADAS DE FORMA DEFAULT. SOLO PODEMOS TENER 1 SOLA.

/*todo lo que no mandamos a llamar por defecto se tiene que hace de estructuracion:
import { PI, usuario } from "./constantes.js"; */

/*Con el Export Default:
Repaso clase 10: Funcion declarada vs Funcion expresada.

Funcion declarada: Funcion que talcual se define como aquí:
export function saludar() {
  console.log("Hola Modulos + ES6");
}

Funcion expresada: Por ejemplo: Seria guardar en una variable el valor de una funcion por ejemplo:
const hello = () => console.log("Hola");
Las funciones expresadas son las que se guardan en variables.

Cuando tenemos una funcion declarada independientemente de donde la declaremos se hace un Hoisting de la funcion es decir el codigo de la funcion es lo primero que lee el archivo y eso permite que no importa que la funcion este declarada abajo y la invocacion sea arriba. 
Pero con una funcion expresada que esta guardada en una variable y mandamos a ejecutar un hello antes de la expresion, eso nos marca error.

Esto de funciones declaradas o expresadas tienen que ver con estos errores que nos da cuando tratamos de exportar algo por default en la declaracion de una variable o constante con const o let. Como son expresiones y al momento no sabe que va a almacenar nos marca error. 
Por eso cuando le pusimos el dafault a la funcion declarada no lo está haciendo, por que aqui js esta haciendo la elevacion de la funcion y despues el export default.

Si quisieramos exportar constantes o variables por defecto la variable password, la exportacion no lo hacemos al momento de la declaracion sino simplemente abajo:

let password = "qwerty";
 export default password;

Por que esto sucede con el export default y no con la exportacion normal?
Cuando nosotros le decimos a una variable, funcion, objeto, etc. que va a ser exportada por default, eso significa que al momento en que se importa el archivo donde se vaya a hacer la invocacion carga ese objeto o funcion por defecto, entonces a diferencia de las que nosotros mandamos a exportar de forma normal esas se invocan hasta que se usan, osea hasta que se mandan a llamar en el objeto destructurado del import, por eso en los export normales no marca el error.

Tira error con const o let:
 -export default const password = "qwerty";    ERROR
 -export default let password = "qwerty";      ERROR

NO tira error poniendo primero la declaracion:
let password = "qwerty";
export default password;

Las unicas que pueden ponerse el export default en el momento de declararlas son las funciones y las clases:

*/
export default function saludar5() {
  console.log("Hola Modulos + ES6");
}

export class Saludar5 {
  constructor() {
    console.log("Hola Clases + ES6");
  }
}
