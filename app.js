const toDoList = document.querySelector('#toDo-list');
const add = document.querySelector('#add');
const newTask = document.querySelector('#new-task');
const allTasks = [];

add.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
    watchHover();
})

function addTask () {
    let newItem = document.createElement('li');
    let para = document.createElement('p');
    para.textContent = newTask.value;
    newItem.appendChild(para);
    let itemLinks = document.createElement('div');
    let completeTask = document.createElement('a');
    completeTask.innerHTML = '<i class="fas fa-check"></i>';
    completeTask.classList.add('complete');
    let deleteTask = document.createElement('a');
    deleteTask.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteTask.classList.add('delete');
    itemLinks.appendChild(completeTask);
    itemLinks.appendChild(deleteTask);
    newItem.appendChild(itemLinks);
    console.log(newItem);
    toDoList.appendChild(newItem);
    newTask.value = '';
    allTasks.push(newItem);
}

function watchHover () {
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].addEventListener('mouseover', () => {
        let itemLinks = allTasks[i].firstElementChild.nextElementSibling;
        itemLinks.style.opacity = '1';
        })
        allTasks[i].addEventListener('mouseout', () => {
            let itemLinks = allTasks[i].firstElementChild.nextElementSibling;
            itemLinks.style.opacity = '0';
        })
        let deleteTask = document.querySelectorAll('.delete');
        for (let i = 0; i < deleteTask.length; i++) {
            deleteTask[i].addEventListener('click', () => {
                deleteTask[i].parentElement.parentElement.remove();
            })
        }
        let completeTask = document.querySelectorAll('.complete');
        for (let i = 0; i < completeTask.length; i++) {
            completeTask[i].addEventListener('click', () => {
                completeTask[i].parentElement.parentElement.classList.add('completed');
            })
        }
    }
}


