let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let lista = document.getElementById("lista")
let total = document.getElementById("total")
let contadorTareas = 0;
let data = {};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formValidation()
})

const formValidation = () => {
    if(input.value == ""){
        input.style.border = "3px solid red"
    } else {
        msg.innerHTML = ""
        input.style.border = "3px solid black"
        acceptData()
    }
}

const acceptData = () => {
    data["text"] = input.value;
    contadorTareas = contadorTareas + 1;
    total.innerHTML = `Total de tareas: ${contadorTareas}`
    crearTarea()
}

let crearTarea = () => {

    lista.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editarTarea(this)" class="fas fa-edit"></i>
            <i onClick="eliminarTarea(this)" class="fas fa-trash"></i>
            <i onClick="completarTarea(this)" class="fas fa-check"></i>
        </span>
    </div>
`;

input.value = "";

}

let completarTarea = function (element) {
    let tarea = element.parentElement.parentElement;
    tarea.classList.toggle("completada");
    if (tarea.classList.contains('completada')) {
        contadorTareas = contadorTareas - 1;
        total.innerHTML = `Total de tareas: ${contadorTareas}`
    } else {
        contadorTareas = contadorTareas + 1;
        total.innerHTML = `Total de tareas: ${contadorTareas}`
    }
}

let eliminarTarea = function (element) {
    let tarea = element.parentElement.parentElement;
    contadorTareas = contadorTareas - 1;
    total.innerHTML = `Total de tareas: ${contadorTareas}`
    tarea.remove();
}

const editarTarea = (element) => {
    let tarea = element.parentElement.parentElement;
    contadorTareas = contadorTareas - 1;
    total.innerHTML = `Total de tareas: ${contadorTareas}`
    
    input.value = tarea.children[0].innerHTML;
    tarea.remove();
}