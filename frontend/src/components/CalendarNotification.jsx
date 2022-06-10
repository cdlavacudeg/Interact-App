import React from "react";

const CalendarNotification = ({ date, title, description }) => {
    return (
        <section>
            <div className="boxDate">{date}</div>
            <div>
                <h3>{title}</h3>
                <p>
                    <i>{description}</i>
                </p>
            </div>
        </section>
    );
};

export default CalendarNotification;
