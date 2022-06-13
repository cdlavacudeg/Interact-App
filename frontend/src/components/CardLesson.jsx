import { useState } from "react";
import videoSVG from "@icons/video.svg";
import "@styles/cardLesson.css";
import { useSelector } from "react-redux";

const CardLesson = () => {
    const [video, setVideo] = useState(false);

    const handleVideo = () => setVideo(!video);
    let lectures = useSelector((state) => state.course.lessons.lectures);

    return (
        <>
            <div className="accordion" id="accordionExample">
                {lectures.length != 0 ? (
                    lectures.map((lecture, index) => {
                        return (
                            <div className="accordion-item" key={index}>
                                <h2
                                    className="accordion-header"
                                    id={`heading${index + 2}`}
                                >
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index + 2}`}
                                        aria-expanded="false"
                                        aria-controls={`collapse${index + 2}`}
                                    >
                                        <h3 className="accordionh3">
                                            {" "}
                                            {lecture.title}
                                        </h3>
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${index + 2}`}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={`heading${index + 2}`}
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <div className="cardLesson-video">
                                            <iframe
                                                className="cardLesson-video"
                                                src={lecture.link}
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h5>No hay material disponible</h5>
                )}
            </div>
        </>
    );
};

export default CardLesson;
