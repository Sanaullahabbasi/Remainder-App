function setReminder() {
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
}

function showNotification() {

  // Check if the Notification API is available
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } 
  
  else if (Notification.permission === "permitted") {
    // If permission is already granted, show the notification
    console.log("permitted");
    new Notification("Reminder", {
      body: "ALERT!!! It's time for your reminder!",
    });
  } else if (Notification.permission !== "denied") {
    // Request permission from the user
    console.log("no denied");

    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        // If the user allows, show the notification
        new Notification("Reminder", {
          body: "granted It's time for your reminder!",
        });
      }
    });
  }
}
