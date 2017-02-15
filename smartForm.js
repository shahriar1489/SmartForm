// Your jQuery goes here


// she used prop


//<button class="btn btn-primary btn-lg">Start Survey</button>
/*
$(".btn-primary").click(function(){// upon clicking the START survey button
		// hide the contents on display
	  // go to q1
		("#welcome").hide();	// 13:17 NOT WORKING. hide the


			note that before the css should be manipulated to show the contents


		//("").show();
});
*/

var userData = {
	name: '',
	email: '',
	html: [],
	css: [],
	js: [],
	htmlSkill: null,
	cssSkill: null,
	jsSkill: null,
	position: "welcome"
};


$(document).ready(function(){

	function validateName(name)
	{
		var re = /^[A-z ]+$/;	// 15:04
		return re.test(name);
	}

	function validateEmail(email)
	{
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	$("#start_button").click(function(event){

		$("#welcome").hide();
		$("#q1").show();
		$("#q1").attr("display", "block");

	});	// 15:24 works

	$("#q1NextButton").click(function(event){	// 17:06 not working

		if(validateEmail( $("#exampleInputEmail1").val()) && validateName( $("#name").val() ))	// check if both input for name and email are valid
		{
			$("#q1").hide();	// hide the element on display
			$("#q2").show(); // show the follwing hidden element by-
			$("#q2").attr("display", "block");	// changing value of dispute
		}

		else{

			if(validateName( $("#name").val() ) && !validateEmail( $("#exampleInputEmail1").val() )){
				alert("ERROR: Invalid Email Input.");
			}

			else if(!validateName( $("#name").val() ) && validateEmail( $("#exampleInputEmail1").val() )){
				alert("ERROR: Invalid Name Input.");
			}

			else if(!validateName( $("#name").val() ) && !validateEmail( $("#exampleInputEmail1").val() )){
				alert("ERROR: Invalid Name & Email Input.");
			}
		}
	});	// 17:17 works

	$(".fet").click(function(event){	// any of the FrontEndTechnology clicked

		var chosen = $(this).text();	// know the one chosen

		if(chosen == "HTML"){
			// q2a
			//console.log(chosen);
			//document.write(chosen);
			$("#q2").hide();	// hide the element on display
			$("#q2a").show(); // show the follwing hidden element by-
			//$("#q2a").attr("display", "block");	// changing value of dispute
		}

		else if(chosen == "CSS") {
			// q2b
			//console.log(chosen);
			//document.write(chosen);
			$("#q2").hide();	// hide the element on display
			$("#q2b").show(); // show the follwing hidden element by-
			//$("#q2b").attr("display", "block");	// changing value of dispute
		}

		else{
			// javascript q2c
			//console.log(chosen);
			//document.write(chosen);
			$("#q2").hide();	// hide the element on display
			$("#q2c").show(); // show the follwing hidden element by-
			//$("#q2c").attr("display", "block");	// changing value of dispute
		}

	});	// 9:26 works
});
