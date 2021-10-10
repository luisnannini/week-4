//3) Arrays

/*a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
    "Octubre", "Noviembre", "Diciembre"]
    console.log(months[4] + " " + months[10])
/*b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
    console.log(months.sort())
/*c) Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
    months.unshift("Pizza")
    months.push("Birra")
/*d) Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
    months.shift()
    months.pop()
/*e) Invertir el orden del array (utilizar reverse).*/
    months.reverse()
/*f) Unir todos los elementos del array en un único string donde cada mes este separado por un 
guión - (utilizar join).*/
    months.join("-")
/*g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
    const months2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
    "Octubre", "Noviembre", "Diciembre"]
    months2.slice(4, 11)