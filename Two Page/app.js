function CategoryList(){
    const ListNew =document.querySelector("#category");

    const List =["Ganeral", "Work", "Shoppings", "Personal", "Education", "Vacation"];

    const ListSelect =document.createElement("select");
    ListSelect.setAttribute("id", "categorylist");
    ListNew.appendChild(ListSelect);

    for(let i =0; i <List.length; i++){
        const Option =document.createElement("option");
        Option.value =List[i];
        Option.text =List[i];
        ListSelect.appendChild(Option);
    }
}

CategoryList();