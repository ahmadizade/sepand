$(document).ready(function(){
    $("#online").mouseover(function(){
        $("#anime").animate({width: '100%',opacity: '1'},4000);
    });
   });
    $("#footer-top-1").click(function(){
        $("#footer-ul-1 li").toggle(1000);
    });
    $("#footer-top-2").click(function(){
        $("#footer-ul-2 li").toggle(1000);
    });
    $("#footer-top-3").click(function(){
        $("#footer-ul-3 li").toggle(1000);
    });
    $("#footer-top-4").click(function(){
        $("#footer-ul-4 li").toggle(1000);
    });
    $("#footer-top-5").click(function(){
        $("#footer-ul-5 li").toggle(1000);
    });

$(document).ready(function() {
    $("#footer-top-1").ondblclick(function () {
        $(#degree).toggleClass('rotate');
    });
});