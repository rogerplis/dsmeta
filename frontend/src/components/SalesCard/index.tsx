import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import "./styles.css";
import Table from "../Table";

import React from 'react';

// import { Container } from './styles';


const SalesCard: React.FC = () => {
  const max = new Date();
  const min = new Date(new Date().setDate(max.getDate() - 365));

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  

  const envioData = (date: Date) => setMinDate(date);
  const envioData2 = (date: Date) => setMaxDate(date);
  return (
    <>      
      <div className="dsmeta-card">
        <h2 className="dsmeta-sales-title">Vendas</h2>
        <div>
          <div className="dsmeta-form-control-container">
            <DatePicker
              selected={minDate}
              onChange={envioData}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="dsmeta-form-control-container">
            <DatePicker
              selected={maxDate}
              onChange={envioData2}
              className="dsmeta-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <h1></h1>
        </div>
      </div>
      <Table envioData1={minDate} envioData2={maxDate} />
    </>
  );
}

export default SalesCard;
