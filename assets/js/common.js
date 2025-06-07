// JavaScript Document
$(function () {

  /*** ナビゲーションメニュー ***/
  $('.close-button, .open-button').on("click", function () {
    $('.header nav').slideToggle();
  });

});
