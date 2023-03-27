const btn = document.querySelector("[data-form-btn]");
console.log(btn);

btn.addEventListener("click", function() {
    let name_tarea = document.querySelector("[data-form-input]").value;
    console.log(name_tarea);
});