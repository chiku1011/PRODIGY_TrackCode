let timer;
let isRunning = false;
let startTime;
let lapTimes = [];

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        startTime = new Date() - (lapTimes.length > 0 ? lapTimes.reduce((a, b) => a + b) : 0);
        timer = setInterval(updateDisplay, 10);
        document.getElementById('startStop').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Start';
    document.getElementById('display').textContent = '00:00:00';
    lapTimes = [];
    updateLapDisplay();
    isRunning = false;
}

function lap() {
    if (isRunning) {
        const lapTime = new Date() - startTime;
        lapTimes.push(lapTime);
        updateLapDisplay();
    }
}

function updateDisplay() {
    const now = new Date();
    const elapsedTime = now - startTime;
    const formattedTime = new Date(elapsedTime).toISOString().substr(11, 8);
    document.getElementById('display').textContent = formattedTime;
}

function updateLapDisplay() {
    const lapsContainer = document.getElementById('laps');
    lapsContainer.innerHTML = '';
    lapTimes.forEach((lapTime, index) => {
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${index + 1}: ${new Date(lapTime).toISOString().substr(11, 8)}`;
        lapsContainer.appendChild(lapItem);
    });
}
