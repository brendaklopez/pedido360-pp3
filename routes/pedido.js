import { Router } from "express";
import { agregarPedidoController, getPedidosController } from "../controller/pedido.js";

const router = Router();

router.get('/pedido', getPedidosController);
router.post('/pedido', agregarPedidoController);


export default router;