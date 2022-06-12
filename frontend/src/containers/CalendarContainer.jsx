import backArrowSVG from "@icons/back-arrow.svg";
import CalendarComponent from "../components/CalendarComponent";
import CalendarNotification from "../components/CalendarNotification";
import '@styles/calendarContainer.css'

const CalendarContainer = ({active, setActive}) => {
    const dataForTest = [
        { date: "05", title: "Matematica", description: "clase de matematica" },
        { date: "17", title: "Geometria", description: "clase de Geometria" },
        { date: "23", title: "Lengua", description: "clase de Lengua" },
        { date: "29", title: "Ingles", description: "clase de Ingles" },
    ];

    const markDate = [
        "04/06/2022",
        "07/06/2022",
        "11/06/2022",
        "12/06/2022",
        "25/06/2022",
    ];

    const isActive = active ? "calendar-active" : "";
    console.log(isActive);

    return (
        <aside className={`calendar ${isActive}`}>
            <button onClick={setActive} className="calendar-backarrow">
                <img src={backArrowSVG} alt="back arrow" />
            </button>
            <div className="calendar-container">
            <h1 className="calendar-title">Actividades pendientes</h1>
            <CalendarComponent mark={markDate} />
            {
                dataForTest.map((item, index) => {
                    return (
                        <CalendarNotification
                            key={index}
                            date={item.date}
                            title={item.title}
                            description={item.description}
                        />
                    );
            }
            )}
            </div>
        </aside>
    );
};

export default CalendarContainer;
