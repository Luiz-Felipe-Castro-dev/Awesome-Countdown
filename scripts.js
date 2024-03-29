// Function to calculate and display the difference
const counter = document.getElementById("counter")
const dateTimeInput = document.getElementById("datetimeinput")
const target_date_text = document.getElementById("target_date")

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
    target_date_text.textContent = "Counting down to " + targetDate.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    });

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
