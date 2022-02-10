
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
    const objectData = {
        email: `${email.value}`,
        password: `${password.value}`,
    };
    console.log(objectData);
    
    event.currentTarget.reset();
    
    //  const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log(name, value);
    // })
}