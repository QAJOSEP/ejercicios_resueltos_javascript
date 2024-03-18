/**
 * 10- La ventana de la derecha presenta
varios listados, unos dentro de otros.
De forma jerárquica vemos los diferentes
servicios que tiene el cliente en letra azul
“Cuentas, Préstamos, Tarjetas y Seguros”
y dentro de cada uno de tales servicios
se listan todos los tipos de servicios que
tiene disponibles.
¿Con qué 2 bucles podrías recorrer
tal información? ¿De qué forma los
anidarías? ¿Serías capaz de 
representar en código la manera de
listar estos diferentes servicios 
generales y cada uno de los específicos que tenga el cliente?
Puedes elegir tú mismo con que arrays/matrices
estructurar los datos que simulen la ventana mostrada.
 */

const cuentas = [["CC",1.2],["CC", 1.0]]
const prestamos = [["PP", 10.0]]
const tarjetas = [["TDC", 5.25]]

const BBVA =[
    [...cuentas],
    [...prestamos],
    [...tarjetas],
]

for (let i = 0; i < BBVA.length; i++) {
    console.log(BBVA[i]);    
}

console.log("opción con bucle ForEach");

BBVA.forEach(element => {
    console.log(element);
});