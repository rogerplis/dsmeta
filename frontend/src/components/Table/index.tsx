import axios from "axios";
import React, { useEffect, useState } from "react";
import { Sale } from "../../models/sales";
import { BASE_URL } from "../../utils/request";
import NotificationButton from "../NotificationButton";
import "./styles.css";

export interface Props  {
  envioData1 : Date, 
  envioData2 : Date
}
 const Table: React.FC<Props> = (envioData1 , _envioData2 ) =>
 {

 const datain = envioData1.envioData1.toLocaleDateString('sv-SE');
 const datafin =envioData1.envioData2.toLocaleDateString('sv-SE');
 
 const [sales, setSales ] = useState<Sale[]>([]);

  useEffect(() => {    
    axios.get( `${BASE_URL}/sales?minDate=${datain}&maxDate=${datafin}`)
    .then(response => {
      setSales(response.data.content)
    });
  },[datain,datafin])

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
                <NotificationButton saleId={sale.id} />
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
