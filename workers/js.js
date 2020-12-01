$(document).ready(function(){
    $(this).scrollTop(0);
    
    $("#field").focus();
    $("#field").select();

    
    var fontSize = 28.6;

    document.getElementById("field").oninput = function(){
        
        var innerheight = document.getElementById("staticcontainer").clientHeight;
        
        // console.log('inner:' + innerheight);
        
        var outerheight = window.innerHeight;

        // console.log('outer:' + outerheight);

        if (innerheight > 0.85*outerheight) {
            fontSize--;

            $(".h").css("font-size", fontSize/2 + "vh");
        };

        if (fontSize < 28.6) {
            $("br").addClass("hide");
        };
        
        // console.log(fontSize);

    };

    $(window).on('scroll', function(){
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();
      
        var scrollPercent = (s / (d - c)) * 100;
        

        // console.log(scrollPercent);

        if (scrollPercent >= 80) {
            $(".pub").removeClass("hidepub");
          }
        else { 
            $(".pub").addClass("hidepub");
        };



      });

      $(".button").click(function(){
        document.location.reload();
      });
      


   

});


