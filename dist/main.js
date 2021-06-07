"use strict";

var _Clases = require("./Clases.js");

var impuesto = new _Clases.Impuesto(111, 23);
var cliente = new _Clases.Cliente("Pedro", impuesto);
console.log("El impuesto total es de: ", cliente.calcularImpuesto());