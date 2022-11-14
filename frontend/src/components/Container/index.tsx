import SalesCard from "../SalesCard";
import Table from "../Table";

import "./styles.css";



function Container() {
  return (
    <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard />
          <Table/>
        </div>
      </section>
    </main>
  );
}

export default Container;
