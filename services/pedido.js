import { getPedidoRepository,agregarPedidosRepository } from "../repository/pedido.js";

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