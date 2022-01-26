const disableAudioPlayer = function () {
    document.getElementById("audio-file").style.transition = "all 0.4s";
    document.getElementById("audio-file").style.opacity = "0.3";
    document.getElementById("audio-file").style.userSelect = "none";
    document.getElementById("audio-file").style.pointerEvents = "none";
}

const blockProgressWhilePlaying = function () {
    document.getElementById("jspsych-instructions-next").disabled = true;
}

const resumeProgressWhenDonePlaying = function () {
    const oldColor = document.getElementById("jspsych-instructions-next").style.background;
    const oldBorder = document.getElementById("jspsych-instructions-next").style.border;
    const oldFontSize = document.getElementById("jspsych-instructions-next").style.fontSize;
    document.getElementById("jspsych-instructions-next").style.background = '#50AEF4';

    let timesRun = 0;
    const interval = setInterval(function () {
        timesRun += 1;
        if (timesRun === 10) {
            clearInterval(interval);
            document.getElementById("jspsych-instructions-next").style.background = oldColor;
            document.getElementById("jspsych-instructions-next").style.border = oldBorder;
            document.getElementById("jspsych-instructions-next").style.fontSize = oldFontSize;
        }
        document.getElementById("jspsych-instructions-next").disabled = timesRun % 2 !== 0;
    }, 80);

}