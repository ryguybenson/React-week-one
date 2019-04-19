import React from "react";
import Ticket from "./Ticket";

var masterTicketList = [
  {
  pictures: 'pic',
  name: 'shirt',
    price: '30'
  },
  {
  pictures: 'pic',
  name: 'another shirt',
    price: '40'
  },
  {
  pictures: 'pic',
  name: 'some shorts',
    price: '90'
  }
];

function TicketList(){
  return (
      <div>
        <hr/>
        {masterTicketList.map((ticket, index) =>
          <Ticket pictures={ticket.pictures}
            names={ticket.name}
            prices={ticket.price}
            key={index}/>
        )}
      </div>
    );
}

export default TicketList;