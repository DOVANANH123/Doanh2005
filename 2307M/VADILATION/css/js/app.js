const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm - password');

const form = document.querySelector('#signup');


const checkUsername = () => {

    let valid = false;

    const min = 3,
          max = 25;
    
    const username = usernameEl.value.trim();

    if (!isRequired(username)){
        showError(usernameEl, 'Username cannot be blank.');
    } else if(!isBetween(username.length,min,max)){
        showError(usernameEl, 'Username must be between ${min} and ${max} characters.')
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false
    const email = emailEl.value.trim();
    if(!isRequired(email)){
        showError(emailEl, 'Email cannot be blank.');
    }else if(!isEmailValid(email)){
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if(!isRequired(password)){
        showError(passwordEl, 'Password cannot be blink.');
    } else if (!isPasswordSecure(password)){
        showError(passwordEl,'Password must has at least 8 characters that inclue at least 1 lowercase' + 'character, 1 uppercase characters, 1 uppercase character, 1 number, and 1 special character in(!@#$%*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid =false;
    //check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if(!isRequired(confirmPassword)){
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword){
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    //Regular expression (check email)
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    //Regular expression (check password)
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z]Ư(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === ''? false : true;
