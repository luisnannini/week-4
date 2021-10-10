//2) Strings

/*a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
toUpperCase).*/
    var astring = "avaribledediezcarac"
    astring.toUpperCase()
/*b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
caracteres guardando el resultado en una nueva variable (utilizar substring).*/
    var bstring = "bvaribledediezcarac"
    var bstring2 = bstring.substring(0,6)
/*c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 
3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
    var cstring = "cvaribledediezcarac"
    var cstring2 = cstring.substring(cstring.length - 3, cstring.length)
/*d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera 
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, 
toUpperCase, toLowerCase y el operador +).*/
    var dstring = "dvaribledediezcarac"
    var dstring2 = dstring.substring(0,1).toUpperCase() + dstring.substring(2,cstring.length).toLowerCase()
/*e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
    var estring = "evariblede diezcarac"
    var estring2 = estring.indexOf(" ")
/*f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el 
operador +).*/
    var fstring = "palabrarelarga otrapalabra"
    var fstringindex = fstring.indexOf(" ")
    var fmayusculas = 
        fstring.substring(0,1).toUpperCase() + 
        fstring.substring(1,fstringindex).toLowerCase() + " " +
        fstring.substring(fstringindex, fstringindex + 2).toUpperCase() + 
        fstring.substring(fstringindex + 2,fstring.length).toLowerCase()