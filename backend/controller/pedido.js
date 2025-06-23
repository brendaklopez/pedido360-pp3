import mongoose from "mongoose";
import {
  getPedidosService,
  agregarPedidoService,
  editarPedidoService,
  eliminarPedidoService,
  getPedidosPorEstadoService,
  getPedidosPorMeseroService
} from "../services/pedido.js";

// Obtener todos los pedidos
export const getPedidosController = async (req, res) => {
  try {
    const pedidos = await getPedidosService();
    if (pedidos.length === 0) {
      return res.status(200).send({ mensaje: "No hay pedidos registrados." });
    }
    return res.status(200).send(pedidos);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ mensaje: "Error al obtener los pedidos" });
  }
};

// Agregar un nuevo pedido
export const agregarPedidoController = async (req, res) => {
  const nuevoPedido = req.body;
  try {
    const pedidoCreado = await agregarPedidoService(nuevoPedido);
    return res.status(201).send({
      mensaje: "Pedido agregado correctamente",
      pedido: pedidoCreado
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ mensaje: "Error al agregar el pedido" });
  }
};

// Editar un pedido
export const editarPedidoController = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ mensaje: "ID inválido" });
  }

  try {
    const pedidoActualizado = await editarPedidoService(id, datosActualizados);
    if (!pedidoActualizado) {
      return res.status(404).send({ mensaje: "Pedido no encontrado" });
    }
    return res.status(200).send({
      mensaje: "Pedido actualizado correctamente",
      pedido: pedidoActualizado
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ mensaje: "Error al editar el pedido" });
  }
};

// Eliminar un pedido
export const eliminarPedidoController = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ mensaje: "ID inválido" });
  }

  try {
    const pedidoEliminado = await eliminarPedidoService(id);
    if (!pedidoEliminado) {
      return res.status(404).send({ mensaje: "Pedido no encontrado" });
    }
    return res.status(200).send({
      mensaje: "Pedido eliminado correctamente",
      pedido: pedidoEliminado
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ mensaje: "Error al eliminar el pedido" });
  }
};

// Obtener pedidos por estado
export const getPedidosPorEstadoController = async (req, res) => {
  const { estado } = req.params;
  try {
    const pedidos = await getPedidosPorEstadoService(estado);
    return res.status(200).send(pedidos);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ mensaje: "Error al obtener pedidos por estado" });
  }
};

// Obtener pedidos por mesero
export const getPedidosPorMeseroController = async (req, res) => {
  const { idMesero } = req.params;
  try {
    const pedidos = await getPedidosPorMeseroService(idMesero);
    return res.status(200).send(pedidos);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ mensaje: "Error al obtener pedidos por mesero" });
  }
};
