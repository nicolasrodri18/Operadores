// Inicializamos las variables
let contador, visitasrecibidas, visitasperdidas, duplicacion, visitas;

//Asignamos el valor a las visitas y se parsean las mismos
contador = prompt("Ingrese las visitas iniciales: ")
visitasrecibidas = prompt("Ingrese las visitas recibidas: ")
visitasperdidas = prompt("Ingrese las visitas perdidas: ")

contador = parseFloat(contador)
visitasrecibidas = parseFloat(visitasrecibidas)
visitasperdidas = parseFloat(visitasperdidas)

//Realizamos Operacion Para obtener el total de visitas con el duplicado
duplicacion = (contador + visitasrecibidas - visitasperdidas) * 2
visitas = duplicacion

//mostramos el resultado obtenido
console.log(visitas)
