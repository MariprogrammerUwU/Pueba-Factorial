
//Estructura del codigo
function calcularFactorial(num) { // declaro una funcion 
    if (num < 0) return "El factorial no está definido para números negativos."; 
    if (num === 0) return 1; // declara el factorial de 0 es 1 asi que cuando escriban 0 o no escriban nada retornara 1

    let factorial = 1; // realizo una varia declarada en 1 
    for (let i = 1; i <= num; i++) {// Aqui inicializo un bucle que tiene un avariable i esta es igual 1 a condición del bucle continuará mientras i sea menor o igual a num
        factorial *= i; // multiplico la variable por i
    }
    return factorial;// retorno el valor del for
}

function calcularYMostrar() { // Declaro la función 
    // obtengo el valor del campo de entrada con id "numero" del HTML
    const input = document.getElementById("numero").value; 
    // Convertimos el valor a un número
    const numero = Number(input);

    // en esta condicion verifico si el valor no es un número o no es un entero
    if (isNaN(numero) || !Number.isInteger(numero)) {
        // hago un else de error que muestra un mensaje de error si la entrada no es válida
        document.getElementById("resultado").innerText = "Error: Introduce un número entero válido.";
        return; // Terminamos la función
    }

    // en esta condicion verifico si el número es negativo
    if (numero < 0) {
        // Muestro un mensaje de error si el número es negativo
        document.getElementById("resultado").innerText = "Error: El factorial no está definido para números negativos.";
        return; // Termino la función
    }

    // Llamo a la función calcularFactorial para obtener el factorial del número
    const resultado = calcularFactorial(numero);
    // Muestro el resultado en el elemento con id "resultado" del HTML
    document.getElementById("resultado").innerText = `El factorial de ${numero} es ${resultado}.`;
    // Limpiamos el campo de entrada
    document.getElementById("numero").value = '';
}

