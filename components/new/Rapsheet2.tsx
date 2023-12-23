import styles from "./RapsheetController.module.css";
import { MutableRefObject, RefObject, useEffect, useState } from "react";

type vcInfo = {
  index: number;
  title: string;
  fade_start_position: number;
  fade_modifier: number;
  position: number;
};

const glideArray: Array<vcInfo> = [
  {
    index: 0,
    title: "2x Accel",
    fade_start_position: 0,
    fade_modifier: 0,
    position: 0,
  },
  {
    index: 1,
    title: "1x FAANG",
    fade_start_position: 0,
    fade_modifier: 0,
    position: 0,
  },
  {
    index: 2,
    title: "2x Seqouia",
    fade_start_position: 0,
    fade_modifier: 0,
    position: 0,
  },
  {
    index: 3,
    title: "1x 500 Startups",
    fade_start_position: 0,
    fade_modifier: 0,
    position: 0,
  },
  {
    index: 4,
    title: "2x Y Combinator",
    fade_start_position: 0,
    fade_modifier: 0,
    position: 0,
  },
  {
    index: 5,
    title: "2x First Round Capital",
    fade_start_position: 0,
    fade_modifier: 0,
    position: 0,
  },
];

let startVal = 0.5;
let increment = 0.1;

for (let i = 0; i < glideArray.length; i++) {
  glideArray[i].position = startVal + increment * i;
  glideArray[i].fade_start_position = 10 * (i + 1);
  glideArray[i].fade_modifier = 0.25;
}

export default function RapsheetController(
  ref: RefObject<HTMLDivElement>
): JSX.Element {
  // const [yOffset, setYOffset] = useState(0);

  const [currStyle, setCurrStyle] = useState<string>(styles.item_before);

  const setBorderAfter = () => {
    setCurrStyle(styles.item_after);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setBorderAfter();
      }
    });

    if (ref && ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div>
      <h3 className={styles.vc}>
        Worked on hypergrowth solutions backed by...
      </h3>
      {glideArray.map((item) => {
        return (
          <h2
            className={currStyle}
            key={item.index}
            style={{
              transition: `${(item.index + 2) * 0.5}s`,
            }}
          >
            {item.title}
          </h2>
        );
      })}
    </div>
  );
}
