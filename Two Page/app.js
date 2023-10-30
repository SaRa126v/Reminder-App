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

function NewDate(){
    const New =document.querySelector("#date");

    const List =[""];
   
    const DateSelect =document.createElement("select");
    DateSelect.setAttribute("id", "datelist");
    New.appendChild(DateSelect);

    for(let i =0; i < 5; i++){
        const Option =document.createElement("option");
        Option.value =List [i] =new Date();
        Option.text =List [i] =new Date().toLocaleDateString();
        DateSelect.appendChild(Option);
    }
}
NewDate()

function Reminder(){
    const ReminderNew =document.querySelector("#reminder");

    const ReminderList =["Never", "5 Minutes", "15 Minutes", "1 Hours before", "1 Day before", "custom", "only once"];

    const ReminderSelect =document.createElement("select");
    ReminderSelect.setAttribute("id", "reminderlist");
    ReminderNew.appendChild(ReminderSelect);

    for(let i=0; i <ReminderList.length; i++){
        const Option =document.createElement("option");
        Option.value =ReminderList [i];
        Option.text =ReminderList [i];
        ReminderSelect.appendChild(Option);
    }
}

Reminder()

function Repeat(){
    const RepeatNew =document.querySelector("#repeat");

    const RepeatList =["Whitout repeat", "Daily", "Weekly", "Monthly", "Yearly", "Custom", "only once"];

    const RepeatSelect =document.createElement("select");
    RepeatSelect.setAttribute("id", "repeatlist");
    RepeatNew.appendChild(RepeatSelect);

    for(let i=0; i <RepeatList.length; i++){
        const Option =document.createElement("option");
        Option.value =RepeatList [i];
        Option.text =RepeatList [i];
        RepeatSelect.appendChild(Option);
    }
}

Repeat()

// make a template for other categories...............

// make & display Category Options for each gp
function optionMaker(optionArray) {
    for(let i = 0; i < optionArray.length; i++){
        // create the option
        const option = document.createElement("option");
        // set its value
        option.value = optionArray[i];
        // show the value to user
        option.text = optionArray[i];
        // pu the options in select El
        const select = document.querySelector("#categorySelect");
        select.appendChild(option);
    }
}

// just for test***********************
optionMaker(["General","Work","Shopping","Personal","Education","Vacation"]);

// make a template for date & time.....................


const containerSelect = document.querySelector(".containerSelect");
containerSelect.addEventListener("click", appear);

// show Svg & options on click.................
function appear() {

    // show Svg 
    document.querySelector(".arrowOpen")?.classList.remove("arrowOpen");

    // show Options
    document.querySelector(".disabledOptions")?.classList.remove("disabledOptions");
}

window.addEventListener("click", disappear);

function disappear() {

// if ( && ) {
    
// }

}


