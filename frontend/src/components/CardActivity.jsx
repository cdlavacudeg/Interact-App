import "@styles/cardActivity.css";
import { useSelector } from "react-redux";

const CardActivity = () => {
    let events = useSelector((state) => state.course.events);

    if (events) {
        events = events.events.sort((a, b) => {
            let aDate = a.date.split("/");
            let bDate = b.date.split("/");

            aDate = new Date(aDate[2], parseInt(aDate[1]) - 1, aDate[0]);
            bDate = new Date(bDate[2], parseInt(bDate[1]) - 1, bDate[0]);

            return aDate - bDate;
        });
    } else {
        events = [];
    }

    return (
        <>
            {events.length != 0 ? (
                events.map((event, index) => {
                    return (
                        <div className="cardActivity" key={index}>
                            <div className="cardActivity-text">
                                <p className="cardActivity-title">
                                    {event.description}
                                </p>
                                <p className="cardActivity-body">
                                    Fecha limite: <span>{event.date}</span>
                                </p>
                            </div>
                            <p className="cardActivity-status">
                                {event.status ? "Pendiente" : "Entregado"}
                            </p>
                        </div>
                    );
                })
            ) : (
                <h5>No hay actividades disponibles</h5>
            )}
        </>
    );
};

export default CardActivity;
