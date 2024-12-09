// /pages/api/export-excel.js
import pool from '../../lib/db';
import ExcelJS from 'exceljs';

export default async function handler(req, res) {
  try {
    const [jerseys] = await pool.query(`SELECT jersey, size, number FROM jerseys`);
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Pedidos');

    worksheet.columns = [
      { header: 'Jersey', key: 'jersey', width: 30 },
      { header: 'Size', key: 'size', width: 10 },
      { header: 'Number', key: 'number', width: 15 },
    ];

    worksheet.addRows(jerseys);

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader('Content-Disposition', 'attachment; filename=pedido.xlsx');

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    res.status(500).json({ error: 'Error al generar el Excel' });
  }
}
