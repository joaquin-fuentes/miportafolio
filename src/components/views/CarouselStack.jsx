import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

export const CarouselStack = ({ items, reverse = false }) => {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
        pauseOnMouseEnter: false,
      }}
      speed={2000}
      allowTouchMove={false}
      spaceBetween={30}
      className="w-full"
      breakpoints={{
        320: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 6,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="text-center">
          <div className="flex flex-col items-center group">
            <div className="hover:scale-125 transition-all duration-300 group-hover:rotate-12 group-hover:drop-shadow-lg">
              {item.icon}
            </div>
            <h4 className="mt-2 text-lg group-hover:text-yellow-400 transition-colors duration-300">
              {item.name}
            </h4>
            <p className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
              {item.group}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
