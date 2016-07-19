$(function() {
  mobileNav();
  // parallaxContent();
  mainSlider();
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
















//     function parallaxContent() {
//       var $parallax1 = $('.parallax-container-1');
//       var $parallaxSlide = $('.parallax-content-container');
//       var $li = $('.main-parallax-container li');
//       var animationSpeed = 400;
//       var pass = 0;
//
//       function animateSlider(whichParallax, slide, li, counter, max) {
//         var $slides = (whichParallax + ' ' + slide);
//         var $li = (whichParallax + ' ' + li);
//         var $nth = ':' + 'nth-of-type(' + counter + ')';
//         var $h1 = $(whichParallax + ' .container' + '-' + counter + ' .parallax-content h1');
//         $($slides).fadeOut(0);
//         $($slides + $nth).fadeIn(animationSpeed);
//         $($li + $nth).animate({marginTop: '-=25px'});
//         $h1.css('color', '#555');
//
//         window.startIntervalID = setTimeout(function() {
//           $($slides + $nth).fadeOut(0);
//           $($li + $nth).animate({marginTop: '0'});
//           $h1.css('color', '#fff');
//           ++counter;
//           while (pass === 1) {
//             return;
//           }
//           if (counter === max) {animateSlider(whichParallax, slide, li, 1, max)}
//           else {animateSlider(whichParallax, slide, li, counter, max)}
//         }, 4000);
//       }
//
//
//       function sliderClick($this) {
//         var $li1 = $('.parallax-container-1 li');
//         var $li2 = $('.parallax-container-2 li');
//         var $getClass = $this.attr("class").split(' ');
//         var $whichNumber = $getClass[0].substr(-1);
//         var $parent = $this.closest('.parallax-container').attr('class').split(' ')[1];
//         var animationSpeed = 0;
//         $('.parallax-content h1').css('color', '#fff');
//         $this.find('.parallax-content h1').css('color', '#555');
//
//         pass = 1;
//         $('.' + $parent + ' .parallax-content-container').fadeOut(0);
//         $('.' + $parent + ' .parallax-content-container' + '-' + $whichNumber).fadeIn(animationSpeed);
//
//         var interval = window.setTimeout(function() {
//           pass = 0;
//           $this.find('.parallax-content h1').css('color', '#fff');
//           animateSlider('.parallax-container-1', '.parallax-content-container', '.main-parallax-container li', 1, 6);
//           animateSlider('.parallax-container-2', '.parallax-content-container', '.main-parallax-container li', 1, 6);
//           clearTimeout(interval);
//         }, 15000);
//         }
//
//       $('.parallax-container li').on('click', function() {
//         sliderClick($(this));
//       });
//
//
//
//
//
//
//       if ( $(window).width() > 739) {
//         animateSlider('.parallax-container-1', '.parallax-content-container', '.main-parallax-container li', 1, 7);
//         animateSlider('.parallax-container-2', '.parallax-content-container', '.main-parallax-container li', 1, 6);
//       }
//       else {
//         alert('finish slider for mobile');
//       }
//
//
//
//
//
// }











function mainSlider() {
  var stop1 = false;
  var stop2 = false;

  var $allLi = ' .main-parallax-container li';
  var $li = ' .container-';
  var $parallaxContentContainer = ' .parallax-content-container';

  var counter1 = 1;
  var counter2 = 1;
  var max1 = 6;
  var max2 = 6;
  var animationSpeed = 800;


  function animateSlider1() {
    var $parallaxContainer1 = '.parallax-container-1';
    $($parallaxContainer1 + $parallaxContentContainer).hide();
    $($parallaxContainer1 + $parallaxContentContainer + '-' + counter1).fadeIn(animationSpeed);
    $($parallaxContainer1 + $allLi + ' h1').css('color', '#fff');
    $($parallaxContainer1 + $li + counter1 + ' h1').css('color', '#555');
    counter1 += 1;
  }

  function animateSlider2() {
    var $parallaxContainer2 = '.parallax-container-2';
    $($parallaxContainer2 + $parallaxContentContainer).hide();
    $($parallaxContainer2 + $parallaxContentContainer + '-' + counter2).fadeIn(animationSpeed);
    $($parallaxContainer2 + $allLi + ' h1').css('color', '#fff');
    $($parallaxContainer2 + $li + counter2 + ' h1').css('color', '#555');
    counter2 += 1;
  }

  function clickSlider($this) {
    var $getClass = $this.attr("class").split(' ');
    var $whichNumber = $getClass[0].substr(-1);
    var $thisParent = $this.closest('.parallax-container').attr('class').split(' ')[1];
    var timeout1;
    var timeout2;

    $('.' + $thisParent + $allLi + ' h1').css('color', '#fff');
    $this.find('h1').css('color', '#555');

    $('.' + $thisParent + $parallaxContentContainer).hide();
    $('.' + $thisParent + $parallaxContentContainer + '-' + $whichNumber).fadeIn(animationSpeed);
  }




  animateSlider1();

  animateSlider2();
}


























function checkContent() {
    var $buttons1 = $('.whitespace-1 .button');
    var $content1 = $('.whitespace-1 .content');
    var $buttons2 = $('.whitespace-2 .button');
    var $content2 = $('.whitespace-2 .content');

    $buttons1.on('click', function() {
      var $this = $(this);
      changeButton($this, $buttons1, $content1, '#f6f6f6', '#ddd');
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
