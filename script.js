const focusButton = document.querySelector('#focus');

const buttons = document.querySelectorAll('#btn');

const shortBreakButton = document.querySelector('#shortbreak');

const longBreakButton = document.querySelector('#longbreak');

const startBtn = document.querySelector('#btn-start');

const reset = document.querySelector('#btn-reset');

const pause = document.querySelector('#btn-pause');

const time = document.querySelector('#time');

let set;
let count = 59;
let paused = true;
let minCount = 24;

time.textContent = `${minCount + 1}:00 `;

const appendZero = (value) => {
    value = value < 10 ? `0${value}` : value;
    return value;
}

reset.addEventListener('click', (
    resetTime = () => {
        pauseTimer();
       switch (active){
        case 'long':
            minCount = 14;
            break;
            case 'short':
                minCount = 4;
                break;
       }
       count = 59;
       time.textContent = `${minCount + 1}:00`
    })
 );


 const removeFocus = () => {
    buttons.forEach((btn) => {
        btn.classList.remove('btn-focus');
    })
 };

 focusButton.addEventListener('click', () => {
    removeFocus();
    focusButton.classList.add('btn-focus');
    pauseTimer();
    minCount = 24;
    count = 59;
    time.textContent = `${minCount + 1}:00`
 });


 shortBreakButton.addEventListener('click', () => {
    active = 'short';
    removeFocus();
    focusButton.classList.add('btn-focus');
    pauseTimer();
    minCount = 4;
    count = 59;
    time.textContent = `${minCount + 1}:00`
 });


 longBreakButton.addEventListener('click', () => {
    active = 'long';
    removeFocus();
    longBreakButton.classList.add('btn-focus');
    pauseTimer();
    minCount = 14;
    count = 59;
    time.textContent = `${minCount + 1}:00`
 });



 pause.addEventListener(
    'click',
    (pauseTimer = () => {
    paused = true;
    clearInterval(set);
    startBtn.classList.remove('hide');
    pause.classList.remove('show');
    reset.classList.remove('show');
  })
 );



 startBtn.addEventListener('click', () => {
    reset.classList.add('show');
    pause.classList.add('show');
    startBtn.classList.add('hide');
    startBtn.classList.remove('show');
    if(paused) {
        paused = false;
        time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        set = setInterval(() => {
            count--;
            time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
            if(count === 0){
                if(minCount !== 0){
                    minCount--;
                    count = 60;
                } else {
                    clearInterval(set)
                }
            }
        }, 1000)
    }
 });