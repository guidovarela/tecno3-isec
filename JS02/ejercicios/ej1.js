//1- Ejercicio #2: Conversión de edad
// Haz un programa que funcione de la siguiente forma:
// - El programa nos pregunta nuestro nombre.
// - El programa nos pregunta nuestra edad.
// - El programa da como resultado nuestro nombre y a continuación los días que hemos vivido hasta el momento (deberás multiplicar la edad por 365).
// - En caso de cargar un dato vacio o cancelar, debera volver a preguntar ese dato

let nombre,edad

while(nombre==null || nombre==""){
    nombre = prompt("Ingresa tu nombre:")
}
while(edad==null || edad==""){
    edad = parseInt(prompt("Ingresa tu edad"))
    if(!Number(edad)){
        alert("El valor ingresado debe ser numerico")
    }else{
        edad *= 365
    }
}

let resultado = document.querySelector('#resultado').innerHTML='Mi nombre es '+nombre+" y he vivido "+edad+" días."
