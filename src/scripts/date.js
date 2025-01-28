import { timeElement, timer as timerTimes } from "./time.js";

// Function removing all unnecessary timers
function clearTimers() {
    clearInterval(timerTimes);
}

// Show the present date;
const currentDateElement = document.querySelector('.current-date');

const showDate = () => {
    return setInterval(() => {
        const date = new Date();

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = `${date.getFullYear()}`
        .split("")
        .splice(2, 2)
        .join("");

        console.log('Date-js', 1);

        currentDateElement.textContent = `${year} ${month} ${day}`;
    }, 1000);
};

const timer = showDate()

// Event click
const btnElement = document.getElementById("btn1");
const dateElement = document.querySelector(".date");

btnElement.addEventListener("click", () => {
    clearTimers()
    dateElement.classList.remove("hidden");
    timeElement.classList.add("hidden");
    showDate();
});

export { dateElement, timer }




