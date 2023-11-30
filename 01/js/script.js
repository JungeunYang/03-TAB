$(function () {
  const $tabMenu = $('.tab-menu > li');
  const $tabContent = $('.tab-con-item');

  // 초기세팅
  tabAction();

  $tabMenu.on('click', function () {
    $tabMenu.removeClass('on');

    let idx = $(this).index();
    $tabMenu.eq(idx).addClass('on');

    $tabContent.hide();
    $tabContent.eq(idx).show();
  });

  //중복되는 동작 함수로 정의
  function tabAction() {
    $tabContent.hide();
    $tabContent.eq(0).show();

    $tabMenu.removeClass('on');
    $tabMenu.eq(0).addClass('on');
  }
});
