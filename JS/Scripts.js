// OCULTAR SPAN
// Falta simplificarlo en una funcion
$(document).on("click", "#span1", function(){
    $("#inputFoto1").click();
    $("#span1").css("opacity", 0);
});

$(document).on("click", "#span2", function(){
    $("#inputFoto2").click();
    $("#span2").css("opacity", 0);
});

$(document).on("click", "#span3", function(){
    $("#inputFoto3").click();
    $("#span3").css("opacity", 0);
});

$(document).on("click", "#span4", function(){
    $("#inputFoto4").click();
    $("#span4").css("opacity", 0);
});

$(document).on("click", "#span1a", function(){
    $("#inputFoto1a").click();
    $("#span1a").css("opacity", 0);
});

// LINK DE BOTONES
$(document).ready(function () {
    $("button.button1").click(function () {
        $("ul.tabs li a").removeClass("active");
        $(".secciones section").hide();
        $("ul.tabs li a.empezar").addClass("active");
        $(".secciones #tab5").show();
    })
});


$(document).ready(function () {
    $("button.button2").click(function () {
        $("ul.tabs li a").removeClass("active");
        $(".secciones section").hide();
        $("ul.tabs li a.saber").addClass("active");
        $(".secciones #tab2").show();
    })
});