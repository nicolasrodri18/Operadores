// Inicializamos las variables
let nota1, nota2, nota3, promedio;

//Asignamos el valor a las notas y se parsean las mismos
nota1 = prompt("Ingrese la nota 1: ")
nota2 = prompt("Ingrese la nota 2: ")
nota3 = prompt("Ingrese la nota 3: ")

nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)

//Realizamos Operacion Para obtener el promedio
promedio = (nota1 + nota2 + nota3 ) / 3

//mostramos el resultado obtenido
console.log(promedio)
