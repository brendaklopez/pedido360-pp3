import {
  getPedidosRepository,
  agregarPedidosRepository,
  editarPedidoRepository,
  eliminarPedidoRepository,
  getPedidosPorEstadoRepository,
  getPedidosPorMeseroRepository
} from "../repository/pedido.js";

// Obtener todos los pedidos
export const getPedidosService = async () => {
  try {
    return await getPedidosRepository();
  } catch (error) {
    console.error('Error en el Servicio:', error);
    throw new Error('Error al obtener los pedidos');
  }
};

// Agregar un nuevo pedido
export const agregarPedidoService = async (pedido) => {
  try {
    const pedidoNuevo = await agregarPedidosRepository(pedido);
    return pedidoNuevo;
  } catch (error) {
    console.error('Error en el Servicio:', error);
    throw new Error('Error al agregar el pedido');
  }
};

// Editar un pedido existente
export const editarPedidoService = async (id, pedidoActual) => {
  try {
    const result = await editarPedidoRepository(id, pedidoActual);
    return result;
  } catch (error) {
    console.error('Error en el Servicio:', error);
    throw new Error('Error al editar el pedido');
  }
};

// Eliminar un pedido
export const eliminarPedidoService = async (id) => {
  try {
    const pedidoEliminado = await eliminarPedidoRepository(id);
    return pedidoEliminado;
  } catch (error) {
    console.error('Error en el Servicio:', error);
    throw new Error('Error al eliminar el pedido');
  }
};

// Obtener pedidos por estado
export const getPedidosPorEstadoService = async (estado) => {
  try {
    return await getPedidosPorEstadoRepository(estado);
  } catch (error) {
    console.error('Error en el Servicio:', error);
    throw new Error('Error al obtener pedidos por estado');
  }
};

// Obtener pedidos por mesero
export const getPedidosPorMeseroService = async (idMesero) => {
  try {
    return await getPedidosPorMeseroRepository(idMesero);
  } catch (error) {
    console.error('Error en el Servicio:', error);
    throw new Error('Error al obtener pedidos por mesero');
  }
};
