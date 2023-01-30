import { pool } from "../db.js";

export const selectEmpleados = async (req, res) => {
  try {
    /* throw new error("Error de DB"); */
    const [result] = await pool.query("SELECT * FROM empleados");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: "Ha ocurrido un error BD" });
  }
};

export const insertEmpleados = async (req, res) => {
  try {
    const { nombres, salario } = req.body;
    const [rows] = await pool.query(
      "insert into empleados (nombres, salario) values(?, ?)",
      [nombres, salario]
    );
    res.send({ rows });
  } catch (error) {
    return res.status(500).json({ message: "Ha ocurrido un error BD" });
  }
};

export const updateEmpleados = async (req, res) => {
  try {
    const { nombres, salario, id } = req.body;
    const [result] = await pool.query(
      "update empleados set nombres = IFNULL(?,nombres),  salario = IFNULL(?,salario) where idempleados = ?",
      [nombres, salario, id]
    );
    if (result.affectedRows == 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.send("Empleado Id (" + id + ") actulizado");
  } catch (error) {
    return res.status(500).json({ message: "Ha ocurrido un error BD" });
  }
};

export const deleteEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query(
      "delete from empleados where idempleados = ?",
      [req.params.id]
    );
    if (result.affectedRows == 0) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }
    res.send("Empleado Id (" + req.params.id + ") eliminado");
  } catch (error) {
    return res.status(500).json({ message: "Ha ocurrido un error BD" });
  }
};
