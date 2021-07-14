/* Aufgabe:
  Fügen Sie die notwendigen Selektoren für
  firstname, lastname, mobile, password2
*/

const form = document.getElementById('form');
const phonenumber = document.getElementById('phonenumber');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const departement = document.getElementById('departement');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const checkbox = document.getElementById('checkbox');



// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}


/* Aufgabe:
    Validieren Sie die Mobile-Nummer ähnlich wie bei der Email mit einer
    Regular expression (regex). Für eine geeignete regex suchen Sie
    im Internet nach "javascript regular expression for mobile number".
*/
// Check phone is valid
function checkPhone(input) {
  const re = /^(?:(?:|0{1,2}|\+{0,2})41(?:|\(0\))|0)([1-9]\d)(\d{3})(\d{2})(\d{2})$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Phonenumber is not valid');
  }
}
// Check Lastname is valid
function checkLastname(input) {
  const re = (/^[A-Za-z]+$/);
  if (re.test(input.value.trim())) {
    //showSuccess(input);
    checkLength(lastname, 2, 50);
  } else {
    showError(input, 'Lastname is not valid');
  }
}

// Check Firstname is valid
function checkFirstname(input) {
  const re = (/^[A-Za-z]+$/);
  if (re.test(input.value.trim())) {
    //showSuccess(input);
    checkLength(firstname, 2, 20);
  } else {
    showError(input, 'Firstname is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

/* Aufgabe:
    Validieren Sie, ob die beiden Passwörter übereinstimmen.
    Falls sie nicht übereinstimmen, geben Sie (ähnlich wie in den anderen Beispielen)
    eine Fehlermeldung dem Formular aus.

*/



// Check passwords match
/*function checkPassword(id, input1, input2) {
  let result = {
    isNotValid: false,
    msg: showSuccess(id)
}

let passw1 = input.trim();
let passw2 = input2.trim();

console.log(`${passw1}, ${passw2}`);

//if not same return false
if (passw1 !== passw2) {
    result = {
        isNotValid: true,
        msg: showError(id, `dont work`)
    }
}
else {
    result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
}
} */


  function checkPassword(input1, input2) {
    let passw1 = input1.value.trim();
    let passw2 = input2.value.trim();

    console.log(`${passw1}, ${passw2}`);

    //if not same return false
    if (passw1 !== passw2) {
      showError(
        input2,
        `${getFieldName(input2)} must be a matching Password`
    );
      //console.log("\nPassword did not match: Please try again.")

    }
    else {
      checkLength(password, 6, 25);
      checkLength(password2, 6, 25);
      //showSuccess(input1);
      //showSuccess(input2);
      //alert("I love u it works.  ")
    }
  }

  
/*
var checkPassword = function() {
  if (document.getElementById('password').value ==
    document.getElementById('password2').value) {
    document.getElementById('message2').style.color = '#2ecc71';
    document.getElementById('password2').style.borderColor = '#2ecc71';
    document.getElementById('message2').innerHTML = 'matching';
  } else {
    document.getElementById('message2').style.color = '#e74c3c';
    document.getElementById('password2').style.borderColor = '#e74c3c';

    document.getElementById('message2').innerHTML = 'not matching';
  }
} */
// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function validateForm(){
  if(!checkRequired([username, email, password, firstname, lastname, phonenumber, password2, departement])){
    //Aufgabe: Validierung der Länge für Vorname (2 bis 20) und Nachname (2 bis 50)
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkLength(firstname, 2, 20);
    checkLength(lastname, 2, 50);
    /* Aufgabe: 
    Validierung der Telefonnumer ähnlich wie bei der Email mit einer
      Regular expression (regex). Für eine geeignete regex suchen Sie
      im Internet nach "javascript regular expression for mobile number"
    * */
    checkPhone(phonenumber);
    checkEmail(email);
    checkPassword(password, password2);
    checkFirstname(firstname);
    checkLastname(lastname);
    /* Aufgabe:
      Validierung Sie die beiden Passwörter, damit password
      mit password2 übereinstimmt.
    * */
  }
}

// Check


// Uncheck
document.getElementById("checkbox").checked = false;
document.getElementById("departement").checked = false;

//function myFunction() {
  //let bt = document.getElementById("mySubmit");
 // bt.disabled = false;
//}

var button = document.getElementById("mySubmit")
button.disabled = true;

if (document.getElementById("checkbox").checked = true) {
  button.disabled = false;
} /*else {
  button.disabled = true;
} */

// Event listeners
form.addEventListener('submit', function(e) {
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  e.preventDefault();
  //First validate form
  validateForm();
});
 

