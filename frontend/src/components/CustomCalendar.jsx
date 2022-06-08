import React, { useState } from "react";
import Alert from "./Alert";
import Calendar from "react-calendar";
import style from "../styles/CustomCalendarStyle.module.css";
// import 'react-calendar/dist/Calendar.css';

const alertTest = [
    {
        alert: "Evaluacion 2/6/2022",
    },
    {
        alert: "Proyecto 5/6/22",
    },
    {
        alert: "Meet 10/6/2022",
    },
];

const dataForTest = [
    { date: "05", title: "Matematica", description: "clase de matematica" },
    { date: "17", title: "Geometria", description: "clase de Geometria" },
    { date: "23", title: "Lengua", description: "clase de Lengua" },
    { date: "29", title: "Ingles", description: "clase de Ingles" },
];

const CustomCalendar = () => {
    const [date, setDate] = useState(new Date());

    const handleClickDate = (value) => {
        console.log(value);
    };

    return (
        // <div className='calendar_section'>

        //     <p>Calendario Aqui</p>

        //     {
        //         alertTest.map((item, index) => (
        //             <Alert key={index} message={item.alert}></Alert>
        //         ))
        //     }
        // </div>
        <aside className={style.componentContent}>
            <article className={style.titlesAside}>
                <h1>Actividades pendientes</h1>
            </article>
            <article>
                <Calendar
                    className={style.reactCalendar}
                    onChange={setDate}
                    onClickDay={(value) => alert(`CLick en fecha: ${value}`)}
                    value={date}
                />
            </article>
            <article className={style.calendarNotificationContent}>
                {dataForTest.map((item, index) => {
                    return (
                        <CustomNotification
                            key={index}
                            date={item.date}
                            title={item.title}
                            description={item.description}
                        />
                    );
                })}
            </article>
        </aside>
    );
};

const CustomNotification = ({ date, title, description }) => {
    return (
        <section className={style.notificationContent}>
            <div className={style.boxDate}>{date}</div>
            <div className={style.descriptionNotificationContent}>
                <h3>{title}</h3>
                <p>
                    <i>{description}</i>
                </p>
            </div>
        </section>
    );
};

export default CustomCalendar;
