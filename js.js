
    // $('.child').css({'display': 'block'});

// $('.parent').click(function(){ //when user clicks .parent selector
//   //something will happen
//   $('.child').toggleClass('visible');
// });


// $('.bigpic').on('click',function(){ 
//     // $('.bigpic').removeClass('animaterev');
//     // $('.readingdiv').removeClass('animatetxtrev');
//     $('.bigpic').addClass('test');
//     // $('.readingdiv').addClass('test');
// });
// $('.readingdiv').on('click',function(){ 
//     $('.bigpic').removeClass('animate');
//     $('.readingdiv').removeClass('animatetxt');
//     $('.bigpic').addClass('animaterev');
//     $('.readingdiv').addClass('animatetxtrev');
// });

// $(".reading").click(function(){
//   $(".readingdiv").toggleClass("test");
// });

$(document).ready(function(){
  
  $(".bigpic").click(function(){
    $(".bigpic").removeClass("animaterev");
    $(".readingdiv").removeClass("animatetxtrev");

    $(".bigpic").addClass("animate");
    $(".readingdiv").addClass("animatetxt");



  });

  $(".readingdiv").click(function(){
    $(".bigpic").removeClass("animate");
    $(".readingdiv").removeClass("animatetxt");

    $(".bigpic").addClass("animaterev");
    $(".readingdiv").addClass("animatetxtrev");


  });
  
  $(".bigpic").hover(function(){
    $(".bigpic").toggleClass("bighover");

  });
 
  $(".scrollbox").hover(function(){
    $("html").toggleClass("showscroll");
    
  });

});

