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

export const eliminarPedidoRepository = async (id) => {
    try {
        const pedido = await Pedido.findByIdAndDelete(id);
        if (!pedido) {
            console.log('Pedido no encontrado');
        }else{
            console.log('Se elimino el pedido correctamente')
            return pedido;
        }
    } catch (error) {
        console.error('Error en el repositorio', error);
        throw new Error('Error al eliminar el pedido de la base de datos');
    }
    
}

export const editarPedidoRepository = async (id, pedidoActual) => {
    try {
        const pedido = await Pedido.findByIdAndUpdate(id, pedidoActual, { new: true})

        if (!pedido) {
            console.log('pedido no encontrado')
            return null
        } else {
            console.log('Pedido editado correctamente', pedido)
            return pedido
        }
    } catch (error) {
        console.error('Error en el repositorio', error);
        throw new Error('Error al actualizar el pedido de la base de datos');
    
    }    
}
