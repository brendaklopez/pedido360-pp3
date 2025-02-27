import { Router } from "express";
import { agregarPedidoController, editarPedidoController, eliminarPedidoController, getPedidosController } from "../controller/pedido.js";

const router = Router();

router.get('/pedido', getPedidosController);
router.post('/pedido', agregarPedidoController);
router.delete('/pedido/:id', eliminarPedidoController);
router.put('/pedido/:id', editarPedidoController)

export default router;