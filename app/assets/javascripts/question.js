
$(document).ready(function(){//protect the lemmings!
	$('.new-question, .overlay, form::after').on('click',function(){
		$('form').toggle();
		$('.overlay').toggle();
	});

	$.ajax({
		type:"GET",
		url: "/tags",
		dataType: "json",
		success: function(data){
			var tagHolder = $('.tag-cloud')
			$.each(data, function(i,e){
				console.log(e.tag)
				var tag = $('<div/>').text(e.tag);
				tagHolder.prepend(tag)
			});
		}
	});

	%('.tag-cloud div').on('click',function(){
		$.ajax({
		type:"GET",
		url: "/tags",
		dataType: "json",
		success: function(data){
			var tagHolder = $('.tag-cloud')
			$.each(data, function(i,e){
				console.log(e.tag)
				var tag = $('<div/>').text(e.tag);
				tagHolder.prepend(tag)
			});
		}
	});
	});
	
	$('input[name="commit"]').hide();

	$('input').on('blur',function(){

	var complete;

	$('input').each(function(){
			if ($(this).val()){
				complete = true;
				console.log($(this).val());
			}else{
				console.log($(this).val());
				console.log('false')
				complete = false;
			}
		})
		if(complete){
			console.log('rawr')
			$('input[name="commit"').show()
		}
	});
});


