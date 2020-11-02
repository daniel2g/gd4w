
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
  

  // $(".subhead").mouseover(function(){
  //   // var rnum = Math.random(20)-10;
  //   $(".subhead").animate({transform: "rotate(10deg)"});
  // });
  // // .mouseout(function(){
  // //   $(".subhead").animate({transform: "rotateZ(0deg)"});
  // // });
 
  
  






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

