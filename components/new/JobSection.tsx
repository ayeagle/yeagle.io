import React, { useState, useEffect, useRef } from "react";
import styles from "./JobDetails.module.css";
import {
  JobDetailsItem,
  JobSectionDetails,
  jobDetailsArray,
} from "../componentData/JobSectionData";
import Spacer from "../bio/Spacer";

export default function JobSection({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [currQuote, setCurrQuote] = useState(0);
  const [mover, setMover] = useState(1000);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [caroLive, setCaroLive] = useState(false);
  const [workStyle, setWorkStyle] = useState(styles.work_details_closed);
  const [currOpen, setCurrOpen] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [yTotal, setYTotal] = useState(0);
  const [once, setOnce] = useState(0);
  const [height, updateHeight] = useState(0);
  const [width, updateWidth] = useState(0);

  useEffect(() => {
    // updateHeight(window.scrollHeight)
    updateWidth(window.innerWidth);

    function handleWindowResize() {
      updateHeight(window.innerHeight);
      updateWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setYOffset(window.pageYOffset);
      setYTotal(document.body.scrollHeight);
      // console.log(yOffset / yTotal)
    });
  }, [yOffset]);

  const giftRef: Array<null | any> = [null, null, null, null];
  const [workVH, setWorkVH] = useState("7vw");
  const [arrowStyle, setArrowStyle] = useState(styles.arrow_down);

  const hoverIndexSet = (index: number) => {
    setCurrOpen(index);
    console.log("this is the state of open");
    console.log(open);
  };

  const openClick = (index: number) => {
    setOpen(!open);
    if (open) {
      setWorkStyle(styles.work_details_closed);
      setArrowStyle(styles.arrow_down);
    } else {
      setCurrOpen(index);
      setWorkStyle(styles.work_details_open);
      setArrowStyle(styles.arrow_up);
      setCurrOpen(index);
    }
  };

  if (Math.abs(yOffset / yTotal - 0.15) <= 0.01 && !open && once == 0) {
    openClick(0);
    setOnce(1);
  }

  const forwardClick = () => {
    // console.log("e index changed up by 1 from this: " + currentIndex)
    setCurrentIndex(Math.min(currentIndex + 1, jobDetailsArray.length));
  };

  const backClick = () => {
    // console.log("e index changed down by 1 from this: " + currentIndex)
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  useEffect(() => {
    if (!caroLive) {
      setCurrentIndex(currentIndex + 1);
      setCaroLive(true);
    }
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % jobDetailsArray.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    setWorkStyle(styles.work_details_closed);
    setWorkVH("7vw");
    setArrowStyle(styles.arrow_down);
  }, []);

  console.log("CURR OPEN");
  console.log(currOpen);
  console.log("OPEN VAR");
  console.log(open);

  return (
    <>
      <div className={styles.jobs_wrapper}>
        {jobDetailsArray.map((jobDetailsElement, index) => {
          // if (index === 0) {
          //   return <></>;
          // }
          return (
            <div className={styles.jobs_container} style={{ width: "15%" }}>
              <div
                className={styles.logo_container}
                style={{
                  border:
                    currOpen == index && open
                      ? "3px solid rgb(0, 187, 224)"
                      : "",
                  boxShadow:
                    currOpen == index && open
                      ? "0 0 40px 40px rgba(0, 0, 0, 0.274)"
                      : "",
                  transition: ".3s",
                }}
              >
                <div
                  className={styles.arrow}
                  onClick={() => openClick(index)}
                  onMouseEnter={() => hoverIndexSet(index)}
                  // style={{border: "1px solid white"}}
                >
                  <div className={styles.arrow_details_header}>
                    <a href={jobDetailsElement.company_url} target="_blank">
                      <h5 className={styles.details_header_units}>
                        {jobDetailsElement.company} &#128279;
                      </h5>
                    </a>
                    {/* <h5 className={styles.details_header_units}>
                      {jobDetailsElement.role}
                    </h5> */}
                    <h5 className={styles.details_header_units}>
                      {jobDetailsElement.tenure}
                    </h5>
                  </div>
                  <img
                    className={arrowStyle}
                    src="/IMGassets/down_arrow.png"
                    // style={{ height: "5vw" }}
                  />
                </div>
                <div className={styles.logo_box}>
                  <img
                    src={jobDetailsElement.logo_pic}
                    // style={{ paddingTop: jobDetailsElement.top_move_perc }}
                    className={styles.logo}
                    onClick={() => openClick(index)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.extra_blocker}> </div>

      <div className={workStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              color: !open ? "rgba(0,0,0,0)" : "blue",
              transition: !open ? "1s" : "2s",
            }}
            className={styles.internal_details_header_units}
          >
            <a href={jobDetailsArray[currOpen].company_url} target="_blank">
              <h4
                className={styles.internal_details_header_units}
                style={{
                  color: !open ? "rgba(0,0,0,0)" : "",
                  transition: !open ? ".5s" : "2s",
                }}
              >
                {jobDetailsArray[currOpen].company}{" "}
              </h4>
            </a>
            <h4
              className={styles.internal_details_header_units}
              style={{
                color: !open ? "rgba(0,0,0,0)" : "",
                transition: !open ? ".5s" : "2s",
              }}
            >
              {jobDetailsArray[currOpen].role}
            </h4>
            <h4
              className={styles.internal_details_header_units}
              style={{
                color: !open ? "rgba(0,0,0,0)" : "",
                transition: !open ? ".5s" : "2s",
              }}
            >
              {jobDetailsArray[currOpen].tenure}
            </h4>
          </div>
          <br />
          <hr
            style={{
              backgroundColor: "rgb(255,255,255)",
              opacity: open ? "100%" : "0%",
              transition: "1s",
            }}
          ></hr>

          <div className={styles.outer_wrap}>
            <div className={styles.left_wrap}>
              <h4 className={styles.details_mini_header}> Hard Skills</h4>
              <div>
                <div className={styles.work_bullets}>
                  {jobDetailsArray[currOpen].hard_skills.map((item, index) => (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        ref={giftRef[currOpen]}
                        key={jobDetailsArray[currOpen].id + index + 3 + item[0]}
                        className={styles.skill_bar}
                        style={{
                          backgroundColor: `hsl(${
                            500 - item[1] * 2
                          }, 50%, 50%)`,
                          height: "10px",
                          width:
                            open && currOpen === jobDetailsArray[currOpen].id
                              ? item[1] + "%"
                              : "0%",
                          transition:
                            open == true &&
                            currOpen == jobDetailsArray[currOpen].id
                              ? "2s ease-out "
                              : ".8s",
                        }}
                      ></div>
                      <p
                        key={jobDetailsArray[currOpen].id + item[0]}
                        style={{ marginLeft: open ? "3vw" : "3vw" }}
                      >
                        {item[0]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <br />
              <h4 className={styles.details_mini_header}> Soft Skills</h4>
              <div>
                <div className={styles.work_bullets}>
                  {/* {jobDetailsArray[currOpen].hard_skills} */}
                  {jobDetailsArray[currOpen].soft_skills.map((item, index) => (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        ref={giftRef[currOpen]}
                        key={jobDetailsArray[currOpen].id + index + 3 + item[0]}
                        className={styles.skill_bar}
                        style={{
                          display:
                            currOpen == jobDetailsArray[currOpen].id
                              ? ""
                              : "none",
                          backgroundColor: `hsl(${item[1] * 3}, 50%, 50%)`,
                          height: "10px",
                          width:
                            open == true &&
                            currOpen == jobDetailsArray[currOpen].id
                              ? item[1] + "%"
                              : "0%",
                          transition: open ? "2s ease-out " : ".8s",
                        }}
                      ></div>
                      <p
                        key={jobDetailsArray[currOpen].id + item[0]}
                        style={{ marginLeft: open ? "3vw" : "3vw" }}
                      >
                        {item[0]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.right_wrap}>
              <h4 className={styles.details_mini_header}>Work</h4>

              <ul className={styles.work_bullets}>
                {jobDetailsArray[currOpen].details.map((detail, index) => (
                  <li key={detail[1]}>{detail[0]}</li>
                ))}
              </ul>
              {/* <hr style={{ backgroundColor: !open ? "rgba(0,0,0,0)" : "rgb(255,255,255)", transition: !open ? "1s" : "3s" }} /> */}

              {/* <hr style={{ backgroundColor: !open ? "rgba(0,0,0,0)" : "rgb(255,255,255)", transition: !open ? "1s" : "3s" }} /> */}
            </div>
          </div>
        </div>
      </div>
      <Spacer height={open && (width < 900 || width > 2000) ? jobDetailsArray[currOpen].additional_bottom_padding : "0px"} />
    </>
  );
}
