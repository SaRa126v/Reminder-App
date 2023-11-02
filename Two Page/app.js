// make & display Category Options for each gp
export function optionMaker(optionArray) {
  const select = document.querySelector("#categorySelect");
  if (!select) return;

  for (let i = 0; i < optionArray.length; i++) {
    // create the option
    const option = document.createElement("option");
    // set its value
    option.value = optionArray[i];
    // show the value to user
    option.text = optionArray[i];
    // pu the options in select El
    select.appendChild(option);
  }
}

export function logger() {
  return "Saber";
}

// Time & Date.........................................

// variables of time...................................
const timeSelect = document.querySelector(".timeSelect");

const arrow = document.querySelector(".arrow");

const selectDefault = document.querySelector(".selectDefault");

const spanChild = document.querySelector(".spanChild");

const containerSelect = document.querySelector(".containerSelect");


// variables of date....................................
const dateSelect = document.querySelector(".dateSelect");

const arrowDate = document.querySelector(".arrowDate");

const selectDateDefault = document.querySelector(".selectDateDefault");

const spanDateChild = document.querySelector(".spanDateChild");

const containerDateSelect = document.querySelector(".containerDateSelect");



// on click events..................................

//  Time event
containerSelect?.addEventListener("click", toggleTime);

//  Date event
containerDateSelect?.addEventListener("click", toggleDate);

// window event
window.addEventListener("click", disappear);


// show & hide Svg & options of time.................
function toggleTime() {
  // show & hide Svg
  arrow?.classList.toggle("arrowOpen");

  // show & hide Options
  timeSelect.classList.toggle("disabledOptions");
}

// show & hide Svg & options of date.................
function toggleDate() {
  // show & hide Svg
  arrowDate?.classList.toggle("arrowDateOpen");

  // show & hide Options
  dateSelect.classList.toggle("disabledOptions");
}

// if user clicks on sth other than the select, the options of that select disappear
function disappear(e) {
  if (e.target !== selectDefault && e.target !== selectDateDefault) {
    // for time:
    arrow?.classList.add("arrowOpen");
    timeSelect?.classList.remove("disabledOptions");

    // for date:
    arrowDate?.classList.add("arrowDateOpen");
    dateSelect?.classList.remove("disabledOptions");
  }
}

// it shows the time by making spans inside the scrollable divs
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");

function timeMaker() {
  // making & displaying the hours
  for (let h = 0; h < 24; h++) {
    const spanHour = document.createElement("span");
    spanHour.setAttribute("class", "h");
    if (h < 10) {
      h = "0" + h;
    }
    spanHour.innerText = h;
    hour?.appendChild(spanHour);
  }

  // making & displaying the minutes
  for (let m = 0; m < 60; m++) {
    const spanMin = document.createElement("span");
    spanMin.setAttribute("class", "m");
    if (m < 10) {
      m = "0" + m;
    }
    spanMin.innerText = m;
    min?.appendChild(spanMin);
  }
}

timeMaker();


// it shows the date by making spans inside the scrollable divs

// const year = document.querySelector(".year");
// const day = document.querySelector(".day");
// const month = document.querySelector(".month");

// function dateMaker() {
//   // making & displaying the years
//   for (let mo = 1 ; mo < 30; mo++) {
//     const spanMonth = document.createElement("span");
//     spanMonth.setAttribute("class", "mo");
//     if (mo < 10) {
//       mo = "0" + mo;
//     }
//     spanMonth.innerText = mo;
//     hour?.appendChild(spanHour);
//   }

//   // making & displaying the minutes
//   for (let m = 0; m < 60; m++) {
//     const spanMin = document.createElement("span");
//     spanMin.setAttribute("class", "m");
//     if (m < 10) {
//       m = "0" + m;
//     }
//     spanMin.innerText = m;
//     min?.appendChild(spanMin);
//   }
// }

// dateMaker();

// is it intersecting? = is it visible?..................

// varibles
const mins = document.querySelectorAll(".m");
const hours = document.querySelectorAll(".h");

// change the color of min or hour when it is scrolled & selected

// for minutes:.........................................

const minObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entry) => {
      entry.target.classList.toggle("selected", entry.isIntersecting);
    });
  },
  {
    root: min,
    rootMargin: "-50%",
  }
);

// observe the minutes for intersection
mins.forEach((min) => {
  minObserver.observe(min);
});

// for hours:...........................................

const hourObserver = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entry) => {
      entry.target.classList.toggle("selected", entry.isIntersecting);
    });
  },
  {
    root: hour,
    rootMargin: "-50%",
  }
);

// observe the minutes for intersection
hours.forEach((hour) => {
  hourObserver.observe(hour);
});

// disply the selected time in the select..............

const saveTimeBtn = document.querySelector("#saveTimeBtn");

saveTimeBtn?.addEventListener("click", timeSaver);

function timeSaver() {
  const selectedTime = document.querySelectorAll(".selected");

  const h = selectedTime[0].textContent;
  const m = selectedTime[1].textContent;

  spanChild.textContent = h + ":" + m;
}

// display the current time to the user................
// it is the default time so if the user doesnt select a time this will be selected automatically

function displayCurrentTime() {
  // get the current time
  let currentHour = new Date().getHours();
  let currentMin = new Date().getMinutes();
  // add 0 if needed
  if (currentHour < 10) {
    currentHour = "0" + currentHour;
  }

  if (currentMin < 10) {
    currentMin = "0" + currentMin;
  }

  // insert it in Dom
  spanChild.textContent = currentHour + ":" + currentMin;
}

displayCurrentTime();


// display the current date to the user................... 

function displayCurrentDate() {
  // get the current time
  let currentMonth = new Date().getMonth();
  let currentday = new Date().getDay();
  let currentyear = new Date().getFullYear();

  // add 0 if needed
  // for month:
  if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
  }

  // for day:
  if (currentday < 10) {
    currentday = "0" + currentday;
  }

  // insert & display it in Dom
  spanDateChild.textContent = currentyear + "/" + currentday + "/" + currentMonth;
}

displayCurrentDate();