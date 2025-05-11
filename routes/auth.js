//ENDPOINT TEMPORAL PARA GENERAR TOKENS
import { Router } from "express";
import jwt from "jsonwebtoken";
import { auth_config } from "../config.js";

const router = Router();

router.post("/login", (req, res) => {
    const { rol } = req.body;
    const token = jwt.sign({ rol }, auth_config.jwt_secret, { expiresIn: "1h" });
    res.json({ token });
  });

export default router;
