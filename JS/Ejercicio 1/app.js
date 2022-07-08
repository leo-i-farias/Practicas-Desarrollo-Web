const iguales = require('./funciones/iguales');
const deficiente = require('./funciones/deficiente');
const mayor_a_90 = require('./funciones/mayor_a_90');
const par_impar = require('./funciones/par_impar');
/*
console.log(iguales(10, 11));
console.log(deficiente(16));
console.log(mayor_a_90(91));
console.log(par_impar(51));
*/
const opcion = process.argv[2];
var num1, num2;
switch(opcion){
    case ('iguales'):
        num1 = process.argv[3];
        num2 = process.argv[4];
        console.log(iguales(num1, num2));
        break;
    case ('deficiente'):
        num1 = process.argv[3];
        console.log(deficiente(num1));
        break;
    case('mayor_a_90'):
        num1 = process.argv[3];
        console.log(mayor_a_90(num1));
        break;
    case('par_impar'):
        num1 = process.argv[3];
        console.log(par_impar(num1));
        break;
}
