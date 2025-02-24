import { agregarPedidoService, getPedidosService } from "../services/pedido.js";

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