import { MutableRefObject, RefObject, useEffect, useState } from "react";
import styles from "./BorderController.module.css";

export default function BorderController(
  ref: RefObject<HTMLDivElement>
): JSX.Element {
  const [border1, setBorder1] = useState(styles.corner_border_top_left);
  const [border2, setBorder2] = useState(styles.corner_border_top_right);
  const [border3, setBorder3] = useState(styles.corner_border_bottom_left);
  const [border4, setBorder4] = useState(styles.corner_border_bottom_right);

  const setBorderNeutral = () => {
    setBorder1(styles.corner_border_top_left);
    setBorder2(styles.corner_border_top_right);
    setBorder3(styles.corner_border_bottom_left);
    setBorder4(styles.corner_border_bottom_right);
  };
  const setBorderAfter = () => {
    setBorder1(styles.corner_border_top_left_stage1);
    setBorder2(styles.corner_border_top_right_stage1);
    setBorder3(styles.corner_border_bottom_left_stage1);
    setBorder4(styles.corner_border_bottom_right_stage1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setBorderAfter();
      } else {
        setBorderNeutral();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }    };
  }, [ref]);

  return (
    <>
      <div className={border1} />
      <div className={border2} />
      <div className={border3} />
      <div className={border4} />
    </>
  );
}
