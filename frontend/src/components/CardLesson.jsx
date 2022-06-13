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
            {lectures.length != 0 ? (
                lectures.map((lecture, index) => {
                    return (
                        <div
                            onClick={handleVideo}
                            className="cardLesson"
                            key={index}
                        >
                            <section className="cardLesson-item">
                                <div>
                                    <p className="cardLesson-title">
                                        {lecture.title}
                                    </p>
                                </div>
                                <div className="cardLesson-img">
                                    <img src={videoSVG} alt="video icon" />
                                </div>
                            </section>
                            {video && (
                                <div className="cardLesson-video">
                                    <iframe
                                        className="cardLesson-video"
                                        src={lecture.link}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    );
                })
            ) : (
                <h5>No hay material disponible</h5>
            )}
        </>
    );
};

export default CardLesson;
