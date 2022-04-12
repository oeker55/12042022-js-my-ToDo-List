let addBtn = document.getElementById("button-addon2")
let ulElement = document.getElementById("ulElement")
let input1 = document.getElementById("input1")
//let yapildiText = document.createElement("span")





addBtn.onclick = function () {


    let inputVal = input1.value;



    if (inputVal) {


        let listElement = document.createElement("li");
        let spanElement1 = document.createElement("span");
        let spanElement2 = document.createElement("span");
        let spanElementCompleted = document.createElement("span");
        let spanElementDelete = document.createElement("span");
        let yapildiText = document.createElement("span")







        spanElement1.innerHTML = inputVal;


        listElement.classList.add("list-group-item", "d-flex", "justify-content-between");
        spanElementCompleted.classList.add("badge", "bg-success");
        spanElementDelete.classList.add("badge", "bg-danger")
        spanElementCompleted.innerHTML = "✓";
        
        spanElementCompleted.onclick = function(e){

            yapildiText.innerHTML="----✓"
            listElement.style.backgroundColor="#42ba96"
                  e.target.remove()


        }
        spanElementDelete.innerHTML = "X";
        spanElementDelete.addEventListener("click", deleter)
        spanElementDelete.style.cursor = "pointer"
        spanElementCompleted.style.cursor = "pointer"
        spanElement2.appendChild(spanElementCompleted)
        spanElement2.appendChild(spanElementDelete)



        spanElement1.appendChild(yapildiText)
        listElement.appendChild(spanElement1)
        listElement.appendChild(spanElement2)



        console.log(ulElement)
        console.log(listElement)
        ulElement.insertAdjacentElement("afterbegin", listElement)
        input1.value = "";
    }

    // ulElement.appendChild(listElement);






}

function deleter(e) {
    e.target.parentElement.parentElement.remove()

}

/*
function yapildi(e) {
j+=1
let li = e.target.parentElement.parentElement;
if(j%2==1){
   
    // li.style.color="green"
    li.style["background-color"] = "#42ba96"
    

    // spanInlist.insertAdjacentText("beforebegin","yapıldı" 

}else{
  
    li.style["background-color"] = "white"



}
*/


    
    






