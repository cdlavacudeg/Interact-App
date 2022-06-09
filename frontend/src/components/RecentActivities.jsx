import "@styles/recentactivities.css";
import { useSelector } from "react-redux";

function Recentactivities() {
    const materias = useSelector((state) => state.courses);

    return (
        <section className="recent_activities pt-5 pb-4">
            <h2 className="recent_activities_h2 ">Actividad Reciente</h2>
            <div className="recent_activities_container">
                <div className="row">
                    {materias ? (
                        materias.map(
                            (item, index) =>
                                index < 3 && (
                                    <div key={index} className="col-6 col-lg-4">
                                        <article className="recent_activities_item mb-3">
                                            <div className="activities_notification">
                                                1
                                            </div>
                                            <img
                                                src={item.image}
                                                alt={item.courseName}
                                            />
                                            <div className="p-2">
                                                <h1>{item.courseName}</h1>
                                                <h2>{`Prof .${item.teacher.fullName}`}</h2>
                                            </div>
                                        </article>
                                    </div>
                                )
                        )
                    ) : (
                        <div>
                            <p> No tienes materias registradas</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Recentactivities;
