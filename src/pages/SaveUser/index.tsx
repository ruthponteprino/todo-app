import { useParams } from "react-router-dom";

const SaveUser = () => {
  const { id } = useParams();

  return <h1>Estoy en SaveUser editando el usuario {id}</h1>;
};

export { SaveUser };
