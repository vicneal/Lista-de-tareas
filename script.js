const btn = document.querySelector("[data-form-btn]");

const createTask= (evento)=>{
    evento.preventDefault();//sirve para que no se refresque la pagina cuandose inicie el evento
    const name_tarea = document.querySelector("[data-form-input]");
    const value = name_tarea.value;
    name_tarea.value ="";
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");

    const content = `
    <div>
      <i class="far fa-check-square icon"></i>
      <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML= content;

  list.appendChild(task);
    console.log(value);
}
console.log(btn);

btn.addEventListener("click", createTask);