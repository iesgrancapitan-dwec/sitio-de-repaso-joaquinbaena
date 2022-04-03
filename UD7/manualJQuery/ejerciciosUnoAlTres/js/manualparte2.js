$(function(){
    // Demo 7
    const $elem1 = $("#elem1");
    $elem1.css("background-color", "#ff9999");
    const $divs = $("#demo7 div");
    $divs.css("font-size", "32pt");

    // Demo 8
    const $parrafos = $("#demo8 p");
    $parrafos.css("background-color", "#ff8833");
    const $negrita = $("b");
    $negrita.css("color", "#fff");

    // Demo 9
    $("#demo9 p").each(function(i){
        if(i%2==0){
            $(this).css("background-color", "#eee");
        }else{
            $(this).css("background-color", "#ccc");
        }
    });

    // Demo 10
    const $elementosMitexto = $(".mitexto");
    $elementosMitexto.click(function(){
        alert ("Hay " + $elementosMitexto.length + " elementos de la clase mitexto");
    });

    // Demo 11
    $("#guardar").click(function(evento){
        let valor = document.formul.valor.value;
        $("#division").data("midato",valor);
        $("#division").html('He guardado en este elemento (id="division") un dato llamado "midato" conel valor "' + valor + '"');
    });

    $("#leer").click(function(evento){
        valor = $("#division").data("midato");
        $("#division").html('En este elemento (id="division") leo un dato llamado "midato" con el valor "' + valor + '"');
    });

    $("#eliminar").click(function(evento){
        $("#division").removeData("midato");
        $("#division").html('Acabo de eliminar del elemento (id="division") el dato llamada "midato"');
    });
});