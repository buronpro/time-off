const elTime = document.querySelector(".time");


const startTime = 24;
let time = startTime * 60;


setInterval(timeof, 1000);


function timeof(){
    const minut = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    elTime.innerHTML = `${minut} ${seconds}`;

    time--

}



