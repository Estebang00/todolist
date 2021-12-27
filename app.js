//guardo los elementos del DOM en una variable...
let agregarTareaBtn = document.getElementById('agregarTareaBtn');
let tareaInput = document.getElementById('tareaInput');
let listaDeTareas = document.getElementById('listaDeTareas');
let tareas = [];

//Event Listener para el boton agregar tarea
agregarTareaBtn.addEventListener('click', function (event) {
    event.preventDefault(); //evito que se recargue la pagina...

    let nombreDeLaTarea = tareaInput.value; //guardo el valor del input en una variable...

    //creo un objeto con los datos de la tarea...
    let nuevaTarea = {
        nombre: nombreDeLaTarea,
        id: Date.now(),
        completada: false
    }

    tareas.push(nuevaTarea); //agrego el valor de la variable a un array...

    mostrarTareas(); //llamo a la funcion para mostrar las tareas...
});

function mostrarTareas(){
    listaDeTareas.innerHTML = ''; //limpio el contenido ...
    for(let i = 0; i < tareas.length; i++){
        let nuevoLi = document.createElement('li'); //creo un elemento li...
        nuevoLi.innerHTML = `${tareas[i].nombre} <button onclick="eliminarTarea(tareas[i].id)">🗑️</button>`; //le agrego el valor de la variable...
        listaDeTareas.append(nuevoLi); //agrego el elemento li a la lista...
    }
}


function eliminarTarea(id){
    // busco por id en el array
    // eliminarlo
    
    mostrarTareas();
}
