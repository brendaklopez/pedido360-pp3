import { Pedido } from './model/Pedido.js';
import { connect } from '../database/db.js';

connect();

export const getPedidoRepository = async () => {
    try {
        const pedidos = await Pedido.find().populate('mesa')

        return pedidos
    } catch (error) {
        console.error('Error en el Repositorio: ', error);
        throw new Error('Error en la consulta a la base de datos');
    
    }
}

export const agregarPedidosRepository = async (nuevoPedido) => {
    try {
        const pedidoNuevo = new Pedido(nuevoPedido);
        await pedidoNuevo.save();

    } catch (error) {
        console.error('Error en el Repositorio: ', error);
        throw new Error('Error al agregar los pedidos');
    }
}