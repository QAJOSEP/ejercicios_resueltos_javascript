/**
 * 2- ¿Cómo comprobarías que se ha escrito
exactamente igual?
 */

function comprobación(PIN, PIN2) {
    if (PIN === PIN2) {
        return "correctamente escrito"
    } else {
        return "por favor corrobore la ortografía"
    }
}

console.log(comprobación(123+"a", 123));
console.log(comprobación(123, 123));