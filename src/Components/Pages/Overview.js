import Row from "../Globals/grid/Row";
import Column from "../Globals/grid/Column";
import CountContainer from "./CountContainer";
import CountUp from 'react-countup';
import { useEffect, useState } from "react";

export default function Overview() {
    const [tickets, setTickets] = useState([]);
    const SubmitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let initialValues = {};
        let newTicket = {};

        let currentValueForm = e.currentTarget;
        let inputsAndSelects = currentValueForm.querySelectorAll('input, select');

        inputsAndSelects.forEach(function (element) {
            let value = element.value;
            let name = element.name;
            newTicket[name] = value;
        });

        initialValues = [...tickets, newTicket];
        setTickets(initialValues);
    }

    const Delete = (e, currentIndex) => {
        let newTickets = tickets.filter(function (item, index) {
            return index != currentIndex;
        })
        
        setTickets(newTickets);
    }

    return (
        <Row>
            <form className="" id="ticketsForm" onSubmit={(e) => SubmitHandler(e)}>
                <div className="wrapper">
                    <label htmlFor="">
                        Ticket name
                    </label>
                    <input type="text" name="ticketName" placeholder="New task" />
                </div>

                <div className="wrapper">
                    <label htmlFor="">
                        Ticket date
                    </label>
                    <input type="text" name="ticketDate" placeholder="06/02/2005" />
                </div>

                <div className="wrapper">
                    <label htmlFor="">
                        Contributor
                    </label>
                    <select name="ticketContributor" id="">
                        <option>Колян</option>
                        <option>Диана</option>
                        <option>Денчик</option>
                    </select>
                </div>

                <div className="wrapper">
                    <label htmlFor="">
                        Ticket priority
                    </label>
                    <select name="ticketPriority" id="">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>
            </form>

            <button className="ticketsForm-button" form="ticketsForm">Save</button>

            <div className="table-headlines row">
                <div className="headline">Tickets details</div>
                <div className="headline">Contributor name</div>
                <div className="headline">Priority</div>
            </div>


            <div className="currentValues">
                {tickets.map((item, index) => (
                    <div className='q'>
                        <div className="itemsContainer">
                            <div className="ticket-name">{item.ticketName}</div>
                            <div className="ticket-name">{item.ticketDate}</div>
                            <div className="ticket-name">{item.ticketContributor}</div>
                            <div className="ticket-name">{item.ticketPriority}</div>
                        </div>
                        <button className="ticketsForm-button" onClick={(e) => Delete(e, index)}>Delete</button>
                    </div>
                )
                )}
            </div>
        </Row>
    );
}