let todoInput = document.getElementById('todo_item');

var list = document.getElementById("list");
function addTodo(){
        
        
    
  //! creat li tag with text node

        var todo_item = document.getElementById("todo-item"); 
        var li = document.createElement('li')
        var liText = document.createTextNode(todo_item.value)
        li.appendChild(liText)


//!  Create delete button

        var delBtn = document.createElement("button")
        var delText = document.createTextNode("Delete")
         delBtn.setAttribute("class","btn")             
         delBtn.setAttribute("onclick", "deleteItem(this)")   
         delBtn.appendChild(delText)           


 //! Creat Edit button
 
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")




    li.appendChild(delBtn)                 
       li.appendChild(editBtn)


        list.appendChild(li)                

        todo_item.value = "";
        // console.log(li);

}




function deleteItem(e){
    e.parentNode.remove()
}


//!  Delete All

function deleteAll(){
 list.innerHTML = "";    
} 

//! Edit Item

function editItem(e){
//    var val = e.parentNode.firstChild.nodeValue     
   var editValue = prompt("Enter edit value", e.parentNode.firstChild.nodeValue)     
   e.parentNode.firstChild.nodeValue  =  editValue

//    console.log(e.parentNode.firstChild);

}


 