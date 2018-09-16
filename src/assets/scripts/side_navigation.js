
$(function() {

  $('.sidebar .item').on('click', function() {
    $('.sidebar .item').removeClass('active');
    $(this).addClass('active');

  });

});
