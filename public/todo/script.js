const input=document.getElementById("input-box")
const list=document.getElementById("list-container")

function addTask(){
    if(input.value==""){
        alert("You must write something")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=input.value
        list.appendChild(li)
                let span=document.createElement("span")
                span.innerHTML="\u00d7"
                li.appendChild(span)

    }
            input.value=""
            addData()

}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        addData()
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); 
        addData()
    }
}, false);

function addData(){
    localStorage.setItem("prTaskData",list.innerHTML)
}
function showData(){
    list.innerHTML=localStorage.getItem("prTaskData")
}
showData()