const form = document.querySelector("#form");
const itemLista = document.querySelector("#items");
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
  li.appendChild(document.createTextNode(nuevoItem.value));

  // Crear el botón eliminar
  const botonEliminar = document.createElement("button");

  // Agregar la clase del botón eliminar
  botonEliminar.className = "btn btn-danger btn-sm float-right eliminar";

  // Añadir nodo de texto
  botonEliminar.appendChild(document.createTextNode("X"));

  // Agregar botón a li
  li.appendChild(botonEliminar);

  // Agregar li a la lista
  itemLista.appendChild(li);

  // Limpio el Input
  nuevoItem.value = "";
};

// Eliminar Item
itemLista.onclick = function(e) {
  if (e.target.classList.contains("eliminar")) {
    if (confirm("Confirma que desea eliminar el elemento?")) {
      const li = e.target.parentElement;
      itemLista.removeChild(li);
    }
  }
};

// Filtrar Item
busqueda.onkeyup = function(e) {
  // convertir texto a minúsculas
  const text = e.target.value.toLowerCase();
  // Obtener lista
  const items = itemLista.getElementsByTagName("li");
  // Convertir a Array
  Array.from(items).forEach(function(item) {
    const itemNombre = item.firstChild.textContent;
    if (itemNombre.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};
