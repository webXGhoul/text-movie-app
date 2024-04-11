import {
  carouselApi,
  useGetCarouselSlidesQuery,
} from "@/3widgets/carousel/api/carouselService";
import { sliderApi } from "./sliderService";
import { IMovieResponse } from "@/shared/model/interfaces/IMovie";

export const useHomePage = () => {
  const {
    data: sliderData,
    isLoading: isSliderDataLoading,
    isError: isSliderDataError,
  } = sliderApi.useGetTopRatedListQuery("");

  const {
    data: carouselDataUpcoming,
    isLoading: isCarouselDataUpcomingLoading,
    isError: isCarouselDataUpcomingError,
  } = carouselApi.useGetCarouselSlidesQuery("upcoming");

  const { data: carouselDataTopRated, isError: isCarouselDataTopRatedError } =
    carouselApi.useGetCarouselSlidesQuery("top_rated");

  const loading = isSliderDataLoading || isCarouselDataUpcomingLoading;
  const error = isSliderDataError || isCarouselDataUpcomingError;

  return {
    loading,
    error,
    sliderData,
    carouselDataUpcoming,
    carouselDataTopRated,
    isCarouselDataTopRatedError
  };
};
