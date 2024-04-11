import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperThumbsStateType } from "../Slider/Slider";
import { formatLink } from "@/shared/helpers/formatLink";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Dispatch, FC, SetStateAction } from "react";
import { IMovieResponse } from "@/shared/model/interfaces/IMovie";

interface SliderThumbsProps {
  setThumbsSwiper: Dispatch<SetStateAction<SwiperThumbsStateType>>;
  data: IMovieResponse | undefined;
}

const SliderThumbs: FC<SliderThumbsProps> = ({ setThumbsSwiper, data }) => {
  return (
    <Swiper
      modules={[EffectCoverflow, Autoplay]}
      onSwiper={setThumbsSwiper}
      className="thumbs-swiper"
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      effect="coverflow"
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 3500,
        reverseDirection: true,
      }}
    >
      {data?.results.map((movieThumbItem) => (
        <SwiperSlide key={movieThumbItem.id}>
          <img src={formatLink("w300", movieThumbItem.poster_path)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderThumbs;
