let button = document.getElementById("btnToClick"); 
button.onclick = muestraConsola; 
 
  function muestraConsola(evento) {
    console.log(evento);
  }