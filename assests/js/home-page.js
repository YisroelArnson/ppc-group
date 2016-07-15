$(function() {
  mobileNav();
  parallaxContent()
  checkContent();
  smoothScroll();
});






function mobileNav() {
  var $linkContainer = $('.link-container');
  var $x = $('.x');

  $x.click(function() {
    $linkContainer.toggleClass('nav-open');
  });
}


















function parallaxContent() {

  function fun1(slide, li) {
    var animationDuration = 800;

    $('.main-parallax-container li').on('click', function() {
    });

    slide.fadeIn(animationDuration);
    li.animate({marginTop: '-75px'}, animationDuration);
    li.find($('.parallax-content h1')).css('color', '#666');

    setTimeout(function() {
      slide.fadeOut(animationDuration);
      li.animate({marginTop: '0'}, animationDuration);
      li.find($('.parallax-content h1')).css('color', '#fff');
    }, 4000);
  }

  function callFunctions() {
    setTimeout(function() {
      fun1($('.parallax-content-container-1'), $('.container-1'));
      setTimeout(function() {
        fun1($('.parallax-content-container-2'), $('.container-2'));
        setTimeout(function() {
          fun1($('.parallax-content-container-3'), $('.container-3'));
          setTimeout(function() {
            fun1($('.parallax-content-container-4'), $('.container-4'));
            setTimeout(function() {
              callFunctions();
            }, 4000);
          }, 4000);
        }, 4000);
      }, 4000);
    });
  }

  callFunctions();



}


















































function checkContent() {
  var $button = $('.button');
  var $secondButton = $('.second-button');
  $button.on('click', function() {
    var $this = $(this);
    var $secondClass = $this.attr("class").split(' ');
    var $thisContent = $secondClass[2] + '-' + $secondClass[3];


    if ($secondClass[4] === 'second-button') {
      $secondButton.css('background-color', '#1A5DA1');
      $this.css('background-color', '#003F83');
    }
    else {
    $button.not('.second-button').css('background-color', '#eee');
    $this.css('background-color', '#ddd');
    }

    $('.content').css('display', 'none');
    $('.' + $thisContent).fadeIn(800);
  });
}





function smoothScroll() {
  $("a").on('click', function(event) {

    if (this.hash !== "#") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
}
