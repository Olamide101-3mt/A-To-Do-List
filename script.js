console.log('To-do List')
/*
To-Do List
-List of to dos
Add tada
complete tada
Delete Todo
Empty State for to-do
Add Local Storage
*/
//Select the Element
const input = document.getElementById('input');
const button = document.querySelector('button');
const todoList = document.querySelector('#todoList');
const container = document.getElementById('Container');

//function for empty state

const emptyState = document.createElement('p');
emptyState.setAttribute('class', 'empty');
const checkForEmptyState = function () {

  if (todoList.children.length < 1 ) {
    emptyState.innerHTML = 'You have no to-dos for today';
  
    container.appendChild(emptyState);
  }else {
    container.removeChild(emptyState);
  }
}




button.addEventListener('click', () => {
  const inputValue = input.value;
  

  //Check if the input is empty
  if (inputValue === "") {
    alert('Enter a to-do');
    return
  }

  //removing empty state
  
  // container.removeChild(emptyState);

  //Create Element
  const todo = document.createElement('li');
  todo.textContent = inputValue;
  todo.setAttribute('class', 'todo')

  //Append Complete Button
  const completeBtn= document.createElement('button');
  completeBtn.textContent = 'Complete'
  completeBtn.setAttribute('class', 'completeBtn');
  completeBtn.addEventListener('click', () => {
    todo.style.textDecoration = "line-through";
    completeBtn.textContent = 'Completed';
  })
  //Append button to to-do
  todo.appendChild(completeBtn);

  //Append delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.setAttribute('class', 'deleteBtn')
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(todo);
    checkForEmptyState();
  })

  todo.appendChild(deleteBtn);

  //Append todolist
  todoList.appendChild(todo);

  //Clear the input
  input.value = "";
  input.focus();
  checkForEmptyState();
})

checkForEmptyState();

