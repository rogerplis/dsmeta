import axios from "axios";
import { useEffect } from "react";
import NotificationButton from "../NotificationButton";
import "./styles.css";

function Table() {
 const datain ='2022-01-01';
 const datafin ='2022-11-01';
  useEffect(() => {
    axios.get( `http://localhost:8080/sales?minDate=${datain}&maxDate=${datafin}`)
    .then(response => {
      console.log(response.data)
    })
  })

  return (
    <div>
      <table className="dsmeta-sales-table">
        <thead>
          <tr>
            <th className="show992">ID</th>
            <th className="show576">Data</th>
            <th>Vendedor</th>
            <th className="show992">Visitas</th>
            <th className="show992">Vendas</th>
            <th>Total</th>
            <th>Notificar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="show992">#341</td>
            <td className="show576">08/07/2022</td>
            <td>Anakin</td>
            <td className="show992">15</td>
            <td className="show992">11</td>
            <td>R$ 55300.00</td>
            <td>
              <div className="dsmeta-red-btn-container">
                <NotificationButton />
              </div>
            </td>
          </tr>
          <tr>
            <td className="show992">#341</td>
            <td className="show576">08/07/2022</td>
            <td>Anakin</td>
            <td className="show992">15</td>
            <td className="show992">11</td>
            <td>R$ 55300.00</td>
            <td>
              <div className="dsmeta-red-btn-container">
                <NotificationButton />
              </div>
            </td>
          </tr>
          <tr>
            <td className="show992">#341</td>
            <td className="show576">08/07/2022</td>
            <td>Anakin</td>
            <td className="show992">15</td>
            <td className="show992">11</td>
            <td>R$ 55300.00</td>
            <td>
              <div className="dsmeta-red-btn-container">
                <NotificationButton />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
