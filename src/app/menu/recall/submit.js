export default function submit() {
  $('#recall').submit(function(e){
    e.preventDefault();

    const data = $(this).serialize();
    console.log("data", data);

    $.ajax({
      url: 'mail.php',
      type: 'POST',
      data,
      beforeSend: () => {
        $('#submit').next().text('Sending...');
      },
      success: (res) => {
        $('#recall').find('input').val('');
        $('#submit').next().html(res);
      },
      error: () => {
        console.error('Error: send email');
      }
    });
  });
}
