const input_Box = document.getElementById('input-box');
const add_Btn = document.querySelector('.btn');
const list_Container = document.getElementById("list-container");

function addTask(){
    if(input_Box.value === ''){
        alert("you must write something !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_Box.value;

        list_Container.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_Box.value = '';
    error_message.innerHTML = '';
    saveData();
}

list_Container.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("taskData", list_Container.innerHTML);
}
function showTask() {
    list_Container.innerHTML = localStorage.getItem("taskData");
}
showTask();