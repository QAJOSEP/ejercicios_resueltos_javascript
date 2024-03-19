/**
 * 3- Ahora necesitamos otra función a la que llamar para reproducir el gif
del personaje descansando tras cada serie
 */

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

serie("pesas", 10, 5)