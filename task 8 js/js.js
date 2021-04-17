function tablaMul() {
    var num = document.getElementById('numero').value;
    var i = 0;
    var historial = '';
    if (num === null) {
        document.getElementById('resultado').innerHTML = 'error';
    } else {
        while (i<=10) {
            document.getElementById('resultado').innerHTML += '<tr><td>' + num + 'x' + i + '</td><td>' + num*i;
            historial = historial + '<tr><td>' + num + 'x' + i + '</td><td>' + num*i;
            i++;
        }
        document.getElementById('historial').innerHTML += historial;
    }
    document.getElementById('capahistorial').style.visibility = "hidden";
}
function ocultar() {
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('numero').value = '';
    document.getElementById('capahistorial').style.visibility = "hidden";
}
function historial() {
    document.getElementById('capahistorial').style.visibility = "visible";
    document.getElementById('resultado').innerHTML = '';
}