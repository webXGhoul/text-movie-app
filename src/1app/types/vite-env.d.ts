/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_BASE_URL: string;
  readonly VITE_TMDB_API_KEY: string;
  readonly VITE_TMDB_API_KEY_LOGIN: string;
  readonly VITE_TMDB_API_IMAGE_SOURCE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
