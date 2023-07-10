document.getElementById('order-button').addEventListener('click', function(event) {
    event.preventDefault();

    // Get the selected medicines
    const selectedMedicines = Array.from(document.querySelectorAll('input[name="medicines[]"]:checked'))
        .map(medicine => medicine.value);

    // Redirect to the checkout page with selected medicines as query parameters
    const queryString = selectedMedicines.length > 0 ? `?medicines=${encodeURIComponent(selectedMedicines.join(','))}` : '';
    window.location.href = `checkout.html${queryString}`;
});


const placeOrderButton = document.getElementById('place-order-btn');
const confirmationPage = document.getElementById('confirmation-page');

placeOrderButton.addEventListener('click', showConfirmationPage);

function showConfirmationPage() {
  confirmationPage.classList.add('show');
  setTimeout(() => {
    confirmationPage.classList.remove('show');
  }, 2000); // Adjust the timeout value as desired for the transition duration
}
