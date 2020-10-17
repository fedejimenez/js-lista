var form = document.querySelector("#form");
var itemLista = document.querySelector("#items");
var busqueda = document.querySelector("#busqueda");

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
// 3° FORMA
form.onsubmit = function agregarItem(e) {
  e.preventDefault();

  // Obtener valor de entrada
  var nuevoItem = document.querySelector("#item").value;

  // Crear nuevo elemento li
  var li = document.createElement("li");
  // Agregar Clase
  li.className = "list-group-item";
  // Agregar nodo de texto con valor de entrada
  li.appendChild(document.createTextNode(nuevoItem));

  // Crear el botón eliminar
  var botonEliminar = document.createElement("button");

  // Agregar la clase del botón eliminar
  botonEliminar.className = "btn btn-danger btn-sm float-right eliminar";

  // Añadir nodo de texto
  botonEliminar.appendChild(document.createTextNode("X"));

  // Agregar botón a li
  li.appendChild(botonEliminar);

  // Agregar li a la lista
  itemLista.appendChild(li);
};

// Eliminar Item
itemLista.onclick = function eliminarItem(e) {
  if (e.target.classList.contains("eliminar")) {
    if (confirm("Confirma que desea eliminar el elemento?")) {
      var li = e.target.parentElement;
      itemLista.removeChild(li);
    }
  }
};

// Filtrar Item
busqueda.onkeyup = function filtrarItems(e) {
  // convertir texto a minúsculas
  var text = e.target.value.toLowerCase();
  // Obtener lista
  var items = itemLista.getElementsByTagName("li");
  // Convertir a Array
  Array.from(items).forEach(function(item) {
    var itemNombre = item.firstChild.textContent;
    if (itemNombre.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};
