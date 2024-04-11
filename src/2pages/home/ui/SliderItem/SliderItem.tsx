import { FC, useEffect, useRef } from "react";
import { PiStarFill } from "react-icons/pi";
import styles from "./SliderItem.module.css";
import { SliderItemTitle } from "../SliderItemTitle";
import { useDate } from "@/shared/hooks/useDate";
import { SliderItemProps } from "../../model/SliderItemProps";
import { SliderItemReleaseDate } from "../SliderItemReleaseDate";
import { SliderItemGenres } from "../SliderItemGenres";
import { formatLink } from "@/shared/helpers/formatLink";
const SliderItem: FC<SliderItemProps> = ({ movie }) => {
  const date = useDate(movie.release_date);
  return (
    <div className={styles.slider}>
      <div
        className={styles.slider__backdrop}
        style={{
          backgroundImage: `url(${formatLink('original', movie.backdrop_path)})`,
        }}
      ></div>
      <div className={`slider-content ${styles.slider__content}`}>
        <SliderItemReleaseDate
          date={date}
          className={styles.slider__realise}
          wrapClassName={styles["slider__realise-block"]}
        />
        <div className={styles.slider__title_block}>
          <SliderItemTitle
            spanClassName={styles.slider__title}
            oddSpanClassName={styles.slider__title_odd}
            evenSpanClassName={styles.slider__title_even}
            h2ClassName={styles.slider__title_main}
            title={movie.title}
          />
          <span className={styles.slider__average}>
            <PiStarFill className={styles.slider__average_star} />
            <b>{Math.round(movie.vote_average * 100) / 100}</b>
          </span>
        </div>
        {movie.overview.split(" ").length > 30 ? (
          <p className={styles.slider__overview}>
            {movie.overview.split(" ").splice(0, 50).join(" ")}...
          </p>
        ) : (
          <p className={styles.slider__overview}>{movie.overview}</p>
        )}
        <SliderItemGenres
          className={styles.slider__genres}
          genre_ids={movie.genre_ids}
        />
        <button className={styles.slider__btn}>Watch now</button>
      </div>
    </div>
  );
};

export default SliderItem;
