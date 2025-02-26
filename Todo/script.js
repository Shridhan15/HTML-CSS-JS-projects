const inputbox=document.getElementById("inputbox");
const listcontainer=document.getElementById("listcontainer");
function addtask(){
    if(inputbox.value===""){
        alert ("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";//cross icon
        li.appendChild(span);

    }
    inputbox.value="";//input should to empty after adding
    saveData();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){//check if click is made on li
        e.target.classList.toggle("checked");//if checked is already in class list then remove it else add it to class list
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();//remov li
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);//store our data in browser
}

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

showTask();