const data = [
    [
        '[HTTP]',
        'Detected POST Flood [DoS] 10.0.100.116:58158 -> 10.0.100.5:10025'
    ],
    [
        '[TCP]',
        'Possible NMAP Scan [Attempted Recon] 10.0.100.116:58158 -> 10.0.100.5:10025'
    ],
    [
        '[UDP]',
        'Detected UDP Flood [DoS] 10.0.100.116:58158 -> 10.0.100.5:10025'
    ],
    [
        '[ICMP]',
        'Detected ICMP Flood [DoS] 10.0.100.116:58158 -> 10.0.100.5:10025'
    ],
    [
        '[HTTP]',
        'Possible ReDoS Attack [DoS] 10.0.100.112:58158 -> 10.0.100.5:10025'
    ],
];

const terminalBody = document.querySelector('.terminal-body');

let counter = 0;

function addCommand() {
    const commandDiv = document.createElement('div');
    commandDiv.className = 'command';

    const prefixP = document.createElement('p');
    prefixP.className = 'prefix';

    const commandP = document.createElement('p');

    const randomData = data[Math.floor(Math.random() * data.length)];

    prefixP.textContent = randomData[0];
    commandP.textContent = randomData[1];

    commandDiv.appendChild(prefixP);
    commandDiv.appendChild(commandP);

    terminalBody.appendChild(commandDiv);

    counter++;

    if (counter >= 15) {
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(addCommand, Math.random() * 2000 + 1000);