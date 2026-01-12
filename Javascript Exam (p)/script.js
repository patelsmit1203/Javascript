
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');


taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('taskId').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    if (id) {
      
        tasks = tasks.map(t => t.id == id ? { id: Number(id), title, description, dueDate, priority } : t);
    } else {
        
        const newTask = {
            id: Date.now(),
            title,
            description,
            dueDate,
            priority
        };
        tasks.push(newTask);
    }

    saveAndRender();
    taskForm.reset();
    document.getElementById('taskId').value = '';
    document.getElementById('submitBtn').innerText = 'Add Task';
});


function displayTasks(filteredTasks = tasks) {
    taskList.innerHTML = '';

    filteredTasks.forEach(task => {
        const card = document.createElement('div');
        card.className = `task-card priority-${task.priority}`;
        card.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <small>Due: ${task.dueDate} | <strong>Priority: ${task.priority.toUpperCase()}</strong></small>
            <div class="actions">
                <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(card);
    });
}


function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}


function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(t => t.id !== id);
        saveAndRender();
    }
}


function editTask(id) {
    const task = tasks.find(t => t.id === id);
    document.getElementById('taskId').value = task.id;
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('dueDate').value = task.dueDate;
    document.getElementById('priority').value = task.priority;
    
    document.getElementById('submitBtn').innerText = 'Update Task';
    window.scrollTo(0, 0);
}


const filterTasks = () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const priorityValue = document.getElementById('filterPriority').value;

    const filtered = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchTerm) || 
                              task.description.toLowerCase().includes(searchTerm);
        const matchesPriority = priorityValue === 'all' || task.priority === priorityValue;
        return matchesSearch && matchesPriority;
    });

    displayTasks(filtered);
};

document.getElementById('searchInput').addEventListener('input', filterTasks);
document.getElementById('filterPriority').addEventListener('change', filterTasks);


displayTasks();