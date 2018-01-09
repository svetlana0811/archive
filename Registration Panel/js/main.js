$(document).ready(function() {
  function validateEmail($email) {
    var emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailReg.test( $email );
  }
  function validatePhone($phone) {
    var filter = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return filter.test( $phone );
  }

$('#registrationForme').submit(function(){
  if($('#nameInput').val() == '' ){
    $('#nameInput').css({"border":"1px solid red"});
    return false;
  }
  else if($('#age').val() == ''){
    $('#age').css({"border":"1px solid red"});
    return false;
  }
  else if($('#phone').val() == '' || validatePhone($('#phone').val()) == false){
    $('#phone').css({"border":"1px solid red"});
    return false;
  }
  else if($('#mail').val() == '' || validateEmail($('#mail').val()) == false){
    $('#mail').css({"border":"1px solid red"});
    return false;
  }
  else{
    return true;
  }
})

function keyUp(a){
    a.keyup(function(){
        a.css({"border":"1px solid"});
    })
}
keyUp($('#nameInput'));
keyUp($('#age'));
keyUp($('#phone'));
keyUp($('#mail'));
});