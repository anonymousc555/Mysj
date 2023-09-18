import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import Slide from './Slide';

export default function Home() {
  return (
    <>
      <div className="cont">
        <div className="hero-container">
          <div className="hero">
            <h4>Redifining The</h4>
            <h1>Economic & Political</h1>
            <h3>Landscape Of South Eastern Nigeria</h3>
          </div>
          <video playsInline autoPlay muted loop src="/video.mp4"></video>
        </div>
        <div className="event-details">
          <div className="date-of-event">
            <h4>DEC 18th & 19th</h4>
            <h5>
              Ahiajioku Convention Centre
              <span id="break-line"> Owerri, Imo State</span>
            </h5>
          </div>
          <div className="summit-text">
            <h2>
              ALAIGBO - Economic <br /> Summit
            </h2>
            {/* <h3>Economic Summit</h3> */}
            <button>
              <Link className="summit-btn" to="/form">
                Get Your Ticket
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
