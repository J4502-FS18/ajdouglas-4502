$(document).ready(function(){

  $('.menutrigger').click(function(){
    $('.container').slideToggle(500);
  });

$(window).resize(function(){
  if($(window).width()>500){
    $('.container').removeAttr('style');
  }
});
});
