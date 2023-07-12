const form = document.forms.sign_in;
const email = form.elements.email;
const password = form.elements.password;

function login(event) {
    event.preventDefault();

    window.auth.signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            Swal.fire( 'Something went wrong!', 'Error: ' + error.code + ' - ' + error.message, 'error');
        });
}

form.addEventListener('submit', login);
