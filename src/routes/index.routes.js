import { Router } from "express";
import { pong } from "../controllers/index.controller.js";

const router = Router();

/* GET Consulta para verificar conexion a base de datos */
router.get("/ping", pong);

export default router;
