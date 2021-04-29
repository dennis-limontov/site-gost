import $ from "jquery";

export default function() {
  function validateEmail1(email1lp) { 
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email1lp);
  }
  $(document).ready(function() {
    $("#contact-lp").submit(function() { return false; });
    $("#send-lp").on("click", function(){
      var email1val  = $("#email1lp").val();
      var namevl  = $("#name-lp").val();
      var phonevl  = $("#phone-lp").val();
      var msgval    = $("#msg-lp").val();
      var msglen    = msgval.length;
      var mailvalid = validateEmail1(email1val);

      if(mailvalid == false) {
        $("#email1lp").addClass("error");
      }
      else if(mailvalid == true){
        $("#email1lp").removeClass("error");
      }
      if(mailvalid == false) {
        $("#name-lp").addClass("error");
      }
      else if(mailvalid == true){
        $("#name-lp").removeClass("error");
      }
      if(mailvalid == false) {
        $("#phone-lp").addClass("error");
      }
      else if(mailvalid == true){
        $("#phone-lp").removeClass("error");
      }
      if(msglen < 4) {
        $("#msg-lp").addClass("error");
      }
      else if(msglen >= 4){
        $("#msg-lp").removeClass("error");
      }
      
      if(mailvalid == true && msglen >= 4) {
        // если обе проверки пройдены
        // сначала мы скрываем кнопку отправки
        $("#send-lp").replaceWith("<em>отправка...</em>");
        $.ajax({
          type: 'POST',
          url: './sendmessage-lp.php',
          data: $("#contact-lp").serialize(),
          success: function(data) {
            if(data == "true") {
              $("#contact-lp").fadeOut("fast", function(){
                $(this).before("<p><strong>Ваше сообщение успешно отправлено!😉<br> Хорошего Вам дня :)</strong></p>");
              });
            }
          }
        });
      }
    });
  });
}