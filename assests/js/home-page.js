// $(function() {
//   mobileNav();
//   checkContent();
//   catchPhrase();
//   smoothScroll();
//   mobileScript();
// });
//


function mobileNav() {
  var $linkContainer = $('.link-container');
  var $x = $('.x');

  $x.click(function() {
    $linkContainer.toggleClass('nav-open');
  });
}




// function mainSlider() {
//   var stop1 = false;
//   var stop2 = false;
//   var $allLi = ' .main-parallax-container li';
//   var $li = ' .container-';
//   var $parallaxContentContainer = ' .parallax-content-container';
//
//   var counter1 = 1;
//   var counter2 = 1;
//   var max1 = 6;
//   var max2 = 6;
//   var animationSpeed = 800;
//   var pass = 0;
//
//   function animateSlider1() {
//     var $parallaxContainer1 = '.parallax-container-1';
//     $($parallaxContainer1 + $parallaxContentContainer).hide();
//     $($parallaxContainer1 + $parallaxContentContainer + '-' + counter1).fadeIn(animationSpeed);
//     $($parallaxContainer1 + $allLi + ' h1').css('color', '#fff');
//     $($parallaxContainer1 + $allLi + ' h1').css('border-bottom', 'none');
//     // $($parallaxContainer1 + $li + counter1 + ' h1').css('color', '#666');
//     $($parallaxContainer1 + $li + counter1 + ' h1').css('border-bottom', '3px solid #3498db');
//     counter1 += 1;
//
//     if (counter1 === max1) {
//       counter1 = 1;
//     }
//     callAnimate1();
//   }
//
//   function animateSlider2() {
//     var $parallaxContainer2 = '.parallax-container-2';
//     $($parallaxContainer2 + $parallaxContentContainer).hide();
//     $($parallaxContainer2 + $parallaxContentContainer + '-' + counter2).fadeIn(animationSpeed);
//     $($parallaxContainer2 + $allLi + ' h1').css('border-bottom', 'none');
//     $($parallaxContainer2 + $allLi + ' h1').css('color', '#fff');
//     // $($parallaxContainer2 + $li + counter2 + ' h1').css('color', '#666');
//     $($parallaxContainer2 + $li + counter2 + ' h1').css('border-bottom', '3px solid #3498db');
//     counter2 += 1;
//
//     if (counter2 === max2) {
//       counter2 = 1;
//     }
//     callAnimate2();
//   }
//
//   function clickSlider($this) {
//     var $getClass = $this.attr("class").split(' ');
//     var $whichNumber = $getClass[0].substr(-1);
//     var $thisParent = $this.closest('.parallax-container').attr('class').split(' ')[1];
//
//     pass = 1;
//     $('.' + $thisParent + $allLi + ' h1').css('color', '#fff');
//     $('.' + $thisParent + $allLi + ' h1').css('border-bottom', 'none');
//     // $this.find('h1').css('color', '#666');
//     $this.find('h1').css('border-bottom', '3px solid #3498db')
//
//     $('.' + $thisParent + $parallaxContentContainer).hide();
//     $('.' + $thisParent + $parallaxContentContainer + '-' + $whichNumber).fadeIn(animationSpeed);
//   }
//
//   $($allLi).on('click', function() {
//     clickSlider($(this));
//   });
//
//   function callAnimate1() {
//     if (pass === 0) {
//       var sliderInterval1 = setTimeout(animateSlider1, 5000);
//     }
//     else {
//       setTimeout(function() {
//         pass = 0;
//         callAnimate1();
//       }, 15000);
//     }
//   }
//
//   function callAnimate2() {
//     if (pass === 0) {
//       var sliderInterval2 = setTimeout(animateSlider2, 5000);
//     }
//     else {
//       setTimeout(function() {
//         pass = 0;
//         callAnimate2();
//       }, 15000);
//     }
//   }
//
//   callAnimate1();
//   callAnimate2();
// }
//
//
// function mobileScript() {
//   if ( $(window).width() > 1024) {
//     mainSlider();
//   }
//   else {
//     var $allLi = ' .main-parallax-container li';
//     var $parallaxContentContainer = ' .parallax-content-container';
//     function clickSlider($this) {
//       var $getClass = $this.attr("class").split(' ');
//       var $whichNumber = $getClass[0].substr(-1);
//       var $thisParent = $this.closest('.parallax-container').attr('class').split(' ')[1];
//
//
//       $('.' + $thisParent + $allLi + ' h1').css('color', '#fff');
//       $this.find('h1').css('color', '#3498db');
//
//       $('.' + $thisParent + $parallaxContentContainer).hide();
//       $('.' + $thisParent + $parallaxContentContainer + '-' + $whichNumber).fadeIn(800);
//     }
//
//     $($allLi).on('click', function() {
//       clickSlider($(this));
//     });
//   }
// }







function color1() {
  var pass = 0;
  var counter = 2;
  var animationSpeed = 500;

  var $colorContent = '.color-container-1 .color-content-container';
  var $li = '.color-container-1 .main-color-container li';
  var $liContainer = '.color-container-1 .container-';


  $($li).on('click', function() {
    clearInterval(colorInterval);
    colorClick($(this));
  });

  function colorClick($this) {
    var $getClass = $this.attr("class").split(' ');
    var $whichNumber = $getClass[0].substr(-1);
    var $Parent = '.color-container-1 ';

    pass = 1;
    $($colorContent).fadeOut(0);
    $($colorContent + '-' + $whichNumber).fadeIn(animationSpeed);
    $($li).css('border-bottom', 'none');
    $this.css('border-bottom', '1px solid #3498db');

    var reset = setTimeout(function() {
      clearInterval(colorInterval);
      pass = 0;
      color1();
    }, 7000);
  }



  var colorInterval = setInterval(function() {
    if (pass > 0) {
      clearInterval(colorInterval);
      return; //stop here so that it doesn't continue to execute below code
    }

    $($colorContent).fadeOut(0);
    $(($colorContent + '-' + counter)).fadeIn(animationSpeed);
    $($li).css('border-bottom', 'none');
    $($liContainer + counter).css('border-bottom', '1px solid #3498db');
    ++counter

    if (counter === $($colorContent).length + 1) {
      counter = 1;
    }

  }, 7000);
}







color1();
















function checkContent() {
    var $buttons = '.whitespace-container .button';
    var $content = '.whitespace-container .content';

    $($buttons).on('click', function() {
      var $this = $(this);
      var $secondClass = $this.attr("class").split(' ');
      var $thisContent = $secondClass[2] + '-' + $secondClass[3];
      var $parent = $this.closest('.whitespace').attr('class').split(' ')[1]

      $('.' + $parent + ' ' + $buttons).css('background-color', '#1A5DA1');
      $this.css('background-color', '#003F83');

      $('.' + $parent + ' ' + $content).css('display', 'none');
      $('.' + $thisContent).fadeIn(800);
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
