import { pool } from "../db.js";

export const pong = async (req, res) => {
    const [result] = await pool.query("SELECT 'PONG' as result");
    res.json(result);
  }