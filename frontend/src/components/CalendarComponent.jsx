import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "@styles/calendarComponent.css";

const CalendarComponent = ({ mark }) => {
    const [date, setDate] = useState(new Date());

    return (
        <article>
            <Calendar
                onChange={setDate}
                onClickDay={(value) => alert(`CLick en fecha: ${value}`)}
                value={date}
                tileClassName={({ date }) => {
                    // console.log(mark.find(x=>x===moment(date).format("DD-MM-YYYY")))
                    if (
                        mark.find(
                            (x) => x === moment(date).format("DD/MM/YYYY")
                        )
                    ) {
                        return "highlight";
                    }
                }}
                // tileDisabled={({date})=>date.getDay()===0}
            />
        </article>
    );
};

export default CalendarComponent;
