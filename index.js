function calcularMadurez() {
    var modulos = parseInt(document.getElementById("modulos").value);
    var agregados = parseInt(document.getElementById("agregados").value);
    var modificados = parseInt(document.getElementById("modificados").value);
    var eliminados = parseInt(document.getElementById("eliminados").value);
    var total = modulos-(agregados+modificados+eliminados);
    var total1= total/modulos;
    var total2 = total1*100;
    var madurez = "";
    if (total2 < 40) {
        madurez = "Nivel de madurez bajo";
    } else if (total2 < 80) {
        madurez = "Nivel de madurez medio";
    } else {
        madurez = "Nivel de madurez alto";
    }
    document.getElementById("resultado").innerHTML = madurez;
    resetearFormulario();
}

function resetearFormulario() {
    document.getElementById("modulos").value = "";
    document.getElementById("agregados").value = "";
    document.getElementById("modificados").value = "";
    document.getElementById("eliminados").value = "";
}


function calcularEsfuerzo() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var N1 = parseInt(document.getElementById("N1").value);
    var N2 = parseInt(document.getElementById("N2").value);

    var vocabulario = n1 + n2;
    var longitud = N1 + N2;

    var volumen = longitud * Math.log2(vocabulario);
    var dificultad = (n1 / 2) * (N2 / n2);
    var esfuerzo = dificultad*volumen;
    var tiempo = esfuerzo/18;
    var numero_bugs = volumen/3000;
    
    document.getElementById("resultado").innerHTML = "Vocabulario: " + vocabulario;
    document.getElementById("resultado1").innerHTML = "Longitud: " + longitud;
    document.getElementById("resultado2").innerHTML = "Volumen: " + volumen;
    document.getElementById("resultado3").innerHTML = "Dificultad (Nivel del programa): " + dificultad;
    document.getElementById("resultado4").innerHTML = "El esfuerzo de Halstead es: " + esfuerzo;
    document.getElementById("resultado5").innerHTML = "Tiempo requerido: " + tiempo;
    document.getElementById("resultado6").innerHTML = "Numero de bugs entregados: " + numero_bugs;
    resetearFormulario2();

}

function resetearFormulario2() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("N1").value = "";
    document.getElementById("N2").value = "";
}

