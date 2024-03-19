
function reproducirEjercicio(nombreEjercicio, base = 1) {

    function primerSerie(repeticiones) {
        if (repeticiones == 1) {
            for (let i = 0; i < 12; i++) {
                console.log(nombreEjercicio, " repetición número ", base++);
            }
        }        
    }

    function segundaSerie(repeticiones, base = 1) {
        if (repeticiones == 2) {
            for (let i = 0; i < 10; i++) {
                console.log("repetición número ", base++);
            }
        }
    }

    function terceraSerie(repeticiones, base = 1) {
        if (repeticiones == 3) {
            for (let i = 0; i < 8; i++) {
                console.log("repetición número ", base++);
            }            
        }
    }

    for (let i = 0; i < 1; i++) {
        primerSerie(1)
        segundaSerie(2)
        terceraSerie(3)
    }
}

reproducirEjercicio("Hip Thrust", 1, "45 segundos");
