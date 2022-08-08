// setup materialize components

const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // signin user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)
        closeSignupForm();
        signupForm.reset()
    });

});