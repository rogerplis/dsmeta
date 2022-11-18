import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";

import "./styles.css";

type Props = {
  saleId: number;
  
}
function handleClick(id: number) {
  const tel = '5511989843030'
  axios(`${BASE_URL}/sales/notification?id=${id}&tel=%2B${tel}`)
  .then(response => {
    console.log("SUCESSO")
  }) 
}
function NotificationButton({saleId} : Props) {
  
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
