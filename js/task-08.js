const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('button');
const user = {
    email:'',
    password:'',
};

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    
    const inputEmail = formElements.email.value;
    const inputPassword = formElements.password.value;

    if(inputEmail === '' || inputPassword === ''){
        alert('All fields must be filled up!!!')
    }
    else{
        user.email = inputEmail;
        user.password = inputPassword;
        console.log(user);
    }
    document.querySelector('.login-form').reset();
};


