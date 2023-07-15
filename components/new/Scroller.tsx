import { useEffect, useState } from "react";
import styles from "./Scroller.module.css";

export default function Scroller(): JSX.Element {
  const [scrollerState, setScrollerState] = useState(
    styles.scroller_inner_state1
  );

  useEffect(() => {
    setTimeout(() => {
      setScrollerState(styles.scroller_inner_state2);
    }, 7000);
    setTimeout(() => {
      setScrollerState(styles.scroller_inner_state1);
    }, 15000);
  }, []);

  return (
    <div className={styles.scroller}>
      <div className={scrollerState}>
        <br />
        <br />
        &#x21d3;
      </div>
    </div>
  );
}
