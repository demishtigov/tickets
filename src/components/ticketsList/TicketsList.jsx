import React from "react";
import TicketItem from "./TicketItem";

const TicketsList = ({ tickets }) => {
  return (
    <div>

      <ul className='list'>
        {tickets.map((ticket) => {
          return <li key={ticket.id}>
            <TicketItem ticket={ticket} />
          </li>
        })}
      </ul>
    </div>
    
  );
};

export default TicketsList;
