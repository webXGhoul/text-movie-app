import { IMovie } from "@/shared/model/interfaces/IMovie";
import { FC } from "react";
import styles from "./CarouselItem.module.css";
import { formatLink } from "@/shared/helpers/formatLink";

interface CarouselItemProps {
  carouselItem: IMovie;
}

const CarouselItem: FC<CarouselItemProps> = ({ carouselItem }) => {
  return (
    <div className={styles.carouselItem}>
      <div
        className={styles.carouselItem__backdrop}
        style={{
          backgroundImage: `url(${formatLink(
            "w300",
            carouselItem.poster_path
          )})`,
        }}
      ></div>
      <div className={styles.carouselItem__content}>
        {carouselItem.title}
      </div>
    </div>
  );
};

export default CarouselItem;
