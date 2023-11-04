
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

// variables of reminder...............................
const reminderSelect = document.querySelector(".reminderSelect");

const arrowReminder = document.querySelector(".arrowReminder");

const selectReminderDefault = document.querySelector(".selectReminderDefault");

const spanReminderChild = document.querySelector(".spanReminderChild");

const containerReminderSelect = document.querySelector(
  ".containerReminderSelect"
);

// variables of Repeat...............................

const repeatSelect = document.querySelector(".repeatSelect");

const arrowRepeat = document.querySelector(".arrowRepeat");

const selectRepeatDefault = document.querySelector(".selectRepeatDefault");

const spanRepeatChild = document.querySelector(".spanRepeatChild");

const containerRepeatSelect = document.querySelector(".containerRepeatSelect");

// on click events..................................

//  Date event
containerDateSelect?.addEventListener("click", toggleDate);

//  Time event
containerSelect?.addEventListener("click", toggleTime);

//  Reminder event
containerReminderSelect?.addEventListener("click", toggleReminder);

//  Repeat event
containerRepeatSelect?.addEventListener("click", toggleRepeat);

// window event
window.addEventListener("click", disappear);

// .................................................

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
  arrowDate?.classList.toggle("arrowOpen");

  // show & hide Options
  dateSelect.classList.toggle("disabledOptions");
}
// show & hide Svg & options of date.................
function toggleReminder() {
  // show & hide Svg
  arrowReminder?.classList.toggle("arrowOpen");

  // show & hide Options
  reminderSelect.classList.toggle("disabledOptions");
}

// show & hide Svg & options of date.................
function toggleRepeat() {
  // show & hide Svg
  arrowRepeat?.classList.toggle("arrowOpen");

  // show & hide Options
  repeatSelect.classList.toggle("disabledOptions");
}

// .................................................

// if user clicks on sth other than the select, the options of that select disappear
function disappear(e) {
  if (!Object.is(e.target, selectDefault)) {
    // for time:
    arrow?.classList.add("arrowOpen");
    timeSelect?.classList.remove("disabledOptions");
  }

  if (e.target !== selectDateDefault) {
    // for date:
    arrowDate?.classList.add("arrowOpen");
    dateSelect?.classList.remove("disabledOptions");
  }

  if (e.target !== selectReminderDefault) {
    // for reminder:
    arrowReminder?.classList.add("arrowOpen");
    reminderSelect?.classList.remove("disabledOptions");
  }

  if (e.target !== selectRepeatDefault) {
    // for repeat:
    arrowRepeat?.classList.add("arrowOpen");
    repeatSelect?.classList.remove("disabledOptions");
  }
}

// .................................................

// display the current time to the user................
// it is the default time so if the user doesnt select a time this will be selected automatically

// get the current time
let currentHour = new Date().getHours();
let currentMin = new Date().getMinutes();

function displayCurrentTime() {
  // add 0 if needed
  if (currentHour < 10) {
    currentHour = "0" + currentHour;
  }

  if (currentMin < 10) {
    currentMin = "0" + currentMin;
  }

  // insert it in Dom
  if (spanChild) spanChild.textContent = currentHour + ":" + currentMin;
}

displayCurrentTime();

// display the current date to the user...................

// get the current time
let currentMonth = new Date().getMonth();
let currentday = new Date().getDay();
let currentyear = new Date().getFullYear();

function displayCurrentDate() {
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
  if (spanDateChild)
    spanDateChild.textContent =
      currentyear + "/" + currentday + "/" + currentMonth;
}

displayCurrentDate();

// .................................................

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

const year = document.querySelector(".year");
const day = document.querySelector(".day");
const month = document.querySelector(".month");

function dateMaker() {
  // making & displaying the years
  for (let y = currentyear; y <= currentyear + 10; y++) {
    const spanYear = document.createElement("span");
    spanYear.setAttribute("class", "y");
    spanYear.innerText = y;
    year?.appendChild(spanYear);
  }
  //  about 31 days*****************************
  // making & displaying the days
  for (let d = 1; d <= 30; d++) {
    const spanDay = document.createElement("span");
    spanDay.setAttribute("class", "d");
    spanDay.innerText = d;
    day?.appendChild(spanDay);
  }

  // making & displaying the months
  for (let mo = 1; mo <= 12; mo++) {
    const spanMonth = document.createElement("span");
    spanMonth.setAttribute("class", "mo");
    if (mo < 10) {
      mo = "0" + mo;
    }
    spanMonth.innerText = mo;
    month?.appendChild(spanMonth);
  }
}

dateMaker();

// .................................................

// is it intersecting? = is it visible?
// varibles:

// for time:
const mins = document.querySelectorAll(".m");
const hours = document.querySelectorAll(".h");
// for date:
const years = document.querySelectorAll(".y");
const days = document.querySelectorAll(".d");
const months = document.querySelectorAll(".mo");

// change the color of min or hour when it is scrolled & selected

function timeDateObserver(value, array) {
  const observer = new IntersectionObserver(
    (enteries) => {
      enteries.forEach((entry) => {
        entry.target.classList.toggle("selected", entry.isIntersecting);
      });
    },
    {
      root: value,
      rootMargin: "-50%",
    }
  );

  // observe the minutes for intersection
  array.forEach((value) => {
    observer.observe(value);
  });
}

// for Time:
timeDateObserver(hour, hours);
timeDateObserver(min, mins);

// for Date:
timeDateObserver(month, months);
timeDateObserver(day, days);
timeDateObserver(year, years);

// .................................................

// disply the selected time in the select..............

const saveTimeBtn = document.querySelector("#saveTimeBtn");

saveTimeBtn?.addEventListener("click", timeSaver);

function timeSaver() {
  const selectedTime = document.querySelectorAll(".selected");

  const h = selectedTime[0].textContent;
  const m = selectedTime[1].textContent;

  spanChild.textContent = h + ":" + m;
}

// disply the selected date in the select..............

const saveDateBtn = document.querySelector("#saveDateBtn");

saveDateBtn?.addEventListener("click", dateSaver);

function dateSaver() {
  const selectedDate = document.querySelectorAll(".selected");

  const y = selectedDate[0].textContent;
  const d = selectedDate[1].textContent;
  const mo = selectedDate[2].textContent;

  spanDateChild.textContent = y + "/" + d + "/" + mo;
}

// .................................................

// Reminder & Repeat Maker...........................

// build a template and options for reminder and repeat select
function optionMaker(list, select, optionClass) {
  for (let o = 0; o < list.length; o++) {
    // create div
    const div = document.createElement("div");
    // put it in its parent div
    select.appendChild(div);
    // give it class
    div.setAttribute("class", `${optionClass}`);

    // create span
    const span = document.createElement("span");
    // show the value to user
    span.textContent = list[o];
    // pu the options in select El
    div.appendChild(span);
  }
}

// array of options for reminder..........
const ReminderList = [
  "Never",
  "5 Minutes",
  "15 Minutes",
  "1 Hours before",
  "1 Day before",
  "custom",
  "only once",
];

// array of options for repeat..........
const RepeatList = [
  "Whitout repeat",
  "Daily",
  "Weekly",
  "Monthly",
  "Yearly",
  "Custom",
  "only once",
];

// the defualt option should be the first option
spanReminderChild.textContent = ReminderList[0];
spanRepeatChild.textContent = RepeatList[0];

// call the function to build its options
optionMaker(ReminderList, reminderSelect, "reminderOption");

// call the function to build its options
optionMaker(RepeatList, repeatSelect, "repeatOption");

// ..................................................

// disply the selected repeat & reminder in the select

// variables
const repeatOptions = document.querySelectorAll(".repeatOption");

const reminderOptions = document.querySelectorAll(".reminderOption");

// by clicking on the option the text of select div should change to the chosen option span

function optionChosser(options, selectedOption) {
  options.forEach((option) => {
    option?.addEventListener("click", () => {
      const span = option.firstElementChild;
      selectedOption.textContent = span.textContent;
    });
  });
}

optionChosser(repeatOptions, spanRepeatChild);
optionChosser(reminderOptions, spanReminderChild);

// console.log(+0 === -0);
// console.log(Object.is(+0, -0));
// console.log(Object.is(null, null));
// console.log(null === null);