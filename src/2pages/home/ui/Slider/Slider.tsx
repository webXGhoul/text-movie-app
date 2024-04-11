import { useEffect, useState } from "react";
import { SliderItem } from "../SliderItem";
import { SliderThumbs } from "../SliderThumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperTypes } from "swiper/types";
import { sliderApi, useGetTopRatedListQuery } from "../../api/sliderService";
import { useHomePage } from "../../api/sliderService.hook";
import {
  Autoplay,
  EffectFade,
  Keyboard,
  Pagination,
  Thumbs,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Slider.css";

export type SwiperThumbsStateType = SwiperTypes | string | null;

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperThumbsStateType>(null);

  // const { data } = useGetTopRatedListQuery("");
  const {sliderData: data} = useHomePage()

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        className="home-movie-swiper"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        allowTouchMove={false}
        speed={700}
        keyboard={{ onlyInViewport: true }}
        loop={true}
        modules={[Pagination, Autoplay, Keyboard, Thumbs, EffectFade]}
        thumbs={{ swiper: thumbsSwiper }}
        effect="fade"
        fadeEffect={{ crossFade: false }}
      >
        {data?.results.map((movieItem) => (
          <SwiperSlide key={movieItem.id}>
            <SliderItem movie={movieItem} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderThumbs data={data} setThumbsSwiper={setThumbsSwiper} />
    </>
  );
};

export default Slider;
