import React from "react";
import "./ticketItem.css";
import turkishAir from "../../assets/turkish-air.png";
import plane from "../../assets/plane.png";

const TicketItem = ({ ticket }) => {
  return (
    <>
      <div className="ticketStyle">
        <div className="ticketBuy">
          <div className="air-logo">
            <img src={turkishAir} alt="Turkish Airlines" />
          </div>
          <button className="button">
            Купить <br /> за {ticket.price} ₽ 
          </button>
        </div>
        <div className="ticketInfo">
          <div className="departure">
            <div className="departureTime">{ticket.departure_time}</div>
            <div className="departureCity">
              {`${ticket.origin}, ${ticket.origin_name}`}
            </div>
            <div className="departureDate">{ticket.departure_date}</div>
          </div>
          <div className="transfers">
            {ticket.stops ? (
              <div className="transfersInfo">
                {ticket.stops} пересадк
                {+ticket.stops > 1 ? `и` : `а`}
              </div>
            ) : (
              <div className="transfersInfo">без пересадок</div>
            )}
            <div className="transfersLine">
              <img src={plane} alt="airplane" />
            </div>
          </div>
          <div className="destination">
            <div className="destinationTime">{ticket.arrival_time}</div>
            <div className="destinationCity">
              {`${ticket.destination}, ${ticket.destination_name}`}
            </div>
            <div className="destinationDate">{ticket.arrival_date}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketItem;
