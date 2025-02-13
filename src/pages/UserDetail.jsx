import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { nit } = useParams();
  const [name, setName] = useState("No disponible");

  useEffect(() => {
    const storedData = localStorage.getItem("perfiles");

    if (storedData) {
      try {
        const profiles = JSON.parse(storedData);
        const user = profiles.find(profile => profile.nit === nit);

        if (user) {
          setName(user.name);
        }
      } catch (error) {
        console.error("Error al parsear perfiles desde localStorage:", error);
      }
    }
  }, [nit]);

  return (
    <div>
      <h2>Detalles del Usuario</h2>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>NIT:</strong> {nit}</p>
    </div>
  );
}