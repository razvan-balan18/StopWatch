let seconds = 00;
let tens = 00;
let outputSeconds = document.getElementById('second');
let outputTens = document.getElementById('tens');
let start = document.getElementById('start-button');
let stop = document.getElementById('stop-button');
let clear = document.getElementById('clear-button');
let Interval;


start.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
}

stop.onclick = () => {
    clearInterval(Interval);
}

clear.onclick = () => {
    clearInterval(Interval);
    tens = "00"; 
    seconds = "00";
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens; 
}


function startTime() {
    tens++;
    if(tens <= 9){
        outputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        outputTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        outputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        outputTens.innerHTML = "0" + tens;
    }
    if(seconds > 9){
        outputSeconds.innerHTML = seconds;
    }

}
