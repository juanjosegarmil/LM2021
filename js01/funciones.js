function mostrarAlerta() {
    alert('Alerta');
}
function mostrarmensaje() {
    document.getElementById("texto").innerHTML = "<b>Mensaje</b>";
    document.getElementById("texto").style = "color: blue";
    document.getElementById("texto").className = "borde";
}
function mostrar(mensaje) {
    alert(mensaje);
}
function init() {
    /*alert(document.getElementById("usuario").value);
    var usu = prompt("Introduzca usuario");
    document.getElementById("usuario").value = usu;
    document.getElementById("texto").innerHTML = "<b>Mensaje</b>"*/
    /*var radios = document.getElementsByName("valores");
    for (let i = 0; i < radios.length; i++) {
        alert (radios[i].value);
    }
    document.getElementsByTagName('p')[0].innerHTML = "primero";
    document.getElementsByTagName('p')[0].onclick = mostrarAlerta;
    document.getElementsByClassName('clase')[1].onclick = mostrar("Párrafo 2");*/
    //document.querySelector('#principal p:first-child').onclick = mostrarAlerta;
    var lista = document.querySelectorAll("#principal p");
    var lista = document.getElementById("principal").querySelectorAll('p');
    for (let i = 0; i < lista.length; i++) {
        lista[i].innerHTML = i;
        
    }
}
window.addEventListener("load", init, false);
function ocultarcapa() {
    document.getElementById("principal").style = "display: none";
}

function mostrarcapa() {
    document.getElementById("principal").style = "display: visibility";
} 