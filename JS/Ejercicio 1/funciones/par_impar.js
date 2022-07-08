/*3.Crear una función que reciba un número como parámetro y que devuelva 'true' si es par o 'false'
si es impar. ¿El cero es par, impar o ninguno?*/
const par_impar = (num) =>{
    if (num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
module.exports = par_impar;