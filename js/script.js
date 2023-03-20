const countDown = () => {
    const countDate = new Date('January 1, 2024 00:00:00').getTime();
    const nowDate = new Date().getTime();
    const gap = countDate - nowDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".countdown__day").innerHTML = textDay;
    document.querySelector(".countdown__hour").innerHTML = textHour;
    document.querySelector(".countdown__minute").innerHTML = textMinute;
    document.querySelector(".countdown__second").innerHTML = textSecond;
    setTimeout(countDown, 1000);
}

setTimeout(countDown, 1000);