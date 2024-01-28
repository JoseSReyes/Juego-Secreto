let maxNum = 10;
let minNum = 1;
let secretNumber = 0;
let intentos = 0; 
let numerosSorteados = [];

function verificarIntento() {
    let numUsr = parseInt(document.getElementById('userValue').value);
    
    if(numUsr === secretNumber) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`, 'green');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numUsr > secretNumber) {
            asignarTextoElemento('p', 'El numero debe ser menor', 'red');
        }else {
            asignarTextoElemento('p', 'El numero debe ser mayor', 'red');
        }
        intentos++;
        cleanText();
    }
    return;
}

function colorText (element, color) {
    document.querySelector(element).style.color = color;
}

function asignarTextoElemento(element, text, color) {
    document.querySelector(element).innerHTML = text;
    colorText(element, color);
    return;
}
function cleanText() {
    document.querySelector('#userValue').value = "";
}

function randomNumber(minNum, maxNum) {
    let numGenerado =   Math.floor(Math.random() * maxNum) + 1;
    console.log(numGenerado);
    console.log(numerosSorteados);

    // Preguntamos si ya sorteamos todos los numeros 
    if (numerosSorteados.length == maxNum) {
        asignarTextoElemento('p', `Ya se sortearon los ${maxNum} números posibles`, '');
    } else {
        // verificamos si el numero generado ya se encuentra dentro de la lista de numeros sorteados
        if (numerosSorteados.includes(numGenerado)) {
            return randomNumber(minNum, maxNum);
        } else {
            numerosSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}

function condicionesIniciales() {
    // mensajes iniciales
    asignarTextoElemento('h1', 'Juego del número secreto', '');
    asignarTextoElemento('p', `Indica un número entre ${minNum} y ${maxNum}`, '');

    // gnerar numero aleatorio
    secretNumber = randomNumber(minNum, maxNum);

    // Inicializar numero de intentos
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    cleanText();

    // condiciones iniciales
    condicionesIniciales();

    // desabilitar btn nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

    //numSorteados = [];
}

condicionesIniciales();
