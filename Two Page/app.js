// function CategoryList(){
//     const ListNew =document.querySelector("#category");

//     const List =["Ganeral", "Work", "Shoppings", "Personal", "Education", "Vacation"];

//     const ListSelect =document.createElement("select");
//     ListSelect.setAttribute("id", "categorylist");
//     ListNew.appendChild(ListSelect);

//     for(let i =0; i <List.length; i++){
//         const Option =document.createElement("option");
//         Option.value =List[i];
//         Option.text =List[i];
//         ListSelect.appendChild(Option);
//     }
// }

// CategoryList();

function NewDate() {
  const New = document.querySelector("#date");
  if (!New) return;

  const List = [""];

  const DateSelect = document.createElement("select");
  DateSelect.setAttribute("id", "datelist");
  New.appendChild(DateSelect);

  for (let i = 0; i < 5; i++) {
    const Option = document.createElement("option");
    Option.value = List[i] = new Date();
    Option.text = List[i] = new Date().toLocaleDateString();
    DateSelect.appendChild(Option);
  }
}
NewDate();

function Reminder() {
  const ReminderNew = document.querySelector("#reminder");
  if (!ReminderNew) return;
  const ReminderList = [
    "Never",
    "5 Minutes",
    "15 Minutes",
    "1 Hours before",
    "1 Day before",
    "custom",
    "only once",
  ];

  const ReminderSelect = document.createElement("select");
  ReminderSelect.setAttribute("id", "reminderlist");
  ReminderNew.appendChild(ReminderSelect);

  for (let i = 0; i < ReminderList.length; i++) {
    const Option = document.createElement("option");
    Option.value = ReminderList[i];
    Option.text = ReminderList[i];
    ReminderSelect.appendChild(Option);
  }
}

Reminder();

function Repeat() {
  const RepeatNew = document.querySelector("#repeat");
  if (!RepeatNew) return;
  const RepeatList = [
    "Whitout repeat",
    "Daily",
    "Weekly",
    "Monthly",
    "Yearly",
    "Custom",
    "only once",
  ];

  const RepeatSelect = document.createElement("select");
  RepeatSelect.setAttribute("id", "repeatlist");
  RepeatNew.appendChild(RepeatSelect);

  for (let i = 0; i < RepeatList.length; i++) {
    const Option = document.createElement("option");
    Option.value = RepeatList[i];
    Option.text = RepeatList[i];
    RepeatSelect.appendChild(Option);
  }
}

Repeat();

// make a template for other categories...............

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

// make a template for date & time.....................

// variables..........
const timeSelect = document.querySelector(".timeSelect");
const arrow = document.querySelector(".arrow");

const selectDefault = document.querySelector(".selectDefault");
const spanChild = document.querySelector(".spanChild");

const containerSelect = document.querySelector(".containerSelect");

// on click events..........
containerSelect?.addEventListener("click", toggle);
window.addEventListener("click", disappear);

// show & hide Svg & options.................
function toggle() {
  // show & hide Svg
  arrow?.classList.toggle("arrowOpen");

  // show & hide Options
  timeSelect.classList.toggle("disabledOptions");
}

// if user clicks on sth other than the select, the options of that select disappear
function disappear(e) {
  if (e.target !== selectDefault) {
    arrow?.classList.add("arrowOpen");
    timeSelect?.classList.remove("disabledOptions");
  }
}

// it shows the time by making spans inside the scrollable divs
function timeMaker() {
  const hour = document.querySelector(".hour");
  const min = document.querySelector(".min");

  // making & displaying the hours
  for (let h = 0; h < 24; h++) {
    const spanHour = document.createElement("span");
    if (h < 10) {
      h = "0" + h;
    }
    spanHour.innerText = h;
    hour.appendChild(spanHour);
  }

  // making & displaying the minutes
  for (let m = 0; m < 60; m++) {
    const spanMin = document.createElement("span");
    if (m < 10) {
      m = "0" + m;
    }
    spanMin.innerText = m;
    min.appendChild(spanMin);
  }
}

timeMaker();


