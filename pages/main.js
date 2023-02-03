import Waves from "@components/pomodomo/Waves";
import Break from '@components/pomodomo/Break';
import Button from "@components/pomodomo/Button";
import NavBar from "@components/new/Navbar";
import BasicPageTop from "@components/bio/BasicPageTop";
import SVGSpacers from "@components/bio/SVGSpacers";
import Resizer from "@components/functional/Resizer";
import { useEffect, useState, useRef } from "react";
import PNGSpacers from "@components/bio/PNGSpacers";
import styles from './main.module.css';
import Iceland from "@components/bio/Iceland";
import NavButton from "@components/new/NavButton";
import Carousel from "@components/bio/Carousel";
import Typing from "@components/new/Typing";
import Flood from "@components/bio/Flood";
import Flood2 from "@components/bio/Flood2";
import { useSelector, useDispatch } from "react-redux";
import Spacer from "@components/bio/Spacer";
import LogActivity from "@components/DBcomponents/LogActivity";
import Quotes from '@components/new/Quotes'
import PageBot from '@components/new/PageBot'
import SimplexNoise from 'simplex-noise';
import { createNoise2D } from 'simplex-noise';
import JobSection from "@components/new/JobSection";
import Socials from "@components/new/Socials";
import * as icons from 'react-icons/fa';




/////////////////////////////
/*
Specifically NOT component-itized for numerous reasons
sorry

see my other react projects for more effective componentization


*/
/////////////////////////////


let glideArray = Array(10)
let startVal = .1
let increment = .05

for (let i = 0; i < glideArray.length; i++) {
    glideArray[i] = startVal + increment * (i)
}


let master_backgroundColor = 'rgb(20, 23, 41)'
let master_color = 'rgb(197, 197, 197)'


let courses = [
    {
        id: 0,
        name: "course1",
        link: "dasddas",
        details: [
            ["sdsadasd"],
            ['dsadsasd'],
            ['sdasdsads']
        ]
    },
    {
        id: 1,
        name: "course4",
        link: "dasddas",
        details: [
            ["sdsadasd"],
            ['dsadsasd'],
            ['sdasdsads']
        ]
    },
    {
        id: 2,
        name: "course4",
        link: "dasddas",
        details: [
            ["sdsadasd"],
            ['dsadsasd'],
            ['sdasdsads']
        ]
    }
]


let other_projects = [
    {
        id: 0,
        name: "Personal Site v1",
        description: "Original version of personal website",
        code:
            ["React", 'Redux', 'SVGs'],
        website: "",
        github: "",

    },
    {
        id: 1,
        name: "Pomodomo",
        description: "Custom Pomodoro timer with APIs",
        code:
            ["React", 'NextJS', 'Express'],
        website: "",
        github: "",

    },
    {
        id: 2,
        name: "DelayPI",
        description: "Service for registering future message sends.",
        code:
            ["Typescript"],
        website: "",
        github: "",
    },

]

function sendEmail() {
    window.open('mailto:alexyeagle@gmail.com,alex@yeagle.io?subject=Would love to chat!&body=Hey Alex I saw your website and...');
}






export default function Main() {



    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)
    // const dispatch = useDispatch();
    // const state = useSelector((state) => state);
    const [yOffset, setYOffset] = useState(0)
    const [totalHeight, setTotalHeight] = useState(0)

    // console.log("this is the height (start) ==> " + height)
    //     console.log("this is the width (start) ==> " + width)

    const [limiter, setLimiter] = useState(0)
    const [trans, setTrans] = useState(styles.left_container)

    const { createNoise2D } = require('simplex-noise');
    const noise2D = createNoise2D();
    const [open, setOpen] = useState(false)
    const [boopBoop, setBoopBoop] = useState(false)
    const [currCourse, setCurrCourse] = useState(0)
    const [runOnce, setRunOnce] = useState(false)
    const [scrollerState, setScrollerState] = useState(styles.scroller_inner_state1)
    const [border1, setBorder1] = useState(styles.corner_border_top_left)
    const [border2, setBorder2] = useState(styles.corner_border_top_right)
    const [border3, setBorder3] = useState(styles.corner_border_bottom_left)
    const [border4, setBorder4] = useState(styles.corner_border_bottom_right)
    const [flip, setFlip] = useState(false)
    const [icelandStart, setIcelandStart] = useState(45)


    const targetRef1 = useRef(null);
    const targetRef2 = useRef(null);
    const jobsRef = useRef(null);


    /*//////////////////
    random functions
    //////////////////*/

    const setBorderNeutral = () => {
        setBorder1(styles.corner_border_top_left)
        setBorder2(styles.corner_border_top_right)
        setBorder3(styles.corner_border_bottom_left)
        setBorder4(styles.corner_border_bottom_right)
    }
    const setBorderAfter = () => {
        setBorder1(styles.corner_border_top_left_stage1)
        setBorder2(styles.corner_border_top_right_stage1)
        setBorder3(styles.corner_border_bottom_left_stage1)
        setBorder4(styles.corner_border_bottom_right_stage1)
    }

    const determineFadeIn = (subVal, rate) => {
        let retVal = ((yOffset / width) * 100 - subVal * .1) / rate
        return retVal
    }

    const determineGlideIn = (start, end, special) => {
        let retVal = 0
        if (special == true) {
            retVal = Math.floor(yOffset / 100) * 10
        } else {
            retVal = (((yOffset / width) - start)) * 100
        }
        return retVal
    }

    setTimeout(() => {
        setIcelandStart(icelandStart + 1)
    }, [180000])

    /*//////////////////
    UseEffect functions
    //////////////////*/

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setBorderAfter()
            } else {
                setBorderNeutral()
            }
        }
        )

        observer.observe(targetRef1.current);
        observer.observe(targetRef2.current);

        return () => {
            observer.unobserve(targetRef1.current);
            observer.unobserve(targetRef2.current);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setScrollerState(styles.scroller_inner_state2)
        }, [7000])
        setTimeout(() => {
            setScrollerState(styles.scroller_inner_state1)
        }, [15000])
    }, [])

    useEffect(() => {
        updateHeight(window.scrollHeight)
        updateWidth(window.innerWidth)
        setTotalHeight(window.outerHeight)

        function handleWindowResize() {
            updateHeight(window.innerHeight)
            updateWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize)

        let userId = 20 //document.cookie.substr( document.cookie.indexOf("=")+1, document.cookie.indexOf("=") + 36)
        let timestamp = new Date().toISOString()

        if (limiter <= 3) {
            setLimiter(limiter + 1)
            LogActivity(userId, "loaded about page")
        }

        setTimeout(() => {
            setScrollerState(styles.scroller_inner_state2)
        }, [7000])
        setTimeout(() => {
            setScrollerState(styles.scroller_inner_state1)
        }, [15000])

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])


    useEffect(() => {
        window.addEventListener('scroll', function () {
            setYOffset(window.pageYOffset)
        })
    }, [yOffset, trans])

    const canvasRef = useRef(null);
    let count = 0
    let interVar = 200
    let xstore = 0
    let ystore = 0
    let positions = Array(3).fill([])

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'green';

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = document.body.scrollHeight;
        }
        window.addEventListener('resize', resizeCanvas)
        resizeCanvas();

        function animate() {

            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = 'rgba(31, 143, 156,0)'
            ctx.lineWidth = 1;

            for (let j = 0; j < positions.length; j++) {
                for (let i = 0; i < positions[j].length; i++) {
                    ctx.beginPath();
                    if (i > 1) {
                        ctx.lineWidth = Math.max(((i) / 80), 1);
                        ctx.strokeStyle = `rgba(70, 110, ${255 - i}, ${i * .01})`;

                        // calculate control point coordinates
                        let controlPoint1X = positions[j][i - 2].x + (interVar - i) / 5 * Math.cos(i * j);//+ (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3;
                        let controlPoint1Y = positions[j][i - 2].y - (interVar - i) / 5 * Math.sin(i * j);//+ (Math.random() -.5)*(100-i)* Math.sin(i*j);
                        let controlPoint2X = positions[j][i - 1].x + (interVar - i) / 5 * Math.sin(i * j);//+ (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3;
                        let controlPoint2Y = positions[j][i - 1].y + (interVar - i) / 5 * Math.cos(i * j);//+ (Math.random() -.5)*(100-i)* Math.sin(i*j);

                        ctx.moveTo(positions[j][i - 2].x, positions[j][i - 2].y);
                        ctx.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, positions[j][i].x, positions[j][i].y);
                        ctx.stroke();
                    }
                }
            }
        }

        document.addEventListener('mousemove', event => {
            for (let j = 0; j < positions.length; j++) {
                positions[j].push({ x: event.pageX + Math.sin(event.pageX), y: event.pageY + Math.sin(event.pageY) });
                xstore = event.pageX + Math.sin(event.pageX)
                ystore = event.pageY + Math.sin(event.pageY)
                if (positions[j].length >= interVar) positions[j].shift()
            }
        });

        const interval = setInterval(() => {
            for (let j = 0; j < positions.length; j++) {
                if (positions[j].length > 2) {
                    if (
                        Math.abs(
                            positions[j][positions.length - 1].x
                            - positions[j][positions.length - 2].x
                        ) < 400
                        &&
                        Math.abs(
                            positions[j][positions.length - 1].y
                            - positions[j][positions.length - 2].y
                        ) < 400) {
                        positions[j].shift()
                    }
                }
            }
        }, 30);

        animate();
        return () => clearInterval(interval);
    }, [open, boopBoop, currCourse]);

    //don't worry about this........
    if (Math.abs(yOffset - 3000) <= 100 && runOnce == 0) {
        setBoopBoop(!boopBoop)
        setRunOnce(1)
        setTimeout(() => {
            setRunOnce(0)
        }, [5000])
    }

    return (

        <div className={styles.master} id="top">
            <div className={styles.sticky_left} style={{ display: width < 992 ? "none" : "", zIndex: 20 }}>
                <Socials orientation={"column"} size={"1.7vw"} />
                <div style={{ width: "1px", height: "10vw", backgroundColor: "white", position: "relative", left: "50%" }} />
            </div>
            <BasicPageTop />
            <NavBar />
            <canvas ref={canvasRef} className={styles.canvas} style={{ height: { totalHeight } + "px" }} />



            <div className={styles.mini_master}>
                <Spacer height={width < 900 ? "5vw" : "5vw"} />
                <h1 className={styles.title}>Hey I'm <strong style={{ color: "rgb(0, 187, 224)" }}>Alex</strong> and I'm a...</h1>
                <Spacer height={width < 900 ? "5vw" : "5vw"} />


                <div style={{ position: "relative", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <div className={styles.image_container}>
                        <img src="/IMGassets/me2.png" className={styles.image} />
                    </div>
                    <div className={styles.scroller}><div className={scrollerState}><br /><br />&#x21d3;</div></div>
                    <h3 className={styles.image_text} style={{ fontSize: width < 900 ? "3vw" : "2.5vw" }}>
                        <Typing content={`Self-taught developer
                    <br/>Product enthusiast
                    <br/>Behavioral economist
                    <br/>Avid learner
                    <br/>and more...`} />
                    </h3>
                </div>



                <Spacer height={width < 900 ? "20vh" : "15vh"} />
                <div className={styles.section_header_wrapper}>
                    <h2 style={{ position: "relative", paddingRight: "2vw", fontSize: "2vw", color: "rgb(31, 143, 156)", fontWeight: 700 }}>01</h2>
                    <h2 id="resume">Resume </h2>
                    <div className={styles.section_header_line} />
                </div>

                <Spacer height={width < 900 ? "10vh" : "10vh"} />
                <div style={{ height: "auto", width: "50vw", margin: "0 auto", position: "relative" }}>
                    <div className={border1} />
                    <div className={border2} />
                    <div className={border3} />
                    <div className={border4} />
                    <div >
                        <h3 className={styles.vc} style={{}}>Worked on hypergrowth solutions backed by...</h3>
                        <h2 className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[1]), 0) + 'vw'), opacity: (determineFadeIn(100, .3) + '%') }}>2x Accel                </h2>
                        <h2 className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[2]), 0) + 'vw'), opacity: (determineFadeIn(125, .2) + '%') }}>1x FAANG                </h2>
                        <h2 className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[3]), 0) + 'vw'), opacity: (determineFadeIn(150, .2) + '%') }}>2x Seqouia                 </h2>
                        <h2 className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[4]), 0) + 'vw'), opacity: (determineFadeIn(175, .2) + '%') }}>1x 500 Startups                </h2>
                        <h2 className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[5]), 0) + 'vw'), opacity: (determineFadeIn(200, .2) + '%') }}>2x Y Combinator                </h2>
                        <h2 className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[6]), 0) + 'vw'), opacity: (determineFadeIn(225, .2) + '%') }} ref={targetRef1}>2x First Round Capital                </h2>
                    </div>
                </div>



                <Spacer height={width < 900 ? "10vh" : "10vh"} />
                <JobSection style={{ zIndex: -1 }} open={open} setOpen={setOpen} />



                <Spacer height={width < 900 ? "40vh" : "0vh"} />
                <Quotes style={{ position: "relative" }} ref={jobsRef} />



                <Spacer height={width < 900 ? "40vh" : "15vh"} />
                <div className={styles.section_header_wrapper}>
                    <h2 style={{ position: "relative", paddingRight: "2vw", fontSize: "2vw", color: "rgb(31, 143, 156)", fontWeight: 700 }}>02</h2>
                    <h2 id="projects">Projects </h2>
                    <div className={styles.section_header_line} />
                </div>

                <Spacer height={"5vh"} />
                <div className={styles.project_container_left}>
                    <img className={styles.project_image_left} src="newIMGassets/giftee.png" />

                    <div className={styles.project_image_blocker_left}></div>

                    <div className={styles.project_details_wrapper_left}>
                        <h5 className={styles.project_header_left} style={{ color: "inherit" }}> Featured Project</h5>

                        <h3 className={styles.project_header_left}> Giftee.io </h3>
                        <h4 className={styles.project_details_left}>  SSL encrypted fullstack application to make gift exchanges with friends and family easier. </h4>
                        <div className={styles.project_technicals_left}>
                            <h5>React</h5>
                            <h5>NextJS</h5>
                            <h5>Express</h5>
                            <h5>RDS</h5>
                            <h5>EC2</h5>
                        </div>
                    </div>
                </div>

                <Spacer height={"10vh"} />
                <div className={styles.project_container_right}>
                    <div className={styles.project_details_wrapper_right}>
                        <h5 className={styles.project_header_right} style={{ color: "inherit" }}> Featured Project</h5>

                        <h3 className={styles.project_header_right}> Meta Data Engineering </h3>
                        <h4 className={styles.project_details_right}> Created 10+ Dataswarm (Meta's version of Apache Airflow) pipelines to collect system/task data to power an ecosystem of dashboards reporting on bug health and engineering throughput.</h4>
                        <div className={styles.project_technicals_right}>
                            <h5>Presto</h5>
                            <h5>Python</h5>
                            <h5>PHP</h5>
                            <h5>Dataswarm</h5>
                            <h5>Hive</h5>
                        </div>
                    </div>
                    <img className={styles.project_image_right} src="newIMGassets/dataswarm.png" />
                    <div className={styles.project_image_blocker_right}></div>
                </div>

                <Spacer height={"10vh"} />
                <div className={styles.project_container_left}>
                    <img className={styles.project_image_left} src="newIMGassets/fillbot.png" />
                    <div className={styles.project_image_blocker_left}></div>
                    <div className={styles.project_details_wrapper_left}>
                        <h5 className={styles.project_header_left} style={{ color: "inherit" }}> Featured Project</h5>

                        <h3 className={styles.project_header_left}> Fillbot </h3>
                        <h4 className={styles.project_details_left}> Chrome extension to fill, track, and organize unique versions of your main email when signing up for services. </h4>
                        <div className={styles.project_technicals_left}>
                            <h5>React</h5>
                            <h5>Typescript</h5>
                            <h5>Chrome APIs</h5>
                            <h5>Webpacks</h5>

                        </div>
                    </div>
                </div>

                {/* <Spacer height={"10vh"} />
                <div className={styles.project_container_left}>
                    <img className={styles.project_image_left} src="newIMGassets/personal.png" />
                    <div className={styles.project_image_blocker_left}></div>
                    <div className={styles.project_details_wrapper_left}>
                        <h3 className={styles.project_header_left}> Personal Site v1 </h3>
                        <h4 className={styles.project_details_left}> Version one of personal website focused on responsive animation and stateful components.  </h4>
                        <div className={styles.project_technicals_left}>
                            <h5>React</h5>
                            <h5>NextJS</h5>
                            <h5>Express</h5>
                            <h5>RDS</h5>
                            <h5>EC2</h5>
                        </div>
                    </div>
                </div> */}

                {/* <Spacer height={"10vh"} />
                <div className={styles.project_container_right}>
                    <div className={styles.project_details_wrapper_right}>
                        <h3 className={styles.project_header_right}> Pomodomo (Project 1) </h3>
                        <h4 className={styles.project_details_right}>  A web-hosted customizable pomodoro timer with built in APIs for dad jokes and celebratory gifs during break sessions.  </h4>
                        <div className={styles.project_technicals_right}>
                            <h5>React</h5>
                            <h5>Redux</h5>
                            <h5>NextJS</h5>
                            <h5>Axios</h5>
                            <h5>SVGs</h5>
                        </div>
                    </div>
                    <img className={styles.project_image_right} src="newIMGassets/pomodomo.png" />
                    <div className={styles.project_image_blocker_right}></div>
                </div> */}


                <Spacer height={"10vh"} />
                <div className={styles.other_projects}>
                    {other_projects.map((units, index) => (
                        <div key={units.id} className={styles.other_projects_unit_container}>
                            <h3 style={{ position: "relative", fontSize: "2vw", color: "rgb(0, 187, 224)", top: "0%" }}>{units.name}</h3>
                            <div style={{ position: "relative", fontSize: "1.3vw", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                                {units.code.map((item) => (
                                    <h5 style={{ position: "relative", fontSize: "1.3vw", display: "flex", flexDirection: "row", flexWrap: "wrap", padding: ".5vw" }}>
                                        {item}
                                    </h5>
                                ))}
                            </div>
                            <Spacer height=".5vw" />
                            <h5 style={{ position: "relative", fontSize: "1.3vw", top: "8%" }}>{units.description}</h5>
                            <Spacer height=".5vw" />
                            <div style={{ position: "relative", display: "flex", flexDirection: "row", justifyContent: "right", padding: "2vw" }}>
                                <div style={{ paddingRight: "1vw" }}> <a href={units.website} target="_blank"><icons.FaCodeBranch style={{ fill: "white" }} /></a></div>
                                <div ><a href={units.github} target="_blank"><icons.FaGithub style={{ fill: "white" }} /></a></div>
                            </div>

                        </div>
                    )
                    )}
                </div>




                <Spacer height={"15vh"} />
                <div style={{ position: "relative" }} >
                    <div style={{ display: width < 900 ? "none" : "" }}>
                        <h3 className={styles.image_text_center} style={{ top: "45%", fontWeight: 200 }}>I'm also a drone videographer!</h3>
                        <div className={styles.video} onHover={() => setBoopBoop(!boopBoop)}>
                            <iframe className={styles.video_inner} style={{ pointerEvents: "none", borderRadius: "40px" }} width={width} height={width >= 2000 ? width * .375 : width * .398} src={`https://www.youtube.com/embed/vNF94UrluYg?autoplay=1&mute=1&controls=0&vq=highres&modestbranding=1&start=${icelandStart}`} align-content={"center"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>



                <Spacer height={"15vw"} />
                <div className={styles.section_header_wrapper}>
                    <h2 style={{ position: "relative", paddingRight: "2vw", fontSize: "2vw", color: "rgb(31, 143, 156)", fontWeight: 700 }}>03</h2>
                    <h2 id="contact">Contact </h2>
                    <div className={styles.section_header_line}></div>
                </div>

                <Spacer height={"10vw"} />
                <div style={{ height: "auto", width: "50vw", margin: "0 auto", position: "relative" }}>

                    <div className={border1} />
                    <div className={border2} />
                    <div className={border3} />
                    <div className={border4} />
                    <div id="contact" style={{ zIndex: "100", position: "relative" }}>
                        <div style={{ zIndex: "10", position: "relative" }}>
                            <Socials size={"3vw"} loc={"center"} style={{ zIndex: "100", position: "relative" }} />
                            <h3 ref={targetRef2} className={styles.contact_element}>+1 (559) 451 6174</h3>
                            <h3 className={styles.contact_element} onClick={sendEmail}  >alexyeagle@gmail.com</h3>
                            <h3 className={styles.contact_element} onClick={sendEmail}  >alex@yeagle.io</h3>
                            <h3 className={styles.contact_element}>SF, CA</h3>
                            <br></br>
                        </div>
                    </div>
                    <a><NavButton buttonName={"Get in touch"} handleClick={sendEmail} style={{ zIndex: "-1", position: "relative" }} /></a>
                </div>


                <Spacer height={"15vw"} />
                <div style={{ zIndex: "100", position: "relative" }}>
                    <PageBot />
                </div>
            </div>
        </div>

    )
}
