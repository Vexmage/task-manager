document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskPriority = document.getElementById('taskPriority');
    const taskList = document.getElementById('taskList');
    const filterButtons = document.querySelectorAll('.btn-group button');

    let tasks = [];

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = {
            id: Date.now(),
            name: taskInput.value.trim(),
            priority: taskPriority.value
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks(tasks);
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const priority = button.innerText.toLowerCase();
            const filteredTasks = priority === 'all' ? tasks : tasks.filter(task => task.priority === priority);
            renderTasks(filteredTasks);
        });
    });

    function renderTasks(tasksToRender) {
        taskList.innerHTML = tasksToRender.map(task => `
            <li class="list-group-item" data-id="${task.id}">
                ${task.name} - <strong>${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</strong>
            </li>
        `).join('');

        const totalTasks = tasks.reduce((count) => count + 1, 0);
        console.log(`Total tasks: ${totalTasks}`);
    }
});
