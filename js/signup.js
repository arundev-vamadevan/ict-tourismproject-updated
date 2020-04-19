function validate()
{

    var mailid = document.getElementById("email").value;
    //var lab_mail=document.getElementById("check-mail");

    var pwd = document.getElementById("pwd1").value;
    var pwdr = document.getElementById("pwd2").value;
   // var lab_pass=document.getElementById("check-pass");
   var phn1 = document.getElementById("phn").value;

   if(email.value == "") 
   {
    alert("Error: E-mail cannot be blank!");
    email.style.border="3px solid red";
    //email.focus();
    return false;
   }

 

    var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,5})?$/;

    if(!regx.test(mailid)) 
    {
        alert("Error: Invalid e-mail, should be of the form 'abc@xyz.com'...!");
        email.style.border="3px solid red";
        return false;
    }
    
    var regxpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(pwd1.value==pwd2.value)
    {

        if(!regxpass.test(pwd))
         {
             alert("Error: Password should be 8 charecters long and contain atleast one uppercase, lowercase and number ! ");
            pwd1.style.border="3px solid red";
            return false;
         }
    }else {
            alert("Error: Please check that you've entered and confirmed your password!");
            pwd1.style.border="3px solid red";
            pwd2.style.border="3px solid red";;
            return false;
          }   

    var regxphn=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    
    if(!regxphn.test(phn1))
    {
          alert("Error: Phone number should be 10 digit and of the form (XXXXXXXXXX OR XXX.XXX.XXXX OR XXX-XXX-XXXX) ! ");
          phn.style.border="3px solid red";
          return false;
    }

    return true;
    
}
   
function CheckPasswordStrength(password) 
{
    var password_strength = document.getElementById("password_strength");

    //TextBox left blank.
    if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
   

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }

    //Validate for length of Password.
    if (passed > 2 && password.length > 8) {
        passed++;
    }

    //Display status.
    var color = "";
    var strength = "";
    switch (passed) {
        case 0:
        case 1:
            strength = "Weak";
            color = "red";
            break;
        case 2:
            strength = "Good";
            color = "darkorange";
            break;
        case 3:
        case 4:
            strength = "Strong";
            color = "green";
            break;
        case 5:
            strength = "Very Strong";
            color = "darkgreen";
            break;
    }
    password_strength.innerHTML = strength;
    password_strength.style.color = color;
}
   
   
  
