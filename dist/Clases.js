"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Impuesto = exports.Cliente = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nombre) {
      this._nombre = nombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var montoBrutoAnual = this._impuesto.monto_bruto_anual;
      var deducciones = this._impuesto.deducciones;
      var impuestoFinal = (montoBrutoAnual - deducciones) * 0.21;
      return impuestoFinal;
    }
  }]);

  return Cliente;
}();

exports.Cliente = Cliente;

var Impuesto = /*#__PURE__*/function () {
  function Impuesto(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuesto);

    this._monto_bruto_anual = Number(monto_bruto_anual);
    this._deducciones = Number(deducciones);
  }

  _createClass(Impuesto, [{
    key: "monto_bruto_anual",
    get: function get() {
      return this._monto_bruto_anual;
    },
    set: function set(monto_bruto_anual) {
      this._monto_bruto_anual = monto_bruto_anual;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(deducciones) {
      this._deducciones = deducciones;
    }
  }]);

  return Impuesto;
}();

exports.Impuesto = Impuesto;