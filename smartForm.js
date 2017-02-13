// Your jQuery goes here

var userData = {};

$("#start").click(function(event){
	$("#q1").show();
	$("#welcome").hide();
});

$("name").on("change", function(){
	console.log($(this).val());
});

// she used prop
