$(function() {
  mobileNav();
  checkContent();
});



function mobileNav() {
  var $linkContainer = $('.link-container');
  var $x = $('.x');

  $x.click(function() {
    $linkContainer.toggleClass('nav-open');
  });
}





function checkContent() {
  $button = $('.button');

  $button.on('click', function() {
    var $this = $(this);
    var $secondClass = $this.attr("class").split(' ');
    var $thisContent = $secondClass[2] + '-' + $secondClass[3];

    $button.css('background-color', '#2980b9');
    $this.css('background-color', '#2ecc71');
    $('.content').slideUp();
    $('.' + $thisContent).slideDown();
  });
}
