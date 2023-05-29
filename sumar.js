function sumarArray(array){
    let resultado = array.reduce( (acc, element) => acc + element, 0 )
    return resultado;
}
let array = [1,2,3,4,5]
console.log(sumarArray(array))