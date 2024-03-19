/**
 * 3 - ¿Qué funciones crearías para hacer uso del polimorfismo a nivel global?
 */

console.log("tendríamos que pasar por PARAMETRO el valor a los métodos del padre VEHICULO");

class Vehiculo {
    constructor(velocidad_maxima, capacidad_pasajeros, nombre_conductor) {
        this.velocidad_maxima = velocidad_maxima,
            this.capacidad_pasajeros = capacidad_pasajeros,
            this.nombre_conductor = nombre_conductor
    }
    acelerar(valor) {
        return valor + " km/h";
    }
    frenar(estado) {
        return estado + " m/s";
    }
    introducir_pasajero(nombre) {
        return nombre + " es la pasajera";
    }
}

let yate = new Vehiculo(100,2,"José")

console.table(yate);
console.log(yate.acelerar(20))
console.log(yate.frenar("sí"))
console.log(yate.introducir_pasajero("Fátima"))
    