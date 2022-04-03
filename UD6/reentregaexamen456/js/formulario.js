/**
 * @author Joaquín Baena Salas
 */

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input[type=text]");

    const formulario = document.forms[0];

    const comprobar = function () {
        switch (this.id) {
            case "nombre":
                if (this.value.trim() == "") {
                    this.nextElementSibling.textContent = "El nombre no puede estar vacío";
                } else {
                    this.nextElementSibling.textContent = "";
                }
                break;
            case "apellidos":
                if (this.value.trim() == "") {
                    this.nextElementSibling.textContent = "El apellido no puede estar vacío";
                } else {
                    this.nextElementSibling.textContent = "";
                }
                break;
            case "curso":
                if (/^[12]{1}(asir|daw|dam)$/i.test(this.value)) {
                    this.nextElementSibling.textContent = "";
                } else {
                    this.nextElementSibling.textContent = "El curso no es válido o está vacío";
                }
                break;
        }
    }

    const validar = function (e) {
        e.preventDefault();
        inputs.forEach(inp => inp.dispatchEvent(new Event("blur")));
        let longitud = inputs[0].nextSibling.textContent.length +
            inputs[1].nextSibling.textContent.length +
            inputs[2].nextSibling.textContent.length;
        if (longitud < 1) {
            let alumno = new Alumno(inputs[0].value, inputs[1].value, inputs[2].value);
            alumno.mostrar();
        }
    }

    const rellenar = function () {
        borrarFormulario();
        inputs[0].value = "Joaquín";
        inputs[1].value = "Baena Salas";
        inputs[2].value = "2daw";
    }

    const borrarFormulario = function () {
        inputs.forEach(inp => {
            inp.value = "";
            inp.nextSibling.textContent = "";
        })
    }

    inputs.forEach((elemento) => {
        elemento.addEventListener("blur", comprobar);
    })

    formulario.addEventListener("submit", validar);
    formulario.addEventListener("reset", borrarFormulario);
    document.querySelector("input[type=button]").addEventListener("click", rellenar);
});
