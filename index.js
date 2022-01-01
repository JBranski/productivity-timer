// Declare constants for all buttons and the timer display
const 	fiveMinBtn = document.querySelector(".fiveMinBtn"),
		fifteenMinBtn = document.querySelector(".fifteenMinBtn"),
		twentyfiveMinBtn = document.querySelector(".twentyfiveMinBtn"),
		pauseBtn = document.querySelector(".pauseTimer"),
		resetBtn = document.querySelector(".resetTimer"),
		display = document.querySelector(".timer");

// Declare variables for the interval, the countdowntimer, and the paused state
let timerInterval = setInterval(0),
	counter = 0,
	paused = false;

// Add event listeners for each button
fiveMinBtn.addEventListener("click", () => {startTimer(300);});
fifteenMinBtn.addEventListener("click", () => {startTimer(900);});
twentyfiveMinBtn.addEventListener("click", () => {startTimer(1500);});
pauseBtn.addEventListener("click", () => {pauseTimer()});
resetBtn.addEventListener("click", () => {resetTimer()});

function startTimer(duration) {
	counter = duration;
	resetPause();
	clearInterval(timerInterval);
	timerInterval = setInterval(countDown, 1000);
}

function countDown() {
	minutes = parseInt(counter / 60, 10);
	seconds = parseInt(counter % 60, 10);

	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;

	display.textContent = `${minutes}:${seconds}`;

	if (--counter < 0) {
		clearInterval(timerInterval);
	}
}

function pauseTimer() {
	let pausedTime = counter;
	if(paused) {
		startTimer(pausedTime);
		paused = !paused;
	} else if (!paused && counter !== 0) {
		clearInterval(timerInterval);
		paused = !paused;
		pauseBtn.innerHTML = "Resume";
	}
}

function resetPause() {
	pauseBtn.innerHTML = "Pause";
	paused = false;
}

function resetTimer() {
	resetPause();
	clearInterval(timerInterval);
	display.textContent = "00:00";
}
