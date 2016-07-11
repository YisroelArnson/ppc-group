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

    $button.css('background-color', '#3D8EB9');
    $this.css('background-color', '#2ecc71');
    $('.content').slideUp();
    $('.' + $thisContent).slideDown();
  });
}
