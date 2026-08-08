const mensaje = document.querySelector("#mensaje");
const botonMensaje = document.querySelector("#boton-mensaje");

botonMensaje.addEventListener("click", () => {
    mensaje.textContent = "¡He conseguido modificar mi primera aplicación web!";
    botonMensaje.textContent = "¡Hecho!";
});
