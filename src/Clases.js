class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  calcularImpuesto() {
    const montoBrutoAnual = this._impuesto.monto_bruto_anual;
    const deducciones = this._impuesto.deducciones;
    const impuestoFinal = (montoBrutoAnual - deducciones) * 0.21;
    return impuestoFinal;
  }
}

class Impuesto {
  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = Number(monto_bruto_anual);
    this._deducciones = Number(deducciones);
  }

  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }

  set monto_bruto_anual(monto_bruto_anual) {
    this._monto_bruto_anual = monto_bruto_anual;
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(deducciones) {
    this._deducciones = deducciones;
  }
}

export { Cliente, Impuesto };
