let input=document.querySelector("input");

let btn =document.querySelector("button");

let ol=document.querySelector("ol");

btn.addEventListener("click", taskhandler)
function taskhandler(){
    let data=input.value;
    if(data==""){
        alert("Please enter a task");
        return;
    }
    let li=document.createElement("li");
    li.innerHTML=data;
    li.innerHTML=li.innerHTML + btn3.outerHTML;
    ol.appendChild(li);

}
let btn2=document.querySelector("#clearBtn");
btn2.addEventListener("click",clearAllTasks);
function clearAllTasks(){
    ol.innerHTML="";
}

let btn3=document.querySelector("#lastclr");
btn3.addEventListener("click",clearLastTask);
function clearLastTask(){
    if(ol.lastChild){
        ol.removeChild(ol.lastChild);
    } 
}
