//Realice un algoritmo que permita que un usuario cargue dos números enteros diferentes por teclado, y de cómo salida, el mayor de ambos.

let nro1, nro2

nro1 = parseFloat(prompt("Insertar el 1er número"))
nro2 = parseFloat(prompt("Insertar el 2do número"))

//operadores de comparacion
// = == === < >

if(nro1 == nro2){
    alert(nro1+" y "+nro2+" son iguales ...")
    }
    else if(nro1 > nro2){
    alert("SI!, el "+nro1+" es mayor "+nro2)

    }else{
        alert("NO!, el "+nro2+" es mayor "+nro1)
    }