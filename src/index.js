/* 
  PROBLEMA:
  Supongamos que estás desarrollando un sistema bancario en línea que permite a los usuarios realizar transferencias
  de fondos entre cuentas. Una parte crítica de este sistema es el cálculo de tarifas por transferencia, que depende
  del tipo de cuenta del usuario, el monto de la transferencia y otros factores. Quieres asegurarte de que el cálculo
  de las tarifas sea preciso y esté libre de errores.

  SOLUCION:
  Para abordar este problema, puedes crear una función en JavaScript llamada calcularTarifaTransferencia que tome como
  entrada el monto de la transferencia, el tipo de cuenta del usuario y el tipo de transacción (interna o externa)
  y devuelva la tarifa total de la transferencia.

 */

const TIPO_CUENTA = {
  CORRIENTE: 'cuenta_corriente',
  AHORROS: 'cuenta_ahorros',
};

const TIPO_TRANSACCION = {
  INTERNA: 'transferencia_interna',
  EXTERNA: 'transferencia_externa',
};

function calcularTarifaTransferencia(montoTransferencia, tipoCuenta, tipoTransaccion) {
  let tarifaBase = 0;

  // Determinar la tarifa base según el tipo de cuenta
  switch (tipoCuenta) {
    // Si la cuenta es corriente, la tarifa base es 5
    case TIPO_CUENTA.CORRIENTE:
      tarifaBase = 5;
      break;
    // Si la cuenta es de ahorros, la tarifa base es 2
    case TIPO_CUENTA.AHORROS:
      tarifaBase = 2;
      break;
    // Si la cuenta es desconocida, la tarifa base es 0
    default:
      return 0; // Terminar la ejecución de la función y retornar 0
  }

  // Si la transferencia es externa se aplica una tarifa adicional
  if (tipoTransaccion === TIPO_TRANSACCION.INTERNA) {
    tarifaBase += 1;
  }
  // Si la transferencia es externa y el monto es mayor a 1000 se aplica otra tarifa adicional
  else if (tipoTransaccion === TIPO_TRANSACCION.EXTERNA && montoTransferencia > 1000) {
    tarifaBase += 3; // Se corrige el valor de la tarifa adicional a 3
  }

  // Retornar la tarifa base
  return tarifaBase;
}

// Prueba de la función calcularTarifaTransferencia
console.log(calcularTarifaTransferencia(500, TIPO_CUENTA.CORRIENTE, TIPO_TRANSACCION.INTERNA)); // Debería imprimir 6
console.log(calcularTarifaTransferencia(500, TIPO_CUENTA.AHORROS, TIPO_TRANSACCION.INTERNA)); // Debería imprimir 3
console.log(calcularTarifaTransferencia(500, TIPO_CUENTA.CORRIENTE, TIPO_TRANSACCION.EXTERNA)); // Debería imprimir 5
console.log(calcularTarifaTransferencia(500, TIPO_CUENTA.AHORROS, TIPO_TRANSACCION.EXTERNA)); // Debería imprimir 2
console.log(calcularTarifaTransferencia(1500, TIPO_CUENTA.AHORROS, TIPO_TRANSACCION.EXTERNA)); // Debería imprimir 5
console.log(calcularTarifaTransferencia(500, 'cuenta_desconocida', TIPO_TRANSACCION.INTERNA)); // Debería imprimir 0

module.exports = {
  calcularTarifaTransferencia,
  TIPO_CUENTA,
  TIPO_TRANSACCION,
};
