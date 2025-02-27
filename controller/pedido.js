import { agregarPedidoService, getPedidosService, eliminarPedidoService, editarPedidoService  } from "../services/pedido.js";

export const getPedidosController = async (req, res) => {
    try {
        let pedidos = await getPedidosService();
        if(pedidos.length == 0){
            return res.send('La bbdd esta vacia')
        }
        return res.send(pedidos) 
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al obtener los pedidos' });
     
    }
}

export const agregarPedidoController = async (req, res) => {
    const pedido = req.body;
    try {
        const pedidoNuevo = await agregarPedidoService(pedido);
        return res.status(200).send({mensaje: 'Pedido agregado correctamente', Pedido: pedidoNuevo});
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al agregar el pedido' });
  
    }
}

export const editarPedidoController = async (req, res) => {
    const {id} = req.params
    const pedidoActual = req.body;
    try {
        const pedido = await editarPedidoService(id, pedidoActual);
        if (!pedido) {
            return res.status(404).send({ mensaje: `No se encontró el pedido con ID ${id}` });
        }
        return res.status(200).send({ mensaje: 'Pedido actualizado correctamente'});  

    } catch (error) {
        console.error(error);
        return res.status(500).send({ mensaje: 'Error al actualizar pedido' });
    }
}

export const eliminarPedidoController = async (req,res) => {
    const {id}= req.params;
    try {
        const pedido = await eliminarPedidoService(id);
        if (!pedido) {
            return res.status(404).send({ mensaje: `No se encontró el pedido con ID ${id}` });
        }
        return res.status(200).send({ mensaje: 'Pedido eliminado correctamente', Pedido: pedido});  

    } catch (error) {
        console.error(error);
        return res.status(500).send({ mensaje: 'Error al eliminar el pedido' });       
    }
}