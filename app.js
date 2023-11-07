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
// ......................................................
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
// ......................................................

// if user clicks on the blur container the task groups should disappear
function hideGp(e) {
  if (Object.is(e.target, blurPage)) {
    blurPage?.classList.add("disabled");
    groupsSec?.classList.add("disabled");
  }
}

// ....................................................
// local storage.......................................

//  get our task storage from local storage
// it has already ben built in page 2
const getTaskStorage = ()=> JSON.parse(localStorage.getItem("tasks"));

//  get our finished task storage from local storage
function getFinishedTaskStorage() {
  // get the finished task storage if it already exists
  let finishedTaskStorage = JSON.parse(localStorage.getItem("finishedTasks"));

  // if finished task storage does not exist, build one
  if (!finishedTaskStorage) {
    localStorage.setItem("finishedTasks", JSON.stringify([]));
    finishedTaskStorage = JSON.parse(localStorage.getItem("finishedTasks"));
  }

  return finishedTaskStorage;
}

  // show empty state if needed
function emptyStateChecker() {
  const taskStorage = getTaskStorage();
  const finishedTaskStorage = getFinishedTaskStorage();

  if (!taskStorage.length && !finishedTaskStorage.length) emptyState();
}

// ....................................................
// when there is no task empty state should be displyed

function emptyState() {
  console.log("need to work on empty state");
}

// ......................................................
// get the task storage
function displaytasks() {
  const taskStorage = getTaskStorage();
  const finishedTaskStorage = getFinishedTaskStorage();

// load tasks only once
removePreLoadedTasks()

  taskStorage?.forEach((task) => {
    // display it in Dom
    toDoDisplayer(task);
  });

  finishedTaskStorage?.forEach((task) => {
    // display it in Dom
    doneDisplayer(task);
  });

}

// ......................................................
// load tasks only once by removing all the previous loaded tasks
function removePreLoadedTasks() {
  document
  .querySelector(".toDo").innerHTML = "";
  document
  .querySelector(".finished").innerHTML = "";
}

// display the tasks in Dom..............................
function toDoDisplayer(task) {
  // display it in Dom
  document
    .querySelector(".toDo")
    .insertAdjacentHTML("afterbegin", taskTemp(task));
}

function doneDisplayer(task) {
  // display it in Dom
  document
    .querySelector(".finished")
    .insertAdjacentHTML("afterbegin", taskTemp2(task));
}

// .....................................................
// put it in a template & display it in the dom

function taskTemp(newTask) {
  return `<div data-id="${newTask.id}" class="taskRow">
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
</div>`;
}

// a template for finished tasks

function taskTemp2(task) {
  return `<div data-id="${task.id}" class="taskRow" >
<!-- radio......................... -->
<div class="checked"></div>
<div class="task">
<div class="darkBack"><img src="assets/images/Hard Working.png" alt="" /></div>
<div class="taskContent">
<h4>${task.title}
</h4>
<span>${task.date}</span>
<span id="create-alarm">${task.time}</span>
<audio id=""alarm-audio></audio>

<!-- bell svg....................... -->
<svg 
data-repeat="${task.reminder}"
xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
<path d="M9.50746 4.40299C9.50746 3.50046 9.14894 2.63489 8.51075 1.99671C7.87257 1.35853 7.00701 1 6.10448 1C5.20195 1 4.33639 1.35853 3.6982 1.99671C3.06002 2.63489 2.70149 3.50046 2.70149 4.40299C2.70149 8.37313 1 9.50746 1 9.50746H11.209C11.209 9.50746 9.50746 8.37313 9.50746 4.40299Z" stroke="#868686" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.08568 11.7761C6.98597 11.948 6.84284 12.0907 6.67064 12.1899C6.49844 12.2891 6.30321 12.3413 6.10448 12.3413C5.90576 12.3413 5.71053 12.2891 5.53833 12.1899C5.36613 12.0907 5.223 11.948 5.12329 11.7761" stroke="#868686" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<!-- repeat svg........................ -->
<svg 
data-repeat="${task.repeat}"
xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
<path d="M9.20895 1L11.209 3.5L9.20895 6" stroke="#868686" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.20895 7V5.66667C1.20895 4.95942 1.44308 4.28115 1.85983 3.78105C2.27658 3.28095 2.84181 3 3.43118 3H11.209" stroke="#868686" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.20895 12L1.20895 9.5L3.20895 7" stroke="#868686" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.209 6V7C11.209 7.53043 10.9748 8.03914 10.5581 8.41421C10.1413 8.78929 9.5761 9 8.98673 9H1.20895" stroke="#868686" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

<!-- Potential Star Svg................ -->
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
</div>`;
}

// ....................................................
// move task from to do section to done seection
function idGetter(e) {
  // the movable div of task
  const taskRow = e.target.parentElement;

  // get the id of clicked task
  const currentId = taskRow.getAttribute("data-id");
  return currentId;
}

// ....................................................
// get the id & remove from to do & add to done section
function moveTaskInLs(e) {
  // arrays in local storage
  const taskStorage = getTaskStorage();
  const finishedTaskStorage = getFinishedTaskStorage();
  const currentId = idGetter(e);

  // find the id in taskStorage
  taskStorage.find((task) => {
    if (Object.is(task.id, currentId)) {
      // add it to array of finished task storage
      finishedTaskStorage.push(task);
      // remove it from array of task storage
      taskStorage.splice(taskStorage.indexOf(task), 1);
    }
  });

  // the task is now added to finishedTaskStorage
  // so we must put it back in ls
  toLS(taskStorage, finishedTaskStorage);
}

function moveTaskBackInLs(e) {
  // arrays in local storage
  const taskStorage = getTaskStorage();
  const finishedTaskStorage = getFinishedTaskStorage();
  const currentId = idGetter(e);

  // find the id in taskStorage
  finishedTaskStorage.find((task) => {
    if (Object.is(task.id, currentId)) {
      taskStorage.push(task);
      finishedTaskStorage.splice(taskStorage.indexOf(task), 1);
    }
  });

  toLS(taskStorage, finishedTaskStorage);
}

// ....................................................
// 3)
function toLS(taskStorage, finishedTaskStorage) {
  //   then put the arrays back in local storage
  localStorage.setItem("finishedTasks", JSON.stringify(finishedTaskStorage));

  localStorage.setItem("tasks", JSON.stringify(taskStorage));

  // disply to do & done tasks
  displaytasks()
  // add event circles
  circleEvents()
  // check if empty state is needed
  emptyStateChecker()
}

// ....................................................

// disply all tasks
displaytasks(); 
 // check & uncheck events after loading notes
circleEvents();

function circleEvents() {

const circles = document.querySelectorAll(".unChecked");

// circle is checked
circles.forEach((circle) => {
  circle.addEventListener("click", moveTaskInLs);
});

const filledCircles = document.querySelectorAll(".checked");

// circle is unchecked
filledCircles.forEach((circle) => {
  circle.addEventListener("click", moveTaskBackInLs);
}); 
}



// ....................................................
// for notif:

// const AlarmString = null;
// const CreateAlarm = document.querySelector("#create-alarm");
// const AlarmAudio = document.querySelector("#alarm-audio");

// AlarmAudio.src = "";
// AlarmAudio.load();

// function GetTime() {
//   const { hours, minutes } = CreateAlarm[0];
//   AlarmString.getTimeString({
//     hours: hours.value,
//     minutes: minutes.value,
//   });
//   CreateAlarm[o].reset();
//   CreateAlarm.style.display = "none";
// }

// function CheckAlarm(TimeString) {
//   if (AlarmString === TimeString) {
//     AlarmAudio.play();
//   }
// }

// function GetTimeString(hours, minutes) {
//   if (minutes / 10 < 1) {
//     minutes = "0" + minutes;
//   }
//   return `${hours}:${minutes}`;
// }

// function RenderTime() {
//   const Dates = new Date();
//   let hours = Dates.getHours();
//   let minutes = Dates.getMinutes();

//   if (hours > 10) {
//     hours = hours % 12;
//   }

//   const TimeString = GetTimeString({ hours, minutes });
//   CheckAlarm(TimeString);
// }

// setInterval(RenderTime, 1000);
