import { appApi } from "@/shared/api/appApi";
import { IMovieResponse } from "@/shared/model/interfaces/IMovie";

export const sliderApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    getTopRatedList: build.query<IMovieResponse, any>({
      query: () => ({
        method: "GET",
        url: "/movie/popular",
      }),
    }),
  }),
});


export const { useGetTopRatedListQuery } = sliderApi;
