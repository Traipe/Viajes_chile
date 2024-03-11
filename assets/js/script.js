$(document).ready(function() {
  // Inicializar el carrusel al cargar la página
  $('#carouselExampleSlidesOnly').carousel();

  // Evento click en botón "Enviar"
  $("#enviarMensaje").click(function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe

    // Mostrar el mensaje de éxito
    alert("Mensaje enviado con éxito");
  });
});




//fin  
