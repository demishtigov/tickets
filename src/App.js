import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";
import data from "./tickets.json";
import { useState, useEffect } from "react";
import TicketsList from "./components/ticketsList/TicketsList";

const App = () => {
  // const newData = data.tickets

  const [stopsFilter, setStopsFilter] = useState('all');
  const [ticketsData, setTicketsData] = useState([]);

  useEffect(() => {
    if (stopsFilter === "all") {
      setTicketsData(data.tickets);
    } else {
      const filteredStops = data.tickets.filter(
        (ticket) => ticket.stops == stopsFilter
      );
      setTicketsData(filteredStops);
    }
  }, [stopsFilter]);

  const checkboxFiltersValue = {
    all: "all",
    zeroStops: "0",
    oneStop: "1",
    twoStops: "2",
    threeStops: "3",
  };

  return (
    <>
      <div className="contaier">
        <Header />
        <div className="hero">
          <aside>
            <Filter
              tickets={ticketsData}
              setTickets={setTicketsData}
              stopsFilter={stopsFilter}
              setStopsFilter={setStopsFilter}
              checkboxFiltersValue={checkboxFiltersValue}
            />
          </aside>
          <TicketsList tickets={ticketsData} />
        </div>
      </div>
    </>
  );
};

export default App;
