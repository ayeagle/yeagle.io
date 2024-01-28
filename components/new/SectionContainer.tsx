import {
  useEffect,
  useState,
  useRef,
  MutableRefObject,
  RefObject,
  ReactNode,
} from "react";
import Spacer from "../bio/Spacer";
import styles from "./SectionContainer.module.css";

import * as icons from "react-icons/fa";
import { NavScrollTarget } from "../types/NavTypes";

interface PageWrapperProps {
  children: ReactNode;
  title: string;
  number: string;
  scroll_target: NavScrollTarget;
  page_width: number;
}

export function SectionContainer({
  children,
  title,
  number,
  scroll_target,
  page_width,
}: PageWrapperProps): JSX.Element {
  return (
    <>
      <div id={scroll_target}>
        <Spacer height={page_width < 900 ? "200px" : "100px"} />
      </div>
      <div className={styles.section_header_wrapper}>
        <h2
          style={{
            position: "relative",
            paddingRight: "2vw",
            fontSize: "2vw",
            color: "rgb(31, 143, 156)",
            fontWeight: 700,
          }}
        >
          {number}
        </h2>
        <h1>{title}</h1>
        <div className={styles.section_header_line} />
      </div>
      {children}
      <div>
        {/* <Spacer height={page_width < 900 ? "300px" : "200px"} /> */}
      </div>
    </>
  );
}
