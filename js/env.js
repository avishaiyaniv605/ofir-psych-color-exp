function isConditionA() {
    const urlParams = new URLSearchParams(window.location.search);
    const randomGenerator = new Math.seedrandom(urlParams.get('uid'));
    return !!getRandomInt(randomGenerator, 0, 1);
}

const getCurrentParticipant = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('participant');
}

function isGroupA() {
    let res;
    const currentParticipant = getCurrentParticipant();

    const idxInsideSubArray = currentParticipant % 10;
    const idx = (currentParticipant - idxInsideSubArray) / 10;
    try {
        res = randomParticipants[idx][idxInsideSubArray] === "groupA";
    } catch (e) {
        return false;
    }

    return res;
}

function getCurrentParticipantOrElse(orElse) {
    const currentParticipant = getCurrentParticipant();

    if (!isCurrentUserValid()) {
        return orElse ?? "משתמש לא תקין";
    }
    return currentParticipant;
}

const isCurrentUserValid = () => {
    const currentParticipant = getCurrentParticipant();

    if (!currentParticipant || Number(currentParticipant) < 1 || Number(currentParticipant) > 200) {
        return false;
    }
    return true;
}