// 6) Funciones

/*a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar 
el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
    function myFunctionA(p, q) {
        var suma = p + q
        return suma
    }
    console.log(myFunctionA(1, 8))
/*b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/
    function myFunctionB(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            alert("Error: a value is NaN")
            var result = NaN
        } else {
            var result = num1 + num2
        }
        return result
    }
/*c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un 
número entero.*/
    function validate(number) {
        return Number.isInteger(number)
    }
/*d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que 
haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/
    function myFunctionD(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            alert("Error: a value is NaN")
            var result = NaN
        } else if (Number.isInteger(num1) && Number.isInteger(num2)) {
            var result = num1 + num2
        } else {
            alert("Error: a value has decimals")
            var result = Math.round(num1 + num2)
        }
        return result
    }
    console.log(myFunctionD(1, 2))
/*e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando 
que todo siga funcionando igual.*/
    function validator(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return true
        } else {
            return false
        }
    }
    function sumarE(num1, num2) {
        if (validator(num1, num2) == true) {
            alert("Error: a value is NaN")
            var result = NaN
        } else {
            var result = num1 + num2
        }
        return result
    }
    console.log(sumarE(1, 3))