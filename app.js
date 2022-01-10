//guardo los elementos del DOM en una variable...
let agregarTareaBtn = document.getElementById('agregarTareaBtn');
let tareaInput = document.getElementById('tareaInput');
let listaDeTareas = document.getElementById('listaDeTareas');
let tareas = [];

//los elementos de la fecha
const fechaNumero = document.getElementById('fecha-numero');
const diaDeLaSemana = document.getElementById('dia-de-semana');
const fechaMes = document.getElementById('fecha-mes');
const fechaAnio = document.getElementById('fecha-anio');

//Event Listener para el boton agregar tarea
agregarTareaBtn.addEventListener('click', function (event) {
    event.preventDefault(); //evito que se recargue la pagina...
    
    let nombreDeLaTarea = tareaInput.value; //guardo el valor del input en una variable...
    
    if(!tareaInput.value) return; //no agrega tareas vacias...
    //creo un objeto con los datos de la tarea...
    let nuevaTarea = {
        nombre: nombreDeLaTarea,
        id: Date.now(),
        completada: false
    }
    
    tareas.push(nuevaTarea); //agrego el valor de la variable a un array...
    
    mostrarTareas(); //llamo a la funcion para mostrar las tareas...
    formulario.reset(); //limpia el campo del formulario...    
});

function mostrarTareas(){
    listaDeTareas.innerHTML = ''; //limpio el contenido ...
    for(let i = 0; i < tareas.length; i++){
        let nuevoLi = document.createElement('li'); //creo un elemento li...
        nuevoLi.innerHTML = `${tareas[i].nombre} <button onclick="eliminarTarea(${tareas[i].id})">🗑️</button>`; //le agrego el valor de la variable...
                                      //no tomaba la variable i como atributo  
        listaDeTareas.append(nuevoLi); //agrego el elemento li a la lista...
    }
}


function eliminarTarea(id){
    tareas = tareas.filter(function(tareas) {
        return tareas.id !== id;
    });
    console.log(tareas)
    // busco por id en el array
    // eliminarlo
    
    mostrarTareas();
}

const configurarFecha = () => {
    const date = new Date();
    fechaNumero.textContent = date.toLocaleString('es', { day: 'numeric' });
    diaDeLaSemana.textContent = date.toLocaleString('es', { weekday: 'long' });
    fechaMes.textContent = date.toLocaleString('es', { month: 'short' });
    fechaAnio.textContent = date.toLocaleString('es', { year: 'numeric' });
};

configurarFecha();
