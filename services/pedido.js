import { getPedidoRepository,agregarPedidosRepository, editarPedidoRepository, eliminarPedidoRepository } from "../repository/pedido.js";

export const getPedidosService = async () => {
    try {
        return getPedidoRepository();
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obteber los datos');
    }
}

export const agregarPedidoService = async (pedido) => {
    try {
        const pedidoNuevo = await agregarPedidosRepository(pedido);
        return pedidoNuevo;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al aregegar el pedido');
    }
}

export const editarPedidoService = async (id, pedidoActual) => {
    try {
        const result = await editarPedidoRepository(id, pedidoActual, { new: true})
        return result;
        } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al editar el pedido');
    
    }    
}

export const eliminarPedidoService = async (id) => {
    try {
        const pedidoEliminado = eliminarPedidoRepository(id);
        return pedidoEliminado;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al eliminar el pedido');
   
    }
    
}