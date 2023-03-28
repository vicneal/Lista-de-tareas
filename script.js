import checkComplete from "./assets/components/checkComplete.js";
import iconDelete from "./assets/components/iconDelete.js";

const btn = document.querySelector("[data-form-btn]");

const createTask= (evento)=>{
    evento.preventDefault();//sirve para que no se refresque la pagina cuandose inicie el evento
    const name_tarea = document.querySelector("[data-form-input]");
    const value = name_tarea.value;
    name_tarea.value ="";
    const list = document.querySelector("[data-list]");
    
    const task = document.createElement("li");
    task.classList.add("card");
      const taskContent = document.createElement("div");
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;

        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);

      task.appendChild(taskContent);
      task.appendChild(iconDelete());

    list.appendChild(task);
}

btn.addEventListener("click", createTask);

