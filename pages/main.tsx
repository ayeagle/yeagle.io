import NavBar from "../components/new/Navbar";
import {
  useEffect,
  useState,
  useRef,
  MutableRefObject,
  RefObject,
} from "react";
import PageTop from "../components/new/PageTop";
import styles from "./main.module.css";
import NavButton from "../components/new/NavButton";
import Typing from "../components/new/Typing";
import Spacer from "../components/bio/Spacer";
import Quotes from "../components/new/Quotes";
import PageBot from "../components/new/PageBot";
import JobSection from "../components/new/JobSection";
import Socials from "../components/new/Socials";
import * as icons from "react-icons/fa";
import ProjectDetails from "../components/new/ProjectDetails";
import Scroller from "../components/new/Scroller";
import BorderController from "../components/new/BorderController";
import ContactSection from "../components/new/ContactSection";
import RapsheetController from "../components/new/RapsheetController";
import Rapsheet2 from "../components/new/Rapsheet2";
import { NavScrollTarget } from "../components/types/NavTypes";

// import CanvasAnimation from "../components/new/CanvasAnimation";

/////////////////////////////
/*
Specifically NOT component-itized for numerous reasons
sorry

see my other react projects for more effective componentization
*/
/////////////////////////////

type CanvasPosition = {
  x: number;
  y: number;
};

let master_backgroundColor = "rgb(20, 23, 41)";
let master_color = "rgb(197, 197, 197)";

let courses = [
  {
    id: 0,
    name: "course1",
    link: "dasddas",
    details: [["sdsadasd"], ["dsadsasd"], ["sdasdsads"]],
  },
  {
    id: 1,
    name: "course4",
    link: "dasddas",
    details: [["sdsadasd"], ["dsadsasd"], ["sdasdsads"]],
  },
  {
    id: 2,
    name: "course4",
    link: "dasddas",
    details: [["sdsadasd"], ["dsadsasd"], ["sdasdsads"]],
  },
];

export default function Main() {
  const [height, updateHeight] = useState(0);
  const [width, updateWidth] = useState(0);
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  const [yOffset, setYOffset] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);

  // console.log("this is the height (start) ==> " + height)
  //     console.log("this is the width (start) ==> " + width)

  const [limiter, setLimiter] = useState(0);
  const [trans, setTrans] = useState(styles.left_container);

  const { createNoise2D } = require("simplex-noise");
  const noise2D = createNoise2D();
  const [open, setOpen] = useState(false);
  const [boopBoop, setBoopBoop] = useState(false);
  const [currCourse, setCurrCourse] = useState(0);
  const [runOnce, setRunOnce] = useState(false);

  const [flip, setFlip] = useState(false);
  const [icelandStart, setIcelandStart] = useState(45);

  const targetRef1: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const targetRef2: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const jobsRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  /*//////////////////
    random functions
    //////////////////*/

  setTimeout(() => {
    setIcelandStart(icelandStart + 1);
  }, 180000);

  /*//////////////////
    UseEffect functions
    //////////////////*/

  useEffect(() => {
    updateHeight(window.scrollY);
    updateWidth(window.innerWidth);
    setTotalHeight(window.outerHeight);

    function handleWindowResize() {
      updateHeight(window.innerHeight);
      updateWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    let userId = 20; //document.cookie.substr( document.cookie.indexOf("=")+1, document.cookie.indexOf("=") + 36)
    let timestamp = new Date().toISOString();

    if (limiter <= 3) {
      setLimiter(limiter + 1);
      // LogActivity(userId, "loaded about page")
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setYOffset(window.scrollY);
    });
  }, [yOffset, trans]);

  //don't worry about this........
  if (Math.abs(yOffset - 3000) <= 100 && runOnce == false) {
    setBoopBoop(!boopBoop);
    setRunOnce(true);
    setTimeout(() => {
      setRunOnce(false);
    }, 5000);
  }

  return (
    <div className={styles.master} id={NavScrollTarget.TOP}>
      {/* <div
        className={styles.sticky_left}
        style={{ display: width < 992 ? "none" : "", zIndex: 20 }}
      >
        <Socials orientation={"column"} size={"1.7vw"} />
        <div
          style={{
            width: "1px",
            height: "10vw",
            backgroundColor: "white",
            marginTop: "1vw",
            position: "relative",
            left: "50%",
          }}
        />
      </div> */}
      <PageTop />
      <NavBar />

      <div className={styles.mini_master}>
        <Spacer height={'100px'} />
        <h1 className={styles.title}>
          Hey I'm <strong style={{ color: "rgb(0, 187, 224)" }}>Alex</strong>{" "}
          and I'm a...
        </h1>
        <Spacer height={width < 900 ? "80px" : "50px"} />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div className={styles.image_container}>
            <img src="/IMGassets/me2.png" className={styles.image} />
          </div>
          <Scroller />
          <h2 className={styles.image_text}>
            <Typing
              content={`> Self-taught developer
                    <br/>> Avid builder
                    <br/>> Behavioral econ nerd
                    <br/>> Product enthusiast
                    <br/>> and more...`}
            />
          </h2>
        </div>
        <div id={NavScrollTarget.RESUME}>
          <Spacer height={width < 900 ? "200px" : "150px"} />
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
            01
          </h2>
          <h1>Resume </h1>
          <div className={styles.section_header_line} />
        </div>
        <Spacer height={"100px"} />
        <div
          style={{
            height: "auto",
            width: "80%",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <BorderController {...targetRef1} />

          <Rapsheet2 {...targetRef1} />
        </div>
        <div ref={targetRef1} />
        <Spacer height={width < 900 ? "200px" : "150px"} />
        <JobSection open={open} setOpen={setOpen} />
        <Spacer height={"100px"} />
        <div ref={jobsRef} />
        <Quotes />
        <Spacer height={"100px"} />
        <div id={NavScrollTarget.PROJECTS}></div>
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
            02
          </h2>
          <h1>Projects </h1>
          <div className={styles.section_header_line} />
        </div>
        <ProjectDetails />
        <Spacer height={"150px"} />
        <div style={{ position: "relative" }}>
          <div style={{ display: width < 900 ? "none" : "" }}>
            <h3
              className={styles.image_text_center}
              style={{ top: "45%", fontWeight: 200 }}
            >
              I'm also a drone videographer!
            </h3>
            <div
              className={styles.video}
              onMouseEnter={() => setBoopBoop(true)}
              onMouseLeave={() => setBoopBoop(false)}
            >
              <iframe
                className={styles.video_inner}
                style={{ pointerEvents: "none", borderRadius: "40px" }}
                width={width}
                height={width >= 2000 ? width * 0.375 : width * 0.398}
                src={`https://www.youtube.com/embed/vNF94UrluYg?autoplay=1&mute=1&controls=0&vq=highres&modestbranding=1&start=${icelandStart}`}
                align-content={"center"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <Spacer height={"100px"} />
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
            03
          </h2>
          <h1 id={NavScrollTarget.CONTACT}>Contact </h1>
          <div className={styles.section_header_line}></div>
        </div>
        <Spacer height={"100px"} />
        <div ref={targetRef2} />
        <ContactSection {...targetRef2} />
        <Spacer height={"150px"} />
        <div style={{ zIndex: "100", position: "relative" }}>
          <PageBot />
        </div>
      </div>
    </div>
  );
}
