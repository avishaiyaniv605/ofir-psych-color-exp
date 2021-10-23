// guarantee that no buttons are enabled while hint timer is activated (!!!)
function keepButtonsDisabled(event) {
    if (isHintTimerActivated()) {
        for (let b of document.querySelectorAll('button')) { b.disabled = true }
    }
}
// toggle pressed state for arrow buttons
function togglePressedArrowButtons(event) {
    if (isHintTimerActivated()) {
        return
    }

    if (document.querySelector('.arrow-key')) {
        if (event.key === 'ArrowLeft' || event.keyCode === 37)  {
            document.querySelector('#left-arrow-key').classList.add('arrow-key-clicked')
        } else if (event.key === 'ArrowRight' || event.keyCode === 39)  {
            document.querySelector('#right-arrow-key').classList.add('arrow-key-clicked')
        }
    }
}
// toggle unpressed state for arrow buttons
function toggleUnpressedArrowButtons(event) {
    if (isHintTimerActivated()) {
        return
    }

    if (document.querySelector('.arrow-key')) {
        if (event.key === 'ArrowLeft' || event.keyCode === 37)  {
            document.querySelector('#left-arrow-key').classList.remove('arrow-key-clicked')
        } else if (event.key === 'ArrowRight' || event.keyCode === 39)  {
            document.querySelector('#right-arrow-key').classList.remove('arrow-key-clicked')
        }
    }
}

document.addEventListener('keydown', keepButtonsDisabled)
document.addEventListener('keypress', keepButtonsDisabled)
document.addEventListener('keyup', keepButtonsDisabled)

document.addEventListener('keydown', togglePressedArrowButtons)
document.addEventListener('keyup', toggleUnpressedArrowButtons)