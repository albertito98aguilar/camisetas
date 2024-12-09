import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddJersey() {
  const { register, handleSubmit, reset } = useForm();

  // Función para enviar el formulario
  const onSubmit = async (data) => {
    try {
      await axios.post("/api/add-jersey", data);
      alert("¡Jersey agregado exitosamente!");
      reset();
    } catch (error) {
      console.error("Error al agregar el jersey:", error);
      alert("Hubo un error al agregar el jersey.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Agregar Nuevo Jersey</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <label>Nombre del Jersey:</label>
        <input {...register("jersey")} required />

        <label>Foto (URL):</label>
        <input {...register("foto")} required />

        <label>Talla:</label>
        <input {...register("size")} required />

        <label>Número:</label>
        <input {...register("number")} required />

        <label>Comprador:</label>
        <input {...register("comprador")} required />

        <label>Costo:</label>
        <input type="number" step="0.01" {...register("costo")} required />

        <label>Precio:</label>
        <input type="number" step="0.01" {...register("precio")} required />

        <label>Estado:</label>
        <select {...register("estado")} required>
          <option value="en proceso">En proceso</option>
          <option value="pedido">Pedido</option>
          <option value="enviado">Enviado</option>
          <option value="en casa">En casa</option>
          <option value="stock">Stock</option>
          <option value="pagado">Pagado</option>
        </select>

        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Agregar Jersey
        </button>
      </form>
    </div>
  );
}
