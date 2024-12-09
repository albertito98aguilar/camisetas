// /pages/api/add-jersey.js
import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { jersey, foto, size, number, comprador, costo, precio, estado } = req.body;
    try {
      const [result] = await pool.query(
        `INSERT INTO jerseys (jersey, foto, size, number, comprador, costo, precio, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [jersey, foto, size, number, comprador, costo, precio, estado]
      );
      res.status(200).json({ id: result.insertId, message: 'Jersey agregado' });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar el jersey' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
