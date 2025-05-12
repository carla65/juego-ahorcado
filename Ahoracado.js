var palabraSecreta;
var palabraOculta;
var intentos;
var letrasCorrectas = [];

function seleccionarPalabra() {
    var palabras = ["javascript", "html", "css", "programacion", "web", "codigo"];
    return palabras[Math.floor(Math.random() * palabras.length)];
}

function iniciarJuego() {
    palabraSecreta = seleccionarPalabra();
    palabraOculta = "_".repeat(palabraSecreta.length);
    intentos = 6;

    document.getElementById("palabra-oculta").textContent = palabraOculta;
    document.getElementById("intentos-restantes").textContent = "Intentos restantes:" + intentos;
    document.getElementById("resultado").textContent = "";
    document.getElementById('rip').style.display= "none";
}

function jugar() {
    var letra = document.getElementById("letra-input").value.toLowerCase();

    if (letrasCorrectas.includes(letra)) {
        document.getElementById("resultado").textContent = "¡Ya has adivinado esa letra! Intenta con otra.";
        return;
    }

    if (palabraSecreta.includes(letra)) {
        for (var i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                palabraOculta = palabraOculta.substring(0, i) + letra + 
                palabraOculta.substring(i + 1);
            }
        }
        letrasCorrectas.push(letra);
        document.getElementById("palabra-oculta").textContent = palabraOculta;
        document.getElementById("resultado").textContent = "¡Correcto!";
    } else {
        intentos--;
        document.getElementById("intentos-restantes").textContent = "Intentos restantes: " + intentos;
        document.getElementById("resultado").textContent = "Incorrecto. ¡Perdiste un intento!";
    }

    if (palabraOculta === palabraSecreta) {
        document.getElementById("resultado").textContent = "¡Felicidades! Has adivinado la palabra correctamente: " + palabraSecreta;
    } else if (intentos === 0) {
        document.getElementById("resultado").textContent = "¡Oh no! Se acabaron los intentos. La palabra correcta era: " + palabraSecreta;
        document.getElementById('rip').style.display = "inline"
    }

    document.getElementById("letra-input").value = "";
}

iniciarJuego(); // Iniciar el juego cuando la página se carga por primera vez
