$(function() {
  mobileNav(200);
  checkContent();
});



function mobileNav(duration) {
  var $mobileContainer = $('.mobile-nav');
  var $x = $('.x');

  $x.click(function() {
    $mobileContainer.toggle(duration);
  });
}





function checkContent() {
  $button = $('.button');

  $button.on('click', function() {
    var $this = $(this);
    var $secondClass = $this.attr("class").split(' ');
    var $thisContent = $secondClass[2] + '-' + $secondClass[3];

    $button.css('background-color', 'transparent');
    $this.css('background-color', '#2980b9');
    $('.content').slideUp();
    $('.' + $thisContent).slideDown();
  });
}
