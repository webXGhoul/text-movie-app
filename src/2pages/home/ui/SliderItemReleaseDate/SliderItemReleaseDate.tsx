import { FC, useId } from "react";

interface SliderItemReleaseDateProps {
  date: string[];
  className: string;
  wrapClassName: string;
}

const SliderItemReleaseDate: FC<SliderItemReleaseDateProps> = ({
  date,
  className,
  wrapClassName,
}) => {
  return (
    <div className={wrapClassName}>
      {date.map((text) => (
        <span className={className} key={useId()}>
          {text || "?"}
          <hr />
        </span>
      ))}
    </div>
  );
};

export default SliderItemReleaseDate;
