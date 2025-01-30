import { timeElement, clearTimers } from "./time.js";
import { dateElement } from "./date.js";

const stopwatchElement = document.querySelector('.stopwatch');
const stopwatchTimeElement = document.querySelector('.stopwatch__time');
const buttonElement = document.getElementById('btn2');

let timersStopwatch = [];

function startStopwatch() {
    let singleDigitSeconds = 0;
    let doubleDigitSeconds = 0;
    let singleDigitMinutes = 0;
    let doubleDigitMinutes = 0;

    const timer = setInterval(() => {
        singleDigitSeconds++;

        if (singleDigitSeconds === 10) {
            singleDigitSeconds = 0;
            doubleDigitSeconds++;
        }
        
        if (doubleDigitSeconds === 6) {
            doubleDigitSeconds = 0;
            singleDigitMinutes++;
        }
        
        if (singleDigitMinutes === 10) {
            singleDigitMinutes = 0;
            doubleDigitMinutes++;
        }
        
        if (doubleDigitMinutes === 6) {
            singleDigitSeconds = 0;
            doubleDigitSeconds = 0;
            singleDigitMinutes = 0;
            doubleDigitMinutes = 0;
        }

        let newTimes = 
        `${doubleDigitMinutes}${singleDigitMinutes}:${doubleDigitSeconds}${singleDigitSeconds}`;

        stopwatchTimeElement.textContent = newTimes;

        console.log('секундомер начал работать');
    }, 1000)

    timersStopwatch.push(timer);
}

function stopStopwatch() {
    clearTimers()
    console.log('секундомер закончил работать');
}

buttonElement.addEventListener('click', () => {
    clearTimers()

    stopwatchElement.classList.remove('hidden');
    timeElement.classList.add('hidden');
    dateElement.classList.add('hidden');

    if (buttonElement.classList.contains('release')) {
        buttonElement.classList.remove('release');
    }

    buttonElement.classList.toggle('active');
    
    if (buttonElement.classList.contains('active')) {
        startStopwatch()
    } else {
        stopStopwatch()
    }
})

export { stopwatchElement, timersStopwatch }