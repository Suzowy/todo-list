// boton x
var miLista = document.getElementsByTagName("LI");
var i;
for (i = 0; i < miLista.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  miLista[i].appendChild(span);
}

// Click para borrar
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// agregar a lista
function nuevaTarea() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("miInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡escribe algo!");
  } else {
    document.getElementById("miLista").appendChild(li);
  }
  document.getElementById("miInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}