JavaScript for Login Details

//Number of Attempts
var attempt = 3;

// Below function Executes on click of login button.
function validate(){
//Enter the Username
var username = document.getElementById("username").value;
//Enter the Password
var password = document.getElementById("password").value;
 
//Conditions if the user enters this Username and Password
if ( username == "Formget" && password == "formget#123")
{
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
//Otherwise return Invalid
return false;
}

//User gets one more Attempt
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
  
// No more try after three Attempts
if( attempt == 0)
{
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
