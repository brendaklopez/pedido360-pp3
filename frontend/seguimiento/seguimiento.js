// Obtener el ID de la URL como: seguimiento.html?id=IDPEDIDO
const params = new URLSearchParams(window.location.search);
const pedidoId = params.get("id");
const infoBox = document.getElementById("pedido-info");
console.log('ID: ', pedidoId);
// Validamos el ID
if (!pedidoId) {
  document.getElementById("timeline").innerHTML = `
    <p style="color:red;">ID de pedido no proporcionado en la URL.</p>
  `;
} else {
  fetch(`http://127.0.0.1:3000/pedido/${pedidoId}/estado`)
    .then(res => {
      if (!res.ok){ 
         console.error("Código de estado:", res.status);
    return res.text().then(text => {
      console.error("Respuesta:", text);
      throw new Error("No se pudo obtener el estado");
    })
    }
    return res.json();
   })
    .then(data => {
      infoBox.innerHTML = `
  <p><strong>ID del pedido:</strong> ${data.id}</p>
  <p><strong>Estado actual:</strong> ${data.estadoActual}</p>
  <p><strong>Fecha de creación:</strong> ${new Date(data.creadoEn).toLocaleString('es-AR')}</p>
  <p><strong>Descripción:</strong> ${data.descripcion}</p>
  <p><strong>Total:</strong> $${data.total}</p>
  `; 

      const { estadoActual, horas } = data;

      const estados = [
        { clave: "pendiente", texto: "Recibido" },
        { clave: "preparando", texto: "En preparación" },
        { clave: "en 10 min", texto: "En 10 min" },
        { clave: "listo para servir", texto: "Listo para servir" }
      ];

      const timeline = document.getElementById("timeline");
      timeline.innerHTML = ""; // limpiamos por si ya había algo

      let estadoEncontrado = false;

      estados.forEach(estado => {
        const paso = document.createElement("div");
        paso.classList.add("step");

        if (estado.clave === estadoActual) {
          paso.classList.add("current");
          estadoEncontrado = true;
        } else if (!estadoEncontrado) {
          paso.classList.add("completed");
        }

        paso.innerHTML = `
          <div class="label">${estado.texto}</div>
          <div class="time">${horas[estado.clave] || "--"}</div>
        `;

        timeline.appendChild(paso);
      });
    })
    .catch(err => {
      console.error(err);
      document.getElementById("timeline").innerHTML = `
        <p style="color:red;">Error al cargar el estado del pedido.</p>
      `;
    });
}
