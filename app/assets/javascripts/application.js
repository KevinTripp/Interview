// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


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
				var tag = $('<div/>').text(e.tag);
				tagHolder.prepend(tag)
			});
		}
	});

	$('.tag-cloud div').on('click',function(){
		$.ajax({
		type:"GET",
		url: "/tags",
		dataType: "json",
		success: function(data){
			var tagHolder = $('.tag-cloud')
			$.each(data, function(i,e){
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
			}else{
				complete = false;
			}
		})
		if(complete){
			$('input[name="commit"').show()
		}
	});
});
