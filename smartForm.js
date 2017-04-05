var userData = {
	name: '',	// in
	email: '',	// in

	html: [],	// in
	css: [],	// in
	js: [],	// in

	htmlSkill: null,	//
	cssSkill: null,	//
	jsSkill: null, //
	position: "welcome"	// 19:35 WHAT IS THIS FOR???
};

var strUserData;
var showPage;
//localStorage.setItem("lPos", userData.position);// position

$(document).ready(function(){

	console.log("Line 21: lPos = " + localStorage.getItem("lPos") );
	showPage = localStorage.getItem("lPos");
	if( (showPage != "welcome"))	// lPos is not the welcome page and
	{
		console.log("19:46 lObj: "+ localStorage.getItem("lObj"));
		console.log("19:46 showPage " + showPage);


		userData = JSON.parse(localStorage.getItem("lObj"));
		console.log("userData = " + userData);

		var tempshowPage = "#" + showPage;	// id convention
		$('#welcome').hide();
		$(tempshowPage).show();
	}

	//console.log("19L48 showPage = " + showPage);
	if( (showPage == "showRes") )	// lPos is not the welcome page and
	{
		//console.log("lObj: "+ localStorage.getItem("lObj"));
		//console.log("showPage " + showPage);


		//userData = JSON.parse(localStorage.getItem("lObj"));
		//console.log("userData = " + userData);

		showPage = "#" + showPage;	// id convention
		$('#welcome').show();
		$(showPage).hide();
	}

	function validateName(name){
		var re = /^[A-z ]+$/;	// 15:04
		return re.test(name);
	}

	function validateEmail(email){
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	$("#start_button").click(function(event){
		$("#welcome").hide();
		strUserData = null;
		userData.position = "q1";
		localStorage.setItem("lPos", userData.position);// position
		$("#q1").show();
	});	// 15:24 works

	$("#q1NextButton").click(function(event){
		if(validateEmail( $("#exampleInputEmail1").val()) && validateName( $("#name").val() ))	// check if both input for name and email are valid
		{
			userData.name = $("#name").val();
			userData.email = $("#exampleInputEmail1").val();

			strUserData = JSON.stringify(userData);
			//console.log("strUserData " + strUserData);

			userData.position = "q2";
			localStorage.setItem("lPos", userData.position);// position
			localStorage.setItem("lObj", strUserData);

			$("#q1").hide();	// hide the element on display
			$("#q2").show(); // show the follwing hidden element by-
		}

		else{

			if(validateName( $("#name").val() ) && !validateEmail( $("#exampleInputEmail1").val() ))
			{
				//$("#q1NextButton").prop("disabled", true);
				$("#exampleInputEmail1").focus();
				alert("ERROR: Invalid Email Input.");
			}

			else if(!validateName( $("#name").val() ) && validateEmail( $("#exampleInputEmail1").val() ))
			{
				$("#name").focus();
				alert("ERROR: Invalid Name Input.");
			}

			else if(!validateName( $("#name").val() ) && !validateEmail( $("#exampleInputEmail1").val() )){
				$("#name").focus();
				alert("ERROR: Invalid Name & Email Input.");
			}
		}
	});	// 17:17 works

	$(".fet").click(function(event){	// any of the FrontEndTechnology clicked
		var chosen = $(this).text();	// know the one chosen

		if(chosen == "HTML"){
			$("#q2").hide();	// hide the element on display
			userData.position = "q2a";
			localStorage.setItem("lPos", userData.position);// position
			$("#q2a").show(); // show the follwing hidden element by-
		}
		else if(chosen == "CSS") {
			$("#q2").hide();	// hide the element on display
			userData.position = "q2b";
			localStorage.setItem("lPos", userData.position);// position
			$("#q2b").show(); // show the follwing hidden element by-
		}
		else{
			$("#q2").hide();	// hide the element on display
			userData.position = "q2c";
			localStorage.setItem("lPos", userData.position);// position
			$("#q2c").show(); // show the follwing hidden element by-
		}
	});	// 9:26 works

	$("#htmlPrev").click(function(event){	// 00:05 this is okay
		 var eyeD, i, temp, found = false;
		 userData.html = [];
		 userData.html = [];
		// console.log("LINE 85");

		 for(i = 111; i <=114; i++)	// push the response if they are selected
		 {
			 eyeD = "#" + i.toString();
			 console.log("eyeD = " + eyeD + ", " + typeof eyeD);	// 11:19 data is of string type

			 // 17:32 first see if a checkbox is checked or not
			 if( $(eyeD).prop("checked") == true){
				  console.log(eyeD + " is checked");
				 	userData.html.push(eyeD);
			 }
			 else{	// if the checkbox is unchecked
				 if( userData.html.indexOf(eyeD) != -1){ // if the data is in the array
					 	temp = userData.html.indexOf(eyeD);	// get the index of the element
						userData.html.splice(temp, 1);	// remove it
				 }
			 }
		 }

		 for(var i = 121; i <= 124; i++)	// push the response if they are selected
		 {
			 eyeD = "#" + i.toString();
			 console.log("eyeD = " + eyeD + ", " + typeof eyeD);	// 11:19 data is of string type

			 // 17:32 first see if a checkbox is checked or not
			 if( $(eyeD).prop("checked") == true){

				  console.log(eyeD + " is checked");
				 	userData.html.push(eyeD);
			 }
			 else{	// if the checkbox is unchecked
				 if( userData.html.indexOf(eyeD) != -1){ // if the data is in the array
					 	temp = userData.html.indexOf(eyeD);	// get the index of the element
						userData.html.splice(temp, 1);	// remove it
				 }
			 }
		 }
		 //console.log(userData.html);	// 11:50 there is repeat in data storage. cut that off.
		 console.log(userData.html);
		 // 18:49 this button will work if and only if there are some responses on record
		 if( userData.html.length >= 1){

					//console.log("strUserData " + strUserData);

			 // able the button,  followed by
			 $("#q2a").hide();	// hide the element on display
			 userData.position = "q2";
			 localStorage.setItem("lPos", userData.position);// position

			 strUserData = JSON.stringify(userData);
			 localStorage.setItem("lObj", strUserData);
			 $("#q2").show(); // show the follwing hidden element by-
		 }
	});

	$("#htmlNext").click(function(event){	// 10:37
		var eyeD, i, temp, found = false;
		userData.html = [];
		//userData.html = [];

		for(i = 111; i <=114; i++)	// push the response if they are selected
		{
			eyeD = "#" + i.toString();
			console.log("eyeD = " + eyeD + ", " + typeof eyeD);	// 11:19 data is of string type

			// 17:32 first see if a checkbox is checked or not
			if( $(eyeD).prop("checked") == true){
				 console.log(eyeD + " is checked");
				 userData.html.push(eyeD);
			}
			else{	// if the checkbox is unchecked
				if( userData.html.indexOf(eyeD) != -1){ // if the data is in the array
					 temp = userData.html.indexOf(eyeD);	// get the index of the element
					 userData.html.splice(temp, 1);	// remove it
				}
			}
		}

		for(var i = 121; i <= 124; i++)	// push the response if they are selected
		{
			//console.log("LINE 88");

			eyeD = "#" + i.toString();
			//console.log("eyeD = " + eyeD + ", " + typeof eyeD);	// 11:19 data is of string type

			// 17:32 first see if a checkbox is checked or not
			if( $(eyeD).prop("checked") == true){
				 console.log(eyeD + " is checked");
				 userData.html.push(eyeD);
			}
			else{	// if the checkbox is unchecked
				if( userData.html.indexOf(eyeD) != -1){ // if the data is in the array
					 temp = userData.html.indexOf(eyeD);	// get the index of the element
					 userData.html.splice(temp, 1);	// remove it
				}
			}
		}
		console.log(userData.html);	// 11:50 there is repeat in data storage. cut that off.
		console.log(userData.html)
		if( userData.html.length >= 1 && userData.css.length >= 1 && userData.js.length >= 1)	// 16:12 think about this conditional statement
		{

			userData.position = "q3";
			localStorage.setItem("lPos", userData.position);// position

			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

			$("#q2a").hide();	// hide the element on display
			$("#q3").show(); // show the follwing hidden element by-
		}else{
			$('#q2a').hide();
			userData.position = "q2";
			localStorage.setItem("lPos", userData.position);// position

			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);
			$('#q2').show();
		}
	});

	$("#cssPrev").click(function(event){	// 10:49
		var eyeD, i, temp, found = false;
		userData.css = [];
		//console.log("LINE 85");

		for(i = 211; i <=214; i++)	// push the response if they are selected
		{
			eyeD = "#" + i.toString();
			console.log("eyeD = " + eyeD + ", " + typeof eyeD);	// 11:19 data is of string type

			// 17:32 first see if a checkbox is checked or not
			if( $(eyeD).prop("checked") == true){
				 console.log(eyeD + " is checked");
				 userData.css.push(eyeD);
			}
			else{	// if the checkbox is unchecked
				if( userData.css.indexOf(eyeD) != -1){ // if the data is in the array
					 temp = userData.css.indexOf(eyeD);	// get the index of the element
					 userData.css.splice(temp, 1);	// remove it
				}
			}
		}

		for(var i = 221; i <= 224; i++)	// push the response if they are selected
		{
			eyeD = "#" + i.toString();
			//console.log("eyeD = " + eyeD + ", " + typeof eyeD);	// 11:19 data is of string type

			// 17:32 first see if a checkbox is checked or not
			if( $(eyeD).prop("checked") == true){

				 console.log(eyeD + " is checked");
				 userData.css.push(eyeD);
			}
			else{	// if the checkbox is unchecked
				if( userData.css.indexOf(eyeD) != -1){ // if the data is in the array
					 temp = userData.css.indexOf(eyeD);	// get the index of the element
					 userData.css.splice(temp, 1);	// remove it
				}
			}
		}
		console.log(userData.css);	// 11:50 there is repeat in data storage. cut that off.
		if( userData.css.length >= 1){
			strUserData = JSON.stringify(userData);
			console.log("strUserData " + strUserData);

			// able the button,  followed by
			userData.position = "q2";
			localStorage.setItem("lPos", userData.position);// position

			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);


			$("#q2b").hide();	// hide the element on display
			$("#q2").show(); // show the follwing hidden element by-
		}
	});

	$("#cssNext").click(function(event){	// 10:37
		var eyeD, i, temp, found = false;
		userData.css = [];
	//	console.log("LINE 85");

		for(i = 211; i <=214; i++)	// push the response if they are selected
		{
			//console.log("LINE 183");
			eyeD = "#" + i.toString();
			//console.log("eyeD = " + eyeD + ", " + typeof eyeD);	// 11:19 data is of string type
			// 17:32 first see if a checkbox is checked or not
			if( $(eyeD).prop("checked") == true){
			//	 console.log(eyeD + " is checked");
				 userData.css.push(eyeD);
			}
			else{	// if the checkbox is unchecked
				if( userData.css.indexOf(eyeD) != -1){ // if the data is in the array
					 temp = userData.css.indexOf(eyeD);	// get the index of the element
					 userData.css.splice(temp, 1);	// remove it
				}
			}
		}

		for(var i = 221; i <= 224; i++)	// push the response if they are selected
		{
			//console.log("LINE 88");

			eyeD = "#" + i.toString();
//			console.log("eyeD = " + eyeD + ", " + typeof eyeD);	// 11:19 data is of string type

			// 17:32 first see if a checkbox is checked or not
			if( $(eyeD).prop("checked") == true){
	//			 console.log(eyeD + " is checked");
				 userData.css.push(eyeD);
			}
			else{	// if the checkbox is unchecked
				if( userData.css.indexOf(eyeD) != -1){ // if the data is in the array
					 temp = userData.css.indexOf(eyeD);	// get the index of the element
					 userData.css.splice(temp, 1);	// remove it
				}
			}
		}
		console.log(userData.css);	// 11:50 there is repeat in data storage. cut that off.
		if( userData.html.length >= 1 && userData.css.length >= 1 && userData.js.length >= 1)	// 16:12 think about this conditional statement
		{

			strUserData = JSON.stringify(userData);
			console.log("strUserData " + strUserData);

			$("#q2b").hide();	// hide the element on display
			userData.position = "q3";
			localStorage.setItem("lPos", userData.position);// position

			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

			$("#q3").show(); // show the follwing hidden element by-
		}else{
			strUserData = JSON.stringify(userData);
			console.log("strUserData " + strUserData);

			$('#q2b').hide();
			userData.position = "q2";
			localStorage.setItem("lPos", userData.position);// position
			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

			$('#q2').show();
		}

	});

	$("#jvsPrev").click(function(event){	// 10:37

		var eyeD, i, temp, found = false;
		userData.js = [];

		for(i = 311; i <= 314; i++)	// push the response if they are selected
		{
			eyeD = "#" + i.toString();
			console.log("eyeD = " + eyeD + ", " + typeof eyeD);	// 11:19 data is of string type

			if( $(eyeD).prop("checked") == true){	// 17:32 first see if a checkbox is checked or not
				 console.log(eyeD + " is checked");
				 userData.js.push(eyeD);
			}
			else{	// if the checkbox is unchecked
				if( userData.js.indexOf(eyeD) != -1){ // if the data is in the array
					 temp = userData.js.indexOf(eyeD);	// get the index of the element
					 userData.js.splice(temp, 1);	// remove it
				}
			}
		}

		for(i = 321; i <= 324; i++)	// push the response if they are selected
		{
			//console.log("LINE 183");

			eyeD = "#" + i.toString();
			console.log("eyeD = " + eyeD + ", " + typeof eyeD);	// 11:19 data is of string type

			// 17:32 first see if a checkbox is checked or not
			if( $(eyeD).prop("checked") == true){
				 console.log(eyeD + " is checked");
				 userData.js.push(eyeD);
			}
			else{	// if the checkbox is unchecked
				if( userData.js.indexOf(eyeD) != -1){ // if the data is in the array
					 temp = userData.js.indexOf(eyeD);	// get the index of the element
					 userData.js.splice(temp, 1);	// remove it
				}
			}
		}
		console.log(userData.js);	// 11:50 there is repeat in data storage. cut that off.
		if( userData.html.length >= 1){
			strUserData = JSON.stringify(userData);
			console.log("strUserData " + strUserData);

			// able the button,  followed by
			$("#q2c").hide();	// hide the element on display
			userData.position = "q2";
			localStorage.setItem("lPos", userData.position);// position
			localStorage.setItem("lObj", strUserData);
			$("#q2").show(); // show the follwing hidden element by-
		}
	});	// 19:06 works

	$("#jvsNext").click(function(event){	// 10:37

		var eyeD, i, temp, found = false;
		userData.js = [];

		for(i = 311; i <= 314; i++)	// push the response if they are selected
		{
			eyeD = "#" + i.toString();
			console.log("eyeD = " + eyeD + ", " + typeof eyeD);	// 11:19 data is of string type

			if( $(eyeD).prop("checked") == true){	// 17:32 first see if a checkbox is checked or not
				 console.log(eyeD + " is checked");
				 userData.js.push(eyeD);
			}
			else{	// if the checkbox is unchecked
				if( userData.js.indexOf(eyeD) != -1){ // if the data is in the array
					 temp = userData.js.indexOf(eyeD);	// get the index of the element
					 userData.js.splice(temp, 1);	// remove it
				}
			}
		}

		for(i = 321; i <= 324; i++)	// push the response if they are selected
		{
			eyeD = "#" + i.toString();
			console.log("eyeD = " + eyeD + ", " + typeof eyeD);	// 11:19 data is of string type

			// 17:32 first see if a checkbox is checked or not
			if( $(eyeD).prop("checked") == true){
				 console.log(eyeD + " is checked");
				 userData.js.push(eyeD);
			}
			else{	// if the checkbox is unchecked
				if( userData.js.indexOf(eyeD) != -1){ // if the data is in the array
					 temp = userData.js.indexOf(eyeD);	// get the index of the element
					 userData.js.splice(temp, 1);	// remove it
				}
			}
		}
		console.log(userData.js);	// 11:50 there is repeat in data storage. cut that off.
		if( userData.html.length >= 1 && userData.css.length >= 1 && userData.js.length >= 1)	// 16:12 think about this conditional statement
		{
			strUserData = JSON.stringify(userData);
			console.log("strUserData " + strUserData);

			$("#q2c").hide();	// hide the element on display
			userData.position = "q3";
			localStorage.setItem("lPos", userData.position);// position
			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

			$("#q3").show(); // show the follwing hidden element by-
		}else{


			userData.position = "q2";
			strUserData = JSON.stringify(userData);
			//console.log("strUserData " + strUserData);
			localStorage.setItem("lPos", userData.position);// position
			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

			$('#q2c').hide();
			$('#q2').show();
		}
	});

	$("#q3Prev").click(function(event){

		 userData.position = "q2";
		 //console.log("strUserData " + strUserData);
		 localStorage.setItem("lPos", userData.position);// position
		 localStorage.setItem("lObj", strUserData);
		 strUserData = JSON.stringify(userData);

		 $("#q3").hide();
		 $("#q2").show();
	});

	$("#q3Prev").click(function(event){

		var var1 = var2 = var3 = null;

		var1 = $("input[name='radio1']:checked").val(); // $("input[name='gender']:checked").val();
		userData.htmlSkill = var1;
		console.log("html skill: " + userData.htmlSkill);

		var2 = $("input[name='radio2']:checked").val();
		userData.cssSkill = var2;
		console.log("css skill: " + userData.cssSkill);

		var3 =  $("input[name='radio3']:checked").val();
		userData.jsSkill = var3;
		console.log("jvs skill: " + userData.jsSkill + " " + var3);

		if(userData.htmlSkill!=null && userData.cssSkill!=null && userData.jsSkill!=null){
			userData.position = "q2";
			localStorage.setItem("lPos", userData.position);// position
			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);
 		  //console.log("strUserData " + strUserData);
		  $("#q3").hide();
			$("#q2").show();
		}
		else{
			alert("Make sure you have chosen your expertise for HTML, CSS, and JavaScript.");
		}
	});

	$("#q3Next").click(function(event){
		var var1 = var2 = var3 = null;

		var1 = $("input[name='radio1']:checked").val();
		userData.htmlSkill = var1;
		console.log("html skill: " + userData.htmlSkill);

		var2 = $("input[name='radio2']:checked").val();
		userData.cssSkill = var2;
		console.log("css skill: " + userData.cssSkill);

		var3 =  $("input[name='radio3']:checked").val();
		userData.jsSkill = var3;
		console.log("jvs skill: " + userData.jsSkill);

		if(userData.htmlSkill!=null && userData.cssSkill!=null && userData.jsSkill!=null){

			userData.position = "thanks";
			localStorage.setItem("lPos", userData.position);// position
			strUserData = JSON.stringify(userData);
			localStorage.setItem("lObj", strUserData);

			$("#q3").hide();
			$("#thanks").show();
		}
		else{
			alert("Make sure you have chosen your expertise for HTML, CSS, and JavaScript.");
		}
	});

	$("#viewAns").click(function(event){
		userData.position = "showRes";
		localStorage.setItem("lPos", userData.position);// position
		strUserData = JSON.stringify(userData);
		localStorage.setItem("lObj", strUserData);

		$("#thanks").hide();
		$("#showRes").show();
	});

	$("#delAns").click(function(event){
		userData.name= userData.email = userData.htmlSkill = userData.jsSkill = userData.cssSkill= '';
		userData.html = userData.css = userData.js = [];
		strUserData = JSON.stringify(userData);
		console.log(userData);

		// clear the text in email and email
		$("#name").val('');
		$("#exampleInputEmail1").val('');

		// uncheck the checkbox
		$('input[type=checkbox]').prop('checked', false);	// this better work: W O R K S

		// uncheck the radio button
		$('input[type=radio]').prop('checked', false);
		userData.position = "welcome";
		localStorage.setItem("lPos", userData.position);// position
		strUserData = JSON.stringify(userData);
		localStorage.setItem("lObj", strUserData);

		$("#thanks").hide();
		$("#welcome").show();
	});
});
