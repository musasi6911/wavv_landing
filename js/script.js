$(function(){

  // 主選單控制
  var ab = $('.about').offset().top;
  var el1 = $('.main-block').eq(0).offset().top;
  var el2 = $('.main-block').eq(1).offset().top;
  var el3 = $('.main-block').eq(2).offset().top;

  $('.hd-top a').eq(0).click(function(){
    $('html, body').animate({scrollTop: ab}, 500);
    return false;
  })

  $('.hd-top a').eq(1).click(function(){
    $('html, body').animate({scrollTop: el1}, 500);
    return false;
  })

  $('.hd-top a').eq(2).click(function(){
    $('html, body').animate({scrollTop: el2}, 500);
    return false;
  })

  $('.hd-top a').eq(3).click(function(){
    $('html, body').animate({scrollTop: el3}, 500);
    return false;
  })

  // 類別選取按鈕
  $('.write').css({
    'background-color': '#c30d22',
    'border-color': '#c30d22',
  })
  $('.write, .listen').click(function(){
    $('label').removeAttr('style');
    $(this).css({
      'background-color': '#c30d22',
      'border-color': '#c30d22',
    })
  })

  // RWD 漢堡選單點擊
  $('.hd-top i').click(function(){
    $('.hd-top ul').slideToggle();
  })

})































