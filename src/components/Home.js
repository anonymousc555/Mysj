import { Link } from "react-router-dom";
import InfiniteCarousel from 'react-leaf-carousel';
import card1 from "../public/assets/images/card-1.png";
import card2 from "../public/assets/images/card-2.jpg"
import card3 from "../public/assets/images/card-3.png";
import card4 from "../public/assets/images/card-4.png";
import "../styles/Home.css"

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
          {/* {/* <video playsInlisne autoPlay muted loop src="/video.mp4"></video>  */}
        </div>
        <div className="slider-wrapper">
         <div className="inner-wrap">
         <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
            dots={true}
            showSides={true}
            sidesOpacity={0.5}
            sideSize={0.1}
            slidesToScroll={2}
            slidesToShow={2}
            slidesSpacing={40}
          >
            <div>
              <img
                alt=""
                src={card1}
              />
            </div>
            <div>
              <img
                alt=""
                src={card2}
              />
            </div>

            <div>
              <img
                alt=""
                src={card3}
              />
            </div>

            <div>
              <img
                alt=""
                src={card4}
              />
            </div>
          
          </InfiniteCarousel>
         </div>
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
