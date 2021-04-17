/*function calculadora(operacion,num1,num2) {
    var res = 0;
    if (operacion == 'suma') {
    var res = eval(num1) + eval(num2);
    document.getElementById("resultado").innerHTML = res;
    }else if (operacion == 'resta') {
    var res = num1 - num2;
    document.getElementById("resultado").innerHTML = res;
    }else if (operacion == 'mul') {
    var res = num1 * num2;
    document.getElementById("resultado").innerHTML = res;
    }else {
    var res = num1 / num2;
    document.getElementById("resultado").innerHTML = res;
    }
}
var n1 = "";
var op = "";
var n2 = "";

function mostrarN1(numero1) {
    document.getElementById("pantalla").innerHTML = numero1.value;
    n1 = numero1.value;
}

function escribir(operacion) {
    document.getElementById("pantalla").innerHTML = n1 + operacion;
    op = operacion;
    document.getElementById("num22").focus();
}

function mostrarN2(numero2) {
    document.getElementById("pantalla").innerHTML = n1 + op + numero2.value;    
    n2 = numero2.value;    
}

function calcular() {
    document.getElementById("pantalla").innerHTML = eval(n1 + op + n2);
    document.getElementById("num11").value = "";
    document.getElementById("num22").value = "";
    document.getElementById("num11").focus();
} 
*/
var aleatorio= parseInt(Math.random() * 10);
var intentos = 3;
//alert(aleatorio);
function comprobar() {
    var numero = document.getElementById("numero").value;

    var texto = "";

    if (intentos > 0) {
        if (numero == aleatorio) {
            texto = "Has Acertado!!!";
        } else if (numero > aleatorio) {
            intentos = intentos - 1;
            texto = "El número que buscas es menor y te quedan " + intentos + " intentos";            
        } else {
            intentos = intentos - 1;
            texto = "El número que buscas es mayor y te quedan " + intentos + " intentos";            
        }
    } else {
        texto = "Sin intentos";
    }    

    document.getElementById("resultado").innerHTML = texto;
    
}

