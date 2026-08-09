const mensaje = document.querySelector("#mensaje");
const botonMensaje = document.querySelector("#boton-mensaje");
const botonTema = document.querySelector("#boton-tema");

botonMensaje.addEventListener("click", () => {
    mensaje.textContent = "¡He conseguido modificar mi primera aplicación web!";
    botonMensaje.textContent = "¡Hecho!";
});

botonTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-oscuro");
    const modoOscuroActivo = document.body.classList.contains("tema-oscuro");
    botonTema.textContent = modoOscuroActivo ? "Modo claro" : "Modo oscuro";
});
