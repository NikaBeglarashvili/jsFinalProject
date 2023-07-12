const form = document.forms.reservation;
const checkInDate = form.elements.checkindate;
const checkInTime = form.elements.checkintime;
const checkOutDate = form.elements.checkoutdate;
const checkOutTime = form.elements.checkouttime;
const numberOfRooms = form.elements.rooms;
const roomType = form.elements.type;

function reserve(event) {
    event.preventDefault();

    if (!window.auth.currentUser) {
        window.location.href = 'sign-in.html';
    }

    window.db.collection('reservations')
        .add({
            checkInDate: checkInDate.value,
            checkInTime: checkInTime.value,
            checkOutDate: checkOutDate.value,
            checkOutTime: checkOutTime.value,
            numberOfRooms: numberOfRooms.value,
            roomType: roomType.value,
        })
        .then(() => {
            Swal.fire({
                title: 'Good job!',
                html: 'Your reservation has been saved.',
                icon: 'success',
                didClose: () => {
                    window.location.href = 'index.html';
                }
            });
        })
        .catch((error) => {
            Swal.fire( 'Something went wrong!', 'Error: ' + error.code + ' - ' + error.message, 'error');
        });
}

form.addEventListener('submit', reserve);
