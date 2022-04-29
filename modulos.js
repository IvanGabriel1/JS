import saludar5, { Saludar5, PI, usuario } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js";
//a aritmetica al ponerle as calculos, ya se lo puede identificar como calculos. renglon 7 y 8 hay ajemplos.
console.log("Archivo modulos.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(3, 4));
console.log(calculos.sumar(3, 4));
console.log(calculos.restar(3, 4));
saludar5();
let saludo5 = new Saludar5();
saludo5;
