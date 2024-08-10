/* eslint-disable no-restricted-globals */

let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

self.onmessage = (e: MessageEvent<string>) => {
    console.log(e.data);
    var data = 'start';
    switch (data) {
        case 'start':
            startTime = performance.now() - elapsedTime;
            isRunning = true;
            break;
        case 'pause':
            isRunning = false;
            break;
        case 'reset':
            elapsedTime = 0;
            startTime = 0;
            isRunning = false;
            break;
        case 'getElapsedTime':
            if (isRunning) {
                const now = performance.now();
                elapsedTime = now - startTime;
            }
            self.postMessage(elapsedTime);
            break;
        default:
            break;
    }
};

/* eslint-enable no-restricted-globals */
