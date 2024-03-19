/**
 * 4 - ¿Qué funciones crearías para hacer uso del polimorfismo únicamente
entre vehículos de tierra?
 */

class Vehiculo {
    constructor(velocidad_maxima, capacidad_pasajeros, nombre_conductor) {
        this.velocidad_maxima = velocidad_maxima,
            this.capacidad_pasajeros = capacidad_pasajeros,
            this.nombre_conductor = nombre_conductor
    }
    acelerar() {
        console.log("km/h");
    }
    frenar() {
        console.log("m/s");
    }
    introducir_pasajero() {
        console.log("capacidad");
    }
}

class Terrestre extends Vehiculo {
    constructor(velocidad_maxima, capacidad_pasajeros, nombre_conductor, matricula) {
        super(velocidad_maxima, capacidad_pasajeros, nombre_conductor, matricula)
        this.matricula=matricula
    }
    acelerar(velocidad) {
        return velocidad + " km/h";
    }
    frenar(fuerza) {
        return fuerza + " m/s";
    }
    introducir_pasajero(pasajero) {
        return pasajero + " es el pasajero";
    }
}

let ferrari = new Terrestre(320, 2, "José", 1230120)

console.log(ferrari);
console.log(ferrari.acelerar(100));
console.log(ferrari.frenar(10));
console.log(ferrari.introducir_pasajero("Fátima"));