// // **** Dashboard Javascript programming ****
// let day = document.getElementById("day"),
//   time = document.getElementById("time"),
//   currentDate = new Date();

// let timeInterval;

// //**** get day of the week ****//

// let daysOfWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thurday",
//   "Friday",
//   "Saturday",
// ];
// let flag = false,
//   today = "";
// for (var i = 0; i < daysOfWeek.length; i++) {
//   if (i === currentDate.getDay()) {
//     flag = true;
//     today = daysOfWeek[i];
//   }
// }

// if (flag) {
//   day.innerHTML = today;
// } else {
//   day.innerHTML = `today`;
// }

// // **** get current time **** //

// function msToTime() {
//   let currentTime = new Date(),
//     seconds = Math.floor(currentTime.getSeconds()),
//     minutes = Math.floor(currentTime.getMinutes()),
//     hours = Math.floor(currentTime.getHours()),
//     ampm;

//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;
//   ampm = hours > 12 ? "PM" : "AM";
//   hours = hours > 12 ? hours - 12 : hours;

//   return hours + ":" + minutes + ":" + seconds + " " + ampm;
// }
// timeInterval = setInterval(function () {
//   time.innerHTML = `${msToTime()}`;
// }, 10);
