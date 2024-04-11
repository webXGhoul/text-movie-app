import { FC } from "react";
import { CarouselItem } from "../CarouselItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetCarouselSlidesQuery } from "../../api/carouselService";

import "./CarouselSlider.css";
import { IMovieResponse } from "@/shared/model/interfaces/IMovie";

interface CarouselSliderProps {
  type?: string; 
  data: IMovieResponse
}

const CarouselSlider: FC<CarouselSliderProps> = ({ data }) => {

  return (
    <Swiper className="carousel__swiper" slidesPerView={5} spaceBetween={30}>
      {data?.results.map((carouselSlide) => (
        <SwiperSlide key={carouselSlide.id}>
          <CarouselItem carouselItem={carouselSlide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSlider;
