const formulario = document.getElementById('formulario');
const nuevaTareaInput = document.getElementById('nuevaTarea');
const listaTareas = document.getElementById('listaTareas');
let contadorTareas = 0;

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const nuevaTarea = nuevaTareaInput.value.trim();
    if (nuevaTarea !== '') {
        agregarTarea(nuevaTarea);
        nuevaTareaInput.value = '';
        contadorTareas++;
        actualizarContador();
    }
});

function agregarTarea(descripcion) {
    const nuevaTareaElemento = document.createElement('li');
    nuevaTareaElemento.textContent = descripcion;
    nuevaTareaElemento.addEventListener('click', function() {
        nuevaTareaElemento.classList.toggle('completada');
        if (nuevaTareaElemento.classList.contains('completada')) {
            contadorTareas--;
        } else {
            contadorTareas++;
        }
        actualizarContador();
    });
    listaTareas.appendChild(nuevaTareaElemento);
}

function actualizarContador() {
    document.getElementById('contador').textContent = `${contadorTareas} Tareas Pendientes`;
}
