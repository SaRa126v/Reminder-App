
// variables...........................................

// add task button:
const addBtn = document.querySelector("#addBtn");
// group of tasks section:
const groupsSec = document.querySelector(".groupsSec");
// the blur container:
const blurPage = document.querySelector("#blurPage");

// .....................................................

// Events.............................................

// add task btn is clicked
addBtn.addEventListener("click", displayGp);

// window is clicked
window.addEventListener("click", hideGp);

// .....................................................

// bluring the background & displaying the pop up
function displayGp() {

  // blur the background
  document.querySelectorAll(".disabled").forEach((disabledEl) => {
    disabledEl.classList.remove("disabled");
  });

  // add only one section of groups
  if (!document.querySelector("#groups")) {
    groupsSec.insertAdjacentHTML("afterbegin", gpTemp());
  }

  // each gp of tasks:
// const groups = document.querySelector("#groups > div");
// nextPage(groups);
}

// a template for dsplaying groups of tasks
function gpTemp() {

  // <a href="Two Page/index.Html"></a>

  return `<div id="groups">
    
    <!-- gp1 -->
      <div id="customGp"><img src="assets/images/custom gp.png"><h2>Custom</h2></div>
    
      <!-- gp2 -->
      <div id="specialGp"><img src="assets/images/special gp.png"><h2>Special
    Event</h2></div>
    
    <!-- gp3 -->
      <div id="routineGp"><img src="assets/images/routine gp.png"><h2>Routine</h2></div>

      </div>`;
}

// if user clicks on the blur container the task groups should disappear
function hideGp(e) {
  if (Object.is(e.target, blurPage)) {
    blurPage?.classList.add("disabled");
    groupsSec?.classList.add("disabled");
  }
}
// ....................................................

// get the id of clicked element in order to go to the specific page chosen by the user
// give options to the optionMaker func to build category for its task gp

// function nextPage(groups) {
// // each gp of task is clicked
// console.log(groups);
// groups.forEach((group) => {
//   group.addEventListener("click", ()=>{
//  // the default array of task options
//  let taskArray = [
//   "General",
//   "Work",
//   "Shopping",
//   "Personal",
//   "Education",
//   "Vacation",
// ];

// // the chosen array of task options
// switch (e.target.parentElement.parentElement.id) {
//   // custom task gp
//   case "customGp":
//     taskArray = [
//       "General",
//       "Work",
//       "Shopping",
//       "Personal",
//       "Education",
//       "Vacation",
//     ];
//     break;

//   // special event task gp
//   case "specialGp":
//     taskArray = [
//       "Party",
//       "Celebration",
//       "Conference",
//       "Wedding",
//       "Birthday",
//       "Concert",
//     ];
//     break;

//   // routine task gp
//   case "routineGp":
//     taskArray = ["Pill", "makeup", "Reading", "Pray", "Exercise", "Health"];
//     break;
// }
//   });
// });

// }

// ....................................................

// let taskArray = [
//   "General",
//   "Work",
//   "Shopping",
//   "Personal",
//   "Education",
//   "Vacation",
// ];
// fromLS(taskArray);

// save the array of chosen task gp in the local storage

// function fromLS(taskArray) {
//  const taskGpLs = JSON.parse(localStorage.getItem("chosenTaskGp"));

//   // for the first time:
//   if (!taskGpLs) {
//     // make an array in local storage
//     localStorage.setItem("chosenTaskGp", `[${taskArray}]`);
//   }
// }

const Alarm =null;
const AlarmAudio =document.querySelector("#alarm-audio")
const CreateAlarm =document.querySelector(".create-alarm");
const ActiveAlarm =document.querySelector("#activv-alarm");


// AlarmAudio.src ="";
// AlarmAudio.load();

function Time(event){
  event.preventDefault();
  const {hour, sec, min, zone} =document.forms[0];
  GetTimeString({
    hour: hour.value,
    sec:sec.value,
    min:min.value,
    zone:zone.value
  });
  
  document.forms[0].reset();
  CreateAlarm.style.display ="none";
}

document.forms[0].addEventListener("submit", Time);

function AlarmCheck(TimeStirng){
  if(Alarm ==TimeStirng){
    AlarmAudio.play();
  }
}

function GetTimeString({hour, second, minute, zone}){
  if(minute /10 <1){
    minute ="0" + minute;
  }else if(second /10 <1){
    second ="0" + second;
  }
  return `${hour}-${minute}-${second}-${zone}`;
}

function RenderTime(){
  const Time =document.querySelector(".tabcontent");
  const Dates =new Date();

  let hour =Dates.getHours();
  let minute =Dates.getMinutes();
  let second =Dates.getSeconds();
  let zone =hour >=12? "PM" : "AM";

  if(hour >15){
    hour =hour % 12;
  }

  const TimeString =GetTimeString({hour, minute, second, zone});
  AlarmCheck(TimeString);
}

setInterval(RenderTime, 1000);