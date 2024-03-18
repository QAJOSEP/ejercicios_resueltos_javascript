/**
 * La siguiente app sirve para catalogar
el consumo eléctrico de una casa 
valorando el resultado con una letra 
que puede ir desde la A hasta la E.
Las viviendas con A consumen menos 
energía eléctrica, mientras que las tipo E 
generan un mayor gasto.
El valor de venta de una vivienda puede 
verse dañado si tiene mayor gastos eléctricos.
Así mismo su valor puede aumentar si se
considera una vivienda que gastará poco.
De modo que podemos decir que el precio 
estándar de una casa se mantendrá igual para
las de tipo C. Aumentara en un 10% en las B y
un 20% en las A. Pero por otro lado disminuirá 
un 10% en las D y un 20% en las E

[11-] Si una casa tiene un valor de 75.000€ usa el elemento switch para establecer
el precio final de venta dependiendo del tipo de consumo eléctrico que tenga.

 */

console.log("1a opción: evaluando SOLO el CASO correcto");

let tasa = "B";
let casa = 75000
switch (tasa) {
    case "A":
        console.log(casa*1.2);
        break;
    case "B":
        console.log(casa*1.1);
        break;
    case "C":
        console.log(casa*1);
        break;
    case "D":
        console.log(casa*0.9);
        break;
    case "E":
        console.log(casa*0.8);
        break;

    default:
        break;
}

console.log("2a opción: para evaluar TODOS los CASOS al mismo tiempo");

let rate = "A";
let house = 75000
switch (tasa) {
    case "A":
        console.log(house*1.2);
        // se borra este Break para evaluar la siguiente opción
    case "B":
        console.log(house*1.1);
        // se borra este Break para evaluar la siguiente opción
    case "C":
        console.log(house*1);
        // se borra este Break para evaluar la siguiente opción
    case "D":
        console.log(house*0.9);
        // se borra este Break para evaluar la siguiente opción
    case "E":
        console.log(house*0.8);
        break;

    default:
        console.log("error");
        break;
}

/**
 * 12 - ¿Te diste cuenta de la importancia de usar un elemento break en cada caso?
¿Observaste también que no era necesario añadir nada en caso de ser tipo “C”?
 */

console.log("No, pero si vi que no enseñaste switch con JavaScript >:(");