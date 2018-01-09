$(function(){
	$('#search').keyup(function(){
		changeColor($(this).val());
	});
});
	function changeColor(searchText){
	if (searchText) {
		var allText = $('p').text();
		var searchExp = new RegExp(searchText , "ig");
		var matches =  allText.match(searchExp);
		if(matches){
			$('p').html(allText.replace(searchExp , function(match){
				return "<span class='changeBackground'>"+ match + "</span>"
			}));
		}
	}
}


