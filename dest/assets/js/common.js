// ローディング
// 参考：https://kigiroku.com/frontend/loder.html
$(function() {
  var $Main_Contents = $('#js-Main_Contents'),
      $Header = $('#js-Header');

  $Main_Contents.delay(2000).css('display','block');

  $Header.delay(5000).queue(function() {
    $(this).addClass('fade-In').dequeue();
  });
});

// ローディング
// 参考：https://kigiroku.com/frontend/loder.html
$(window).on('load', function() {
  var $Loading_Contents = $('#js-Loading_Contents');

  $Loading_Contents.delay(2600).fadeOut(800);

});


// スムーススクロール
// 参考：http://kyasper.com/jquery-tips/
// エラー対応 https://goo.gl/yai3jM
$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top - 50;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


// menuボタン nav
// TweenMax
// 参考
// https://liginc.co.jp/web/js/other-js/94188
// https://www.feelbee.jp/tweenmax_demo01
// http://un-tech.jp/tweenmax-started/
$(function() {
  var $Btn_Menu = $('.js-Btn'),
      $Btn_Nav = $('#js-Nav'),
      $nav_Bg_Up = $('#js-Nav_Up'),
      $nav_Bg_Btm = $('#js-Nav_Btm');
      $header = $('.st-Header_Wrapper');

  $Btn_Menu.on('click', function() {
    $Btn_Menu.toggleClass("active");
    $Btn_Nav.toggleClass("active");
    $header.toggleClass("active");

    if($(this).hasClass('active')){
      TweenMax.to($nav_Bg_Up, 0.2, {
        left: 0
      });
      TweenMax.to($nav_Bg_Btm, 0.2, {
        right: 0,
        delay: 0.1
      });
    } else {
      TweenMax.to($nav_Bg_Up, 0.2, {
        left: "100%",
        delay: 0.5
      });
      TweenMax.to($nav_Bg_Btm, 0.2, {
        right: "100%",
        delay: 0.6
      });
    }
  });
});

// パララックス
// 参考：https://dev.classmethod.jp/etc/html5-x-css3-x-jquery-6-parallax/
$(function() {

  $(window).scroll(function() {
    var value = $(this).scrollTop();  //スクロール値を取得
    // $('#scrollValue').text(value);
    // console.log(value);

    $('#js-parallax_01').css('top', value / 10);
    $('#js-parallax_02').css('top', value / 8);
    $('#js-parallax_03').css('top', -300 + value / 9);
    $('#js-parallax_04').css('top', value / 10);
    $('#js-parallax_05').css('top', value / 10);
    $('#js-parallax_06').css('top', -500 + value / 9);
  });
});
