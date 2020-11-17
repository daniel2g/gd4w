$(document).ready(function(){
    $("#field").focus();
    $("#field").select();

    
    var fontSize = 30;

    document.getElementById("field").oninput = function(){
        
        var innerheight = document.getElementById("staticcontainer").clientHeight;
        
        console.log('inner:' + innerheight);
        
        var outerheight = window.innerHeight;

        console.log('outer:' + outerheight);

        if (innerheight > 0.85*outerheight) {
            fontSize--;

            $(".h").css("font-size", fontSize/2 + "vh");
        };

        if (fontSize < 30) {
            $("br").addClass("hide");
        };
        
        console.log(fontSize);



    };




   

});


