/**
 * @file
 * @author Joaquín Baena Salas
 * AÑADE a cada <li> lo solicitado, NO MACHAQUES
 * Añade también comportamiento a cada botón: volver a la página anterior y cerrar esta página
 * 
 * @author Magarín
 */
{
    document.addEventListener("DOMContentLoaded", function(){
        document.getElementById("protocolo").append(location.protocol);
        document.getElementById("conexion").append(navigator.onLine);
        
        let numeroAleatorio = parseInt((Math.random() * 10).toFixed(0));
        document.getElementById("aleatorio").append(numeroAleatorio);
        document.getElementById("aBinario").append(numeroAleatorio.toString(2));

        let yo = {nombre: "Joaquin",
                apellido: "Baena"}

        let yoJSON = JSON.stringify(yo);
        document.getElementById("aJSON").append(yoJSON);
        let yo2 = JSON.parse(yoJSON);
        document.getElementById("aObjeto").append(yo2.apellido);

        let nuevoSet = new Set([Math.PI,Number.EPSILON]);
        let array = [...nuevoSet];
        document.getElementById("set").append(array);
        
        const botones = document.getElementsByTagName("button");
        botones[0].addEventListener("click",function(evento){
            evento.preventDefault();
            history.go(-1);
        });

        botones[1].addEventListener("click",function(evento){
            evento.preventDefault();
            window.close();
        })

        //
        document.getElementById("color").append(screen.colorDepth);
    });
}