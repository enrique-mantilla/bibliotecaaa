// La función que maneja la lógica de inicio de sesión
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

function validarLogin(event) {
  // Previene el envío del formulario por defecto (evita la recarga)
  event.preventDefault();

  // Clave estática para la demo
  const CLAVE_SECRETA = "ok";
  const passwordInput = document.getElementById("password").value;
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  // 2. Realizar la verificación

  if (!nombre || !email) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else if (!validateEmail(email)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  } else {
    if (passwordInput.toLowerCase() === CLAVE_SECRETA) {
      alert("¡Acceso concedido! Bienvenido.");
      // Redirige a tu página principal
      window.location.href = "landing_page.html";
    } else {
      alert("Clave incorrecta. Inténtalo de nuevo.");
      document.getElementById("password").value = "";
    }
  }
  return false;
}
