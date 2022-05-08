/**
 * @file
 * Almacena en el navegador los dos valores indicados. 
 * - en diaSemana el día de la semana actual, en español (lunes, martes...)
 * - en numeros extrae los números del textarea separados por espacios. Usa los grupos de captura en las regexp
 * @author Joaquín Baena Salas
 * Añade también comportamiento a cada botón para que borre TODO lo almacenado
 * 
 * @author Magarín
 */
{
    document.addEventListener("DOMContentLoaded", function(){
        let storage = localStorage;
        let fecha = new Date();
        let dias = ["Domingo", "Lunes","Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]
        storage.setItem("fecha", dias[fecha.getDay()]);
        let texto = document.getElementById("numeros");
        let numeros = texto.value.match(/(\d+)\.?(\d*)/g);
        let numeros2 = "";
        numeros.forEach(element => {
            numeros2 += element.toString() + " ";
        });
        storage.setItem("numeros", numeros2);

        texto.addEventListener("blur", function(){
            let nuevosNumeros = texto.value.match(/(\d+)\.?(\d*)/g);
            nuevosNumeros.forEach(element => {
                numeros2 += element.toString() + " ";
            });
            storage.setItem("numeros", numeros2);
        });

        document.getElementById("borrar").addEventListener("click", function(evento){
            evento.preventDefault();
            storage.clear();
        })
    });
}