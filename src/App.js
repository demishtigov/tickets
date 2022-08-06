import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";
import data from "./tickets.json";
import { useState } from "react";
import TicketsList from "./components/ticketsList/TicketsList";

const App = () => {
  const newData = data.tickets
  
  const [ticketsData, setTicketsData] = useState(newData);
  console.log(ticketsData)
  return (
    <>
      <div className="contaier">
        <Header />
        <div className="hero">
          <aside>
            <Filter tickets={ticketsData} setTickets={setTicketsData}   />
          </aside>
          <TicketsList tickets={ticketsData} />
        </div>
      </div>
    </>
  );
};

export default App;

// const sortFilters = (sort) => {
//   console.log(sort);
//   if()
//   // switch (sort) {
//   //   case "all":
      
//   //     break;
//   //   case "1stop":
//   //     const flightsOneStop = ticketsData.filter((item) => item.stop === 1);
//   //     setTicketsData(flightsOneStop);
//   //     break;
//     //   case '1stop':
//     //     const flightsOneStop = newData.filter((item) =>
//     //       item.flight.legs.every((item) => item.segments.every((segment) => segment.starting)),
//     //     );
//     //     setFlights(flightsNoTransfer);
//     //     break;
//   }
// };