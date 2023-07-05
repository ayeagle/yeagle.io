import React, { useState, useEffect, useRef } from "react";
import styles from "./JobDetails.module.css";
import JobDetails from "./JobDetails";

type JobDetailsItem = [string, number];

export type JobSectionDetails = {
  id: number;
  company: string;
  company_url: string;
  role: string;
  tenure: string;
  details: Array<JobDetailsItem>;
  logo_pic: string;
  hard_skills: Array<JobDetailsItem>;
  soft_skills: Array<JobDetailsItem>;
  top_move_perc: string;
};

export default function JobSection(
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  const jobDetailsArray: Array<JobSectionDetails> = [
    {
      id: 0,
      company: "Facebook",
      company_url: "https://www.metacareers.com/",
      role: "Product Development",
      tenure: "2022-Present",
      details: [
        [
          "Engineer and maintain multibillion-row structured data pipelines, tables, and dashboards used by FB, Instagram, Messenger, and Reality Labs reporting teams ",
          0,
        ],
        [
          "Lead the product strategy and execution for deprecation of Neighborhoods, a hyper-local FB product with 5 million MAUs",
          1,
        ],
        [
          "Operationalize signal collection and prioritization for the experimental pre-launch pillar of the FB app",
          2,
        ],
        [
          "Synthesize user signal into roadmap-actionable dashboards and reporting",
          3,
        ],
        [
          "Drive cross functional quality and launch-readiness initiatives with eng, product, design, QA, privacy, legal and UXR",
          4,
        ],
      ],
      logo_pic: "/NewIMGassets/METAL.png",
      hard_skills: [
        ["Postgres/Presto", 86],
        ["JS/React", 67],
        ["Hack/PHP", 40],
        ["Python", 30],
      ],
      soft_skills: [
        ["Influence w/o Authority", 67],
        ["Feature/Fix Efficiency", 55],
        ["Finding PMF", 25],
      ],
      top_move_perc: "5vw",
    },
    {
      id: 1,
      company: "CaptivateIQ",
      company_url: "https://www.captivateiq.com/",
      role: "Product Solutions Consultant",
      tenure: "2021-2022",
      details: [
        [
          "Project manage calculation model design and build schedule for MM-ENT companies",
          0,
        ],
        [
          "Leverage data architecture, manipulation, and scripting to parse and synthesize multiple data sources into clear and accurate commission outputs",
          1,
        ],
        [
          "Use a host of in-house formulas based on SQL, Excel, and Python to build performant calculation models",
          2,
        ],
        [
          "Collaborate with product and engineering teams to streamline performance and expand platform functionality",
          3,
        ],
        [
          "Train new users and team-members on data manipulation and modeling best practices",
          4,
        ],
      ],

      logo_pic: "/NewIMGassets/CIQL.png",
      hard_skills: [
        ["Excel", 83],
        ["SQL", 70],
      ],
      soft_skills: [
        ["Critical Problem Solving", 85],
        ["Product Strategy", 72],
        ["Collaboration", 40],
      ],
      top_move_perc: "3vw",
    },
    {
      id: 2,
      company: "Guide.co",
      company_url: "https://guide.co/",
      role: "Product Growth Lead",
      tenure: "2019-2020",
      details: [
        [
          "Worked weekly with eng team and C-suite to uncover PMF and bring an early-access platform to market",
          0,
        ],
        [
          "Collaborated on sourcing, design, and execution of product growth features",
          1,
        ],
        [
          "Executed 23 growth experiments in 20Q1, tracking towards a 1m user growth rate for 2020",
          2,
        ],
        ["Analyzed usage data weekly to inform adoption strategy", 3],
        [
          "Reduced activation time from 1.5 weeks to 45 minutes while increasing first week engagement by 200%+",
          4,
        ],
        [
          "Uncovered and prioritized customer pains against technical feasibility on a daily basis",
          6,
        ],
      ],
      logo_pic: "/NewIMGassets/GUIDEL.png",
      hard_skills: [
        ["Excel", 60],
        ["Salesforce", 45],
        ["Product/Design Tooling", 30],
        ["SQL", 15],
      ],
      soft_skills: [
        ["Product Strategy", 83],
        ["Growth Strategy", 75],
        ["Operating in Uncertainty", 43],
      ],
      top_move_perc: "2.5vw",
    },
    {
      id: 3,
      company: "Sift",
      company_url: "https://sift.com/",
      role: "Business Development Lead",
      tenure: "2018-2019",
      details: [
        [
          "Worked closely with Head of GTM and Marketing team weekly to iterate and improve inbound strategy for the global business development team (SF, AZ, EU)",
          0,
        ],
        [
          "Re-designed inbound lead pipeline that improved conversion to sale by 300% in first 6 months (1.5 to 4.5%)",
          1,
        ],
        [
          "Implemented lead filtering logic that reduced inbound burden by ~30% without affecting sales meeting output ",
          2,
        ],
      ],

      logo_pic: "/NewIMGassets/SIFTL.png",
      hard_skills: [
        ["Salesforce", 49],
        ["Excel", 32],
      ],
      soft_skills: [
        ["Leadership", 84],
        ["Process Optimization", 69],
        ["Project Scoping", 42],
        ["Collaboration", 33],
      ],
      top_move_perc: "6vw",
    },
  ];

  const [currQuote, setCurrQuote] = useState(0);
  const [mover, setMover] = useState(1000);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [caroLive, setCaroLive] = useState(false);

  // const [open, setOpen] = useState(false)
  const [workStyle, setWorkStyle] = useState("styles.work_details_closed");
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

  // console.log("On the current load of the page, the workstyle is set to: " + workStyle)

  // const [currQuote, setCurrQuote] = useState(0)
  // const [mover, setMover] = useState(1000)
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [caroLive, setCaroLive] = useState(false)

  // const [open, setOpen] = useState(false)
  // const [workStyle, setWorkStyle] = useState(styles.work_details_closed)
  const [workVH, setWorkVH] = useState("7vw");
  const [arrowStyle, setArrowStyle] = useState(styles.arrow_down);

  // console.log("On the current load of the page, the workstyle is set to: " + workStyle)
  // console.log("jobDetailsArray.viewheight: " + jobDetailsArray.details_view_height)
  // console.log("workvh state: " + jobDetailsArray.workVH)
  const hoverIndexSet = (index: number) => {
    setCurrOpen(index);
    console.log("this is the state of open");
    console.log(open);
    // if (giftRef[index] && giftRef[index].current) {
    //     giftRef[index].current.style.width = "0%";
    // }

    // console.log(index)
    // console.log(jobDetailsArray[index])
    // console.log(jobDetailsArray[index].id)
  };

  const openClick = (index: number) => {
    setOpen(!open);
    if (open) {
      setWorkStyle(styles.work_details_closed);
      // setWorkVH("7vw")
      setArrowStyle(styles.arrow_down);
    } else {
      setCurrOpen(index);

      setWorkStyle(styles.work_details_open);
      // setWorkVH(jobDetailsArray.details_view_height)
      // setWorkVH(jobDetailsArray.details_view_height)

      setArrowStyle(styles.arrow_up);
      setCurrOpen(index);
    }
  };

  // console.log(yOffset)
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

  // const openClick = () => {
  //     // console.log("the onlclick is being used to change styles")
  //     // console.log("current style before change is : " + workStyle)

  //     setOpen(!open)
  //     if (open) setWorkStyle(styles.work_details_closed)
  //     else setWorkStyle(styles.work_details_open)
  // }

  return (
    <>
      <div className={styles.jobs_wrapper}>
        {jobDetailsArray.map((jobDetailsElement, index) => (
          <div
            className={styles.jobs_container}
            style={{ width: width > 2300 ? "" : "25%" }}
          >
            <div
              className={styles.logo_container}
              style={{
                border:
                  currOpen == index && open ? "3px solid rgb(0, 187, 224)" : "",
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
                  <h5 className={styles.details_header_units}>
                    {jobDetailsElement.role}
                  </h5>
                  <h5 className={styles.details_header_units}>
                    {jobDetailsElement.tenure}
                  </h5>
                </div>
                <img
                  className={arrowStyle}
                  src="/IMGassets/down_arrow.png"
                  style={{ height: "5vw" }}
                />
              </div>
              <img
                src={jobDetailsElement.logo_pic}
                style={{ paddingTop: jobDetailsElement.top_move_perc }}
                className={styles.logo}
                onClick={() => openClick(index)}
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ zIndex: 50, transition: "2s" }}>
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
                display: "flex",
                flexDirection: "row",
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
            <hr style={{ backgroundColor: "rgb(255,255,255)" }}></hr>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                zIndex: 20,
              }}
            >
              <div className={styles.left_wrap}>
                <h4 className={styles.details_mini_header}> Hard Skills</h4>
                <div>
                  <div className={styles.work_bullets}>
                    {/* {jobDetailsArray[currOpen].hard_skills} */}
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
                            width: open ? item[1] + "%" : "0%",
                            transition:
                              open == true && currOpen == jobDetailsArray[currOpen].id
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
                              currOpen == jobDetailsArray[currOpen].id ? "" : "none",
                            backgroundColor: `hsl(${item[1] * 3}, 50%, 50%)`,
                            width:
                              open == true && currOpen == jobDetailsArray[currOpen].id
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
      </div>
    </>
  );
}
