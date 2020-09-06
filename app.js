let anchor = document.querySelector('.anchor');

let startButton = document.createElement('button');
startButton.innerText = "Press to reset the timer!";
anchor.appendChild(startButton);

let timer = document.createElement('div');
anchor.appendChild(timer);

let count = 0;

startButton.addEventListener('click', () => {
    count = 0;
    timer.innerText = 0 + "s";
})

const timerFunction = () => {
    count += 1;
    let displayCount = count + "s";
    if(count >= 60 && count < 3600){
    displayCount = Math.floor(count / 60) + "m" + (count % 60) + "s";
} else if (count >= 3600){
    let hours = Math.floor(count / 3600);
    let minutes = Math.floor((count / 60) % 60);
    let seconds = count - 3600 - (minutes * 60);
    displayCount = hours + "h" + minutes + "m" + seconds + "s";
}
    timer.innerText = displayCount;
}

setInterval(timerFunction, 1000);
