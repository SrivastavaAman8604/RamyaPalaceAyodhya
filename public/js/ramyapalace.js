$(window).scroll(function(){
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('animated fadeInDown fixed');
    else sticky.removeClass('animated fadeInDown fixed');
  });