const h1 = document.querySelector('h1');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsDiv = document.querySelector('.laps');

let startTime;
let currentTime;
let intervalId;
let laps = [];

function startStopwatch() {
  startTime = new Date();
  intervalId = setInterval(updateTime, 10);
}

function pauseStopwatch() {
  clearInterval(intervalId);
  intervalId = null; // Store the interval ID for resuming
}

function resumeStopwatch() {
    intervalId = setInterval(updateTime, 10);
}

function resetStopwatch() {
  clearInterval(intervalId);
  startTime = null;
  currentTime = 0;
  displayTime(currentTime);
  laps = [];
  lapsDiv.textContent = '';
}

function recordLap() {
  laps.push(`${displayTime(currentTime)}`);
  lapsDiv.textContent = laps.join('\n');
}

function updateTime() {
  currentTime = new Date() - startTime;
  displayTime(currentTime);
}

function displayTime(time) {
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  const milliseconds = Math.floor((time % 1000) / 10);

  h1.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resumeButton.addEventListener('click', resumeStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', recordLap);
