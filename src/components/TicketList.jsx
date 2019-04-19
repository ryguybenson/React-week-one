import React from "react";
import Ticket from "./Ticket";

var masterTicketList = [
  {
  tasks: 'Take out the garbage',
  check: 'checkbox',
    edit: 'edit'
  },
  {
  tasks: 'Mow the lawn',
  check: 'checkbox',
    edit: 'edit'
  },
  {
  tasks: 'Run 2 miles',
  check: 'checkbox',
    edit: 'edit'
  },
  {
  tasks: 'Go grocery shopping',
  check: 'checkbox',
    edit: 'edit'
  }
];

function TicketList(){
  return (
      <div>
        <hr/>
        {masterTicketList.map((ticket, index) =>
          <Ticket tasks={ticket.tasks}
            check={ticket.check}
            edit={ticket.edit}
            key={index}/>
        )}
      </div>
    );
}

export default TicketList;