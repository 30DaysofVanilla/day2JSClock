  document.addEventListener('DOMContentLoaded', function() {
  
    let secondsHand = document.getElementById('second-hand');
    let minutesHand = document.getElementById('min-hand');
    let hoursHand = document.getElementById('hour-hand');

    function initializeHand(){
     let now = new Date();
     let seconds = now.getSeconds();
     let minutes = now.getMinutes();
     let hour = now.getHours();

     let initialRotateSeconds = 'rotate(' + Math.floor((seconds/60) * 360 + 90) + 'deg)';
     let initialRotateMin = 'rotate(' + Math.floor((minutes/60) * 360 + 90) + 'deg)';
     let initalHour = 'rotate(' + Math.floor((hour/12) * 360 + 90) + 'deg)';

     secondsHand.style.transform = initialRotateSeconds;
     minutesHand.style.transform = initialRotateMin;
     hoursHand.style.transform = initalHour;

     initializeClock(initialRotateSeconds); 
    }

    function initializeClock(init) {

      let rotate = +init.replace(/[^0-9]/g, '');
      let prevMin = +minutesHand.style.transform.replace(/[^0-9]/g, '');
      let prevHour = +hoursHand.style.transform.replace(/[^0-9]/g, '');

      setInterval(function() {

        secondsHand.style.transform = `rotate(${rotate+=2}deg)`;
        if(!rotate % 450) {
          minutesHand.style.transform = `rotate(${prevMin+=2}deg)`;
        }
        if(!prevMin % 450) {
          hoursHand.style.transform = `rotate(${prevHour+=10}deg)`;
        }
      }, 1000);
    }
   initializeHand();
});