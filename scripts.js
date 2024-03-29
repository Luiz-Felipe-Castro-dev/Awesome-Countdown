// Function to calculate and display the difference
const counter = document.getElementById("counter")
const dateTimeInput = document.getElementById("datetimeinput")

dateTimeInput.addEventListener('change', () => {
    localStorage.setItem("date", dateTimeInput.value)
})
function calculateAndDisplayDifference() {
    const now = new Date();
    const data_armazenada = localStorage.getItem('date')

    let dateInput = dateTimeInput.value.length > 3 ? dateTimeInput.value : now
    if (data_armazenada) {
        dateInput = data_armazenada
    }
    const targetDate = new Date(dateInput);

    const difference = targetDate - now;

    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24)));
    const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');

    // Display the result
    counter.innerHTML = `${days}:${hours}:${minutes}:${seconds}`
}

// Set interval to redo the calculation every 100 milliseconds (1/10 of a second)
setInterval(calculateAndDisplayDifference, 100);
