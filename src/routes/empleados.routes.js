import { Router } from "express";
import {
  selectEmpleados,
  updateEmpleados,
  insertEmpleados,
  deleteEmpleados,
} from "../controllers/empleados.controller.js";

const router = Router();

/* GET Consulta */
router.get("/empleados", selectEmpleados);

/* POST Inserta */
router.post("/empleados", insertEmpleados);

/* PUT Actualiza */
router.put("/empleados", updateEmpleados);

/* DELETE Borra */
router.delete("/empleados/:id", deleteEmpleados);

export default router;
