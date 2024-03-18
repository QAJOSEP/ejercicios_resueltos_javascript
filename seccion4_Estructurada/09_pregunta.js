/**
 * 9- Dando por buena la estructura de la 
matriz descrita anteriormente, ¿sabrías
incluir un if dentro del bucle elegido en
el ejercicio 8 para filtrar los gastos, por 
ejemplo, mostrando solo aquellos 
superiores a 50€?

 */

const gastos =[
    ["Disposición de efectivo", 60],
    ["Pago con tarjeta en Gasolinera", 56],
    ["Recibo de fundación y ONG", 25],
    ["Pago con tarjeta Dr Simi", 45.31],
    ["Pago con tarjeta en Gasolinera", 60],
]

// 1a opción con IF

const filtrar = []
for (let i = 0; i < gastos.length; i++) {
    const g = gastos[i]
    const valor = g[1]

    if (valor >= 50) {
        filtrar.push(g)
    }
}
console.log(filtrar);

console.log("segunda opción");
// 2da opción con el método filter y función flecha
const filtro = gastos.filter(e => e[1] >= 50)
console.log(filtro);