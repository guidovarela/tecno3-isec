//mostrar en pantalla una secuencia del 1 al 10

//for(inicio ; condicion ; incremento) { iteracion }

//incrementar asignacion
let nro1 = 5
nro1 += nro1
nro1 = nro1 + nro1 
//console.log(nro1)


// for( i=0; i<=10; i++){
//     console.log(i)
// }

// let i = 0
// while (i<=10){
//     console.log(i)
//     i++
// }

// let p = 0
// do {
//     console.log(i)
//     i++
// } while(p<=10)

let nombre

while(nombre==null || nombre=="" ){
    nombre = prompt("Cual es tu nombre?")
}
document.write("Mi nombre es "+nombre)

