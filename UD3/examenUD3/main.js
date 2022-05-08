    /**
     * @file
     * 
     * Añade tu nombre en cada title
     * @author Joaquín Baena Salas
     * En cada documento HTML añade las etiquetas necesarias para añadir comportamiento JS, autoría y otras buenas prácticas.
     * Pero no modifiques las que ya están: no añadas id ni atributos
        * 
     * Se aportan tres ficheros .html (index, ej2 y ej3) y cuatro ficheros .js (main, ej1, ej2 y ej3). Las instrucciones se describen en los html y en los comentarios de cada
     * .js
     * 
     * En la página de inico cada enlace de la página abre otra página nueva. 
     * Sólo la primera crea una ventana desde JavaScript. El resto abre ficheros ya existentes.
     * 
     * Al hacer click en el enlace "De la nada" crea una ventana de tamaño 600x1100
     * Título: Ejercicio 1. Nombre Apellido1 Apellido2
     * Dentro del body las siguientes etiquetas:
     * <h1>Crónica de una muerte anunciada</h1>
        <ul>Personajes
        
        </ul>
        <p><a href="" id="idAtras">Atrás</a></p>
     * El comportamiento se definirá en el fichero ej1.js   
     * @param {*} evento 
     */

{
   document.addEventListener("DOMContentLoaded", function(){
      document.getElementById("idEj1").addEventListener("click",function(evento){
         evento.preventDefault();
         let ventana = document.open("","","width=600,height=1100");
         ventana.document.write(`<html>
                        <head><title>Ejercicio 1. Joaquín Baena Salas</title>
                        <script src="js/ej1.js"></script></head>
                        <body>
                        <noscript>Su navegador no permite el uso de js</noscript>
                        <h1>Crónica de una muerte anunciada</h1>
                        <ul>Personajes
                        </ul>
                        <p><a href="" id="idAtras">Atrás</a></p>
                        </body>
                        </html>`);
         ventana.document.close();
      });
   });
}