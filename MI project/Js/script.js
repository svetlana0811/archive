$(function () {
	$('.dropbtn').on('click' , function(){
		$('#myDropdown').toggle('show');
	})
	function validateEmail($email) {
      var emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return emailReg.test( $email );
    }
    function validatePhone($phone) {
            var filter = /^(\+\d{1,3}[- ]?)?\d{10}$/;
      return filter.test( $phone );
    }
	$(".inputs").keyup(function(){
		$(this).removeClass('borderError');
	})
	$('#form').on('submit', function(){
		$(".inputs").each(function() {
		   var element = $(this);
		   if (element.val() == "") {
		       $(this).addClass('borderError');
		   }
		   else if(!validateEmail($('#email').val())){
		   	$('#email').addClass('borderError');
		   }
		   else if(!validatePhone($('#phone').val())){
		   	$('#phone').addClass('borderError');
		   }
		   else{
		   	alert("you have successfully registered");
		   	return true;
		   }
		});
		 return false;
	})
	$('.careers').on('click' , function(){
		$('.secondMain').hide();
		$('.forthMain').hide();
		$('.homeDiv').hide();
		$('.thirdMain').show();
		$('.fullSection7').hide();
		$('.fullSection6').hide();
		$('.section5').hide();
	})
	$('#appLy').on('click' , function(){
		$('.secondMain').hide();
		$('.forthMain').show();
		$('.homeDiv').hide();
		$('.thirdMain').hide();
		$('.fullSection7').hide();
		$('.fullSection6').hide();
		$('.section5').hide();
	})
	$('.about').on('click' , function(){
		$('.secondMain').show();
		$('.forthMain').hide();
		$('.homeDiv').hide();
		$('.thirdMain').hide();
		$('.fullSection7').hide();
		$('.fullSection6').hide();
		$('.section5').hide();
	})
	$('.contact').on('click' , function(){
		$('.secondMain').hide();
		$('.forthMain').show();
		$('.homeDiv').hide();
		$('.thirdMain').hide();
		$('.fullSection7').hide();
		$('.fullSection6').hide();
		$('.section5').hide();
	})
	$('.home').on('click' , function(){
		$('.secondMain').hide();
		$('.forthMain').hide();
		$('.thirdMain').hide();
		$('.homeDiv').show()
		$('.fullSection7').hide();
		$('.fullSection6').hide();
		$('.section5').hide();
	})
	$('.faq').on('click' , function(){
		$('.secondMain').hide();
		$('.forthMain').hide();
		$('.homeDiv').hide();
		$('.thirdMain').hide();
		$('.fullSection7').hide();
		$('.fullSection6').show();
		$('.section5').hide();
	})
	$('.services').on('click' , function(){
		$('.secondMain').hide();
		$('.forthMain').hide();
		$('.homeDiv').hide();
		$('.thirdMain').hide();
		$('.fullSection7').hide();
		$('.fullSection6').hide();
		$('.section5').show();
	})
})