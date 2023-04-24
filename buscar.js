 // Variables globales para almacenar los datos ingresados
 var personas = [];
 var numeros = [];
 var multiplos = [];

 // Función para agregar una persona a la lista
 function agregarPersona() {
   var nombre = document.getElementById("nombre").value;
   var edad = document.getElementById("edad").value;
   personas.push({ nombre: nombre, edad: edad });
   mostrarPersonas();
   mostrarMultiplos();
 }

 // Función para mostrar la lista de personas ingresadas
 function mostrarPersonas() {
   var lista = document.getElementById("personas");
   lista.innerHTML = "";
   for (var i = 0; i < personas.length; i++) {
     var item = document.createElement("li");
     item.innerHTML = personas[i].nombre + " - " + personas[i].edad;
     lista.appendChild(item);
   }
 }
 document.getElementById("resultado").innerHTML = "Vocabulario: " + vocabulario;
 var N2 = parseInt(document.getElementById("N2").value);

     // Función para mostrar la lista de números ingresados
     function mostrarNumeros() {
       var lista = document.getElementById("numeros");
       lista.innerHTML = "";
       for (var i = 0; i < numeros.length; i++) {
         var item = document.createElement("li");
         item.innerHTML = numeros[i];
         lista.appendChild(item);
       }
     }
   
     // Función para buscar un nombre en la lista de personas ingresadas
     function buscarNombre() {
       var nombre = document.getElementById("buscar").value;
       var encontrado = false;
       for (var i = 0; i < personas.length; i++) {
         if (personas[i].nombre === nombre) {
           var resultado = document.getElementById("resultado");
           resultado.innerHTML = "";
           var item = document.createElement("li");
           item.innerHTML = personas[i].nombre + " - " + personas[i].edad;
           resultado.appendChild(item);
           encontrado = true;
           break;
         }
       }
       if (!encontrado) {
         alert("El nombre no se encuentra en la lista");
       }
     }
   
     // Función para eliminar un nombre de la lista de personas ingresadas
     function eliminarNombre() {
       var nombre = document.getElementById("buscar").value;
       var encontrado = false;
       for (var i = 0; i < personas.length; i++) {
         if (personas[i].nombre === nombre) {
           personas.splice(i, 1);
           mostrarPersonas();
           mostrarMultiplos();
           var resultado = document.getElementById("resultado");
           resultado.innerHTML = "";
           encontrado = true;
           break;
         }
       }
       if (!encontrado) {
         alert("El nombre no se encuentra en la lista");
       }
     }