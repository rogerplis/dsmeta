import axios from "axios";
import { useEffect, useState } from "react";
import { Sale } from "../../models/sales";
import { BASE_URL } from "../../utils/request";
import NotificationButton from "../NotificationButton";
import "./styles.css";

function Table() {
 const datain ='2022-01-01';
 const datafin ='2022-11-01';

 const [sales, setSales ] = useState<Sale[]>([]);

  useEffect(() => {
    axios.get( `${BASE_URL}/sales?minDate=${datain}&maxDate=${datafin}`)
    .then(response => {
      setSales(response.data.content)
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
          {
            sales.map(sale => {
              return(
                <tr key={sale.id}>
            <td className="show992">{sale.id}</td>
            <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
            <td>{sale.sellerName}</td>
            <td className="show992">{sale.visited}</td>
            <td className="show992">{sale.deals}</td>
            <td>{sale.amount}</td>
            <td>
              <div className="dsmeta-red-btn-container">
                <NotificationButton />
              </div>
            </td>
          </tr> 
              )

            })
          }
                   
        </tbody>
      </table>
    </div>
  );
}
export default Table;
