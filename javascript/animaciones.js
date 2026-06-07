const imagenes = document.querySelectorAll('.imagen-scroll');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('mostrar'); // Activa la animación
    }
  });
}, {
  threshold: 0.1 // Se activa cuando se ve el 10% de la imagen
});

imagenes.forEach(imagen => observador.observe(imagen));

function abrirModal(elemento) {
    // Obtenemos el modal y la etiqueta de la imagen grande
    var modal = document.getElementById("miModal");
    var imgGrande = document.getElementById("imgGrande");
    
    // Mostramos el modal cambiando el display a block
    modal.style.display = "block";
    // Copiamos la ruta de la imagen clickeada a la del modal
    imgGrande.src = elemento.src;
}

function cerrarModal() {
    // Ocultamos el modal al hacer clic
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
}
