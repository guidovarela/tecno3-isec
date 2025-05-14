//Realice un algoritmo que permita que un usuario cargue dos números enteros por teclado, de cómo salida, si son diferentes mostrar "Son diferentes!!, en caso que sean iguales, "Son iguales!".

let nro1, nro2
nro1 = parseInt(prompt("Ingresa el 1er numero"))
nro2 = parseInt(prompt("Ingresa el 2do numero"))
//nro1 = parseInt(nro1)
//nro2 = parseInt(nro2)

if(nro1==nro2){
    alert("El "+nro1+" y el "+nro2+" son iguales!!")
}else{
    alert("El "+nro1+" y el "+nro2+" son diferentes!")
}