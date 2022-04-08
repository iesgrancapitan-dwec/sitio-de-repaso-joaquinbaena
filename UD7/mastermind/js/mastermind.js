/**
 * @author Joaquín Baena Salas
 */

let mastermind = function () {
    const colores = ["red", "white", "black", "yellow", "orange", "brown", "blue", "green"];

    // const numBolas = 4;

    let combinacion;

    const init = () => {
        combinacion = Array(4).fill().map(() => colores[Math.floor(Math.random() * 8)]);
        // document.getElementById("resultados").appendChild(crearHuecos());
        // document.querySelectorAll(".colores").forEach(opcion => {
        //     opcion.addEventListener("click", comportamiento);
        // })
        // document.querySelectorAll(".hueco").forEach(hueco => {
        //     hueco.dataset.libre = true;
        //     hueco.addEventListener("click", borrarColor);
        // })

        // document.querySelector("button").addEventListener("click", comprobarBolas);
        // document.querySelector("#reiniciar").addEventListener("click", reiniciar);
        // darFormato();
        mostrar();
    };

    const mostrar = function () {
        console.log(combinacion);
    };

    const comprobarCoincidencia = function (...colores) {
        let bolas = {
            bolaNegra: 0,
            bolaBlanca: 0
        };
        let copiaCombinacion = combinacion.slice();

        colores.forEach((element, index, array) => {
            if (element === copiaCombinacion[index]) {
                bolas.bolaNegra++;
                copiaCombinacion[index] = null;
                array[index] = null;
            }
        });
        colores.forEach(element => {
            if (copiaCombinacion.find((encontrado) => element === encontrado)) {
                copiaCombinacion[copiaCombinacion.indexOf(element)] = null;
                bolas.bolaBlanca++;
            }
        });
        return bolas;
    };

    // const darFormato = function () {
    //     document.querySelectorAll(".colores").forEach((element, index) => {
    //         element.style.backgroundColor = colores[index];
    //         element.dataset.color = colores[index];
    //     });
    // }

    // const comportamiento = function () {
    //     try {
    //         let huecos = Array.from(document.querySelectorAll(".hueco"));
    //         let encontrado = huecos.find(encontrado => encontrado.dataset.libre == "true");
    //         encontrado.style.backgroundColor = window.getComputedStyle(this).getPropertyValue("background-color");
    //         encontrado.dataset.libre = false;
    //         encontrado.dataset.color = this.dataset.color;
    //     } catch (error) {
    //     }
    // }

    // const borrarColor = function () {
    //     this.style.backgroundColor = "grey";
    //     this.dataset.libre = true;
    //     delete this.dataset.color;
    // }

    // const crearHuecos = function () {
    //     let fila = document.createElement("div");
    //     fila.classList.add("fila");

    //     for (let i = 0; i < numBolas; i++) {
    //         let hueco = document.createElement("div");
    //         hueco.classList.add("hueco");
    //         fila.appendChild(hueco);
    //     }

    //     for (let i = 0; i < numBolas; i++) {
    //         let comprobar = document.createElement("div");
    //         comprobar.classList.add("comprobar");
    //         fila.appendChild(comprobar);
    //     }
    //     return fila;
    // }

    // const comprobarBolas = function () {
    //     let intentar = [];
    //     let comprobarLibre = Array.from(document.querySelectorAll(".hueco"));
    //     if (comprobarLibre.find(encontrado => encontrado.dataset.libre == "true"))
    //         return;

    //     comprobarLibre.forEach(hueco => {
    //         hueco.classList.toggle("hueco");
    //         hueco.classList.toggle("antiguo-hueco");
    //         intentar.push(hueco.dataset.color);
    //         hueco.removeEventListener("click", borrarColor);
    //     })

    //     let intento = comprobarCoincidencia(...intentar);
    //     let negras = intento.bolaNegra;

    //     document.querySelectorAll(".comprobar").forEach(element => {
    //         element.classList.toggle("comprobar");
    //         element.classList.toggle("antiguo-comprobar");
    //         if (intento.bolaNegra > 0) {
    //             element.style.backgroundColor = "black";
    //             intento.bolaNegra--;
    //         } else if (intento.bolaBlanca > 0) {
    //             element.style.backgroundColor = "white";
    //             intento.bolaBlanca--
    //         }
    //     })
    //     if (negras == numBolas) {
    //         document.querySelector("#ganar-oculto").id = "ganar";
    //     } else {
    //         let nuevosHuecos = document.getElementById("resultados").appendChild(crearHuecos());
    //         nuevosHuecos.childNodes.forEach(hueco => {
    //             if (hueco.classList == "hueco") {
    //                 hueco.dataset.libre = true;
    //                 hueco.addEventListener("click", borrarColor);
    //             }
    //         })
    //     }
    // }

    // const reiniciar = function(){
    //     location.reload();
    // }

    return {
        init: init,
        mostrar: mostrar,
        comprobarCoincidencia: comprobarCoincidencia
    }
}();

document.addEventListener("DOMContentLoaded", mastermind.init);
