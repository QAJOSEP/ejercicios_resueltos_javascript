/**
 * [10] Este multicine hace un exhaustivo mantenimiento de limpieza semanal en 
cada sala. De modo que cada sala cierra un día diferente de la semana. 
1. Añade una dimensión a la matriz creada. Almacena el día de la semana 
en el que no se podrá ver cada película y así poder informar a los 
espectadores.
 */

const cine = [
    ["Película","Precio", "Cerrado"], 
    ["Dune 2",100, "L"], 
    ["Kung fu Panda 3D", 200, "Ma"], 
    ["Demon Slayer", 100, "Mi"],
    ["Bob Marley", 100, "J"],
    ["Ghostbuster 3D", 200, "V"],
    ["Alicia", 100, "S"],
    ["Robot Dreams 3D", 200, "D"],
]

console.table(cine);