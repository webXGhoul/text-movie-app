export const formatLink = (imageType: string, imageLink: string): string => {
  return import.meta.env.VITE_TMDB_API_IMAGE_SOURCE + `/${imageType}/` + imageLink;
};
