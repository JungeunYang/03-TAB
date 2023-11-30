$(function () {
  const $tabMenu = $('.tab-menu > li');
  const $tabContent = $('.tab-con-item');

  // 초기세팅
  tabAction(0);

  $tabMenu.on('click', function () {
    let idx = $(this).index();

    tabAction(idx);

    // $tabMenu.removeClass('on');
    // $tabMenu.eq(idx).addClass('on');

    // $tabContent.hide();
    // $tabContent.eq(idx).show();
  });

  //중복되는 동작 함수로 정의
  /* 위에 주석처리한부분 주석처리하고나면 계속해서 0번째 인덱스만 보여줌 -> tabAction() 괄호자리에 매개변수를 줘야함 -index를 줌
  그리고 아래에 eq(index)라는 같은 매개변수가 타고 내려올 수 있게 넣어줌 */
  /* 그리고 초기세팅에 tabAction(0) 값을 넣어줌 첫번째로 보여줄 값 그러면 아래 function tabAction의 괄호에도 (0)이 적용된 상태를 볼 수 있음 */

  function tabAction(index) {
    $tabContent.hide();
    $tabContent.eq(index).show();

    $tabMenu.removeClass('on');
    $tabMenu.eq(index).addClass('on');
  }
});
