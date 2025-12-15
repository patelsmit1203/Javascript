// Countdown Timer
const input = document.getElementById("secondsInput");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const timer = document.getElementById("timer");

let countdown;
let remainingTime = 0;
let isRunning = false;

function updateTimerDisplay(time) {
    timer.textContent = time.toString().padStart(2, "0");
}

// Start button
startBtn.addEventListener("click", () => {
    if (!isRunning) {
        if (remainingTime === 0) {
            remainingTime = parseInt(input.value);
            if (isNaN(remainingTime) || remainingTime <= 0) {
                alert("Enter valid seconds!");
                return;
            }
        }
        isRunning = true;
        countdown = setInterval(() => {
            remainingTime--;
            updateTimerDisplay(remainingTime);
            if (remainingTime <= 0) {
                clearInterval(countdown);
                isRunning = false;
                updateTimerDisplay(0);
            }
        }, 1000);
    }
});

// Pause button
pauseBtn.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(countdown);
        isRunning = false;
    }
});

// Reset button
resetBtn.addEventListener("click", () => {
    clearInterval(countdown);
    isRunning = false;
    remainingTime = 0;
    updateTimerDisplay(0);
});

// Initialize timer display
updateTimerDisplay(0);

// Quotes Section
const quotes = [
    "Believe in yourself.",
    "Success is not final, failure is not fatal.",
    "Dream big and dare to fail.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Your limitation—it’s only your imagination."
];

const quoteDisplay = document.getElementById("quoteDisplay");
let quoteIndex = 0;

function showQuote(index) {
    quoteDisplay.classList.remove("show");
    setTimeout(() => {
        quoteDisplay.textContent = quotes[index];
        quoteDisplay.classList.add("show");
    }, 300);
}

// Show first quote
showQuote(quoteIndex);

// Change quote every 5 seconds
setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    showQuote(quoteIndex);
}, 5000);
