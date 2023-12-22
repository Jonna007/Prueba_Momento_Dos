'use strict'
/*
Crear una función constructora para crear un 
Estudiante con las siguientes propiedades:
nombre, correo, promedio.
Una Funcion validarPromedio Que devuelva "Aprobado" 
si el promedio es mayor a 70 y "Reprobado" si es menor.
Una Función obtenerUsuario que devuelva únicamente 
el nombre de usuario del email

Crear un objeto a partir de la función anterior y comprobar funciones 
*/

function Student(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;

    this.validarPromedio = function() {
        if (this.promedio > 70) {
            return "Aprobado";
        } else {
            return "Reprobado";
        }
    };

    this.obtenerUsuario = function() {
        return this.correo.split('@')[0];
    };
}


var StudentOne = new Student("Juanito", "juanito@suda.com", 65);

// Comprobar las funciones con alert
alert("Nombre: " + StudentOne.nombre);
alert("Promedio: " + StudentOne.validarPromedio());
alert("Usuario del correo: " + StudentOne.obtenerUsuario());