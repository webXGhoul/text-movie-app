import { appApi } from "@/shared/api/appApi";
import { IMovieResponse } from "@/shared/model/interfaces/IMovie";

export const carouselApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getCarouselSlides: builder.query<IMovieResponse, string>({
      query: (type) => ({
        method: "GET",
        url: `/movie/${type}`,
      }),
    }),
  }),
});

export const { useGetCarouselSlidesQuery } = carouselApi;
