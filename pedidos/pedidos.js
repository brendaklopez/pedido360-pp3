document.addEventListener('DOMContentLoaded', async () => {
  const idMesero = localStorage.getItem('usuarioId');
  const selectMesa = document.getElementById('mesa');
  const formPedido = document.getElementById('formPedido');
  const mensajeExito = document.getElementById('mensajeExito');

  // Cargar mesas disponibles
  try {
    const resMesas = await fetch('http://localhost:3000/mesas');
    const mesas = await resMesas.json();
    console.log("Respuesta mesas:", mesas);
    mesas.forEach(mesa => {
      const option = document.createElement('option');
      option.value = mesa._id;
      option.textContent = `Mesa ${mesa.numero}`;
      selectMesa.appendChild(option);
    });
  } catch (err) {
    console.error('Error al cargar mesas:', err);
  }

  // Manejar envío del formulario
  formPedido.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nuevoPedido = {
      mesa: selectMesa.value,
      descripcion: document.getElementById('descripcion').value,
      mesero: idMesero
    };

    try {
      const res = await fetch('http://localhost:3000/pedido', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoPedido)
      });

      if (res.ok) {
        mensajeExito.classList.remove('hidden');
        formPedido.reset();

        setTimeout(() => {
          mensajeExito.classList.add('hidden');
        }, 3000);
      } else {
        throw new Error('Error al crear pedido');
      }
    } catch (err) {
      console.error(err);
      alert('No se pudo crear el pedido.');
    }
  });
});
