// Declara en el lenguaje que prefierea variables o constantes para guardar 
// los siguientes datos. 
// Escoge el tipo de dato correcto, que menos espacio ocupen en memoria.

let camisa = 1200.00
let edad = 32
const velocidadLuz = 2.998*10**8 + " m/s"
let slogan = "Liverpool es parte de mi deuda"
const impuesto = 0.70
let radioEstrella = 468346864571
let eficiencia = ["A","B","C"]

// Resultado de un ejercicio (correcto/incorrecto)

function validacion(resultado) {
    if(resultado == true){
        console.log("El resultado es correcto");
    } else{
        console.log("El resultado es incorrecto");
    }
}

const gravedad = 980665 + " m/s"

console.log("El precio de la camisa es "+ camisa);
console.log("Tienes una edad de "+edad);
console.log("La velocidad de la luz es de "+velocidadLuz);
console.log(slogan);
console.log("El impuesto es de "+impuesto);
console.log("El radio de una estrella es "+radioEstrella);
console.log("Las diferentes tarifas son "+eficiencia);
console.log(validacion(true));
console.log(validacion(false));
console.log("La gravedad en la tierra es de "+gravedad);