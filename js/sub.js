$(function() {
  var $header = $('#top-head');
  $('#nav-toggle').click(function(){
      $header.toggleClass('open');
  });


});

$(document).ready(function(){
 $(".tyuto_toggle").click(function(){
   $(this).next().slideToggle(300);
 });
});
