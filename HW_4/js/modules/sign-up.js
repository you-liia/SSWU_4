let form = document.querySelector('.sign-up__form');
let nameInput = document.querySelector('.sign-up__name');
let surnameInput = document.querySelector('.sign-up__surname');
let emailInput = document.querySelector('.sign-up__email');

function getSystemDate() {
    let now = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}

function validateName(input) {
    let value = input.value.trim();
    let isValid = /^[A-Z][a-z]*$/.test(value);
    input.setCustomValidity(isValid ? '' 
         : 'Please enter a valid value (only Latin letters, the first letter must be uppercase).');   
}

function validateEmail(input) {
    let value = input.value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isEmailValid = emailPattern.test(value);
    emailInput.setCustomValidity(isEmailValid ? '' : 'Please enter a valid email address.');
}

[nameInput, surnameInput].forEach(input => {
    input.addEventListener('input', () => validateName(input));
});

emailInput.addEventListener('input', () => validateEmail(emailInput));

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = nameInput.value.trim();
    let surname = surnameInput.value.trim();
    let email = emailInput.value.trim();

    let users = JSON.parse(localStorage.getItem('subscribedUsers')) || [];

    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('This email is already subscribed.');
        return;
    }

    let user = {
        name: name,
        surname: surname,
        email: email
    };

    users.push(user);
    localStorage.setItem('subscribedUsers', JSON.stringify(users));

    if (name === 'Sigma') {
        let congratulation = document.createElement('div');
        let systemDate = getSystemDate();
        congratulation.innerHTML = `
        <div class="sign-up__congrats">
            Hello, <span class="sign-up__congrats-keyword">${name}</span>! 
            Today <span class="sign-up__congrats-keyword">(${systemDate})</span>, 
            for customers with your name, we offer a 
            <span class="sign-up__congrats-discount"> 120% </span> 
            discount when placing an order =)
        </div>`;
        congratulation.classList.add('sign-up__congrats');
        document.body.appendChild(congratulation);

        setTimeout(() => {
            congratulation.remove();
        }, 5000);
    }

    form.reset();
});