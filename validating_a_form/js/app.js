const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const telephoneInput = document.getElementById('telephone');

/**
 *
 * VALIDATORS
 *
 */

// Can only contain letters a-z in lowercase
function usernameValidation(text){
  return /^[a-z]+$/.test(text);
}

// Must contain a lowercase, uppercase letter and a number
function passwordValidation(text){
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(text);
}
// The telephone number must be in the format of (555) 555-5555
function emailValidation(text){
  return /^^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$$/.test(text);
}
// Must be a valid email address
function telephoneValidation(text){
  return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(text);
}
/**
 *
 * FORMATTING FUNCTIONS
 *
 */
function formatTelephone (text){
  const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
  return text.replace(regex,'($1) $2-$3');
}

/**
 *
 * SET UP EVENTS
 *
 */
 function showOrHideTip(show, element) {
   // show element when show is true, hide when false
   if (show) {
     element.style.display = "inherit";
   } else {
     element.style.display = "none";
   }
 }

function setupValidation(validation){
  return e => {
    const valid = !validation(e.target.value) && e.target.value !== '';
    const element = e.target.nextElementSibling;
    showOrHideTip(valid,element);
  };
}

usernameInput.addEventListener('input',setupValidation(usernameValidation));
telephoneInput.addEventListener('input',setupValidation(telephoneValidation));
telephoneInput.addEventListener('blur',e=>{e.target.value = formatTelephone(e.target.value);});
emailInput.addEventListener('input',setupValidation(emailValidation));
passwordInput.addEventListener('input',setupValidation(passwordValidation));
