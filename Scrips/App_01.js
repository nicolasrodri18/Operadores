// Inicializamos las variables
let base, altura, area, perimetro;

//Asignamos el valor a la base y la altura y se parsean los mismos
base = prompt("Ingrese la base del terreno")
altura = prompt("Ingrese la altura del terreno")

base = parseFloat(base)
altura = parseFloat(altura)

//Realizamos Operacion Para obtener el area y el perimetro
area = base * altura
perimetro = 2 (base + altura)

//mostramos el resultado obtenido
console.log(base, perimetro)
