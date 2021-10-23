function isConditionA() {
    const urlParams = new URLSearchParams(window.location.search);
    const randomGenerator = new Math.seedrandom(urlParams.get('uid'));
    return !!getRandomInt(randomGenerator, 0, 1);
}