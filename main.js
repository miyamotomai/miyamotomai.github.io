//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});

//pagetop
$(function() {
  var topBtn = $('.pagetop');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
  //ボタンの表示方法
  topBtn.fadeIn();
  } else {
  //ボタンの非表示方法
  topBtn.fadeOut();
  }
  });
  //スクロールしてトップ
  topBtn.click(function () {
  $('body,  html').animate({
  scrollTop: 0
  },   500);
  return false;
  });
  });