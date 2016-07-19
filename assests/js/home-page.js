$(function() {
  mobileNav();
  checkContent();
  smoothScroll();
  mobileScript();
});



function mobileNav() {
  var $linkContainer = $('.link-container');
  var $x = $('.x');

  $x.click(function() {
    $linkContainer.toggleClass('nav-open');
  });
}















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
  var pass = 0;

  function animateSlider1() {
    var $parallaxContainer1 = '.parallax-container-1';
    $($parallaxContainer1 + $parallaxContentContainer).hide();
    $($parallaxContainer1 + $parallaxContentContainer + '-' + counter1).fadeIn(animationSpeed);
    $($parallaxContainer1 + $allLi + ' h1').css('color', '#fff');
    $($parallaxContainer1 + $li + counter1 + ' h1').css('color', '#555');
    counter1 += 1;

    if (counter1 === max1) {
      counter1 = 1;
    }
    callAnimate1();
  }

  function animateSlider2() {
    var $parallaxContainer2 = '.parallax-container-2';
    $($parallaxContainer2 + $parallaxContentContainer).hide();
    $($parallaxContainer2 + $parallaxContentContainer + '-' + counter2).fadeIn(animationSpeed);
    $($parallaxContainer2 + $allLi + ' h1').css('color', '#fff');
    $($parallaxContainer2 + $li + counter2 + ' h1').css('color', '#555');
    counter2 += 1;

    if (counter2 === max2) {
      counter2 = 1;
    }
    callAnimate2();
  }

  function clickSlider($this) {
    var $getClass = $this.attr("class").split(' ');
    var $whichNumber = $getClass[0].substr(-1);
    var $thisParent = $this.closest('.parallax-container').attr('class').split(' ')[1];

    pass = 1;
    $('.' + $thisParent + $allLi + ' h1').css('color', '#fff');
    $this.find('h1').css('color', '#555');

    $('.' + $thisParent + $parallaxContentContainer).hide();
    $('.' + $thisParent + $parallaxContentContainer + '-' + $whichNumber).fadeIn(animationSpeed);
  }

  $($allLi).on('click', function() {
    clickSlider($(this));
  });

  function callAnimate1() {
    if (pass === 0) {
      var sliderInterval1 = setTimeout(animateSlider1, 5000);
    }
    else {
      setTimeout(function() {
        pass = 0;
        callAnimate1();
      }, 15000);
    }
  }

  function callAnimate2() {
    if (pass === 0) {
      var sliderInterval2 = setTimeout(animateSlider2, 5000);
    }
    else {
      setTimeout(function() {
        pass = 0;
        callAnimate2();
      }, 15000);
    }
  }

  callAnimate1();
  callAnimate2();
}


function mobileScript() {
  if ( $(window).width() > 1024) {
    mainSlider();
  }
  else {
    var $allLi = ' .main-parallax-container li';
    var $parallaxContentContainer = ' .parallax-content-container';
    function clickSlider($this) {
      var $getClass = $this.attr("class").split(' ');
      var $whichNumber = $getClass[0].substr(-1);
      var $thisParent = $this.closest('.parallax-container').attr('class').split(' ')[1];


      $('.' + $thisParent + $allLi + ' h1').css('color', '#fff');
      $this.find('h1').css('color', '#555');

      $('.' + $thisParent + $parallaxContentContainer).hide();
      $('.' + $thisParent + $parallaxContentContainer + '-' + $whichNumber).fadeIn(800);
    }

    $($allLi).on('click', function() {
      clickSlider($(this));
    });
  }
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
