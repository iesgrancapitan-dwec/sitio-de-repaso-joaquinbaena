$(function () {
    $("#cambioColor").click(function () {
        $("#ejemplo").fadeConColor({backgroundColor:"red"});
    })
    $("#desaparece").click(function () {
        $("#ejemplo").desaparece("fadeOut");
    })
    $("#aparece").click(function () {
        $("#ejemplo").aparece("slideDown");
    })

    $('#modLista').click(function () {
        $('li').lista();
    })
});