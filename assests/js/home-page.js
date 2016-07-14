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








function parallaxContent() {
  var $parallaxContainer = $('.parallax-container');
  var $li = $parallaxContainer.find('li');
  var $contentBox = $parallaxContainer.find($('.parallax-content-box'));
  var $parallaxSlide = $parallaxContainer.find('.parallax-slide-container');
  var $parallaxContentContainer = $parallaxContainer.find($('.parallax-content-container'));
  var width = 720;
  var animationSpeed = 1000;
  var pause = 4000;
  var currentSlide = 1;
  var interval;


  function startSlider() {
    interval = setInterval(function() {
      $parallaxSlide.animate({'margin-left': '-=' + width}, animationSpeed, function() {
        ++currentSlide
        if(currentSlide === ($parallaxContentContainer.length - 1)) {
          currentSlide = 1;
          $parallaxSlide.css('margin-left', '0');
        }
      });
    }, pause);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  $parallaxSlide.on('mouseenter', stopSlider).on('mouseleave', startSlider)

  startSlider();


  //change font-color as slide changes
  // on click go to that startSlider

  //make responsive




}














function checkContent() {
  var $button = $('.button');
  var $secondButton = $('.second-button');
  $button.on('click', function() {
    var $this = $(this);
    var $secondClass = $this.attr("class").split(' ');
    var $thisContent = $secondClass[2] + '-' + $secondClass[3];

    console.log($thisContent);

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
