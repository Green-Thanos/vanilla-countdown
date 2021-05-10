const countdown = () => {
    const countDate = new Date('June 16, 2021 13:15:00').getTime();
    const now = new Date().getTime();
    const gap = countDate-now;
    
    const s = 1000;
    const min = s*60;
    const h = min*60;
    const day = h*24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / h);
    const textMin = Math.floor((gap % h) / min);
    const textSec = Math.floor((gap % min) / s);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMin;
    document.querySelector('.second').innerText = textSec;

    /*
    if(gap < 10000)
    {
        launchTheBullshit();
    }
    */
};

setInterval(countdown, 1000);