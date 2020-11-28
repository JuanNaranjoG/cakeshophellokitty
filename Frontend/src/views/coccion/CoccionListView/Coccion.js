import React, { useEffect, useState } from 'react'

import { map } from "lodash"
import axios from 'axios';

export default function Clients(props) {

  const [datos, setdatos] = useState({});

  const load = async () => {
    const result = await axios.get('http://localhost:4000/api/coccion');
    setdatos(result.data);
  }

  const remove = async (id) => {
    await axios.delete('http://localhost:4000/api/coccion/' + id);
    load();
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Estado</th>
            <th>Horno</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            map(datos, (datos) => (
              <tr key={datos._id} className="text-center">
                <td>{datos._id}</td>
                <td>{datos.estado}</td>
                <td>{datos.horno}</td>
                <td>{datos.finicio}</td>
                <td>{datos.ffin}</td>
                <td>
                  <button type="button" className="btn btn-success mr-2 mb-b-2 "
                  >Modificar
                </button>
                  <button type="button" className="btn btn-danger"
                    onClick={() => remove(datos._id)}
                  >Eliminar
                </button>

                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
