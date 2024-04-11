import { sliderApi } from "@/2pages/home/api/sliderService";
import { carouselApi } from "@/3widgets/carousel/api/carouselService";
import { appApi } from "@/shared/api/appApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
  // [sliderApi.reducerPath]: sliderApi.reducer,
  // [carouselApi.reducerPath]: carouselApi.reducer,
});

export const store = () =>
  configureStore({
    reducer: rootReducer,
    preloadedState: {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        appApi.middleware
      ),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
