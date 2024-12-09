import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [jerseys, setJerseys] = useState([]); // Para almacenar la lista de camisetas
  const [loading, setLoading] = useState(true); // Para saber si estamos cargando datos

  // Función para obtener los datos de la API
  const fetchJerseys = async () => {
    try {
      const response = await axios.get("/api/get-jerseys"); // Llamamos a la API
      setJerseys(response.data); // Guardamos los datos
      setLoading(false); // Terminamos de cargar
    } catch (error) {
      console.error("Error al obtener las camisetas:", error);
      setLoading(false);
    }
  };

  // Usamos useEffect para cargar los datos al abrir la página
  useEffect(() => {
    fetchJerseys();
  }, []);

  // Interfaz de usuario
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Tienda de Camisetas</h1>

      {/* Botón para generar el Excel */}
      <button
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => window.open("/api/export-excel")}
      >
        Descargar Excel
      </button>

      {/* Si estamos cargando, mostramos un mensaje */}
      {loading ? (
        <p>Cargando camisetas...</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Jersey</th>
              <th style={thStyle}>Foto</th>
              <th style={thStyle}>Talla</th>
              <th style={thStyle}>Número</th>
              <th style={thStyle}>Comprador</th>
              <th style={thStyle}>Costo</th>
              <th style={thStyle}>Precio</th>
              <th style={thStyle}>Ganancia</th>
              <th style={thStyle}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {jerseys.map((jersey) => (
              <tr key={jersey.id}>
                <td style={tdStyle}>{jersey.jersey}</td>
                <td style={tdStyle}>
                  <img
                    src={jersey.foto}
                    alt={jersey.jersey}
                    style={{ width: "50px" }}
                  />
                </td>
                <td style={tdStyle}>{jersey.size}</td>
                <td style={tdStyle}>{jersey.number}</td>
                <td style={tdStyle}>{jersey.comprador}</td>
                <td style={tdStyle}>{jersey.costo}</td>
                <td style={tdStyle}>{jersey.precio}</td>
                <td style={tdStyle}>{jersey.ganancia}</td>
                <td style={tdStyle}>{jersey.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// Estilo de las celdas
const thStyle = {
  border: "1px solid black",
  padding: "10px",
  backgroundColor: "#f4f4f4",
};

const tdStyle = {
  border: "1px solid black",
  padding: "10px",
  textAlign: "center",
};
