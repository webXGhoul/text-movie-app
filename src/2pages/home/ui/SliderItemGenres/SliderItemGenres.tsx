import { FC } from "react";
import { genres } from "@/shared/helpers/genres";

interface SliderItemGenresProps {
  genre_ids: number[];
  className: string;
}

const SliderItemGenres: FC<SliderItemGenresProps> = ({
  genre_ids,
  className,
}) => {
  const finallyGenres: string[] = genres
    .filter((genre) => genre_ids.includes(genre.id))
    .map((genre) => genre.name);
  return (
    <p className={className}>
      Genres: <span>{finallyGenres.join(", ")}</span>
    </p>
  );
};

export default SliderItemGenres;
