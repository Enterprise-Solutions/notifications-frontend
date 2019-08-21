
$('#include_image').change(function (e) {
  if ($(this).prop('checked') === true) {
    $('#image_url_group').show();
    $('#image_url').prop('required', true);
  } else {
    $('#image_url_group').hide();
    $('#image_url').prop('required', false);


  }
});
$('#include_action').change(function (e) {
  if ($(this).prop('checked') === true) {
    $('#action_group').show();
    $('#action_destination_group').show();
    $('#action_destination').prop('required', true);
  } else {
    $('#action_group').hide();
    $('#action_destination_group').hide();
    $('#action_destination').prop('required', false);


  }
});

// tslint:disable-next-line:only-arrow-functions
$('#send_to').change(function (e) {
  const selectedVal = $('#send_to option:selected').val();
  if (selectedVal === 'topic') {
    $('#topic_group').show();
    $('#topic').prop('required', true);
    $('#firebase_token_group').hide();
    $('#firebase_token').prop('required', false);
  } else {
    $('#topic_group').hide();
    $('#topic').prop('required', false);
    $('#firebase_token_group').show();
    $('#firebase_token').prop('required', true);
  }
});

