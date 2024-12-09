// /pages/api/get-jerseys.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  try {
    const [results] = await pool.query(`SELECT * FROM jerseys`);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los jerseys' });
  }
}
