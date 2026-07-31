const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const totalCountElement = document.getElementById('totalCount');

// Variable matemática para llevar la cuenta
let totalCagadas = 0;

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  // 1. Sumamos 1 al contador
  totalCagadas++;
  // 2. Actualizamos el texto en pantalla
  totalCountElement.textContent = `Total acumulado: 💩 ${totalCagadas}`;

  const li = document.createElement('li');
  
  const span = document.createElement('span');
  span.textContent = `💩 [sapo] ${taskText}`;
  
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.className = 'delete-btn';
  
  deleteBtn.addEventListener('click', () => {
    li.remove();
    // Restamos 1 si borras la tarea
    totalCagadas--;
    totalCountElement.textContent = `Total acumulado: 💩 ${totalCagadas}`;
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
