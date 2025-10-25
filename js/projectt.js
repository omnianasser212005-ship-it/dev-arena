// // function filterImportant(){
// //  const fltrimportant= aryimportant.filter(task=>task.IsImportanent==true);
// // console.log(fltrimportant)

// // }


// // function filterPlanned(){

// // const fltrplane= aryimportant.filter(task=>task.status=="work");
// // console.log(fltrplane)
// // }

// // function myday(){

// // const fltrday= aryimportant.filter(task=>task.date="9/8/2020");
// // console.log(fltrday)

// // }





// // function display() {
// //     const containercard = document.getElementById('containcard');
// //     containercard.innerHTML = "";

// //     aryimportant.forEach((task, index) => {
// //         const card = document.createElement('ul');
// //         card.classList.add('card');

// //         card.innerHTML = `
// //             <li class="text">
// //                 <button class="okBtn " type="button" onclick="toggleDone(this)" aria-pressed="false"></button>
// //                 <div class="title" >${task.network}</div>
// //                 <input type="date" class="date" value="${task.date}"/>

// //                 <p class="status">${task.status}</p>


// //             </li>
// //         `;

// //         aryimportant.appendChild(card);
// //     });
// // }


















//  const buttons = document.querySelectorAll('.okBtn');

//   buttons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const done = btn.classList.toggle('is-done');
//       btn.textContent = done ? '✓' : ' ';
//     });
//   });                    ``

// let tasks = [];


// function openAddTask() {
//     document.getElementById('addTaskModal').style.display = 'flex';
// }

// function closeAddTask() {
//     document.getElementById('addTaskModal').style.display = 'none';
// }




// function saveTask() {
//     const title = document.getElementById('taskTitle').value;
//     const desc = document.getElementById('taskDesc').value;
//     const date = document.getElementById('taskDate').value;
//     const priority = document.querySelector('input[name="priority"]:checked').value;

//     if (title.trim() === "") {
//         alert("Please enter a task title");
//         return;
//     }

//     tasks.push({
//         title: title,
//         description: desc,
//         date: date,
//         priority: priority,
//         isimortant:false
//     });

//     displayTasks();
//     document.getElementById('taskTitle').value = "";
//     document.getElementById('taskDesc').value = "";
//     document.getElementById('taskDate').value = "";
//     closeAddTask();  

// }

// function filterImportant() {
//     const filtered = tasks.filter(task => task.isImportant);
//     console.log(filtered)
//     displayFilteredTasks(filtered);


// }

// function filterPlanned() {
//     const today = new Date().toISOString().split('T')[0];
//     const filtered = tasks.filter(task => task.date > today);
//     displayFilteredTasks(filtered);
// }

// // function filterAll() {
// //     displayTasks(); 
// // }
// function AllTasks (){
//     console.log("All Tasks")

// }
// function myday (){
//     console.log("my day")

// }
// function filterImportant() {
//     console.log("important")
// }
// function filterPlanned() {
//     console.log("planned")
// }

// function displayFilteredTasks(filteredTasks) {
//     const container = document.getElementById('tasks-container');
//     container.innerHTML = "";
//     filteredTasks.forEach((task, index) => {

//         const card = document.createElement('ul');
//         card.classList.add('card');
//         card.innerHTML = `
//             <li class="text">
//                 <button class="okBtn" type="button" onclick="toggleDone(this)" aria-pressed="false"></button>
//                 <div class="title">${task.title}</div>
//                 <input type="date" class="date" value="${task.date}">
//                 <span class="star" onclick="toggleImportant(${index}, this)">
//                     ${task.isImportant ? '★' : '☆'}
//                 </span>
//             </li>
//         `;
//         container.appendChild(card);
//     });
// }



// function toggleDone(btn) {
//     btn.classList.toggle('is-done');
// }


// window.onload = function () {
//     displayTasks();
// };

// function toggleImportant(projectt, element) {
//     tasks[index].isImportant = !tasks[projectt].isImportant;
//     element.textContent = tasks[projectt].isImportant ? '★' : '';};
const buttons = document.querySelectorAll('.okBtn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const done = btn.classList.toggle('is-done');
        btn.textContent = done ? '✓' : ' ';
    });
}); ``

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
        isImortant: false,
        status: status
    });

    displayTasks();
    document.getElementById('taskTitle').value = "";
    document.getElementById('taskDesc').value = "";
    document.getElementById('taskDate').value = "";
    closeAddTask();

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

function toggleDone(btn) {
    btn.classList.toggle('is-done');
}


window.onload = function () {
    displayTasks();
};




// function dismyday() {
//     document.getElementsByClassName('my-day').style.display = 'none';
// }
// function myday() {
//     document.getElementsByClassName('my-day').style.display = 'flex';
// }

// function disimportant() {
//     document.getElementsByClassName('important').style.display = 'none';
// }

// function important() {
//     document.getElementsByClassName('important').style.display = 'flex';
// }
// function displanned() {
//     document.getElementsByClassName('planned').style.display = 'none';
// }

// function planned() {
//     document.getElementsByClassName('planned').style.display = 'flex';
// }

// function disalltask() {
//     document.getElementsByClassName('AllTasks').style.display = 'none';
// }
// function alltask() {
//     document.getElementsByClassName('AllTasks').style.display = 'flex';
// }

// impotant task


// const aryimportant = [

//     { title: "learn JS", desc: "Intro to JavaScript", status: "My day", priority: "high", date: "2025-01-01", IsImportanent: true },
//     { title: "study database", desc: "Normalization & SQL", status: "important", priority: "medium", date: "2025-01-02", IsImportanent: false },
//     { title: "data communication", desc: "OSI Model", status: "Planned", priority: "high", date: "2025-01-03", IsImportanent: false },
//     { title: "e-commerce basics", desc: "intro & models", status: "My day", priority: "medium", date: "2025-01-04", IsImportanent: true },
//     { title: "network routing", desc: "router configs", status: "important", priority: "medium", date: "2025-01-05", IsImportanent: true },

//     { title: "cloud computing", desc: "AWS vs Azure", status: "Planned", priority: "high", date: "2025-01-06", IsImportanent: true },
//     { title: "python basics", desc: "variables & loops", status: "My day", priority: "low", date: "2025-01-07", IsImportanent: false },
//     { title: "machine learning", desc: "AI concepts", status: "important", priority: "high", date: "2025-01-08", IsImportanent: true },
//     { title: "UI design", desc: "color theory", status: "Planned", priority: "medium", date: "2025-01-09", IsImportanent: false },
//     { title: "cyber security", desc: "encryption", status: "My day", priority: "high", date: "2025-01-10", IsImportanent: true },

//     { title: "docker", desc: "containers", status: "important", priority: "medium", date: "2025-01-11", IsImportanent: true },
//     { title: "linux commands", desc: "shell basics", status: "Planned", priority: "low", date: "2025-01-12", IsImportanent: false },
//     { title: "react js", desc: "hooks & state", status: "My day", priority: "medium", date: "2025-01-13", IsImportanent: true },
//     { title: "database indexing", desc: "performance", status: "important", priority: "high", date: "2025-01-14", IsImportanent: true },
//     { title: "project management", desc: "agile & scrum", status: "Planned", priority: "medium", date: "2025-01-15", IsImportanent: false },

//     { title: "data mining", desc: "patterns & tools", status: "My day", priority: "low", date: "2025-01-16", IsImportanent: true },
//     { title: "network security", desc: "firewalls", status: "important", priority: "high", date: "2025-01-17", IsImportanent: true },
//     { title: "web hosting", desc: "domain setup", status: "Planned", priority: "low", date: "2025-01-18", IsImportanent: false },
//     { title: "ERP systems", desc: "SAP overview", status: "My day", priority: "high", date: "2025-01-19", IsImportanent: true },
//     { title: "AR technology", desc: "augmented reality", status: "important", priority: "medium", date: "2025-01-20", IsImportanent: false },

//     { title: "blockchain", desc: "how it works", status: "Planned", priority: "medium", date: "2025-01-21", IsImportanent: true },
//     { title: "digital marketing", desc: "SEO basics", status: "My day", priority: "low", date: "2025-01-22", IsImportanent: true },
//     { title: "big data", desc: "data lakes", status: "important", priority: "high", date: "2025-01-23", IsImportanent: true },
//     { title: "software testing", desc: "unit test", status: "Planned", priority: "medium", date: "2025-01-24", IsImportanent: false },
//     { title: "mobile app design", desc: "UX principles", status: "My day", priority: "high", date: "2025-01-25", IsImportanent: true }
// ];


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
function disTasks() {

}
window.onload = function () {
    disTasks();
};