$(function(){
    $("h1").css("backgroundColor","black")
    .css("color", "white");

    $("h2").css("backgroundColor","lightblue");

    // Demo 1
    $("input[type=button]").click(function(e){
        $("#capa1").html("Pulsaste el " + e.target.value);
    });

    // Demo 2
    $("#capa2").mouseenter(function(evento){
        $("#mensaje").css("display", "block");
    })
    .mouseleave(function(evento){
        $("#mensaje").css("display", "none");
    });

    // Demo 3
    $("#capa3 > a").click(function(evento){
        alert("Has pulsado el enlace, pero vamos a cancelar el evento... Por tanto, no vamos a llevarte a DesarrolloWeb.com");
        evento.preventDefault();
    });

    // Demo 4
    $("#demo4 a").mouseover(function(){
        $("#capa4").addClass("clasecss");
    })
    .mouseout(function(){
        $("#capa4").removeClass("clasecss");
    })
    .click(function(e){
        e.preventDefault();
    });

    // Demo 5
    const $mayores = $("#formulariomayores");
    $("#mayoria_edad").click(function(evento){
        if ($(this).prop("checked")){
            $mayores.css("display", "block");
        }else{
            $mayores.css("display", "none");
        }
    });

    // Demo 6
    $("#ocultar").click(function(e){
        e.preventDefault();
        $("#capaefectos").hide("slow");
    });

    $("#mostrar").click(function(e){
        e.preventDefault();
        $("#capaefectos").show(3000);
    });

})