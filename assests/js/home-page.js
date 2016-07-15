$(function() {
  mobileNav();
  parallaxContent();
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















//
//
//
// function parallaxContent(animationDuration) {
//
//   function fun1(slide, li) {
//
//
//     $('.main-parallax-container li').on('click', function() {
//     });
//
//     slide.fadeIn(animationDuration);
//     li.animate({marginTop: '-=20px'}, animationDuration);
//     li.find($('.parallax-content h1')).css('color', '#666');
//
//     setTimeout(function() {
//       slide.css('display', 'none');
//       li.animate({marginTop: '+=20px'}, animationDuration);
//       li.find($('.parallax-content h1')).css('color', '#fff');
//     }, 5000);
//   }
//
//   function callFunctions() {
//     setTimeout(function() {
//       fun1($('.parallax-content-container-1'), $('.container-1'));
//       setTimeout(function() {
//         fun1($('.parallax-content-container-2'), $('.container-2'));
//         setTimeout(function() {
//           fun1($('.parallax-content-container-3'), $('.container-3'));
//           setTimeout(function() {
//             fun1($('.parallax-content-container-4'), $('.container-4'));
//             setTimeout(function() {
//               fun1($('.parallax-content-container-5'), $('.container-5'));
//               setTimeout(function() {
//                 fun1($('.parallax-content-container-6'), $('.container-6'));
//                 setTimeout(function() {
//                   callFunctions();
//                 }, 5000);
//               }, 5000);
//             }, 5000);
//           }, 5000);
//         }, 5000);
//       }, 5000);
//     });
//   }
//
//   callFunctions();
//
//
//
// }








function parallaxContent() {
  var $parallax1 = $('.parallax-container-1');
  var $parallaxSlide = $('.parallax-content-container');
  var $li = $('.main-parallax-container li');
  var animationSpeed = 0;

  if ( $(window).width() > 739) {
    function animateSlider(whichParallax, slide, li, counter, max) {
      var $slides = (whichParallax + ' ' + slide);
      var $li = (whichParallax + ' ' + li);
      var $nth = ':' + 'nth-of-type(' + counter + ')';

      $($slides + $nth).fadeIn(animationSpeed);
      $($li + $nth).animate({marginTop: '-=25px'});

      setTimeout(function() {
        $($slides + $nth).fadeOut(animationSpeed);
        $($li + $nth).animate({marginTop: '0'});
        ++counter;

        if (counter === max) {animateSlider(whichParallax, slide, li, 1, max)}
        else {animateSlider(whichParallax, slide, li, counter, max)}
      }, 4000);
    }

    animateSlider('.parallax-container-1', '.parallax-content-container', '.main-parallax-container li', 1, 7);
    animateSlider('.parallax-container-2', '.parallax-content-container', '.main-parallax-container li', 1, 5);
  }
  else {
    alert('finish slider for mobile');
  }





}




























function checkContent() {
    var $buttons1 = $('.whitespace-1 .button');
    var $content1 = $('.whitespace-1 .content');
    var $buttons2 = $('.whitespace-2 .button');
    var $content2 = $('.whitespace-2 .content');

    $buttons1.on('click', function() {
      var $this = $(this);
      changeButton($this, $buttons1, $content1, '#ecf0f1', '#ddd');
    });

    $buttons2.on('click', function() {
      var $this = $(this);
      changeButton($this, $buttons2, $content2, '#003F83', '#1A5DA1');
    });


    function changeButton($this, button, content, backgroundColor1, backgroundColor2) {
      var $secondClass = $this.attr("class").split(' ');
      var $thisContent = $secondClass[2] + '-' + $secondClass[3];

      button.css('background-color', backgroundColor2);
      $this.css('background-color', backgroundColor1);

      content.css('display', 'none');
      $('.' + $thisContent).fadeIn(800);
    }

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
