// Show input error message
function showError(id, message) {
    return `${id}: ${message}`;
}

// Show success outline
function showSuccess(id) {
    return `${id} successfully validated!`;
}

// Check email is valid
function checkEmail(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Email is not valid')
        }
    }
    return result;
}

// Check Lastname is valid
function checkLastname(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = (/^[A-Za-z]+$/);
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Lastname is not valid')
        }
    }
    return result;
}

// Check Lastname is valid
function checkFirstname(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = (/^[A-Za-z]+$/);
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Firstname is not valid')
        }
    }
    return result;
}

// Check Phone is valid
function checkPhonenumber(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(?:(?:|0{1,2}|\+{0,2})41(?:|\(0\))|0)([1-9]\d)(\d{3})(\d{2})(\d{2})$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Phonenumber is not valid')
        }
    }
    return result;
}
//TODO: Check article for throwing errors in node js
// https://stackoverflow.com/questions/33086247/throwing-an-error-in-node-js

// Check required fields
function checkRequired(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    //if input is empty ...
    if (input.trim() === '') {
        //.. then it's not valid
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} is required`)
        }
    }
    //return validation result
    return result;
}

// Check input length
function checkLength(id, input, min, max) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be at least ${min} characters`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be less than ${max} characters`)
        }
    }
    return result;
}




function checkPassword(id, input1, input2) {
    let passw1 = input1.trim();
    let passw2 = input2.trim();
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }

    //if not same return false
    if (passw1 !== passw2) {
      result = {
          isNotValid: true,
          msg: showError(id, `passwords do not match`)
      }
       
      //console.log("\nPassword did not match: Please try again.")

    }
    else {
      result = {
          isNotValid: false,
          msg: showSuccess(id)
      }
      
      //alert("I love u it works.  ")
    }
    return result;
  }
  /*
function checkPasssword(id, input, input2) {
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



/*function checkPassword(id, input, id2, input2) {
    
    let result = {
        isNotValid: true,
        //msg: showError(id, `Passwords  ${id} dont match`)
        msg: showError(id, ` Input Value ${input.value}  input length ${input.length} input2 value ${input2.value} input2 length ${input2.length}`)
    }
    return result; */

/*if (input.value == input2.value) {
    result = {
        isNotValid: false,
        msg: showSuccess(id)
        
    } */





//Default: is valid
/*let result = {
    isNotValid: false,
    msg: showSuccess(id)
}

if (id.input == id.input) {
    result = {
        isNotValid: true,
        msg: showError(id, `Passwords  ${id} dont match`)
    }
} */

/*if (document.getElementById('password').value ==
document.getElementById('password2').value) {
    result = {
        isNotValid: true,
        msg: showError(id, 'Phonenumber is not valid')
    }
}*/







/*function checkPassword(id, input) {
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


/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT brackets!
 */
module.exports = {
    checkEmail,
    checkLength,
    checkRequired,
    checkPhonenumber,
    checkPassword,
    checkFirstname,
    checkLastname,

}
