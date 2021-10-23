// Globals
let hintTimerActivated = false

function isHintTimerActivated() {
    return hintTimerActivated
}

function disableHintTimer() {
    hintTimerActivated = false
}

function activateHintTimer() {
    hintTimerActivated = true
}

async function startTimer(seconds, color1, color2, color3) {
    activateHintTimer()
    let timerElement = document.getElementById("countdown")
    if (!timerElement) {
        let div = document.createElement('div')
        div.innerHTML = `<h1 id="countdown" class="d-fixed position-absolute justify-content-center" style="top:100px; left:48%">${String(seconds)}s</h1>`
        document.body.appendChild(div)
        timerElement = document.getElementById("countdown")
    } 
    var endTime = new Date(); // here you're making new Date object
    endTime.setMilliseconds(endTime.getMilliseconds() + seconds * 1000); // setting datetime in this object to 20 seconds from now
    return new Promise((resolve) => {
        for (let b of document.querySelectorAll('button')) { b.disabled = true }
        for (let k of document.querySelectorAll('.arrow-key')) { k.classList.add('d-none') }
        document.getElementById("bright-square").style.backgroundColor = 'black'
        document.getElementById("mid-square").style.backgroundColor = 'black'
        document.getElementById("dark-square").style.backgroundColor = 'black'
        let timing = setInterval(() => {
            var currentTime = new Date().getTime(); //same thing as above
            var timeLeft = endTime - currentTime; //difference between time you set and now in miliseconds

            var seconds = Math.floor(timeLeft / 1000);//conversion miliseconds on seconds
            timerElement.innerHTML = 1 + seconds + "s"; // putting number of days, hours, minutes and seconds in div, 
            if (timerElement.classList.contains('d-none')) {
                timerElement.classList.toggle('d-none')
            }

            if (timeLeft <= 0) {
                document.getElementById("jspsych-reconstruction-next").disabled = false;
                timerElement.classList.toggle('d-none')
                clearInterval(timing);
                for (let k of document.querySelectorAll('.arrow-key')) { k.classList.remove('d-none') }
                document.getElementById("bright-square").style.backgroundColor = color1;
                document.getElementById("mid-square").style.backgroundColor = color2;
                document.getElementById("dark-square").style.backgroundColor = color3;
                disableHintTimer()
                resolve()
            }
        }, 1000)
    })
}