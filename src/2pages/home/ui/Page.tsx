import { Carousel } from "@/3widgets/carousel/ui/Carousel";
import { Slider } from "./Slider";
import { useHomePage } from "../api/sliderService.hook";
import { Loader } from "@/shared/ui";

const HomePage = () => {
  const {
    loading,
    error,
    carouselDataUpcoming,
    carouselDataTopRated,
    isCarouselDataTopRatedError,
  } = useHomePage();
  if (loading) return <Loader />;
  if (error) return <>Error</>;
  return (
    <div>
      <Slider />
      {carouselDataUpcoming && (
        <Carousel
          data={carouselDataUpcoming}
          type="upcoming"
          title="Most Viewed"
        />
      )}
      {carouselDataTopRated && !isCarouselDataTopRatedError && (
        <Carousel data={carouselDataTopRated} title="Top Rated" />
      )}
    </div>
  );
};

export default HomePage;
