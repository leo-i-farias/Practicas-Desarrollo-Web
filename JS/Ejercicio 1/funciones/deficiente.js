/*Un número deficiente es todo número natural que cumple que la suma de sus divisores propios es menor
que el propio número. Por ejemplo, 16 es un número deficiente ya que sus divisores propios son
1, 2, 4 y 8 y se cumple que 1+2+4+8=15, que es menor que 16. Programa una función que pasado un 
número por argumento devuelva True si es deficiente y False si no lo es.*/
/*
1 calcular divisores del numero
2 sumar divisores
3 determinar que la suma sea menor que el numero inicial */
const deficiente = (num) =>{
    let divisores = [];
    let suma = 0;
        for(let i=0; i<num; i++){
            if(num % i == 0){
                divisores.push(i);
            }
        }
        for(let j=0; j<divisores.length; j++){
            suma += divisores[j];
        }
        if (suma < num){
            return true;
        }
        else{
            return false;
        }
    }
module.exports = deficiente;