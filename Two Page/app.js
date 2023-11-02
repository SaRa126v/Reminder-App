
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

// is it intersecting? = is it visible?..................

// varibles
const mins = document.querySelectorAll(".m");
const hours = document.querySelectorAll(".h");

// change the color of min or hour when it is scrolled & selected

// for minutes:.........................................

const minObserver = new IntersectionObserver(enteries =>{
  enteries.forEach(entry =>{

    entry.target.classList.toggle("selected", entry.isIntersecting);

  })
},
{
  root: min,
  rootMargin: "-50%",
})

// observe the minutes for intersection
mins.forEach(min =>{
  minObserver.observe(min);
})

// for hours:...........................................

const hourObserver = new IntersectionObserver(enteries =>{
  enteries.forEach(entry =>{

    entry.target.classList.toggle("selected", entry.isIntersecting);

  })
},
{
  root: hour,
  rootMargin: "-50%",
})

// observe the minutes for intersection
hours.forEach(hour =>{
  hourObserver.observe(hour);
})

// disply the selected time in the select..............

const saveTimeBtn = document.querySelector("#saveTimeBtn");

saveTimeBtn?.addEventListener("click", timeSaver);

function timeSaver() {
const selectedTime = document.querySelectorAll(".selected");

const h = selectedTime[0].textContent;
const m = selectedTime[1].textContent;

spanChild.textContent = h + ":" + m;

}


