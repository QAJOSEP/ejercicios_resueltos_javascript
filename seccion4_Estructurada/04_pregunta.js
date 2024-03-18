/**
 * En el siguiente caso, el usuario puede añadir
productos que desee pagar con la app, para
ello primero hay que verificar que tenga saldo
disponible antes de empezar a pedir productos
y después de solicitar alguno para permitir que
siga comprando
4- ¿Qué bucle usarías en este caso para
permitir iniciar y/o continuar la acción de añadir
productos al carrito?
 */

function verificarSaldo(saldoTotal, montoTotal) {
    
    if (montoTotal <= saldoTotal && saldoTotal >= 0) {
        return saldoTotal -= montoTotal
    } else {
        return "no cuenta con saldo suficiente"
    }
}

console.log(verificarSaldo(10,1));

// La opción de abajo es con String Template
/**
 * function verificarSaldo2(saldoTotal, montoTotal) {
    
    if (montoTotal <= saldoTotal && saldoTotal >= 0) {
        return `"su saldo actual es de "+${saldoTotal -= montoTotal} + "¿desea seguir comprando?"`
    } else {
        return "no cuenta con saldo suficiente"
    }
}

console.log(verificarSaldo2(10,11));
*/