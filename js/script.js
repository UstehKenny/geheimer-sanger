const input = document.getElementById("codeInput");
const button = document.getElementById("enter");

const codigoCorrecto = "AbC123xYz";

// Cursor parpadeante
let showCursor = true;

setInterval(() => {
    if (input.value === "") {
        input.placeholder = showCursor 
            ? "Inserte codigo |" 
            : "Inserte codigo ";
        showCursor = !showCursor;
    }
}, 500);


// Validación
button.addEventListener("click", function (e) {

    e.preventDefault(); // MUY IMPORTANTE si está dentro de form

    const valor = input.value.trim();

    if (valor.toLowerCase() === codigoCorrecto.toLowerCase()) {

        window.location.href = "../folgende.html";

    } else {

        activarGlitch();
        input.value = "";
    }

});


// Función para reiniciar glitch correctamente
function activarGlitch() {
    input.classList.remove("glitch");

    // Forzar reflow real
    void input.offsetHeight;

    input.classList.add("glitch");
}