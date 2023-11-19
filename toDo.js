let day = document.getElementById("day"),
  time = document.getElementById("time"),
  currentDate = new Date();


  //**** get day of the week ****//

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
];
let flag = false,
  today = "";
for (var i = 0; i < daysOfWeek.length; i++) {
  if (i === currentDate.getDay()) {
    flag = true;
    today = daysOfWeek[i];
  } 
}

if(flag){
    day.innerHTML = today
}else{
    day.innerHTML = `today`
}


// **** get current time **** //
console.log("hours",(Math.floor(currentDate.getTime()/(1000 * 60 * 60)))%24);
console.log("mint",(Math.floor(currentDate.getTime()/(1000 * 60)))%60);

function msToTime(duration) {
    let milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds;
  }
  time.innerHTML = msToTime(currentDate.getTime())