$(document).ready(function () {
  /* плавный скролл меню */ 
  $('nav a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 750);
    $('nav a[href^="#"]').pareent().removeClass('active');
    $(this).pareent().addClass('active');
    $('.menu').toggle(500);
    $('.menu__burger').toggleClass('close');
    return false;
  });
  /* мобильное меню */
  $('.menu__burger').click(function(){
    $('.menu').toggle(500);
    $(this).toggleClass('close');
  });
});