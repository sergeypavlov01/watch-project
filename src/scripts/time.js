import { dateElement, timersDate} from "./date.js";
import { stopwatchElement, timersStopwatch } from "./stopwatch.js";

const timeElement = document.querySelector(".time");
const btnElement = document.getElementById("btn3");

let timersTime = []

// Removing all unnecessary timers
function clearTimers() {
    timersDate.forEach((timerId) => {
        clearInterval(timerId);
        timersDate.splice(0, timersDate.length)
    })
    timersTime.forEach((timerId) => {
        clearInterval(timerId)
        timersTime.splice(0, timersTime.length)
    })
    timersStopwatch.forEach((timerId) => {
        clearInterval(timerId);
        timersStopwatch.splice(0, timersStopwatch.length)
    })
}

// Effect break off
function addReleaseEffect() {
    const secondButtonElement = document.getElementById('btn2')

    if (secondButtonElement.classList.contains('active')) {
        secondButtonElement.classList.remove('active');
        secondButtonElement.classList.add('release')
        console.log('секундомер оборвался')
    }
}

// Show the present tense 
const showTime = () => {
    const timer = setInterval(() => {
        const date = new Date();

        const hours = date.getHours() < 10
        ? `0${date.getHours()}`
        : `${date.getHours()}`

        const minutes = date.getMinutes() < 10
        ? `0${date.getMinutes()}`
        : `${date.getMinutes()}`

        console.log('Time-js', 1);
        timeElement.textContent = `${hours}:${minutes}`;
    }, 1000);

    timersTime.push(timer);
};

showTime();

// Event click
btnElement.addEventListener("click", () => {
    clearTimers();
    timeElement.classList.remove('hidden');
    stopwatchElement.classList.add('hidden');
    addReleaseEffect()
    dateElement.classList.add('hidden');
    showTime();
});

export { timeElement, timersTime, addReleaseEffect, clearTimers};