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
  var $li = $('.parallax-container').find('li');
  var $parallaxContentContainer = $('.parallax-content-container');

  $li.on('click', function() {
    var $this = $(this);
    var $secondClass = $this.attr("class").split(' ');

    $parallaxContentContainer.css('display', 'none');
    $('.parallax-content-' + $secondClass).fadeIn(500);

  });


}




function checkContent() {
  $button = $('.button');

  $button.on('click', function() {
    var $this = $(this);
    var $secondClass = $this.attr("class").split(' ');
    var $thisContent = $secondClass[2] + '-' + $secondClass[3];

    $button.css('background-color', '#004C8F');
    $this.css('background-color', '#2980b9');
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
