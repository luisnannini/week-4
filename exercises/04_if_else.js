//4) If Else

/*a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/
if (Math.random() >= 0.5) {
    console.log("Greater than 0,5")
} else {
    console.log("Lower than 0,5")
}

/*b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes 
mensajes de alerta:*/
var age = Math.floor(Math.random() * 101)
    /*I) “Bebe” si la edad es menor a 2 años;*/
    if (age < 2) {
        console.log("Bebe")
    /*II) “Nino” si la edad es entre 2 y 12 años;*/
    } else if (age <= 12) {        
        console.log("Nino")
    /*III) “Adolescente” entre 13 y 19 años;*/
    } else if (age <= 19) {        
        console.log("Adolescente")
    /*IV) “Joven” entre 20 y 30 años;*/
    } else if (age <= 30) {        
        console.log("Joven")
    /*V) “Adulto” entre 31 y 60 años;*/
    } else if (age <= 60) {        
        console.log("Adulto")
    /*VI) “Adulto mayor” entre 61 y 75 años;*/
    } else if (age <= 75) {        
        console.log("Adulto mayor")
    /*VII) “Anciano” si es mayor a 75 años.*/
    } else {        
        console.log("Anciano")
    }