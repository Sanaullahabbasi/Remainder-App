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


// let obj = {
//   name: "sana",
//   email: "sanaullah@gmail.com",
//   details:{
//     classroom : "one", 
//     school : "city"
//   }
// }

// obj.name = "tabish"; // updating object name 
// let {name, email} = obj;  // destructing of object  to get properties values in single line code
// console.log(name, email)  


// let {details:{classroom, school}} = obj;  // destructuring the nested object
// console.log(classroom, school)


// let arr = ["sana", "tabish"]; // destructuring the arry of obj
// let [a, b] = arr; // a ya b ki jaga ap kuch be likh skty hn or or jo phly lekengy ye sequence ko deky ga or agr apko 1st wala nhi chiy to "comma , " laga kr agy koi alpha bet lekh do to wo next wala le ayega
// console.log(a, b)

// let arr = ["sana", "tabish", "Imran"]; // agr arr[2] pr kch na likha ho to hum default value b de skty hn  jo k nechy wali line me many c="mazhar" kia he 
// let [a, b, c="mazhar"] = arr; // c ko default value assign ki he
// console.log(a, b, c)


// Defualt Function

// function abc(a, b="Gentlman"){  // function k parameter me b hum default value de skty hn 
//   console.log(a, b)
// }

// abc("Tabish", "Machoman")


// rest operator (rest ye joint ka kam kr raha he )


// spread operator 

// let arr1 = ["sana", "ullah"];
// let arr2 = ["Tabish", "Imran"];

// let newArr = [...arr1, ...arr2]  // ye dono arry ko   ki values ko copy kr raha he
// console.log(newArr)


// function run(...a){
//   console.log(a)
// }

// run("Sana", "Tabish", "Imran", "mazhar")