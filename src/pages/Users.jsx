import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function User() {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("perfiles");
    
    // console.log(JSON.parse(storedData))

    if (storedData) {
      try {
        setDataUser(JSON.parse(storedData));
      } catch (error) {
        console.error("Error al parsear perfiles desde localStorage:", error);
        setDataUser([]);
      }
    }
  }, []);

  return (
    <>
      <h1>ℹ Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>NIT</th>
            <th>Nombre</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {dataUser.length > 0 ? (
            dataUser.map((data, index) => (
              <tr key={index}>
                <td>{data.nit}</td>
                <td>{data.name}</td>
                <td>
                  <Link to={`/user-detail/${data.nit}`}>Ver detalles</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No hay usuarios disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}