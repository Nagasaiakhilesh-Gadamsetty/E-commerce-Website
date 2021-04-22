var form1 = document.getElementById('login');
var form2 = document.getElementById('signup');
var sel = document.getElementById('coloring-dummy');

var errortext = document.getElementById('error');
var password = document.getElementById('pswd2');
var re_pass = document.getElementById('pswd3');
var first = document.getElementById('first-name');
var last = document.getElementById('last-name');
var user_name = document.getElementById('user-name');

function encrypt(password){
	var left_part="",right_part="";
	var enc_pass;
	if(password.length%2 == 0){
		for(var i=0;i<password.length/2;i++){
			var ind_ele_from_end = password.length - i - 1;
			left_part += password[ind_ele_from_end];
			right_part = password[i] + right_part;
		}
		enc_pass = left_part + right_part;
	}
	else{
		for(var i=0;i<password.length/2 - 1;i++){
			var ind_ele_from_end = password.length - i - 1;
			left_part += password[ind_ele_from_end];
			right_part = password[i] + right_part;
		}
		enc_pass = left_part + password[Math.floor(password.length/2)] + right_part;
	}
	return enc_pass;
}

first.addEventListener('blur',blur_first);
function blur_first(){
	var first = document.getElementById('first-name');
	var err = document.getElementById('err1');
	var cover = document.getElementById('first-name-cover');
	if(first.value.length < 4){
		err.style.visibility = "visible";
		cover.style.border = "2px solid red";
	}
	else{
		err.style.visibility = "hidden";
		cover.style.border = "2px solid lightgreen";
	}
}

last.addEventListener('blur',blur_last);
function blur_last(){
	var last = document.getElementById('last-name');
	var err = document.getElementById('err2');
	var cover = document.getElementById('last-name-cover');
	if(last.value.length < 4){
		err.style.visibility = "visible";
		cover.style.border = "2px solid red";
	}
	else{
		err.style.visibility = "hidden";
		cover.style.border = "2px solid lightgreen";
	}
}

user_name.addEventListener('blur',blur_user);
function blur_user(){
	var user = document.getElementById('user-name');
	var err = document.getElementById('err3');
	var cover = document.getElementById('user-name-cover');
	if(user.value.length < 6){
		err.style.visibility = "visible";
		cover.style.border = "2px solid red";
	}
	else{
		err.style.visibility = "hidden";
		cover.style.border = "2px solid lightgreen";
	}
}

password.addEventListener('blur',blur_pass);
function blur_pass(){
	var pass = document.getElementById('pswd2');
	var err = document.getElementById('err4');
	var cover = document.getElementById('pswd-cover');
	if(pass.value.length < 8){
		err.style.visibility = "visible";
		cover.style.border = "2px solid red";
	}
	else{
		err.style.visibility = "hidden";
		cover.style.border = "2px solid lightgreen";
	}

}

re_pass.addEventListener('blur',blur_re_pass);
function blur_re_pass(){
	var pass = document.getElementById('pswd2');
	var re_pass = document.getElementById('pswd3');
	var err = document.getElementById('err5');
	var cover = document.getElementById('repswd-cover');
	if(re_pass.value == ""){
		err.innerHTML = "This field cannot be empty";
		err.style.visibility = "visible";
		cover.style.border = "2px solid red";
	}
	else if(re_pass.value != pass.value){
		err.innerHTML = "Passwords do not match";
		err.style.visibility = "visible";
		cover.style.border = "2px solid red";
	}
	else{
		err.style.visibility = "hidden";
		cover.style.border = "2px solid lightgreen";
	}

}




var login_form = document.getElementById("login-form");
var signup_form = document.getElementById("signup-form");

login_form.addEventListener('submit',function(e){
	event.preventDefault();
	alert("Login");
});
signup_form.addEventListener('submit',function(e){
	event.preventDefault();
	
	var checkbox = document.getElementById('cb');
	var errortext = document.getElementById('error');
	var password = document.getElementById('pswd2');
	var re_pass = document.getElementById('pswd3');
	var first = document.getElementById('first-name');
	var last = document.getElementById('last-name');
	var user_name = document.getElementById('user-name');

	
	if(first.value.length < 4){
		first.focus();
		errortext.style.visibility = "visible";
		errortext.innerHTML = "First Name should be atleast 4 characters long";
	}
	else if(last.value.length < 4){
		last.focus();
		errortext.style.visibility = "visible";
		errortext.innerHTML = "Last Name should be atleast 4 characters long";
	}
	else if(user_name.value.length < 6){
		user_name.focus();
		errortext.style.visibility = "visible";
		errortext.innerHTML = "User Name should be atleast 6 characters long";
	}
	else if(password.value.length < 8){
		password.focus();
		errortext.style.visibility = "visible";
		errortext.innerHTML = "Password must be atleast 8 characters long";
	}
	else if(password.value != re_pass.value){
		re_pass.focus();
		errortext.style.visibility = "visible";
		errortext.innerHTML = "Passwords do not match";
	}
	else if(cb.checked == false){
		cb.focus();
		errortext.style.visibility = "visible";
		errortext.innerHTML = "Please agree to the terms & conditions";
	}
	else{
		errortext.style.visibility = "hidden";
		document.getElementById('btn-2').disabled = true;
	}



});

function login(){
	form1.style.left = "81px";
	form2.style.left = "450px";
	sel.style.left="103px";	
	var form1_eles = document.getElementById('login-form').elements;
	for(var i=0;i<form1_eles.length;i++){
		form1_eles[i].disabled = false;
	}
	var form2_eles = document.getElementById('signup-form').elements;
	for(var i=0;i<form2_eles.length;i++){
		form2_eles[i].disabled = true;
	}
}
function signup(){
	form1.style.left = "-300px";
	form2.style.left = "90px";
	sel.style.left="203px";
	var form1_eles = document.getElementById('login-form').elements;
	for(var i=0;i<form1_eles.length;i++){
		form1_eles[i].disabled = true;
	}
	var form2_eles = document.getElementById('signup-form').elements;
	for(var i=0;i<form2_eles.length;i++){
		form2_eles[i].disabled = false;
	}

}
function span1(){
	var x = document.getElementById('pswd1');
	var y = document.getElementById('eye1');
	var z = document.getElementById('eye2');
	if(x.type == "password"){
		x.type = "text";
		y.style.display = "inline";
		z.style.display = "none";
	}
	else{
		x.type = "password";
		y.style.display = "none";
		z.style.display = "inline";
	}
}
function span2(){
	var x = document.getElementById('pswd2');
	var y = document.getElementById('eye3');
	var z = document.getElementById('eye4');
	if(x.type == "password"){
		x.type = "text";
		y.style.display = "inline";
		z.style.display = "none";
	}
	else{
		x.type = "password";
		y.style.display = "none";
		z.style.display = "inline";
	}
}
function span3(){
	var x = document.getElementById('pswd3');
	var y = document.getElementById('eye5');
	var z = document.getElementById('eye6');
	if(x.type == "password"){
		x.type = "text";
		y.style.display = "inline";
		z.style.display = "none";
	}
	else{
		x.type = "password";
		y.style.display = "none";
		z.style.display = "inline";
	}
}