import { useState, useEffect } from 'react';

export default function Home() {
  const [jerseys, setJerseys] = useState([]);

  useEffect(() => {
    fetch('/api/get-jerseys')
      .then((res) => res.json())
      .then((data) => setJerseys(data));
  }, []);

  return (
    <div>
      <h1>Tienda de Camisetas</h1>
      <table>
        <thead>
          <tr>
            <th>Jersey</th>
            <th>Foto</th>
            <th>Size</th>
            <th>Number</th>
            <th>Comprador</th>
            <th>Costo</th>
            <th>Precio</th>
            <th>Ganancia</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {jerseys.map((jersey) => (
            <tr key={jersey.id}>
              <td>{jersey.jersey}</td>
              <td>
                <img src={jersey.foto} alt={jersey.jersey} width={50} />
              </td>
              <td>{jersey.size}</td>
              <td>{jersey.number}</td>
              <td>{jersey.comprador}</td>
              <td>{jersey.costo}</td>
              <td>{jersey.precio}</td>
              <td>{jersey.ganancia}</td>
              <td>{jersey.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
