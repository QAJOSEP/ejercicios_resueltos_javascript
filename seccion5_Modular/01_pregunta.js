/**
 * 1- Necesitamos una función a la que llamar o invocar para que reproduzca el
video con el movimiento muscular a realizar. A esa función le diremos exactacmente qué ejercicio reproducir, ya que esa función será la misma tanto para
abdominales, pecho, pierna, etc.
funcion reproducirEjercicio (nombreEjercicio)
 comando_para_reproducir_archivo (nombreEjercicio)
Esta función reproducirá el ejercicio solo una vez. ¿Cómo haremos para
recrear la serie completa?
 */

function reproducirEjercicio(nombreEjercicio, serie, descanso, base = 1) {
    
    function intervalo() {
        console.log("DESCANSO");
    }

    function primerSerie(serie) {
        if (serie == 1) {
            for (let i = 0; i < 12; i++) {
                console.log(nombreEjercicio, " repetición número ", base++);
            }
        }        
    }

    function segundaSerie(serie, base = 1) {
        if (serie == 2) {
            for (let i = 0; i < 10; i++) {
                console.log("repetición número ", base++);
            }
        }
    }

    function terceraSerie(serie, base = 1) {

        if (serie == 3) {
            for (let i = 0; i < 8; i++) {
                console.log("repetición número ", base++);
            }
            
        }
    }

    for (let i = 0; i < 1; i++) {
        primerSerie(1)
        intervalo(segundaSerie, 3000)
        segundaSerie(2)
        terceraSerie(3)
    }
}

reproducirEjercicio("Hip Thrust", 1, "45 segundos");
