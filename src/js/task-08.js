
const formRef = document.querySelector('.login-form');
console.log(formRef);

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
    return alert("Пожалуйста, заполните все поля!");
    }
    
    console.log({
        email: `${email.value}`,
        password: `${password.value}`,
    })
    
    event.currentTarget.reset();
    
    //  const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log(name, value);
    // })
}