// Función para cargar el archivo JSON
function loadJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'libros.json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send(null);
  }
  
  // Función para buscar libros
  function buscarLibros(libros) {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";
  
    for (var i = 0; i < libros.length; i++) {
      var libro = libros[i];
      var nombre = libro.nombre.toLowerCase();
      var autor = libro.autor.toLowerCase();
  
      if (nombre.includes(input) || autor.includes(input)) {
        var bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
  
        var img = document.createElement("img");
        img.src = libro.imagen;
        bookCard.appendChild(img);
  
        var bookInfo = document.createElement("div");
        bookInfo.classList.add("bookInfo");
  
        var nombreParrafo = document.createElement("p");
        nombreParrafo.textContent = "Nombre del libro: " + libro.nombre;
        bookInfo.appendChild(nombreParrafo);
  
        var autorParrafo = document.createElement("p");
        autorParrafo.textContent = "Autor del libro: " + libro.autor;
        bookInfo.appendChild(autorParrafo);
  
        var añoParrafo = document.createElement("p");
        añoParrafo.textContent = "Año: " + libro.año;
        bookInfo.appendChild(añoParrafo);
  
        var editorialParrafo = document.createElement("p");
        editorialParrafo.textContent = "Editorial: " + libro.editorial;
        bookInfo.appendChild(editorialParrafo);
  
        var carreraParrafo = document.createElement("p");
        carreraParrafo.classList.add("carrera");
        carreraParrafo.textContent = "Carrera: " + libro.carrera;
        bookInfo.appendChild(carreraParrafo);
  
        var idiomaParrafo = document.createElement("p");
        idiomaParrafo.textContent = "Idioma(s) del libro: " + libro.idioma.join(", ");
        bookInfo.appendChild(idiomaParrafo);
  
        var precioParrafo = document.createElement("p");
        precioParrafo.textContent = "Precio del libro: " + libro.precio.dolares + " USD / " + libro.precio.bolivianos + " BOB";
        bookInfo.appendChild(precioParrafo);
  
        bookCard.appendChild(bookInfo);
  
        resultsContainer.appendChild(bookCard);
      }
    }
  }
  
  // Función para manejar el evento de búsqueda al presionar el botón
  function handleSearch() {
    loadJSON(function (response) {
      buscarLibros(response);
    });
  }
  
  // Asignar la función handleSearch al evento click del botón de búsqueda
  var searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", handleSearch);
  