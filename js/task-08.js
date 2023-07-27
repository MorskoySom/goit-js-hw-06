const elements = {
    form: document.querySelector(`.login-form`),     
}
// console.log(elements);

elements.form.addEventListener("submit", handlerCheckInput);

function handlerCheckInput(evt) {
    evt.preventDefault();
    // console.dir(evt.currentTarget); 
    const { email, password } = evt.currentTarget.elements;
    // console.log(password.value);
    // console.log(email.value);
    if (!email.value || !password.value) {
        alert(`All inputs must be used`);
    } else {
        const user = {  
            email : email.value,
            password : password.value
        }
        console.log(user);
    }
    evt.target.reset();
}

