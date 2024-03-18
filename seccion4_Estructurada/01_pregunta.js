/**
 * Para establecer el Pin de Seguridad, se pide al usuario que lo introduzca 2 veces
hasta que ambas veces coincida.
1- ¿Qué bucle y variables usarías para hacer la comprobación después que el 
usuario introduzca 2 veces el pin?
 */

function comprobación(PIN, PIN2) {
    if (PIN == PIN2) {
        return "correcto"
    } else {
        return "el PIN debe coincidir, vuelva a intentarlo"
    }
}

console.log(comprobación(123, 123));
console.log(comprobación(123, 132));