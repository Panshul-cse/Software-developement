let addBtn=document.getElementById("addExpense");
let updateBtn=document.getElementById("updateExpense");
let deleteBtn=document.getElementById("deleteExpense");
let totalDisplay=document.getElementById("total");
let list=document.createElement("ul");
document.body.appendChild(list);

function updateTotal() {
    let items = list.getElementsByTagName("li");
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        let parts = items[i].innerText.split(" - ");
        total += parseInt(parts[1], 10) || 0;
    }
    totalDisplay.value = total;
}

addBtn.addEventListener("click", function() {
    let name = document.getElementById("expense").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let item = document.createElement("li");
    item.innerText = name + " - " + amount + " - " + category;
    list.appendChild(item);
    updateTotal();
});

updateBtn.addEventListener("click", function() {
    let name = document.getElementById("expense").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    if(list.firstChild){
        list.firstChild.innerText = name + " - " + amount + " - " + category;
    }
    updateTotal();
});

deleteBtn.addEventListener("click", function() {
    if(list.firstChild){
        list.removeChild(list.firstChild);
    }
    updateTotal();
});
