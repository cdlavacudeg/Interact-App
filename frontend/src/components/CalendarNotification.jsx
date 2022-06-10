import '@styles/calendarNotification.css'

const CalendarNotification = ({ date, title, description }) => {
    return (
        <section className='calendar-table'>
            <div className="calendar-table-num">{date}</div>
            <div className='calendar--table-text'>
                <h3 className='calendar-table-title'>{title}</h3>
                <p className='calendar-table-body'>
                    {description}
                </p>
            </div>
        </section>
    );
};

export default CalendarNotification;
