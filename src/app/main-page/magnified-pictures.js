import $ from "jquery";

export default function() {
  $(function(){
    $('.minimized').click(function(event) {
      // var i_path = $(this).attr('src');
      var i_path = $(this).children()[0].currentSrc.replace($(this).children()[0].baseURI, "");
      var i_text = ""; // "some_text";
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