import React from "react";
import "./Testimonial.css";
import "swiper/css";
import swiperImage from "../images/swiper.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import 'swiper/css/autoplay';

const Testimonial = () => {
  return (
    <>
      <Swiper
       modules={[Navigation]}
       spaceBetween={50}
       autoplay
       slidesPerView={1}
       navigation
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="sections swiper_container w-container">
            <div className="swiper_img">
              <img src={swiperImage} alt="" />
            </div>
            <div className="swiper_content">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat."
              </p>
              <div className="swiper_content_info">
                <p>Jonathon Black</p>
              </div>
              <div>
                <span className="swiper_content_name">
                  CEO at Black Dunes Design
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sections swiper_container w-container">
            <div className="swiper_img">
              <img src={swiperImage} alt="" />
            </div>
            <div className="swiper_content">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat."
              </p>
              <div className="swiper_content_info">
                <p>Jonathon Black</p>
              </div>
              <div>
                <span className="swiper_content_name">
                  CEO at Black Dunes Design
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonial;
