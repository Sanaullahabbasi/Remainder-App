let ringtone = new Audio("audio/ringtone.mp3");
let mainUI = document.getElementById("container"),
  addRemUI = document.querySelector(".main"),
  remTitle = document.getElementById("rem_title"),
  mainUITitle = document.getElementById("title"),
  mainText = document.getElementById("mainText"),
  dumText = document.getElementById("dum");

function setReminder() {
  addRemUI.style.display = "none";
  mainUI.style.display = "block";
  // Get user input for reminder time
  const reminderTime = document.getElementById("reminderTime").value;
  // Validate the input
  if (!reminderTime) {
    alert("Please enter a valid time for the reminder.");
    return;
  }

  // Parse the time and convert it to milliseconds

  const milliseconds = new Date(reminderTime).getTime() - new Date().getTime();

  // Set a timeout to show the notification
  setTimeout(() => {
    showNotification();
  }, milliseconds);

  mainText.innerHTML = `
  <p id="dum" contenteditable="true">${remTitle.value}</p>
  `;
}

function showNotification() {
  // Check if the Notification API is available
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "permitted") {
    // If permission is already granted, show the notification
    new Notification("Reminder", {
      body: "ALERT!!! It's time for your reminder!",
    });
  } else if (Notification.permission !== "denied") {
    // Request permission from the user

    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        // If the user allows, show the notification
        new Notification("Reminder", {
          body: "granted It's time for your reminder!",
        });
        ringtone.play();
        ringtone.loop = true;
      }
    });
  }
}

// **** Dashboard Javascript programming ****
let day = document.getElementById("day"),
  time = document.getElementById("time"),
  currentDate = new Date();

let timeInterval;

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

if (flag) {
  day.innerHTML = `${today}`;
} else {
  day.innerHTML = `today`;
}

// **** get current time **** //

function msToTime() {
  let currentTime = new Date(),
    seconds = Math.floor(currentTime.getSeconds()),
    minutes = Math.floor(currentTime.getMinutes()),
    hours = Math.floor(currentTime.getHours()),
    ampm;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  ampm = hours > 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;

  return hours + ":" + minutes + ":" + seconds + " " + ampm;
}
timeInterval = setInterval(function () {
  time.innerHTML = msToTime();
}, 10);

// *****  adding reminder setting *****

function addRem() {
  addRemUI.style.display = "block";
  addRemUI.style.display = "flex";
  mainUI.style.display = "none";
}

// to list me input value show krwana he

function showInput(){
  dumText.style.display = "block";
  mainText.style.display= "none";
  const store = remTitle.value;
  mainUITitle.value = store;
  console.log(mainUITitle.value);
  console.log(store);

}