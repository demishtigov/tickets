import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";
import data from "./tickets.json";
import { useState, } from "react";

const App = () => {
  const newData = data.tickets.slice()
  const [ticektsData, setTicketsData] = useState(newData);
  
  return (
    <>
      <div className="contaier">
        <Header />
        <Filter />
      </div>
    </>
  );
};

export default App;
