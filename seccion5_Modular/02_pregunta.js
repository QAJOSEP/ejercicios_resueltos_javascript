/**
 * 2- Crearemos otra función en la que administraremos cada serie, indicándole
el número de veces que se tiene que realizar el movimiento y el número de
segundos de descanso que corresponde a tal serie.
 */


function reproducirEjercicio(nombreEjercicio) {
    
    console.log("reproducir video ",nombreEjercicio);

}

function serie(nombreEjercicio, numMovimientos, segDescanso = 0) {

    for (let i = 0; i < numMovimientos; i++) {
        
        reproducirEjercicio(nombreEjercicio)
    }
}

serie("pesas", 8)