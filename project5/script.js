let countdownInterval;
let endTime;

const statusMsg = document.getElementById("statusMsg");
const timerDisplay = document.getElementById("timerDisplay");

document.getElementById("startBtn").addEventListener("click", () => {

    clearInterval(countdownInterval);

    statusMsg.textContent = "";
    statusMsg.className = "";

    let y = parseInt(document.getElementById("inYears").value) || 0;
    let mo = parseInt(document.getElementById("inMonths").value) || 0;
    let d = parseInt(document.getElementById("inDays").value) || 0;
    let h = parseInt(document.getElementById("inHours").value) || 0;
    let mi = parseInt(document.getElementById("inMinutes").value) || 0;
    let s = parseInt(document.getElementById("inSeconds").value) || 0;

    if ([y, mo, d, h, mi, s].some(v => v < 0)) {
        statusMsg.textContent = "Enter valid positive values.";
        statusMsg.className = "error";
        return;
    }

    if (y + mo + d + h + mi + s === 0) {
        statusMsg.textContent = "Please enter a valid future duration.";
        statusMsg.className = "error";
        return;
    }

    const now = new Date();
    endTime = new Date(now);

    // JavaScript Date automatically normalizes values
    endTime.setFullYear(endTime.getFullYear() + y);
    endTime.setMonth(endTime.getMonth() + mo);
    endTime.setDate(endTime.getDate() + d);
    endTime.setHours(endTime.getHours() + h);
    endTime.setMinutes(endTime.getMinutes() + mi);
    endTime.setSeconds(endTime.getSeconds() + s);

    if (endTime <= now) {
        statusMsg.textContent = "Please enter a valid future duration.";
        statusMsg.className = "error";
        return;
    }

    timerDisplay.style.display = "flex";

    updateTimer();

    countdownInterval = setInterval(updateTimer, 1000);

});

document.getElementById("resetBtn").addEventListener("click", () => {

    clearInterval(countdownInterval);

    document.querySelectorAll("input").forEach(input => input.value = 0);

    setTimerValues(0,0,0,0,0,0);

    timerDisplay.style.display = "none";

    statusMsg.textContent = "";
    statusMsg.className = "";

});

function updateTimer(){

    const now = new Date();

    if(now >= endTime){

        clearInterval(countdownInterval);

        setTimerValues(0,0,0,0,0,0);

        statusMsg.textContent = "COUNTDOWN COMPLETED";
        statusMsg.className = "success";

        return;
    }

    let tYear = endTime.getFullYear();
    let tMonth = endTime.getMonth();
    let tDay = endTime.getDate();
    let tHour = endTime.getHours();
    let tMinute = endTime.getMinutes();
    let tSecond = endTime.getSeconds();

    let nYear = now.getFullYear();
    let nMonth = now.getMonth();
    let nDay = now.getDate();
    let nHour = now.getHours();
    let nMinute = now.getMinutes();
    let nSecond = now.getSeconds();

    let years = tYear - nYear;
    let months = tMonth - nMonth;
    let days = tDay - nDay;
    let hours = tHour - nHour;
    let minutes = tMinute - nMinute;
    let seconds = tSecond - nSecond;

    if(seconds < 0){
        seconds += 60;
        minutes--;
    }

    if(minutes < 0){
        minutes += 60;
        hours--;
    }

    if(hours < 0){
        hours += 24;
        days--;
    }

    if(days < 0){
        const prevMonth = new Date(tYear, tMonth, 0);
        days += prevMonth.getDate();
        months--;
    }

    if(months < 0){
        months += 12;
        years--;
    }

    setTimerValues(years, months, days, hours, minutes, seconds);

}

function setTimerValues(y,m,d,h,min,s){

    document.getElementById("years").textContent = String(y).padStart(2,"0");
    document.getElementById("months").textContent = String(m).padStart(2,"0");
    document.getElementById("days").textContent = String(d).padStart(2,"0");
    document.getElementById("hours").textContent = String(h).padStart(2,"0");
    document.getElementById("minutes").textContent = String(min).padStart(2,"0");
    document.getElementById("seconds").textContent = String(s).padStart(2,"0");

}