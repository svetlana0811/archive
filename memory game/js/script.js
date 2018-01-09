$(function(){
    var imagesCount = 8;
    var images = [];
    $('.blocks').hide();
    $('.gameOver').hide();
    $('.time').hide();
    $('.youWin').hide();

    var timeCount =60 ; 

    $('.start_button').on('click' , function(){
     intervalID = setInterval(function() {
        $('.time').fadeIn(200);
        if(timeCount == 0){
            
            $('.time').fadeOut();
            $('.blocks').fadeOut(200);

            $('.gameOver').fadeIn();
            var audioFalse = document.createElement('audio');
                audioFalse.setAttribute('src', 'sounds/game-over-sound.wav');
                audio(audioFalse);
            clearInterval(intervalID);
        }
        $('.time').text('You have ' + timeCount--  +' secunds')
        
}, 1000);
        $('.startDiv').fadeOut(500 , function() {
            $('.blocks').fadeIn(200);
  });
    })

    for(i=1;i<=imagesCount;i++){
        images.push('pic'+i); 
    }    
    function shuffle(array) {
	let counter = array.length;

	while (counter > 0) {
	    let index = Math.floor(Math.random() * counter);
	    counter--;
	    let temp = array[counter];
	    array[counter] = array[index];
	    array[index] = temp;
	}
	return array;
}
    
    
    var newArr = images.concat(images);
    var shuffleArray = shuffle(newArr);
    
    for(i=0;i<shuffleArray.length;i++){
        
        var div = $('<div>');
        div.addClass('block');
        var img = $('<div>');
        img.addClass(shuffleArray[i]);
        div.append(img);
        div.attr('data-blockname',shuffleArray[i]);
        img.addClass('hide');
        $('.blocks').append(div);
        
    }
   
    var step = 1;
    var newImg = [];
    $('.block').on('click',function(){
        
       if($(this).hasClass('clicked') ||
         $(this).hasClass('match')){
           
           return false;
       }
        $(this).find('div').removeClass('hide');
       $(this).addClass('clicked'); newImg.push($(this).data('blockname'));
        if(step%2==0){
            
            if(newImg[0]==newImg[1]){
                $('.clicked').addClass('match');
                $('.match').find('div').removeClass('hide');
                var audioTrue = document.createElement('audio');
                audioTrue.setAttribute('src', 'sounds/button-37.mp3');
                audio(audioTrue);
                 newImg = [];

            }
            else{
                
               $('.clicked').addClass('not-match'); 
                $('.match').removeClass('not-match'); 
                setTimeout(function(){
                    
                 $('.not-match').find('div').addClass('hide');    
                    
                },500)
                
                $('.block').removeClass('clicked');
                var audioFalse = document.createElement('audio');
                audioFalse.setAttribute('src', 'sounds/metal_plate_2.mp3');
                audio(audioFalse);
                newImg = [];
            }
            if($('.match').length == imagesCount*2){

                $('.blocks').fadeOut();
                 $('.time').fadeOut();
                 $('.youWin').fadeIn();
                 clearInterval(intervalID);
                 var audioFalse = document.createElement('audio');
                audioFalse.setAttribute('src', 'sounds/winner.mp3');
                audio(audioFalse);
            }
        }
        step++;       
    })   
    function audio(audioElement){ 
        var sound =  new Audio();       
    var times = 1;
            var loop = setInterval(repeat, 500);
        function repeat() {
            times--;
            if (times === 0) {
                clearInterval(loop);
            }
            audioElement.play();
        }
        repeat();           
    };

    $('.tryAgainDiv').on('click' , function(){
            ReloadPage()
    })
        function ReloadPage() {
               location.reload();
            }; 
})