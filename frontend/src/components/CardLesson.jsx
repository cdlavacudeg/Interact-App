import { useState } from 'react';
import videoSVG from '@icons/video.svg'
import '@styles/cardLesson.css'

const CardLesson = () => {
const [video, setVideo] = useState(false);

const handleVideo = () => setVideo(!video);

  return (
    <div onClick={handleVideo} className='cardLesson'>
        <section className='cardLesson-item'>
        <div>
            <p className='cardLesson-title'>video de ejemplo en iframe</p>
        </div>
        <div className='cardLesson-img'>
            <img  src={videoSVG} alt="video icon" />
        </div>
        </section>
        {
            video && <div className='cardLesson-video'>

            <iframe className='cardLesson-video'
            src="https://www.youtube.com/watch?v=_4G_miJKugA">
           </iframe>
            </div>
        }

    </div>
  )
}

export default CardLesson
