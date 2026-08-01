const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const totalCountElement = document.getElementById('totalCount');

// AQUÍ SE DECLARA LA VARIABLE (Sin esto sale el error "not defined")
let totalCagadas = 0;

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  // Sumar 1 al contador
  totalCagadas++;
  if (totalCountElement) {
    totalCountElement.textContent = `Total acumulado: 💩 ${totalCagadas}`;
  }

  const li = document.createElement('li');
  
  const span = document.createElement('span');
  span.textContent = `💩 [sapo] ${taskText}`;
  
  // Marcar como completada
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Botón para eliminar
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.className = 'delete-btn';
  
  deleteBtn.addEventListener('click', () => {
    li.remove();
    // Restar 1 al contador si borras la tarea
    totalCagadas--;
    if (totalCountElement) {
      totalCountElement.textContent = `Total acumulado: 💩 ${totalCagadas}`;
    }
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
