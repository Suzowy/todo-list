
var toDolist = document.getElementsByTagName("li");
var i;
for (i = 0; i < toDolist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  toDolist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function nuevoElemento() {
  var li = document.createElement("li");
  var input = document.getElementById("input").value;
  var t = document.createTextNode(input);
  li.appendChild(t);
  if (input === '') {
    alert("¡no has escrito nada!");
  } else {
    document.getElementById("lista").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("span");
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