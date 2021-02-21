setInterval(setClock,1000);

// dom

const handSec = document.querySelector('[data-seconds-hand]')
const handMin = document.querySelector('[data-minutes-hand]')
const handHour = document.querySelector('[data-hour-hand]')


function setClock(){
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds()/ 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes())/60;
  const hoursRatio = (minutesRatio + currentDate.getHours())/12;

  setRotation(handSec,secondsRatio);
  setRotation(handMin,minutesRatio);
  setRotation(handHour,hoursRatio);
 }






 function setRotation(element,rotationRatio){
   
  element.style.setProperty('--rotation', rotationRatio * 360);
 }

 setClock()