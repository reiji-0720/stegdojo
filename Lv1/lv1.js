
$(function(){
  
  $('body').fadeIn(3000);  
  $('.call').hover  (
    function(){
      $('call').css('transition-duration','5s');
      $('.call').css('filter','drop-shadow(10px 10px 10px rgba(0,0,0,0.6))');
    },
    function(){

    }
  );
  
});

