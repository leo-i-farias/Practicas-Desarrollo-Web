/*1.Crear una función que reciba dos números como parámetros y que devuelva 'true' (booleano)
 si son iguales o 'false' si son distintos.*/
const iguales = (num1, num2) =>{
    if (num1 == num2){
        return true;
    }
    else{
        return false;
    }
}
module.exports = iguales;