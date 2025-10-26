let tasks = [];

// فتح نافذة إضافة مهمة
function openAddTask() {
    document.getElementById('addTaskModal').style.display = 'flex';
}

// غلق نافذة إضافة مهمة
function closeAddTask() {
    document.getElementById('addTaskModal').style.display = 'none';
}




function saveTask() {
    const title = document.getElementById('taskTitle').value;
    const desc = document.getElementById('taskDesc').value;
    const date = document.getElementById('taskDate').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const status = document.getElementById('taskStatus').value;

    if (title.trim() === "") {
        alert("Please enter a task title");
        return;
    }

    tasks.push({
        title: title,
        description: desc,
        date: date,
        priority: priority,
        isImportant: false,
        status: status
    });

    displayTasks();
    document.getElementById('taskTitle').value = "";
    document.getElementById('taskDesc').value = "";
    document.getElementById('taskDate').value = "";
    closeAddTask();

}

function toggleDone(btn) {
  btn.classList.toggle('is-done');

  const title = btn.parentElement.querySelector('.title');


  if (title) {
    title.classList.toggle('line');
  }
}

function displayTasks() {
    const container = document.getElementById('tasks-container');
    container.innerHTML = "";

    tasks.forEach((task, index) => {
        const card = document.createElement('ul');
        card.classList.add('card');

        card.innerHTML = `
            <li class="text">
                <button class="okBtn " type="button" onclick="toggleDone(this)" aria-pressed="false"></button>
                <div class="title" >${task.title}</div>
                     <pre class="st">
               <p class="status">${task.status}</p>
             
                 <pre class="da"> <input type="date" class="date" value="${task.date}"/>   </pre></pre>
            </li>
        `;

        container.appendChild(card);
    });
}


function disTasks() {

}

window.onload = function () {
    displayTasks();
};


function myday() {
    const containercard = document.getElementById('tasks-container');
    const filteredTask = tasks.filter(task => task.status == 'My day');
    document.getElementById('tasks-container').innerHTML = "";


    filteredTask.forEach((task, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <li class="text">
                <button class="okBtn " type="button" onclick="toggleDone(this)" aria-pressed="false"></button>
                <div class="title" >${task.title}</div>
                     <pre class="st">
               <p class="status">${task.status}</p>
             
                 <pre class="da"> <input type="date" class="date" value="${task.date}"/>   </pre></pre>
                

            </li>
        `;

        containercard.appendChild(card);
    });



}



function filterImportant() {
    const containercard = document.getElementById('tasks-container');
    const filteredTask = tasks.filter(task => task.status == 'important');

    document.getElementById('tasks-container').innerHTML = "";

    filteredTask.forEach((task, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <li class="text">
                <button class="okBtn " type="button" onclick="toggleDone(this)" aria-pressed="false"></button>
                <div class="title" >${task.title}</div>
                <pre class="st">
               <p class="status">${task.status}</p>
             
                 <pre class="da"> <input type="date" class="date" value="${task.date}"/>   </pre></pre>
            <button class="star ${task.isImportant ? 'active' : ''}" onclick=toggleImportant(${index}, this)">
                ${task.isImportant ? '★' : '☆'}
            </button>
                

            </li>
        `;

        containercard.appendChild(card);
    });



}


function filterPlanned() {
    const containercard = document.getElementById('tasks-container');
    const filteredTask = tasks.filter(task => task.status == 'Planned');

    document.getElementById('tasks-container').innerHTML = "";

    filteredTask.forEach((task, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <li class="text">
                <button class="okBtn " type="button" onclick="toggleDone(this)" aria-pressed="false"></button>
                <div class="title" >${task.title}</div>
                     <pre class="st">
               <p class="status">${task.status}</p>
             
                 <pre class="da"> <input type="date" class="date" value="${task.date}"/>   </pre></pre>
                

            </li>
        `;

        containercard.appendChild(card);
    });


}
function print_all() {
    const containercard = document.getElementById('tasks-container');
    document.getElementById('tasks-container').innerHTML = "";
    // aryimportant.forEach((task, index)  => {(task.style.display="block")});
    tasks.forEach((task, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <li class="text">
                <button class="okBtn " type="button" onclick="toggleDone(this)" aria-pressed="false"></button>
                <div class="title" >${task.title}</div>
                     <pre class="st">
               <p class="status">${task.status}</p>
             
                 <pre class="da"> <input type="date" class="date" value="${task.date}"/>   </pre></pre>
                

            </li>
        `;

        containercard.appendChild(card);
    });


}



function toggleImportant(index, element) {
    tasks[index].isImportant = !tasks[index].isImportant;

    element.textContent = tasks[index].isImportant ? '★' : '☆';


    if (tasks[index].isImportant) {
        element.tasks.add('active');
    } else {
        element.tasks.remove('active');
    }






}

// function toggleDone(btn) {
//   btn.classList.toggle('is-done');

//   const title = btn.parentElement.querySelector('.title');
//   console.log('العنوان اللي اتجاب:', title);

//   if (title) {
//     title.classList.toggle('line');
//   } else {
//     console.warn('ملقتش title جوه نفس الكارت!');
//   }
// }