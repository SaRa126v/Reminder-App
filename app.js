import { optionMaker,logger } from "./Two Page/app.js";

console.log(logger());

// variables...........................................
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", displayGp);

const groupsSec = document.querySelector("#groupsSec");
const blurPage = document.querySelector("#blurPage");

// bluring the background & displaying the pop up
function displayGp() {
  // blur the background
  document.querySelector(".disabled")?.classList.remove("disabled");

  // add only one section of groups
  if (!document.querySelector("#groups")) {
    groupsSec.insertAdjacentHTML("afterbegin", gpTemp());
  }

  // go to the next page............
  const groups = document.querySelectorAll("#groups > div");

  // for each gp of task
  groups.forEach((group) => {
    group.addEventListener("click", nextPage);
  });
}

// a template for dsplaying groups of tasks
function gpTemp() {
  return `<div id="groups">
    
    <!-- gp1 -->
      <div id="customGp"><a href="Two Page/index.Html"><img src="assets/images/custom gp.png"><h2>Custom</h2></a></div>
    
      <!-- gp2 -->
      <div id="specialGp"><a href="Two Page/index.Html"><img src="assets/images/special gp.png"><h2>Special
    Event</h2></a></div>
    
    <!-- gp3 -->
      <div id="routineGp"><a href="Two Page/index.Html"><img src="assets/images/routine gp.png"><h2>Routine</h2></a></div>

      </div>`;
}

// get the id of clicked element in order to go to the specific page chosen by the user
// give options to the optionMaker func to build category for its task gp 
function nextPage(e) {

  switch (e.target.parentElement.parentElement.id) {
    // custom task gp
    case "customGp":
      optionMaker(["General","Work","Shopping","Personal","Education","Vacation"]);
      break;

      // special event task gp
    case "specialGp":
      optionMaker(["Party","Celebration","Conference","Wedding","Birthday","Concert"]);
      break;

      // routine task gp
    case "routineGp":
      optionMaker(["Pill","makeup","Reading","Pray","Exercise","Health"]);
      break;
  }
}
