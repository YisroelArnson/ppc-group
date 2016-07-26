$(function() {
  mobileNav();
  color1();
  checkContent();
  catchPhrase();
  smoothScroll();

  if ( $(window).width() > 739) {
    //Add your javascript for large screens here
  }
  else {
    //Add your javascript for small screens here
    pass = 1;
  }
});



function mobileNav() {
  var $linkContainer = $('.link-container');
  var $x = $('.x');

  $x.click(function() {
    $linkContainer.toggleClass('nav-open');
  });
}







var pass = 0;
function color1() {
  var counter = 2;
  var animationSpeed = 500;

  var $colorContent = '.color-container-1 .color-content-container';
  var $li = '.color-container-1 .main-color-container li';
  var $liContainer = '.color-container-1 .container-';
  var colorInterval;

  $($li).on('click', function() {
    colorClick($(this));
  });

  function colorClick($this) {
    var $getClass = $this.attr("class").split(' ');
    var $whichNumber = $getClass[0].substr(-1);
    var $Parent = '.color-container-1 ';

    pass = 1;
    $($colorContent).fadeOut(0);
    $($colorContent + '-' + $whichNumber).fadeIn(animationSpeed).css('display', 'flex').css('flex-direction', 'column').css('justify-content', 'center');;
    $($li).css('border-bottom', 'none');
    $this.css('border-bottom', '1px solid #3498db');

    var reset = setTimeout(function() {
      pass = 0;
      clearInterval(colorInterval);
      colorIntervalFun();
    }, 7000);
  }


  function colorIntervalFun() {
    colorInterval = setInterval(function() {
      if (pass > 0) {
        clearInterval(colorInterval);
        return; //stop here so that it doesn't continue to execute below code
      }

      $($colorContent).fadeOut(0);
      $(($colorContent + '-' + counter)).fadeIn(animationSpeed).css('display', 'flex').css('flex-direction', 'column').css('justify-content', 'center');
      $($li).css('border-bottom', 'none');
      $($liContainer + counter).css('border-bottom', '1px solid #3498db');
      ++counter

      if (counter === $($colorContent).length + 1) {
        counter = 1;
      }
    }, 10000);
  }
  colorIntervalFun();
}












function checkContent() {
    var $buttons = '.whitespace-container .button';
    var $content = '.whitespace-container .content';
    var $gif = '.whitespace-gif';

    var animationSpeed = 600;
    $($buttons).on('click', function() {
      var $this = $(this);
      var $secondClass = $this.attr("class").split(' ');
      var $thisContent = $secondClass[2] + '-' + $secondClass[3];
      var $parent = $this.closest('.whitespace').attr('class').split(' ')[1]

      $('.' + $parent + ' ' + $buttons).css('background-color', '#1A5DA1');
      $this.css('background-color', '#003F83');

      $('.' + $parent + ' ' + $gif).fadeOut(animationSpeed);
      $('.' + $parent + ' ' + $gif + '-' + $secondClass[3]).fadeIn(animationSpeed);
      $('.' + $parent + ' ' + $content).css('display', 'none');
      $('.' + $thisContent).fadeIn(animationSpeed);
    });
}








function catchPhrase() {
  var $allPhrase = $('.ppc-catch-phrase');
  var $phrase = '.catch-phrase-';

  var catchCounter = 2;
  var animationSpeed = 800;
  setInterval(function() {
    $allPhrase.fadeOut();
    $($phrase + catchCounter).fadeIn(animationSpeed);
    ++catchCounter
    if (catchCounter === $allPhrase.length + 1) {
      catchCounter = 1;
    }
  }, 6000);


}











function smoothScroll() {
  $("a").not('.no-scroll').on('click', function(event) {

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
