function showError(id, message)
{
    document.querySelector(id).innerHTML = message
}
function clearErrors()
{
    var errorHTML = document.getElementsByClassName("errors")
    var errorArray = Array.from(errorHTML)
    errorArray.forEach(index => {
        index.innerHTML = ""
    })
}
function validate()
{
    clearErrors();
    //Inputs
    var fName = document.querySelector("#fName");
    var email = document.querySelector("#email");
    var mobile = document.querySelector("#mobile");
    var cnic = document.querySelector("#cnic");
    var password = document.querySelector("#password");
    var cPassword = document.querySelector("#cPassword");
    var checkbox = document.querySelector("#checkbox");
    
    //Validations
    nameValidation(fName.value);
    emailValidation(email.value);
    mobileValidation(mobile.value);
    cnicValidation(cnic.value);
    passwordValidation(password.value, cPassword.value);
    checkboxValidation(checkbox.checked);

    //Submission Alert
    if((nameValidation(fName.value)) && (emailValidation(email.value)) && (mobileValidation(mobile.value)) && (cnicValidation(cnic.value)) && (passwordValidation(password.value, cPassword.value)) && (checkboxValidation(checkbox.checked)))
    {
        clearErrors();
        showDiv();
    }

}
function nameValidation(value)
{
    if(value == '')
    {
        showError("#fName-error","Name cannot be left blank");
        return false;
    }
    else if(value.length < 5)
    {
        showError("#fName-error", "Name is too short");
        return false;
    }
    else if(value.length > 15)
    {
        showError("#fName-error", "Name is too big");
        return false;
    }
    else{
        return true;
    }
}
function emailValidation(value)
{
    if(value == '')
    {
        showError("#email-error","Email cannot be left blank");
        return false;
    }
    else if(value.includes("@gmail.com"))
    {
        showError("#email-error", "Valid Email")
        document.querySelector("#email-error").style.color = "green";
        return true;
    }
    else
    {
        showError("#email-error","Email must contain @gmail.com");
        return false;
    }
}
function mobileValidation(value)
{
    if(value == '')
    {
        showError("#mobile-error" , "cannot be blank")
        return false;
    }
    else if(value.length != 11)
    {
        showError("#mobile-error","Must enter 11 digits")
        return false;
    }
    else
    {
        return true;
    }
}
function cnicValidation(value)
{
    if(value == '')
    {
        showError("#cnic-error","BLANK")
        return false;
    }
    else if(value.length != 13)
    {
        showError("#cnic-error" , "13 Digits Must")
        return false;
    }
    else
    {
        return true;
    }
}
function passwordValidation(passVal, cPassVal)
{
    if(passVal == '')
    {
        showError("#password-error", "Password cannot be left blank")
        return false;
    }
    else if(passVal != cPassVal)
    {
        showError("#password-error" , "Passwords doesn't match")
        return false;
    }
    else
    {
        return true;
    }
}
function checkboxValidation(value)
{
    if(value)
    {
        return true;
    }
    else
    {
        showError("#check-error" , "Kindly mark the checkbox");
        return false;
    }
}
function showDiv()
{
    document.querySelector("#submit-div").style.opacity = "1";
    document.querySelector("#submit-div").style.left = "450px";
    document.querySelector("#main").style.opacity = "0";
}
function hideDiv()
{
    document.querySelector("#submit-div").style.opacity = "0";
    document.querySelector("#submit-div").style.left = "0px";
    document.querySelector("#main").style.opacity = "1";
}