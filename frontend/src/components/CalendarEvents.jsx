
import React, { useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
//require("moment/locale/es.js")
const localizer = momentLocalizer(moment)
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const events = [
    {
        title: "meet",
        start: new Date("2022-05-25 10:00:00"),
        end: new Date("2022-05-25 11:00:00"),
    },
    {
        title: "presentacion de proyecto",
        start: new Date("2022-05-27 10:00:00"),
        end: new Date("2022-05-27 11:00:00"),
    },
    
 
];

const CalendarEvents = () => {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div >
            <div style={{ textAlign: "left", marginLeft: "3rem"}}>
            <h1>Bienvenido..</h1>
            <h3>Nuevo evento</h3>
            <div>
                <input type="text" placeholder="Titulo" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Comienza" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="Termina" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Añadir Evento
                </button>
            </div>
            </div>
            
            <Calendar localizer={localizer}
             events={allEvents} 
             startAccessor="start"
              endAccessor="end" 
              style={{ height: 500, margin: "50px" }}
              messages={{
                next: "Sig",
                previous: "Ant",
                today: "Hoy",
                month: "Mes",
                week: "Semana",
                day: "Día",
              }}
              />
        </div>
    );
}

export default CalendarEvents;