const taskInput=document.getElementById("task-input");
const addTaskButton=document.getElementById('add-task-btn');
const taskList=document.getElementById('task-list');

function addTask() {
    const tasktext=taskInput.value.trim();
    if(tasktext===''){
        alert('please enter a task!');
        return;
    }

    //create a new task
    const li=document.createElement('li');
    li.textContent=tasktext;
    
    //completed btn
   const completeBtn=document.createElement('button');
  completeBtn.textContent='done';
  completeBtn.addEventListener('click',()=>{
    li.classList.toggle('completed')
    
  })

  //delete btn
  const deletedbtn=document.createElement('button');
  deletedbtn.textContent='Incomplete'
  deletedbtn.addEventListener('click',()=> {
    li.remove();
  })

  taskList.appendChild(li);
li.appendChild(completeBtn);
li.appendChild(deletedbtn);
  //clr input field after adding task
taskInput.value='';
}
addTaskButton.addEventListener('click',addTask);

