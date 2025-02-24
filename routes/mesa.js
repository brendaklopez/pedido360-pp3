import { Router } from "express";
import { agregarMesaController, getMesasController, editarMesaController } from "../controller/mesa.js";

const router = Router();

router.get('/mesas', getMesasController);
router.post('/mesas', agregarMesaController);
router.put('/mesas/:id', editarMesaController)

export default router;