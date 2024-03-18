/**
 * 5- Después de añadir un nuevo artículo a la 
compra que desea realizar, se debe actualizar
el valor total de la compra. ¿Recuerdas que
operador habría que usar? ¿Podrías representar
esta acción en código?

 */

function verificarSaldo(saldoTotal, montoTotal) {
    
    if (montoTotal <= saldoTotal && saldoTotal >= 0) {
        console.log("Saldo total");
        return saldoTotal -= montoTotal
    } else {
        return "no cuenta con saldo suficiente"
    }
}

console.log(verificarSaldo(10,1));