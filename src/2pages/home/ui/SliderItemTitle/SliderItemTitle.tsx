import { FC } from "react";

interface EditTitleProps {
  title: string;
  oddSpanClassName?: string;
  evenSpanClassName: string;
  spanClassName: string;
  h2ClassName: string;
}

const SliderItemTitle: FC<EditTitleProps> = ({
  title,
  oddSpanClassName,
  evenSpanClassName,
  spanClassName,
  h2ClassName,
}) => {
  const titleArray: titleObjectType[] = title
    .split(" ")
    .map((word, idx) => ({ id: idx + 1, word: word }));

  return (
    <h2 className={h2ClassName}>
      {titleArray.map((obj) => {
        if (obj.id % 2 !== 0) {
          return (
            <span key={obj.id} className={`${spanClassName} ${oddSpanClassName}`}>
              {obj.word}
            </span>
          );
        } else {
          return (
            <span key={obj.id} className={`${spanClassName} ${evenSpanClassName}`}>
              {obj.word}
            </span>
          );
        }
      })}
    </h2>
  );
};

type titleObjectType = {
  id: number;
  word: string;
};

export default SliderItemTitle;
