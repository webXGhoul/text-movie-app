import { FC } from "react";
import styles from "./Carousel.module.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { Container } from "@/shared/ui";
import { CarouselSlider } from "../CarouselSlider";
import { IMovieResponse } from "@/shared/model/interfaces/IMovie";

interface CarouselProps {
  type?: string;
  title: string;
  // navigateTo?: () => void;
  data: IMovieResponse
}

const Carousel: FC<CarouselProps> = ({ type, title, data}) => {
  return (
    <Container>
      <div className={styles.carousel}>
        <div className={styles.carousel__actions}>
          <h2 className={styles.carousel__title}>{title}</h2>
          <Link to={`/catalog/${type}`}>
            View all <IoMdArrowDropright />
          </Link>
        </div>
        <CarouselSlider data={data} type={type}/>
      </div>
    </Container>
  );
};

export default Carousel;
