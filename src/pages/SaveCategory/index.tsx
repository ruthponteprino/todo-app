import { useState } from "react";
import { categoriesService } from "../../services";
import { useNavigate, useParams } from "react-router-dom";

const SaveCategory = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const [ifError, setIfError] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const obtenerCategoriaAEditar = async () => {
    if (id) {
      const rta = await categoriesService.get(id);
      setName(rta.name);
      setColor(rta.color);
    }
  };

  if (id && name === "" && color === "") obtenerCategoriaAEditar();

  const enviarFormulario = async (e: any) => {
    e.preventDefault();

    setIfError(false);

    let rta;
    if (id) {
      rta = await categoriesService.update({ id, name, color });
    } else {
      rta = await categoriesService.add({ color, name });
    }

    if (rta) {
      navigate("/categories");
    } else {
      setIfError(true);
    }
  };

  return (
    <form onSubmit={enviarFormulario}>
      <div className="mb-3">
        <label htmlFor="name-control">Nombre</label>
        <input
          type="text"
          name="name"
          id="name-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="color-control">Color</label>
        <input
          type="color"
          name="color"
          id="color-control"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="form-control form-control-color"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Enviar
      </button>

      {ifError && <p style={{ color: "red" }}>Hubo un error</p>}
    </form>
  );
};

export { SaveCategory };
