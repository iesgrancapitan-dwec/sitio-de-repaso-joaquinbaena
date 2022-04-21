$(function () {
    turno = Math.floor(Math.random() * 2);

    const mensajeDeTurno = $("span");

    let win;

    let end = false;

    const tablero = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    let tableroLleno = false;

    (turno === 0) ? mensajeDeTurno.html("turno de X") : mensajeDeTurno.html("turno de O");

    $(document).on("click", ".vacio", function () {
        const seleccionado = $(this);
        if (turno % 2 == 0) {
            seleccionado.toggleClass("vacio")
                .toggleClass("equis")
                .html("X");
            mensajeDeTurno.html("turno de O");
        } else {
            seleccionado.toggleClass("vacio")
                .toggleClass("circulo")
                .html("O")
            mensajeDeTurno.html("turno de X")
        }

        if ($(".vacio").length == 0) {
            tableroLleno = true;
        }

        tablero[seleccionado.attr("data-fila")][seleccionado.attr("data-columna")] = seleccionado.html();

        comprobarTablero(seleccionado);

        if (end) {
            mensajeDeTurno.html("Ha ganado el jugador con el simbolo " + seleccionado.html());
            $(document).off();
        }else if(tableroLleno){
            mensajeDeTurno.html("Empate");
        }
        // console.log(win);
        // console.log(tablero[2][2]);
        turno++;
    })

    const comprobarTablero = function (seleccionado) {
        comprobarFilas(seleccionado);
        if(!end){
            comprobarColumnas(seleccionado);
            if(!end){
                comprobarDiagonalP(seleccionado);
                if(!end){
                    comprobarDiagonalS(seleccionado);
                }
            }
        }
    }

    const comprobarFilas = function (seleccionado) {
        for (let i = 0; i < 3; i++) {
            win = true;
            for (let j = 0; j < 3 && win; j++) {
                if (tablero[i][j] == null || !(tablero[i][j] == seleccionado.html())) {
                    win = false;
                }
            }
            if (win) {
                end = true;
            }
        }
    }

    const comprobarColumnas = function (seleccionado) {
        for (let i = 0; i < 3; i++) {
            win = true;
            for (let j = 0; j < 3 && win; j++) {
                if (tablero[j][i] == null || !(tablero[j][i] == seleccionado.html())) {
                    win = false;
                }
            }
            if (win) {
                end = true;
            }
        }
    }

    const comprobarDiagonalP = function (seleccionado) {
        win = true;
        for (let i = 0; i < 3; i++) {

            if (tablero[i][i] == null || !(tablero[i][i] == seleccionado.html())) {
                win = false;
            }

        }
        if (win) {
            end = true;
        }
    }
    
    const comprobarDiagonalS = function (seleccionado) {
        let j = 2;
        win = true;
        for (let i = 0; i < 3; i++) {
    
            if (tablero[i][j] == null || !(tablero[i][j] == seleccionado.html())) {
                win = false;
            }
            
            j--;
        }
        if (win) {
            end = true;
        }
    }
});


