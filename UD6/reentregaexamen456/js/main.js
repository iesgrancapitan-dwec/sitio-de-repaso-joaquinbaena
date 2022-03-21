/**
 * @author Joaquín Baena Salas
 */
{
    const colorines = function () {
        const nomApell = ["Joaquín", "Baena Salas"]

        const colores = ["rojo", "amarillo", "verde"];

        const init = function () {
            rellenarP();
            document.querySelectorAll("div div").forEach((elemento) => {
                elemento.classList.add(colores[Math.floor(Math.random() * colores.length)]);
                elemento.dataset.libre = false;
                elemento.addEventListener("click", clickea);
            })
        }

        const rellenarP = function () {
            document.querySelectorAll("p").forEach((elemento, index) => {
                elemento.innerText += ` ${nomApell[index]}`;
                elemento.style.backgroundColor = "lightblue";
            });
        }

        const clickea = function () {
            let divsColores = Array.from(document.querySelectorAll("div div"));
            if (this.classList != "") {
                this.innerText = this.classList;
                this.classList.remove(this.classList);
            }
            if (divsColores.every(divs => divs.classList == "")) {
                divsColores.forEach(elemento => elemento.removeEventListener("click", clickea));
                document.querySelector("body").append(document.querySelector(".grid").cloneNode(true));
            }
        }

        return {
            init: init
        }

    }();

    document.addEventListener("DOMContentLoaded", colorines.init);
}