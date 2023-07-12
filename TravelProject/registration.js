const form = document.forms.sign_up;
const first_name = form.elements.first_name;
const last_name = form.elements.last_name;
const email = form.elements.email;
const password = form.elements.password;
const password_confirmation = form.elements.password_confirmation;

const password_confirmation_validation = document.querySelector('.js-password_confirmation-validation');

function register(event) {
    event.preventDefault();

    if (password.value !== password_confirmation.value) {
        password_confirmation_validation.style.display = 'block';
        return;
    }

    password_confirmation_validation.style.display = 'none';

    window.auth.createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            storeUserInformation(user);
        })
        .catch((error) => {
            Swal.fire( 'Something went wrong!', 'Error: ' + error.code + ' - ' + error.message, 'error');
        });
}

function storeUserInformation(user) {
    user.updateProfile({
        displayName: first_name.value + ' ' + last_name.value,
    }).then(() => {
        loginUser();
    }).catch((error) => {
        Swal.fire( 'Something went wrong!', 'Error: ' + error.code + ' - ' + error.message, 'error');
    }); 
}

function loginUser() {
    window.auth.signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
            location.href = 'index.html';
        })
        .catch((error) => {
            Swal.fire( 'Something went wrong!', 'Error: ' + error.code + ' - ' + error.message, 'error');
        });
}

form.addEventListener('submit', register);
