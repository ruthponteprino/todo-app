import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { categoriesService } from "../../services";
import { Category } from "../../types";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const navigate = useNavigate();

  const borrarCategoria = async (id: string) => {
    await categoriesService.remove(id);
    // obtenerCategorias();
  };

  const [test, setTest] = useState(0);
  const [test2, setTest2] = useState(0);

  useEffect(() => {
    console.log("Estoy en useEffect");
  }, [test2]);

  useEffect(() => {
    console.log("Estoy en useEffect 2");
  });

  const sumar = () => {
    setTest(test + 1);
  };

  const sumar2 = () => {
    setTest2(test2 + 1);
  };

  return (
    <div>
      <h1>Categorías</h1>

      <hr />

      <h1>
        {test} - {test2}
      </h1>

      <button onClick={sumar}>Sumar</button>
      <button onClick={sumar2}>Sumar</button>

      <hr />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.color}</td>
                <td>
                  <Button
                    variant="danger"
                    icon="trash"
                    handleClick={() => borrarCategoria(elem.id)}
                  />
                  <Button
                    variant="primary"
                    icon="pencil"
                    handleClick={() => navigate(`/categories/save/${elem.id}`)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Categories };
