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
  var $parallaxContent = $parallaxContainer.find($('.parallax-content'))
  var animationSpeed = 1000;
  var width = 720;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;


  function changeContent() {
    $li.on('click', function() {
      var $this = $(this)
      var $secondClass = $this.attr("class").split(' ');
      var $changeContent = $secondClass[1] + $secondClass[2];
      console.log($changeContent);
      stopSlider();
      $parallaxSlide.css('margin-left', '0');
      $parallaxSlide.css('margin-left', '-=' + $secondClass[3]);
      $parallaxContent.find('h1').css('color', '#fff');
      $this.find('h1').css('color', '#3498db');
      startSlider();
    });
  }
  changeContent();

  function startSlider() {
    interval = setInterval(function() {
      $parallaxSlide.animate({'margin-left': '-=' + width}, animationSpeed, function() {
        ++currentSlide
        console.log(currentSlide)
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
