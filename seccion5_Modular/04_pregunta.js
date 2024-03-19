/**
 * 4- Bien, ya tenemos la manera de reproducir cada serie el número de veces que se
precise y los descansos tantos segundos como requiera cada serie. Ahora falta la 
manera de poder administrar el ejercicio completo indicando cuántas series 
tendrá y el número de repeticiones y descanso que tiene cada uno de ellas
 */

function ejercicio(nombreEjercicio, rep1, des1, rep2, des2,rep3) {
    serie(nombreEjercicio,rep1,des1)
    serie(nombreEjercicio,rep2,des2)
    serie(nombreEjercicio, rep3)
}

function serie(nombreEjercicio, numMovimientos, segDescanso = 0) {

    for (let i = 0; i < numMovimientos; i++) {

        reproducirArchivo(nombreEjercicio, i)

    }

    if (segDescanso > 0) {

        reproducirArchivo("descanso.gif", segDescanso)

    }

}

function reproducirArchivo(nombreArchivo, segDescanso = 0) {

    if (segDescanso > 0) {
        console.log(nombreArchivo, segDescanso);

    } else {
        console.log(nombreArchivo);
    }
}

ejercicio("abdominales", 30, 45, 20, 30, 10)
ejercicio("pecho", 15, 60, 12, 30, 10)