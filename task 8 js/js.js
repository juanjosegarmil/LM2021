function tablaMul() {
    var num = document.getElementById('numero').value;
    var i = 0;
    while (i<=10) {
        document.getElementById('resultado').innerHTML += '<tr><td>' + num + 'x' + i + '</td><td>' + num*i;
        i++;
    }
}
function ocultar() {
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('numero').value = '';
}