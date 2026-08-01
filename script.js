const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  
  // Texto de la tarea (hacer clic para marcar como hecha)
  const span = document.createElement('span');
  span.textContent =`[se que la paja anotala pa por las mavinas] ${taskText}`;
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Botón para eliminar
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
