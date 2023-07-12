const guestBox = document.querySelector('.js-guest');
const userBox = document.querySelector('.js-user');
const userName = document.querySelector('.js-username');
const logoutBtn = document.querySelector('.js-logout');

window.auth.onAuthStateChanged((user) => {
    if (user) {
        guestBox.style.display = 'none';
        userBox.style.display = 'flex';

        userName.innerText = user.displayName;
    } else {
        guestBox.style.display = 'flex';
        userBox.style.display = 'none';

        userName.innerText = '';
    }
});

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.reload();
    });
}

logoutBtn.addEventListener('click', logout);
