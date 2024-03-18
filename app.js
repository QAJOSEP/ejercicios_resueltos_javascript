/** 
 * Recursividad: una función que se llama a sí misma
*/
let ctaRegresiva = numero =>{
    if (numero === 0) {
        return
    }
    console.log(numero);
    return ctaRegresiva(numero -1)
}
ctaRegresiva(4)