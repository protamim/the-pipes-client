// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className="w-full h-[65vh] object-cover"
            src="https://img.freepik.com/free-photo/worker-repairing-water-heater_23-2149334230.jpg?size=626&ext=jpg&ga=GA1.1.754568602.1688007174&semt=sph"
            alt="slide1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[65vh] object-cover"
            src="https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176719.jpg?size=626&ext=jpg&ga=GA1.1.754568602.1688007174&semt=sph"
            alt="slide1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[65vh] object-cover"
            src="https://img.freepik.com/free-photo/man-fixing-kitchen-sink_53876-13430.jpg?size=626&ext=jpg&ga=GA1.1.754568602.1688007174&semt=sph"
            alt="slide1"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
