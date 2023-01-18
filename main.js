// Ejemplo de sweet alert
// <!-- sweet alert 01 -->
function mostrarAlerta(){
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'El CV ha sido descargado',
        showConfirmButton: true,
        confirmButtonText: "Gracias :)",
        timer: 3000
      })
}

document.getElementById("boton-descargar").addEventListener("click",mostrarAlerta )