const eventDate = new Date(Date.UTC(2025, 0, 1, 15, 0, 0));
const countdownElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    const timeRemaining = eventDate - now;

    if (timeRemaining < 0) {
        countdownElement.textContent = "СЛЕДУЮЩИЙ МАТЧ УЖЕ НАЧАЛСЯ!";
        clearInterval(timerInterval);
        return;
    }
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    countdownElement.textContent = `СЛЕДУЮЩИЙ МАТЧ ЧЕРЕЗ: ${days}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
const timerInterval = setInterval(updateTimer, 1000);

updateTimer();