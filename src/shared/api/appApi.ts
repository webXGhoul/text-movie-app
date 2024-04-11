import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/api.constants";

export const appApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_TMDB_API_KEY_LOGIN}`
      );
      return headers;
    },
  }),
  endpoints: (_) => ({}),
});
