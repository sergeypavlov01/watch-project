import { timeElement, addReleaseEffect, clearTimers } from "./time.js";
import { stopwatchElement } from "./stopwatch.js";

const currentDateElement = document.querySelector('.current-date');
const btnElement = document.getElementById("btn1");
const dateElement = document.querySelector(".date");

let timersDate = []

// Show the present date;

const showDate = () => {
    const timer = setInterval(() => {
        const date = new Date();

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = 
        `${date.getFullYear()}`
        .split("")
        .splice(2, 2)
        .join("");

        console.log('Date-js', 1);

        currentDateElement.textContent = `${year} ${month} ${day}`;
    }, 1000);

    timersDate.push(timer)
};

// Event click
btnElement.addEventListener("click", () => {
    clearTimers()
    dateElement.classList.remove("hidden");
    timeElement.classList.add("hidden");
    stopwatchElement.classList.add("hidden");
    addReleaseEffect();
    showDate();
});

export { dateElement, timersDate }




