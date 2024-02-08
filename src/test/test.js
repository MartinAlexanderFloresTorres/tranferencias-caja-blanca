const { calcularTarifaTransferencia, TIPO_TRANSACCION, TIPO_CUENTA } = require('../index');

describe('calcularTarifaTransferencia', () => {
  test('Debería calcular la tarifa base para una cuenta corriente y una transferencia interna', () => {
    expect(calcularTarifaTransferencia(500, TIPO_CUENTA.CORRIENTE, TIPO_TRANSACCION.INTERNA)).toBe(6);
  });

  test('Debería calcular la tarifa base para una cuenta de ahorros y una transferencia interna', () => {
    expect(calcularTarifaTransferencia(500, TIPO_CUENTA.AHORROS, TIPO_TRANSACCION.INTERNA)).toBe(3);
  });

  test('Debería calcular la tarifa base para una cuenta corriente y una transferencia externa', () => {
    expect(calcularTarifaTransferencia(500, TIPO_CUENTA.CORRIENTE, TIPO_TRANSACCION.EXTERNA)).toBe(5);
  });

  test('Debería calcular la tarifa base para una cuenta de ahorros y una transferencia externa con monto menor o igual a 1000', () => {
    expect(calcularTarifaTransferencia(500, TIPO_CUENTA.AHORROS, TIPO_TRANSACCION.EXTERNA)).toBe(2);
  });

  test('Debería calcular la tarifa base para una cuenta de ahorros y una transferencia externa con monto mayor a 1000', () => {
    expect(calcularTarifaTransferencia(1500, TIPO_CUENTA.AHORROS, TIPO_TRANSACCION.EXTERNA)).toBe(5); // La tarifa base es 2, más 3 de la tarifa adicional
  });

  test('Debería calcular la tarifa base para una cuenta desconocida y una transferencia interna', () => {
    expect(calcularTarifaTransferencia(500, 'cuenta_desconocida', TIPO_TRANSACCION.INTERNA)).toBe(0);
  });
});
