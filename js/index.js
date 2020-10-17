const form = document.querySelector("#form");
const listaItems = document.querySelector("#items");
const busqueda = document.querySelector("#busqueda");

// Evento de envío de formulario
// form.onsubmit = agregarItem;     1° FORMA
// form.addEventListener("submit", agregarItem);  2° FORMA

// Eliminar evento
// itemLista.onclick = eliminarItem;
// itemList.addEventListener("click", eliminarItem);

// Filtrar evento
// busqueda.onkeyup = filtrarItems;
// busqueda.addEventListener("keyup", filtrarItems);

// Agregar Item
// function agregarItem(e) {  2- FORMA

// 3° FORMA
form.onsubmit = function(e) {
  e.preventDefault();

  // Obtener valor de entrada
  nuevoItem = document.querySelector("#item");

  // Crear nuevo elemento li
  const li = document.createElement("li");
  // Agregar Clase
  li.className = "list-group-item";
  // Agregar nodo de texto con valor de entrada
  // li.appendChild(document.createTextNode(nuevoItem.value));
  li.innerHTML = nuevoItem.value; // otra forma
  // Crear el botón eliminar
  const botonEliminar = document.createElement("button");

  // Agregar la clase del botón eliminar
  botonEliminar.className = "btn btn-danger btn-sm float-right eliminar";

  // Añadir nodo de texto
  // botonEliminar.appendChild(document.createTextNode("X"));
  botonEliminar.innerHTML = "X";
  // Agregar botón a li
  li.appendChild(botonEliminar);

  // Agregar li a la lista
  listaItems.appendChild(li);

  // Limpio el Input
  nuevoItem.value = "";
};

// Eliminar Item
listaItems.onclick = function(e) {
  console.log(e.target);
  if (e.target.classList.contains("eliminar")) {
    if (confirm("Confirma que desea eliminar el elemento?")) {
      const li = e.target.parentElement;
      listaItems.removeChild(li);
    }
  }
};

// Filtrar Item
busqueda.onkeyup = function(e) {
  // convertir texto a minúsculas
  const text = e.target.value.toLowerCase();
  // Obtener lista
  const items = listaItems.querySelectorAll("li");
  // Convertir a Array
  const arreglo = Array.from(items);
  // console.log(arreglo);

  arreglo.forEach(function(item) {
    const contenidoLista = item.firstChild.textContent; // Returns a String, representing the text of the node and all its descendants.
    console.log(contenidoLista);
    if (contenidoLista.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};
