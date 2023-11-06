
// variables...........................................

// add task button:
const addBtn = document.querySelector("#addBtn");
// group of tasks section:
const groupsSec = document.querySelector(".groupsSec");
// the blur container:
const blurPage = document.querySelector("#blurPage");
const finishedSec = document.querySelector(".finished");

// .....................................................
// Events.............................................

// add task btn is clicked
addBtn.addEventListener("click", displayGp);

// window is clicked
window.addEventListener("click", hideGp);

// .....................................................
// functions............................................

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

}

// a template for dsplaying groups of tasks
function gpTemp() {
  return `<div id="groups">
    
    <!-- gp1 -->
      <div id="customGp"><img src="assets/images/custom gp.png"><a href="Two Page/index.Html?type=custom"><h2>Custom</h2></a></div>
    
      <!-- gp2 -->
      <div id="specialGp"><img src="assets/images/special gp.png"><a href="Two Page/index.Html?type=special"><h2>Special
    Event</h2></a></div>
    
    <!-- gp3 -->
      <div id="routineGp"><img src="assets/images/routine gp.png"><a href="Two Page/index.Html?type=routine"><h2>Routine</h2></a></div>

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
// local storage.......................................


// the tasks should stay in home page 
function getFromLs() {
  //  get our task storage from local storage 
  let taskStorage = JSON.parse(localStorage.getItem("tasks"));

  // if there is no task show empty state
  if (!taskStorage) {

    emptyState();

  } else {

  // get the new task that has been added recently
  taskStorage.forEach(task => {
    
  // display it in Dom
  document.querySelector(".toDo").insertAdjacentHTML("afterbegin", taskTemp(task));
  
  });
  }
}

getFromLs(); 

// put it in a template & display it in the dom 

function taskTemp(newTask) {
// **********************************************
// task description
// const description = newTask.description;

return `<div class="taskRow">
<!-- radio......................... -->
<div class="unChecked"></div>
<div class="task">
  <div class="lightBack"><img src="assets/images/Hard Working.png" alt="" /></div>
  <div class="taskContent">
    <h4>${newTask.title}</h4>
    <span>${newTask.date}</span>
    <span>${newTask.time}</span>

    <!-- bell svg......................... -->
    <svg
    data-reminder="${newTask.reminder}"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
    >
      <path
        d="M9.09889 4.40299C9.09889 3.50046 8.74037 2.63489 8.10218 1.99671C7.464 1.35853 6.59844 1 5.69591 1C4.79338 1 3.92782 1.35853 3.28963 1.99671C2.65145 2.63489 2.29292 3.50046 2.29292 4.40299C2.29292 8.37313 0.591431 9.50746 0.591431 9.50746H10.8004C10.8004 9.50746 9.09889 8.37313 9.09889 4.40299Z"
        stroke="#0C0C0C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.67711 11.7761C6.5774 11.948 6.43427 12.0907 6.26207 12.1899C6.08987 12.2891 5.89464 12.3413 5.69592 12.3413C5.49719 12.3413 5.30196 12.2891 5.12976 12.1899C4.95756 12.0907 4.81444 11.948 4.71472 11.7761"
        stroke="#0C0C0C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <!-- repeat svg....................... -->
    <svg
    data-repeat="${newTask.repeat}"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
    >
      <path
        d="M8.80042 1L10.8004 3.5L8.80042 6"
        stroke="#0C0C0C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.800415 7V5.66667C0.800415 4.95942 1.03454 4.28115 1.45129 3.78105C1.86804 3.28095 2.43327 3 3.02264 3H10.8004"
        stroke="#0C0C0C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.80042 12L0.800415 9.5L2.80042 7"
        stroke="#0C0C0C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.8004 6V7C10.8004 7.53043 10.5663 8.03914 10.1495 8.41421C9.73279 8.78929 9.16756 9 8.57819 9H0.800415"
        stroke="#0C0C0C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>

  <!-- Potential Star Svg................. -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M9 1L11.472 6.26604L17 7.11567L13 11.2124L13.944 17L9 14.266L4.056 17L5 11.2124L1 7.11567L6.528 6.26604L9 1Z"
      stroke="#868686"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</div>
</div>`

}

// ....................................................
// when there is no task empty state should be displyed

function emptyState() {
  console.log("need to work on empty state");
}
// ....................................................
// tasks that are done should go to done secton

function doneTasks(e) {
finishedSec.appendChild(e.target.parentElement);
addInLs(e.target.parentElement);
}

// get the circles
const circles = document.querySelectorAll(".unChecked");

// circle is checked
circles.forEach(circle =>{
  circle.addEventListener("click", doneTasks);
})

// ....................................................

// 1)
function fromLS() {
  // get the task storage if it already exists
  let finishedTasksStorage = JSON.parse(localStorage.getItem("finishedTasks"));

  // if task storage does not exist, build one
  if (!finishedTasksStorage) {
    localStorage.setItem("finishedTasks", JSON.stringify([]));
   finishedTasksStorage = JSON.parse(localStorage.getItem("finishedTasks"));
  }

  return finishedTasksStorage;
}

// 2)
function addInLs(finishedTask) {
  
  // get our task storage.....
  const finishedTasksStorage = fromLS();
  
  // add an obj in the task storage.....
  finishedTasksStorage.push(
    finishedTask
  )

  console.log(finishedTask);
  
  // put it back in the local storage.....
  toLS(finishedTasksStorage); 
  
  }

  // 3)
function toLS(finishedTasksStorage) {
  //   then put the array back in local storage
  localStorage.setItem("finishedTasks", JSON.stringify(finishedTasksStorage));

}

// ....................................................



// for notif:

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