// Locations in the HTML that the error messages will be displayed
const firstErrorLocation = document.querySelector('.one');
const secondErrorLocation = document.querySelector('.two');
const thirdErrorLocation = document.querySelector('.three');
const fourthErrorLocation = document.querySelector('.four');

const successMessageLocation = document.querySelector('.only-form');

// Input elements
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');



class UI {
    static clearFirstName() {
        firstName.value = "";
    }

    static clearLastName() {
        lastName.value = "";
    }

    static clearEmail() {
        email.value = "";
    }

    static clearPassword() {
        password.value = ""
    }

    static firstName (message) {
        // Create p element
        const p = document.createElement('p');

        // Add a class
        p.className = 'error';

        // Message
        p.textContent = message;

        // Insert element in the document
        firstErrorLocation.insertAdjacentElement('beforeend', p)
        
        firstName.classList.add('active');

        setTimeout(() => {
            p.remove();
            firstName.classList.remove('active');
        },2000)
    }

    static lastName(message) {
        const p = document.createElement('p')

        p.className = 'error';

        p.textContent = message;

        secondErrorLocation.insertAdjacentElement('beforeend', p)

        lastName.classList.add('active');

        setTimeout(() => {
            p.remove();
            lastName.classList.remove('active');
        }, 2000)
    }

    static email(message) {
        const p = document.createElement('p');

        p.className = 'error';

        p.textContent = message;

        thirdErrorLocation.insertAdjacentElement('beforeend', p)

        email.classList.add('active');


        

        setTimeout(() => {
            p.remove();
            email.classList.remove('active');
        }, 2000)
    }

    // Handles the password input
    static password (message) {
        const p = document.createElement('p');

        p.className = 'error';

        p.textContent = message;

        fourthErrorLocation.insertAdjacentElement('beforeend', p);

        password.classList.add('active');


        setTimeout(() => {
            p.remove();
            password.classList.remove('active');
        }, 2000)
    }

    // Handles the success message
    static successMessage(message) {
        const h2 = document.createElement('h2');

        h2.className = 'success';

        h2.textContent = message;

        successMessageLocation.insertAdjacentElement('afterbegin', h2)

        h2.classList.add('active');

        setTimeout(() => {
            h2.remove();
            h2.classList.remove('active');
        },2000)
    }
}


const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Fist Name validation
    if (firstName.value.length < 1) {
        UI.firstName('First Name cannot be empty')
        UI.clearFirstName();
    } 


    // Last Name validation
    if (lastName.value.length < 1) {
        UI.lastName('Last Name cannot be empty');
        UI.clearLastName()
    } 
    
    
    // Variable to validate email
    const validation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;

    // Email validation
    if (!validation.test(email.value)) {

        UI.email('Looks like this is not an email')
        // UI.clearEmail();
        // UI.clearFirstName();
        // UI.clearLastName();
    } 


    // Password validation
    if (password.value.length < 8) {
        UI.password('Password must be longer than 8 characters')
        UI.clearPassword()
    } 

    // When every validation is true

    if (((password.value.length >= 8) && (validation.test(email.value)) && (lastName.value.length >= 1) && (firstName.value.length >= 1))) {
        UI.successMessage('Thank you!');
        UI.clearFirstName();
        UI.clearLastName();
        UI.clearEmail();
        UI.clearPassword();
    }
    
})