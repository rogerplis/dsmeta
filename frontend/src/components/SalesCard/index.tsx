
import DateSelect from "../DatePicker"
import "./styles.css"

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
              <div className="dsmeta-form-control-container">
                <DateSelect/>
              </div>
              <div className="dsmeta-form-control-container">
              <DateSelect/>
              </div>
            </div>
            </div>
    )
}
export default SalesCard