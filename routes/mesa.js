import { Router } from "express";
import { agregarMesaController, getMesasController } from "../controller/mesa.js";

const router = Router();

router.get('/mesas', getMesasController);
router.post('/mesas', agregarMesaController);

export default router;