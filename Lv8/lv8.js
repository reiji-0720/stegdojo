$(window).on('load scroll', function (){
    var box = $('.one');
    var animated = 'animated';
    box.each(function(){
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
      if(scrollPos > boxOffset - wh + 300 ){
        $(this).addClass(animated);
      }
    });
    var box = $('.two');
    var animated = 'animated';
    box.each(function(){
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
      if(scrollPos > boxOffset - wh + 300 ){
        $(this).addClass(animated);
      }
    });
    var box = $('.three');
    var animated = 'animated';
    box.each(function(){
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
      if(scrollPos > boxOffset - wh + 300 ){
        $(this).addClass(animated);
      }
    });
    var box = $('.four');
    var animated = 'animated';
    box.each(function(){
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
      if(scrollPos > boxOffset - wh + 300 ){
        $(this).addClass(animated);
      }
    });
    var box = $('.five');
    var animated = 'animated';
    box.each(function(){
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
      if(scrollPos > boxOffset - wh + 300 ){
        $(this).addClass(animated);
      }
    });
  });




