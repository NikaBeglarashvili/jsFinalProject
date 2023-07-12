firebase.initializeApp({
    apiKey: "AIzaSyA-Ox6auNZnQPrQUdJC31anolTh11pJ6TM",
    authDomain: "hotels-64fe5.firebaseapp.com",
    projectId: "hotels-64fe5",
    storageBucket: "hotels-64fe5.appspot.com",
    messagingSenderId: "79341486747",
    appId: "1:79341486747:web:0856f832105a8fdd4fbc3e"
});

window.db = firebase.firestore();
window.auth = firebase.auth();