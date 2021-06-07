import { Cliente, Impuesto } from "./Clases.js";

let impuesto = new Impuesto(111, 23);
let cliente = new Cliente("Pedro", impuesto);

console.log("El impuesto total es de: ", cliente.calcularImpuesto());
