const blockProgressWhilePlaying = function () {
    document.getElementById("jspsych-instructions-next").disabled = true;
}

const resumeProgressWhenDonePlaying = function () {
    const oldColor = document.getElementById("jspsych-instructions-next").style.background;
    document.getElementById("jspsych-instructions-next").style.background = '#50AEF4';

    var timesRun = 0;
    var interval = setInterval(function () {
        timesRun += 1;
        if (timesRun === 10) {
            clearInterval(interval);
            document.getElementById("jspsych-instructions-next").style.background = oldColor;
        }
        document.getElementById("jspsych-instructions-next").disabled = timesRun % 2 !== 0;
    }, 80);

}

const disableAudioPlayer = function () {
    document.getElementById("audio-player-container").style.transition = "opacity linear 0.3s";
    document.getElementById("audio-player-container").style.opacity = "0.3";
    document.getElementById("audio-player-container").style.pointerEvents = "none";
}
