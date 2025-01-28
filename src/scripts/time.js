import { dateElement, timer as timerDate} from "./date.js";

// Show the present tense 
const timeElement = document.querySelector(".time");

const showTime = () => {
    return setInterval(() => {
        const date = new Date();

        const hours = date.getHours() < 10
        ? `0${date.getHours()}`
        : `${date.getHours()}`

        const minutes = date.getMinutes() < 10
        ? `0${date.getMinutes()}`
        : `${date.getMinutes()}`

        timeElement.textContent = `${hours}:${minutes}`;
        console.log('Time-js', 1);

    }, 1000);
};

const timer = showTime();

// Removing all unnecessary timers
function clearTimers() {
    clearInterval(timerDate);
}

clearTimers()

// Event click
const btnElement = document.getElementById("btn3");
btnElement.addEventListener("click", () => {
    clearTimers();
    clearInterval(timer);
    timeElement.classList.remove('hidden');
    dateElement.classList.add('hidden');
    showTime();
});

export { timeElement, timer};