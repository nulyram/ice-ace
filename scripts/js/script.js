$(document).ready(function(){

  // Карусель авторов

  $('#instructors-list, #instructors-list-bottom').slick({
    arrows: false,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.instructors__item').on('click', function(event){
    event.preventDefault();
    var targetId = $(this).attr('href');
    $('.instructor--shown').removeClass('instructor--shown');
    $(targetId).addClass('instructor--shown');
    $('.instructors__item--active').removeClass('instructors__item--active');
    $(this).addClass('instructors__item--active');
  });

  var availableUsers = [
    "Василий Пушкин",
    "Иван Коляда",
    "Исаак Ньютон",
    "Виктор Пелевин",
    "Карл Маркс",
  ];
  $( "#instructors-search" ).autocomplete({
    source: availableUsers
  });



  // Проверка формы

  $("#commentForm").validate();



  // Менюха

  $('#burger').on('click', function(){
    $('#menu').slideToggle(1200);
  });



  // Работа корзины

  calcPrice();

  $('#card input').on('input', function(){
    calcPrice();
  });

  function calcPrice(){
    var result = 0;
    $('#card tr').each(function(){
      var tempResult = $(this).find('.price').text() * $(this).find('input').val();
      result = result + tempResult;
    });
    $('#price').text(result);
  }

});
