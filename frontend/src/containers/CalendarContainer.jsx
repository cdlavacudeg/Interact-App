import backArrowSVG from "@icons/back-arrow.svg";
import CalendarComponent from "../components/CalendarComponent";
import CalendarNotification from "../components/CalendarNotification";
import "@styles/calendarContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEvents } from "../redux/actions";
import moment from "moment";

const CalendarContainer = ({ active, setActive }) => {
    const user = useSelector((state) => state.user);
    const events = useSelector((state) => state.events);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents(user.user.courses)).catch((error) =>
            console.log(error)
        );
    }, []);

    let markDate = [];
    let notification = [];
    if (events) {
        events.map((event) => {
            event.events.map((eventObj) => {
                markDate.push(eventObj.date);
                notification.push(
                    Object.assign(eventObj, {
                        course: event.course_id.courseName,
                    })
                );
            });
        });
    }

    markDate = [...new Set(markDate)];
    notification = notification.filter((notification) => {
        let date = notification.date.split("/");
        date = new Date(date[2], parseInt(date[1]) - 1, date[0]);
        return date > new Date();
    });
    notification = notification.sort((a, b) => {
        let aDate = a.date.split("/");
        let bDate = b.date.split("/");

        aDate = new Date(aDate[2], parseInt(aDate[1]) - 1, aDate[0]);
        bDate = new Date(bDate[2], parseInt(bDate[1]) - 1, bDate[0]);

        return aDate - bDate;
    });

    const isActive = active ? "calendar-active" : "";

    return (
        <aside className={`calendar ${isActive}`}>
            <button onClick={setActive} className="calendar-backarrow">
                <img src={backArrowSVG} alt="back arrow" />
            </button>
            <div className="calendar-container">
                <h1 className="calendar-title">Actividades pendientes</h1>
                <CalendarComponent mark={markDate} />
                {notification.map((item, index) => {
                    return (
                        <CalendarNotification
                            key={index}
                            date={item.date.slice(0, 2)}
                            title={item.course}
                            description={item.description}
                        />
                    );
                })}
            </div>
        </aside>
    );
};

export default CalendarContainer;
