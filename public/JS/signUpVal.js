const emailRejex=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const numberRejex=/^\+?[0-9\s-]{10,10}$/ 
const passwordRejex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/





const emailInput=document.getElementsByName('email')[0];

emailInput.addEventListener('blur',()=>{
    if(!emailRejex.test(emailInput.value)){
        emailInput.value=''
        emailInput.placeholder = 'Invalid Email Address'
        emailInput.classList.add('errPlace')
    }
    else{
        emailInput.placeholder = ''
        emailInput.classList.remove('errPlace')
    }
})





const numberInput=document.getElementsByName('number')[0];


numberInput.onblur=()=>{
    if(!numberRejex.test(numberInput.value)){
        numberInput.value=''
        numberInput.placeholder='Invalid Mobile Number'
        numberInput.classList.add('errPlace')
    }
    else{
        numberInput.placeholder = ''
        numberInput.classList.remove('errPlace')
    }
}





const passwordInput=document.getElementsByName('password')[0];

passwordInput.onblur=()=>{
    if(!passwordRejex.test(passwordInput.value)){
        passwordInput.value=''
        passwordInput.placeholder='Invalid Password'
        passwordInput.classList.add('errPlace')
    }
    else{
        passwordInput.placeholder = ''
        passwordInput.classList.remove('errPlace')
    }
}




const password2Input=document.getElementsByName('password2')[0];

password2Input.onblur=()=>{
    if(password2Input.value!==passwordInput.value){
        password2Input.value=''
        password2Input.placeholder='Passwords do not Match'
        password2Input.classList.add('errPlace')
    }
    else{
        password2Input.placeholder = ''
        password2Input.classList.remove('errPlace')
    }
}















// Get all input boxes within the signup section
const inputBoxes = document.querySelectorAll('.signUp .input-box');

// Function to handle the hover effect
function handleHover() {
    const signUp = document.querySelector('.signUp');
    const isAnyInputFocused = Array.from(inputBoxes).some(input => input === document.activeElement);

    // Check if any input box is focused or if the signup area is being hovered
    if (isAnyInputFocused || signUp.matches(':hover')) {
        signUp.style.backgroundColor = 'rgb(196, 196, 196)';
        signUp.style.boxShadow = '5px 5px 30px -5px rgb(86,96,95)';
        signUp.style.height = '580px';
    } else {
        signUp.style.backgroundColor = 'rgba(46,52,48,0.5)';
        signUp.style.boxShadow = 'none';
        signUp.style.height = '200px';
    }
}

// Event listeners for input focus and mouse hover
inputBoxes.forEach(input => {
    input.addEventListener('focus', handleHover);
    input.addEventListener('blur', handleHover);
});

document.querySelector('.signUp').addEventListener('mouseenter', handleHover);
document.querySelector('.signUp').addEventListener('mouseleave', handleHover);
