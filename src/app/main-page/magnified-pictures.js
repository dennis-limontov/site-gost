import $ from "jquery";

export default function() {
  $(function(){
    $('.minimized').click(function(event) {
      // var i_path = $(this).attr('src');
      var i_path = $(this).children()[0].currentSrc.replace($(this).children()[0].baseURI, "");
      var i_text = ""; // "some_text";
      let buildings = [
        "Ветка",
        "Житковичи",
        "Калинковичи",
        "Киров",
        "Петриков",
        "Ровковичи",
        "Чечерск",
        "Житковичи",
        "Житковичи",
        "Ветка",
        "Ветка",
        "Петриков",

        "Житковичи",
        "Добрушский р-н",
        "Гомель",
        "МТФ",
        "МТФ",
        "Песочная Буда",
        "Ровковичи",
        "Хальч",

        "Ветка",
        "Житковичи",
        "Житковичи",
        "Добруш",
        "Петриков",
        "Радуга",
        "Чечерск",
        "Районная ЦРБ",
        "Ветка",
        "Чечерск",
        "Петриковский р-н",
        "Ветка",
        "Житковичи",
        "Радуга",
        "Залесье"
      ];
      let towns = [
        "Жилой дом, 30 квартир",
        "Жилой дом, 40 квартир",
        "Жилой дом, 45 квартир",
        "Общежитие",
        "Жилой дом",
        "Одноквартирные жилые дома",
        "Жилой дом, 40 квартир",
        "Жилой дом, 60 квартир, 10-й мкр-н",
        "Жилой дом, 40 квартир, мкр-н Озёрный",
        "Жилой дом, 60 квартир",
        "Жилой дом",
        "Жилой дом",

        "Котельная",
        "Котельные",
        'Завод "Кристалл"',
        "МТФ",
        "МТФ",
        'Птицефабрика "Рассвет"',
        "Свиноводческий комплекс",
        'ОАО "Хальч"',

        "Бассейн",
        "Больница",
        'Гостиница "Четверть Века"',
        "",
        "Дом культуры",
        'ГУО "Радужский детский сад"',
        "Прокуратура",
        "Районная ЦРБ",
        "Детский сад",
        'СОК "Бриз"',
        "Средняя школа",
        "ФОК",
        "ФОК",
        "Средняя школа",
        "Средняя школа"
      ];
      
      console.log(i_path);
      
      $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="magnify_text">'+i_text+'</div><div id="close-popup"><i></i></div></div>');
      $('#magnify').css({
        left: ($(document).width() - $('#magnify').outerWidth())/2,
        // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
        top: ($(window).height() - $('#magnify').outerHeight())/2
      });
      $('#overlay, #magnify').fadeIn('fast');
    });
    
    $('body').on('click', '#close-popup, #overlay', function(event) {
      event.preventDefault();
   
      $('#overlay, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay').remove();
      });
    });
  });
}