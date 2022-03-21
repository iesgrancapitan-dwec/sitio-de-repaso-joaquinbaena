/**
 * @author Joaquín Baena Salas
 */

class Alumno {
    #nombre;
    #apellidos;
    #curso;
    constructor(nombre, apellidos, curso) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.setCurso = curso;
    }


    set setCurso(curso) {
        if (!/^[12]{1}(asir|daw|dam)$/i.test(curso)) {
            throw new Error("No es un curso válido");
        }
        this.#curso = curso;
    }

    mostrar() {
        console.log(`Se ha creado el alumno ${this.#nombre} ${this.#apellidos}
del curso ${this.#curso}`);
    }
}
