/**
 * 1- Reproduce en código los siguientes objetos con sus consiguientes
atributos, métodos y establece las herencias oportunas para permitir
polimorfismos
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

// Acuáticos
class Acuatico extends Vehiculo {
    constructor(velocidad_maxima, capacidad_pasajeros, nombre_conductor, longitud, cubierta, estado_ancla) {
        super(velocidad_maxima, capacidad_pasajeros, nombre_conductor)
        this.longitud = longitud,
            this.cubierta = cubierta,
            this.estado_ancla = estado_ancla
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
    amarrar() {
        console.log("amarrar");
    }
    partir() {
        console.log("partir");
    }
}

class Lancha extends Acuatico {
    constructor(velocidad_maxima, capacidad_pasajeros, nombre_conductor, longitud, cubierta, estado_ancla, estado_radio) {
        super(velocidad_maxima, capacidad_pasajeros, nombre_conductor, longitud, cubierta, estado_ancla)
        this.estado_radio = estado_radio
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
    amarrar() {
        console.log("amarrar");
    }
    partir() {
        console.log("partir");
    }
    encender_radio() {
        console.log("encender");
    }
    apagar_radio() {
        console.log("apagar");
    }
}

class Barco extends Acuatico {
    constructor(velocidad_maxima, capacidad_pasajeros, nombre_conductor, longitud, cubierta, estado_ancla, camarotes, nombre_medico, estado_satelite) {
        super(velocidad_maxima, capacidad_pasajeros, nombre_conductor, longitud, cubierta, estado_ancla, camarotes, nombre_medico, estado_satelite)
        this.camarotes=camarotes,
        this.nombre_medico=nombre_medico,
        this.estado_satelite=estado_satelite
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
    amarrar() {
        console.log("amarrar");
    }
    partir() {
        console.log("partir");
    }
    contectar_satelite(){
        console.log("conectar");
    }
    descontectar_satelite(){
        console.log("desconectar");
    }
    ocupar_camarote(){
        console.log("ocupar");
    }
    desocupar_camarote(){
        console.log("desocupar");
    }
}

// Terrestre
class Terrestre extends Vehiculo {
    constructor(velocidad_maxima, capacidad_pasajeros, nombre_conductor, matricula) {
        super(velocidad_maxima, capacidad_pasajeros, nombre_conductor, matricula)
        this.matricula=matricula
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

class Camion extends Terrestre {
    constructor(velocidad_maxima, capacidad_pasajeros, nombre_conductor, matricula, ruedas, altura, kilos_cargados) {
        super(velocidad_maxima, capacidad_pasajeros, nombre_conductor, matricula, ruedas, altura, kilos_cargados)
        this.ruedas=ruedas,
        this.altura=altura,
        this.kilos_cargados=kilos_cargados
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
    recoger_carga(){
        console.log("cargar");
    }
    entregar_carga(){
        console.log("entregar");
    }
}

class Tren extends Terrestre {
    constructor(velocidad_maxima, capacidad_pasajeros, nombre_conductor, matricula, vagones, estacion_origen, estacion_destino) {
        super(velocidad_maxima, capacidad_pasajeros, nombre_conductor, matricula, vagones, estacion_origen, estacion_destino)
        this.vagones=vagones,
        this.estacion_origen=estacion_origen,
        this.estacion_destino=estacion_destino
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
    definir_trayecto(){
        console.log("definir");
    }
}

// Aéreos
class Aereo extends Vehiculo {
    constructor(velocidad_maxima, capacidad_pasajeros, nombre_conductor, peso_maximo) {
        super(velocidad_maxima, capacidad_pasajeros, nombre_conductor, peso_maximo)
        this.peso_maximo=peso_maximo
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

class Avion extends Aereo {
    constructor(velocidad_maxima, capacidad_pasajeros, nombre_conductor, peso_maximo, motores, salidas_emergencia, estado_ruedas_auxiliares) {
        super(velocidad_maxima, capacidad_pasajeros, nombre_conductor, peso_maximo, motores, salidas_emergencia, estado_ruedas_auxiliares)
        this.motores=motores,
        this.salidas_emergencia=salidas_emergencia,
        this.estado_ruedas_auxiliares=estado_ruedas_auxiliares
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
    despegar(){
        console.log("despegar");
    }
    aterrizar(){
        console.log("aterrizar");
    }
}

class Globo extends Aereo {
    constructor(velocidad_maxima, capacidad_pasajeros, nombre_conductor, peso_maximo, capacidad_bolsa, tipo_gas) {
        super(velocidad_maxima, capacidad_pasajeros, nombre_conductor, peso_maximo, capacidad_bolsa, tipo_gas)
        this.capacidad_bolsa=capacidad_bolsa,
        this.tipo_gas=tipo_gas
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