$(document).ready(function(){
    $("#online").mouseover(function(){
        $("#anime").animate({width: '100%',opacity: '1'},4000);
    });
    // $("#online").mouseleave(function(){
    //     $("#anime").animate({width: '0',opacity: '0.5',},1000);
    // });
});
$(document).ready(function(){
    $(".footer-header").click(function(){
        $(".footer-ul").toggle(1000);
    });
});
