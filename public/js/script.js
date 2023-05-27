let correctas = [1,2,3,2,3];
let opcion = [];
let cant_correctas = 0;

function respuesta(num_pregunta, seleccionada) {
    opcion[num_pregunta] = seleccionada.value;
    id = "preguta" + num_pregunta;
    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    seleccionada.parentNode.style.backgroundColor = "#395144";
}

function procesarRespuestas(){
    cant_correctas = 0;
    for (let i = 0; i < correctas.length; i++) {
       if (correctas[i] == opcion[i]) {
           cant_correctas++;
       }
        
       document.getElementById("resultado").innerHTML = cant_correctas;
    }
}