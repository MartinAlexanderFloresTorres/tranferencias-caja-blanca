## PROBLEMA:
Supongamos que estás desarrollando un sistema bancario en línea que permite a los usuarios realizar transferencias
de fondos entre cuentas. Una parte crítica de este sistema es el cálculo de tarifas por transferencia, que depende
del tipo de cuenta del usuario, el monto de la transferencia y otros factores. Quieres asegurarte de que el cálculo
de las tarifas sea preciso y esté libre de errores.

## SOLUCION:
Para abordar este problema, puedes crear una función en JavaScript llamada calcularTarifaTransferencia que tome como
entrada el monto de la transferencia, el tipo de cuenta del usuario y el tipo de transacción (interna o externa)
y devuelva la tarifa total de la transferencia.

```javascript
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
```

# Instalar las dependencias del programa

``npm install`` o ``npm i``:

# Ejecutar los test

``npm run test``:

![image](https://github.com/MartinAlexanderFloresTorres/tranferencias-caja-blanca/assets/91045865/67b27fd7-aada-4154-bf4c-d01a797e1690)

