import NavBar from "../components/new/Navbar";
import { useEffect, useState, useRef, MutableRefObject, RefObject } from "react";
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

  const canvasRef = useRef<HTMLCanvasElement>(null);
  let count = 0;
  let interVar = 200;
  let xstore = 0;
  let ystore = 0;
  let positions: Array<Array<CanvasPosition>> = Array(3).fill([[]]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "green";

        function resizeCanvas() {
          if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = document.body.scrollHeight;
          }
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        function animate() {
          //   requestAnimationFrame(animate);
          if (canvas) {
            if (ctx) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.strokeStyle = "rgba(31, 143, 156,0)";
              ctx.lineWidth = 1;

              for (let j = 0; j < positions.length; j++) {
                for (let i = 0; i < positions[j].length; i++) {
                  ctx.beginPath();
                  if (i > 1) {
                    ctx.lineWidth = Math.max(i / 80, 1);
                    ctx.strokeStyle = `rgba(70, 110, ${255 - i}, ${i * 0.01})`;

                    let temp = (interVar - i) / 5;
                    let cos = temp * Math.cos(i * j);
                    let sin = temp * Math.sin(i * j);

                    // calculate control point coordinates
                    // let controlPoint1X = positions[j][i - 2].x + (interVar - i) / 5 * Math.cos(i * j);//+ (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3;
                    // let controlPoint1Y = positions[j][i - 2].y - (interVar - i) / 5 * Math.sin(i * j);//+ (Math.random() -.5)*(100-i)* Math.sin(i*j);
                    // let controlPoint2X = positions[j][i - 1].x + (interVar - i) / 5 * Math.sin(i * j);//+ (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3;
                    // let controlPoint2Y = positions[j][i - 1].y + (interVar - i) / 5 * Math.cos(i * j);//+ (Math.random() -.5)*(100-i)* Math.sin(i*j);

                    let controlPoint1X = positions[j][i - 2].x + cos; //+ (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3;
                    let controlPoint1Y = positions[j][i - 2].y - sin; //+ (Math.random() -.5)*(100-i)* Math.sin(i*j);
                    let controlPoint2X = positions[j][i - 1].x + sin; //+ (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3;
                    let controlPoint2Y = positions[j][i - 1].y + cos; //+ (Math.random() -.5)*(100-i)* Math.sin(i*j);

                    ctx.moveTo(positions[j][i - 2].x, positions[j][i - 2].y);
                    ctx.bezierCurveTo(
                      controlPoint1X,
                      controlPoint1Y,
                      controlPoint2X,
                      controlPoint2Y,
                      positions[j][i].x,
                      positions[j][i].y
                    );
                    ctx.stroke();
                  }
                }
              }
            }
          }
        }

        document.addEventListener("mousemove", (event) => {
          for (let j = 0; j < positions.length; j++) {
            positions[j].push({
              x: event.pageX + Math.sin(event.pageX),
              y: event.pageY + Math.sin(event.pageY),
            });
            xstore = event.pageX; //+ Math.sin(event.pageX)
            ystore = event.pageY; //+ Math.sin(event.pageY)
            if (positions[j].length >= interVar) positions[j].shift();
          }
        });

        const interval = setInterval(() => {
          let jlength = positions.length;
          for (let j = 0; j < positions.length; j++) {
            if (positions[j].length > 2) {
              if (
                Math.abs(
                  positions[j][jlength - 1].x - positions[j][jlength - 2].x
                ) < 400 &&
                Math.abs(
                  positions[j][jlength - 1].y - positions[j][jlength - 2].y
                ) < 400
              ) {
                positions[j].shift();
              }
            }
          }
        }, 30);

        animate();
        return () => clearInterval(interval);
      }
    }
  }, [open, boopBoop, currCourse]);

  //don't worry about this........
  if (Math.abs(yOffset - 3000) <= 100 && runOnce == false) {
    setBoopBoop(!boopBoop);
    setRunOnce(true);
    setTimeout(() => {
      setRunOnce(false);
    }, 5000);
  }

  return (
    <div className={styles.master} id="top">
      <div
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
      </div>
      <PageTop />
      <NavBar />
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        style={{ height: { totalHeight } + "px" }}
      />

      <div className={styles.mini_master}>
        <Spacer height={width < 900 ? "5vw" : "5vw"} />
        <h1 className={styles.title}>
          Hey I'm <strong style={{ color: "rgb(0, 187, 224)" }}>Alex</strong>{" "}
          and I'm a...
        </h1>
        <Spacer height={width < 900 ? "5vw" : "5vw"} />

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
          <h3
            className={styles.image_text}
            style={{ fontSize: width < 900 ? "3vw" : "2.5vw" }}
          >
            <Typing
              content={`Self-taught developer
                    <br/>Avid builder
                    <br/>Behavioral econ nerd
                    <br/>Product enthusiast
                    <br/>and more...`}
            />
          </h3>
        </div>

        <div id="resume">
          <Spacer height={width < 900 ? "20vh" : "15vh"} />
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
          <h2>Resume </h2>
          <div className={styles.section_header_line} />
        </div>

        <Spacer height={width < 900 ? "10vh" : "10vh"} />
        <div
          style={{
            height: "auto",
            width: "50vw",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <BorderController {...targetRef1} />

          <RapsheetController width={width} yOffset={+yOffset} />
        </div>
        <div ref={targetRef1} />

        <Spacer height={width < 900 ? "10vh" : "20vh"} />
        <JobSection  open={open} setOpen={setOpen} />

        <Spacer
          height={width < 1100 ? (width < 700 ? "50vh" : "35vh") : "0vw"}
        />
        <div ref={jobsRef}/>
        <Quotes   />

        <div id="projects">
          <Spacer height={width < 900 ? "40vh" : "15vh"} />
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
            02
          </h2>
          <h2 id="projects">Projects </h2>
          <div className={styles.section_header_line} />
        </div>

        <ProjectDetails />

        <Spacer height={"15vh"} />
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
              onMouseLeave={() => setBoopBoop(false)}            >
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

        <Spacer height={"10vw"} />
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
          <h2 id="contact">Contact </h2>
          <div className={styles.section_header_line}></div>
        </div>

        <Spacer height={"10vw"} />
        <div ref={targetRef2} />
        <ContactSection {...targetRef2} />

        <Spacer height={"15vw"} />
        <div style={{ zIndex: "100", position: "relative" }}>
          <PageBot />
        </div>
      </div>
    </div>
  );
}
