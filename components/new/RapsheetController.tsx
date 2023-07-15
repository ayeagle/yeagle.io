import { useEffect, useState } from "react";
import styles from "./RapsheetController.module.css";

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

let startVal = 0.50;
let increment = 0.50;

for (let i = 0; i < glideArray.length; i++) {
  glideArray[i].position = startVal + increment * i ;
  glideArray[i].fade_start_position = 10 * (i+1);
  glideArray[i].fade_modifier = 0.25;
}

export default function RapsheetController({
  width,
  yOffset,
}: {
  width: number;
  yOffset: number;
}): JSX.Element {
  // const [yOffset, setYOffset] = useState(0);

  const determineFadeIn = (item: vcInfo) => {
    // if(item.index === 0){
    //     return ((yOffset / width) * 100 - item.fade_start_position * 0.01)*10;

    // }
    return ((yOffset / width) * (100 - item.fade_start_position))*5;
  };

  const determineGlideIn = (item: vcInfo) => {
    const ratio = (yOffset / width)
    const temp =  item.position * (Math.exp(1/ratio) *.01 * (item.index + 1)) 
    return temp 
  };

  return (
    <div>
      <h3 className={styles.vc}>
        Worked on hypergrowth solutions backed by...
      </h3>
      {glideArray.map((item) => {
        return (
          <h2
            className={styles.vc}
            key={item.index}
            style={{
              left: Math.max(determineGlideIn(item) , 0) + "vw",
              opacity:
                determineFadeIn(item) +
                "%",
            }}
          >
            {item.title}
          </h2>
        );
      })}
    </div>
  );
}
