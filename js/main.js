$(function(){
  $(".num").counterUp({
    delay:30,
    time:8000
  });
  $(window).scroll(function(){
    if(this.scrollY >56){
      $("header").addClass("fixed");
    }else{
      $("header").removeClass("fixed");
    }
  });
  $(".click1").click(function(){
    $(".ber-left .line-bg").css({
      "height":"30%"
    });
   
  });
  $(".click2").click(function(){
    $(".ber-left .line-bg").css({
      "height":"40%"
      
    });
    // $(".span1 span").append("1");

  });
  $(".click3").click(function(){
    $(".ber-left .line-bg").css({
      "height":"60%"
    })
  });
  $(".click4").click(function(){
    $(".ber-left .line-bg").css({
      "height":"80%"
    })
  });
  $(".click5").click(function(){
    $(".ber-left .line-bg").css({
      "height":"100%"
    })
  });
  $("#img-next").click(function(){
    $(".ber .line").css({
      "width":"+=33%"
    })
  });
  $("#img-perv").click(function(){
    $(".ber .line").css({
      "width":"-=33%"
    })
  });

  // strad img silder
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        800:{
          items:2,
          nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
})
  var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
// strad ---------------------------------------

});
// strad js
// -----------------------------------------------------------------------------



