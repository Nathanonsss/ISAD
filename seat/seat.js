const seatButtons = document.querySelectorAll('.seat');
const selectedSeat = document.getElementById('selectedSeat');
const totalPriceElement = document.getElementById('totalPrice');
let selectedSeats = [];
let totalPrice = 0;

// Fetch occupied seat IDs from PHP
fetch('seat_occupied.php')
    .then(response => response.json())
    .then(data => {
        // Iterate through the occupied seat IDs and add the "occupied" class to corresponding seat buttons
        data.forEach(seatId => {
            const seatButton = document.querySelector(`.seat[seat_id="${seatId}"]`);
            if (seatButton) {
                seatButton.classList.add('occupied');
                seatButton.disabled = true;
            }
        });
    })
    .catch(error => console.error('Error fetching occupied seat IDs:', error));

seatButtons.forEach(button => {
    button.addEventListener('click', toggleSelected);
});

function toggleSelected(event) {
    const seatId = event.target.getAttribute('seat_id');
    const seatPrice = parseFloat(event.target.getAttribute('seat_price'));

    if (event.target.classList.contains('selected')) {
        event.target.classList.remove('selected');
        selectedSeats = selectedSeats.filter(id => id !== seatId);
        totalPrice -= seatPrice;
    } else {
        event.target.classList.add('selected');
        selectedSeats.push(seatId);
        totalPrice += seatPrice;
    }

    updateSelectedInfo();
}

function updateSelectedInfo() {
    const selectedSeatsString = selectedSeats.join(', ');
    selectedSeat.textContent = selectedSeatsString;
    totalPriceElement.textContent = totalPrice.toFixed(0);
}
