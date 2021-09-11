
function secondsToHms(d) {// convierte los segundos en minutos, horas

  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  const s = Math.floor(d % 3600 % 60);

  return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`; 
}


function setAlarm() {
  const time = document.getElementById('timeRemaining')
  const horas = document.getElementById('alarmSet')
  const minutos = document.getElementById('alarmSet1')
  const segundos = document.getElementById('alarmSet2')
  let hour=horas.value*3600
  let min = minutos.value*60
  let seg = hour+ min + parseInt(segundos.value)  
  
  const interval = setInterval(function(){

  time.innerHTML=`Time Remaining: ${secondsToHms(seg)}`;

  if (seg == 0) {
    clearInterval(interval);
    playAlarm();
    const body= document.querySelector('body')
    body.style.backgroundColor ='#87ca8a'
   }
  seg--;

},1000);
function  restartAlarm() {
  const body= document.querySelector('body')
  const time = document.getElementById('timeRemaining')
  const horas = document.getElementById('alarmSet')
  const minutos = document.getElementById('alarmSet1')
  const segundos = document.getElementById('alarmSet2')
  clearInterval(interval);
  time.innerHTML=`Time Remaining:00:00:00`
  horas.value=("")
  minutos.value=("")
  segundos.value=("")
  body.style.backgroundColor ='white'
  
}
const botonRestart= document.getElementById('restart')
botonRestart.addEventListener("click",restartAlarm)
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
