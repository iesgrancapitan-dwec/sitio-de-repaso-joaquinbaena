/**
 * @file
 * CRÓNICA DE UNA MUERTE ANUNCIADA......................
 * Se invocarán las siguientes funciones:
 * @author Joaquín Baena Salas
 * cambiaH1():  que  Modifica H1 de la siguiente forma:
 * - Añade al contenido actual de h1 tu apellido
 * - Modifica el color o el color de fondo de h1
 *
 *   annadeElementos(): 
 * Añade al elemento <ul> un <li> con cada uno de los personajes
 * Para ello parte del siguiente array 
 * ["Iván Baeza", "Santiago Nasar", "Ángela Vicario", "Pedro Vicario", "Pablo Vicario"]
 * Recórrelo mediante un método 
 * 
 * @author Magarín
 * 
 * */
    document.addEventListener("DOMContentLoaded", function(){
        const h1 = document.querySelector("h1");
        h1.append(" Baena Salas");
        h1.style.backgroundColor = "black";
        h1.style.color = "white";

        const nombres = ["Iván Baeza", "Santiago Nasar", "Ángela Vicario", "Pedro Vicario", "Pablo Vicario"];
        const ul = document.querySelector("ul");
        nombres.forEach(element => {
            const li = document.createElement("li");
            li.textContent = element;
            ul.appendChild(li);
        });

        document.querySelector("#idAtras").addEventListener("click",e =>{
            e.preventDefault();
            window.close();
        })
    });
