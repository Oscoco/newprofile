//icons
const sunIcon = document.querySelector('.bx-sun');
const moonIcon = document.querySelector('.bx-moon');

//themes

const userTheme = localStorage.getItem("Theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;



// Year footer
let fecha = new Date();
let year = fecha.getFullYear();
let span = document.getElementById('year');
span.innerHTML= year;


//modal of copy my email address :p 
function copiarTexto() {
    var texto = document.getElementById("textoParaCopiar");

    // Crear un área de texto oculta para copiar el texto
    var textarea = document.createElement("textarea");
    textarea.value = texto.value;
    document.body.appendChild(textarea);

    // Seleccionar y copiar el texto
    textarea.select();
    document.execCommand("copy");

    // Eliminar el área de texto
    document.body.removeChild(textarea);

    // Mostrar un mensaje de éxito
    alert("Texto copiado al portapapeles: " + texto.value);
}