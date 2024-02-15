var imc = document.getElementById("resultadoIMC");
var cat = document.getElementById("resultadoCAT");
var color = document.getElementById("info1");


const altura = parseFloat(document.getElementById("altura").value); // parseFloat para pasar la entrada de cadena a flotante.
const peso = parseFloat(document.getElementById("peso").value);

var indice = peso / (altura * altura); // Formula de IMC.
var valorFinalIMC = truncarDecimales(indice);


var botonCalcularIMC = document.getElementById("botonCalcular");

botonCalcularIMC.addEventListener("click", ()=>{
    imc.innerHTML = valorFinalIMC; // Muestra resultado IMC.

    switch(true){
        case(valorFinalIMC < 18.5):
            cat.innerHTML = "Bajo peso.";
            color = color.style.backgroundColor = "#E57545";    
        break;
        
        case(valorFinalIMC > 18.5 && valorFinalIMC < 24.9):
            cat.innerHTML = "Saludable.";
            color = color.style.backgroundColor = "#9FE545";
        break;

        case(valorFinalIMC > 25 && valorFinalIMC < 29.9):
            cat.innerHTML = "Sobrepreso."
            color = color.style.backgroundColor = "#E5B845";
        break;

        case(valorFinalIMC > 30):
            cat.innerHTML = "Obeso."
            color = color.style.backgroundColor = "#E57545";  
        break;
    }

});

function truncarDecimales(numero) {
    return parseFloat(numero.toFixed(2)); // Cortar decimales a 2.
}