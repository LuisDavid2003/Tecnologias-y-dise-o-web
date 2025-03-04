function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert('Expresión inválida');
    }
}

//Actividad: Prompt de una calculadora
function calculadora() {
    let operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicación, división)").toLowerCase();
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            alert(`El resultado de la suma es: ${resultado}`);
            break;
        case "resta":
            resultado = num1 - num2;
            alert(`El resultado de la resta es: ${resultado}`);
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            alert(`El resultado de la multiplicación es: ${resultado}`);
            break;
        case "division":
            if (num2 === 0) {
                alert("No se puede dividir por cero.");
            } else {
                resultado = num1 / num2;
                alert(`El resultado de la división es: ${resultado}`);
            }
            break;
        default:
            alert("Operación no válida. Inténtalo de nuevo.");
    }
}

// Llamar a la función al cargar la página
calculadora();


