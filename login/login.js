document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita que recargue la página

  const correo = document.getElementById('correoInput').value;
  const contra = document.getElementById('passwordInput').value;

  try {
    const response = await fetch('http://localhost:3000/usuarios/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correo, contra })
    });

    const data = await response.json();

    if (response.ok) {
      alert('¡Login exitoso!');
      // Podés redirigir a otra página si querés:
      // window.location.href = '/dashboard.html';
    } else {
      alert(data.mensaje);
    }
  } catch (error) {
    alert('Error de conexión con el servidor');
    console.error(error);
  }
});
