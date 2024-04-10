let messageInput = document.querySelector('#message');
let messageThrow = document.querySelector(".error-throw");
let errorMsg = document.querySelector(".error-message");
let errorThrowBtn = document.querySelector(".error-throw-btn")
errorThrowBtn.addEventListener('click', () => {
    messageThrow.classList.add('hide');
})

const firebaseConfig = {
    apiKey:"AIzaSyBSpLj8FXA1obnIdrjEfniG_1uDv4AWQjE",
    authDomain: "portfolio-form-f32ba.firebaseapp.com",
    databaseURL: "https://portfolio-form-f32ba-default-rtdb.firebaseio.com",
    projectId: "portfolio-form-f32ba",
    storageBucket: "portfolio-form-f32ba.appspot.com",
    messagingSenderId: "868416437510",
    appId: "1:868416437510:web:a3eb84cb74984337bdb287"
};
firebase.initializeApp(firebaseConfig);

//reference database
const contactFormDB = firebase.database().ref('contactForm');
let form = document.querySelector("#contact-form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formName = form.querySelector('#name').value;
    let formEmail = form.querySelector('#email').value;
    let formNumber = form.querySelector('#number').value;
    let formMessage = form.querySelector('#message').value;
    saveForm(formName, formEmail, formNumber, formMessage);
});

const saveForm = (formName, formEmail, formNumber, formMessage) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (formName === '' || formEmail === '' || formNumber === '' || formMessage === '') {
        errorMsg.style.color = '#ff4b4b'
        messageThrow.classList.remove('hide');
        errorMsg.innerText = 'Please fill in all the fields!';
        return;
    }
    else if (!emailRegex.test(formEmail)) {
        errorMsg.style.color = '#ff4b4b'
        messageThrow.classList.remove('hide');
        errorMsg.innerText = 'Please enter a valid email address!';
        return;
    }
    else if (!phoneRegex.test(formNumber)) {
        errorMsg.style.color = '#ff4b4b'
        messageThrow.classList.remove('hide');
        errorMsg.innerText = 'Please enter a valid phone number!';
        return;
    }
    else {
        errorMsg.style.color = '#5555e9'
        messageThrow.classList.remove('hide');
        errorMsg.innerText = `I got your response, ${formName}. I'll cach up with you soon!`;
        form.reset(); // Reset form

        let newContactForm = contactFormDB.push();
        newContactForm.set({
            userName: formName,
            userEmail: formEmail,
            userNumber: formNumber,
            userMessage: formMessage,
        })
    }
}