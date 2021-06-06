
function validate(){
			var pass = document.getElementById('pass');
	var upperCase= new RegExp('[^A-Z]');
var lowerCase= new RegExp('[^a-z]');
var numbers = "[^0-9]";
var special= "[!@#$%^&*]";
var pattern="@.";

	console.log("button clicked");

   if($('#id').val() == ''){
      alert('Enter your studentID/staffID');
	  	  return false;
   }
      else if($('#lname').val() == ''){
      alert('Enter your name');
	  return false;
	  
   }
         else if($('#mail').val() == ''){
      alert('Enter your mail');
	  	  return false;
   }
        else if(!mail.value.match(pattern)){
	 alert("email address in wrong format");
	 	  return false;
 }
      else if($('#pass').val() == ''){
      alert('Enter your password');
	  	  return false;
   }
    else if($('#passcon').val() == ''){
      alert('Please confirm your password');
	  	  return false;
   }


    else if($('#passcon').val() == ''){
      alert('Passwords dont match');
	  	  return false;
   }
    else if($('#passcon').val() != $('#pass').val()){
      alert('Wrong password for confirming');
	  	  return false;
   }
   else if(pass.value.length < 6 ||pass.value.length > 12 || !pass.value.match(upperCase)|| !pass.value.match(lowerCase) || !pass.value.match(numbers) ||!pass.value.match(special)){
		 alert("Password has to be more than 6 characters,have one lower case character,one uppercase character and one number");
		 	  return false;
	 }

}

