$(function(){
  
  $('body').fadeIn(3000);
    // SNSボタン
    $('.social-icon').hover(
      function(){
        $(this).children('span').animate({
          'font-size':'30px'
        }, 300);
      },
      function(){
        $(this).children('span').animate({
          'font-size':'24px'
        }, 300);
      }
    );
    
    $('#top-btn').click(function(){
      // animateメソッドを用いて、
      // アニメーション付きでスクロールするようにしてください。
      $('html, body').animate({
        'scrollTop':0
        
      },500);
    });
    
  });