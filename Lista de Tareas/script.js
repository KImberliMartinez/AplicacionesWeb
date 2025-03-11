// Referencia a los elementos del DOM (Document Object Model) necesarios
const taskInput = document.getElementById("taskInput"); // Campo de entrada donde el usuario escribe la tarea.
const addTaskButton = document.getElementById("addTaskButton"); // Botón que añade una nueva tarea a la lista.
const taskList = document.getElementById("taskList"); // Contenedor de la lista de tareas (elemento <ul>).

// Añade un evento al botón para llamar a la función addTask cuando se haga clic
addTaskButton.addEventListener("click", addTask);

// Función que agrega una nueva tarea a la lista
function addTask() {
    const taskText = taskInput.value.trim(); // Obtiene el texto del campo de entrada y elimina espacios innecesarios.
    if (taskText === "") return; // Si el campo está vacío, no se realiza ninguna acción.

    // Crea un nuevo elemento <li> para la tarea
    const li = document.createElement("li");
    li.textContent = taskText; // Asigna el texto de la tarea al elemento <li>.

    // Crea un botón para eliminar la tarea
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar"; // Texto del botón.
    deleteBtn.classList.add("delete-btn"); // Agrega una clase para aplicar estilos CSS.

        // Evento para alternar la clase "tachado" cuando se hace clic en el botón
        deleteBtn.onclick = function () {
            li.classList.toggle("tachado"); // Marca/desmarca la tarea como completada.
        };
    
         // Crear botón para actualizar
    const updateButton = document.createElement("button");
    updateButton.textContent = "Actualizar";
    updateButton.classList.add("btn");
    updateButton.addEventListener("click", () => updateTask(li));

    // Añade el botón de eliminar como hijo del elemento <li>
    li.appendChild(deleteBtn);
    li.appendChild(updateButton);
    
    // Agrega el elemento <li> a la lista de tareas
    taskList.appendChild(li);

    // Limpia el campo de entrada después de agregar la tarea
    taskInput.value = "";
}
// Función para actualizar una tarea
function updateTask(taskElement) {
    const newTaskText = prompt("Actualiza la tarea:", taskElement.firstChild.textContent);
    if (newTaskText !== null) {
        taskElement.firstChild.textContent = newTaskText.trim();
    }
}


