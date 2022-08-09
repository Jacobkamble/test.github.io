// initailze variable
const username = document.getElementById('username');
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const btn = document.getElementById('sub');
const success = document.getElementById("success");
const failure = document.getElementById("failure");
const form = document.getElementById("myform");
const spinner=document.getElementById("spinner");


// consider name,phone and email is not valid to check
let isUsernameValid = false;
let isPhoneValid = false;
let isEmailValid = false;

// validing user name by regX
username.addEventListener('blur', function () {

    // starting with alphabet conatian numbers limit between 3-10
    const reg = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;

    let str = username.value;

    if (reg.test(str)) {
        username.classList.remove("is-invalid");
        isUsernameValid = true;
    }
    else {
        username.setAttribute("class", 'is-invalid form-control');
        isUsernameValid = false;
    }


})

// check phone valid 
phone.addEventListener('blur', () => {
    // phone started with number from 0 to 9 and contain 10 digit
    const reg = /^([0-9]){10}$/;
    let str = phone.value;
    if (reg.test(str)) {
        phone.classList.remove("is-invalid");
        isPhoneValid = true;
    }
    else {
        phone.setAttribute("class", 'is-invalid form-control');
        isPhoneValid = false;
    }
});

// check email valid
email.addEventListener("blur", () => {
// starting with a-zA-Z0-9 @ .
    const reg = /^([_\-/.0-9a-zA-Z]+)@([_\-/.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    let str = email.value;

    if (reg.test(str)) {
        email.classList.remove("is-invalid");
        isEmailValid = true;
    }
    else {
        email.setAttribute("class", 'is-invalid form-control');
        isEmailValid = false;
    }

});

btn.addEventListener("click", (e) => {
    e.preventDefault();
    //sent data to server
     
    // show spinner
    spinner.style.display='block';
    // after certain time it will exctuted
    setTimeout(function(){
        if (isUsernameValid && isPhoneValid && isEmailValid) {
            // show success box
            success.setAttribute("style", 'display:block');
            // hide failure box
            failure.setAttribute("style", 'display:none');
            // reset form
            form.reset();
            // hide spinner
            spinner.style.display='none'
        }
        else {
            failure.setAttribute("style", 'display:block');
            success.setAttribute("style", 'display:none');
            spinner.style.display='none'
    
        }
    },3000)
})