document.addEventListener('DOMContentLoaded', () => {
    recuperarEstado();
});

let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let contadorTareasTotales = 0;
let contadorTareasCompletadas = 0;
let contadorTareasEliminadas = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formValidation();
});

const formValidation = () => {
    if(input.value == ""){
        msg.innerHTML = "La tarea no puede estar vacía.";
        input.style.border = "3px solid red";
    } else {
        msg.innerHTML = "";
        input.style.border = "3px solid black";
        acceptData();
    }
};

const acceptData = () => {
    crearTarea(input.value);
    input.value = "";
    contadorTareasTotales++;
    actualizarContadores();
};

const crearTarea = (tarea) => {
    let div = document.createElement("div");
    div.innerHTML = `
        <p>${tarea}</p>
        <span class="options">
            <i onClick="eliminarTarea(this)" class="fas fa-trash"></i>
            <i onClick="completarTarea(this)" class="fas fa-check"></i>
        </span>`;
    lista.appendChild(div);
    guardarEstado();
};

const completarTarea = (element) => {
    element.parentElement.parentElement.classList.toggle("completada");
    contadorTareasCompletadas = document.querySelectorAll('.completada').length;
    actualizarContadores();
    guardarEstado();
};

const eliminarTarea = (element) => {
    element.parentElement.parentElement.remove();
    contadorTareasEliminadas++;
    contadorTareasTotales--;
    actualizarContadores();
    guardarEstado();
};

const actualizarContadores = () => {
    total.innerHTML = `Total de tareas: ${contadorTareasTotales}`;
    document.getElementById('completadas').innerText = `Tareas Completadas: ${contadorTareasCompletadas}`;
    document.getElementById('eliminadas').innerText = `Tareas Eliminadas: ${contadorTareasEliminadas}`;
};

const guardarEstado = () => {
    localStorage.setItem('listaTareas', lista.innerHTML);
    localStorage.setItem('contadorTareasTotales', contadorTareasTotales);
    localStorage.setItem('contadorTareasEliminadas', contadorTareasEliminadas);
    localStorage.setItem('contadorTareasCompletadas', contadorTareasCompletadas);
};

const recuperarEstado = () => {
    if (localStorage.getItem('listaTareas')) {
        lista.innerHTML = localStorage.getItem('listaTareas');
        contadorTareasTotales = parseInt(localStorage.getItem('contadorTareasTotales'));
        contadorTareasEliminadas = parseInt(localStorage.getItem('contadorTareasEliminadas'));
        contadorTareasCompletadas = parseInt(localStorage.getItem('contadorTareasCompletadas'));
        actualizarContadores();
    }
};
