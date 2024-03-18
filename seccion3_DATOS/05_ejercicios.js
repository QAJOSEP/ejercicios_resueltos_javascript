// Piensa qué tipos de datos se habrán empleado para estos valores del juego:


// 1. Abreviatura del nombre de los Equipos
const equipos = ["BVB", "LIV"]

// 2. Contador de goles
let goles = [0,0] // chicas actualicenlo manualmente debido a que hasta la SECCION 4 se ven funciones

// 3. Mensajes al usuario
let mensaje = "Mensaje al usuario"

// 4. Nombres de Jugadores
// 5. Dorsales de Jugadores
let jugadores = [
    ["J Miler", 7, 100],
    ["P. Coutinho", 8, 100],
    ["G Wijnaldum", 5, 100]
]

// 6. Barra de Energía del Jugador
let barraEnergia = 95*60 // 95 minutos * 60 segundos 

console.log(equipos);
console.log(goles);
console.log(mensaje);
console.table(jugadores);
console.log("Barra de Energía inicial "+barraEnergia);


// 7. El número de goles aumenta cuando el equipo marca con el operador ++
goles[0] ++
goles[1] ++
marcador = goles

console.log(marcador);

// 8. El número de segundos que debe intervenir para que disminuya la energía también se almacena en una variable que dependerá de cada jugador

let tiempoTranscurrido = 1*60 // minutos de partido * segundos 

// 9. La barra de energía disminuye cada X segundos de intervención del jugador con el operador --
barraEnergia -= tiempoTranscurrido
console.log("La barra de energía después de un minuto de partido es de "+barraEnergia);