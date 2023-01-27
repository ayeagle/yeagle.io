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
import Typing from "@components/bio/Typing";
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
import Socials from "@components/bio/Socials";




/////////////////////////////
/*
Specifically NOT component-itized for numerous reasons
sorry




*/
/////////////////////////////


let glideArray = Array(10)
let startVal = .4
let increment = .09

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
    const [borderStage, setBorderStage] = useState('_stage1')
    const [border1, setBorder1] = useState(styles.corner_border_top_left)
    const [border2, setBorder2] = useState(styles.corner_border_top_right)
    const [border3, setBorder3] = useState(styles.corner_border_bottom_left)
    const [border4, setBorder4] = useState(styles.corner_border_bottom_right)
    const [flip, setFlip] = useState(false)


    const targetRef1 = useRef(null);
    const targetRef2 = useRef(null);


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
    console.log("flip value is normal at : " + flip)
    // const borderChange = () => {
    //     console.log("border change was invoked")
    //     console.log("flip value is... + " + flip)

    //     // setFlip(!flip)
    //     if (flip) {
    //         setBorder1(styles.corner_border_top_left_stage1)
    //         setBorder2(styles.corner_border_top_right_stage1)
    //         setBorder3(styles.corner_border_bottom_left_stage1)
    //         setBorder4(styles.corner_border_bottom_right_stage1)
    //     } else {
    //         setBorder1(styles.corner_border_top_left)
    //         setBorder2(styles.corner_border_top_right)
    //         setBorder3(styles.corner_border_bottom_left)
    //         setBorder4(styles.corner_border_bottom_right)

    //     }
    //     setFlip(!flip)

    // }

    // useEffect(() => {
    //     console.log("this is th y offset")
    //     console.log(yOffset)



    // }, [yOffset])


    // const noise =  noise2D

    function sendEmail() {
        window.open('mailto:alexyeagle@gmail.com,alex@yeagle.io?subject=Would love to chat!&body=Hey Alex I saw your website and...');
    }

    useEffect(() => {
        setTimeout(() => {
            setScrollerState(styles.scroller_inner_state2)
        }, [7000])
        setTimeout(() => {
            setScrollerState(styles.scroller_inner_state1)
        }, [15000])
    }, [])


    useEffect(() => {
        // Update the height and width state when the component is mounted
        updateHeight(window.scrollHeight)
        updateWidth(window.innerWidth)
        // setTotalHeight(document.body.scrollHeight)
        setTotalHeight(window.outerHeight)

        console.log("this is the height (useeffect) ==> " + height)
        console.log("this is the width (useeffect) ==> " + width)


        function handleWindowResize() {
            // Update the height and width state when the window is resized
            updateHeight(window.innerHeight)
            updateWidth(window.innerWidth)
        }

        // Add the event listener
        window.addEventListener('resize', handleWindowResize)

        let userId = 20 //document.cookie.substr( document.cookie.indexOf("=")+1, document.cookie.indexOf("=") + 36)
        // let activity = "loading the about page"
        let timestamp = new Date().toISOString()

        if (limiter <= 3) {
            setLimiter(limiter + 1)
            LogActivity(userId, "loaded about page")
        }






        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    const [temp, setTemp] = useState('')

    const determineFadeIn = (subVal, rate) => {
        let retVal = ((yOffset / width) * 100 - subVal * .1) / rate
        // console.log(retVal)
        return retVal
    }


    const determineGlideIn = (start, end, special) => {
        let retVal = 0
        if (special == true) {
            retVal = Math.floor(yOffset / 100) * 10
        } else {
            retVal = (((yOffset / width) - start)) * 100
        }
        // console.log(retVal)
        return retVal
    }

    useEffect(() => {
        window.addEventListener('scroll', function () {
            setYOffset(window.pageYOffset)
        })
    }, [yOffset, trans])

    useEffect(() => {

        // setTemp(determineGlideIn(300, 20))

        // if (yOffset >= 300) {
        //     // setTrans(styles.left_container_after)
        //     // setTemp('A broad range of experiences across product, operations, analytics, and engineering has given my development work diversity and perspective.')
        //     console.log("AAAFFTTTTEERRRR")
        //     console.log(temp)

        // } else {
        //     // setTrans(styles.left_container)
        //     console.log("BBEEEERFFFFOOOOORRREEE")
        //     // setTemp('')
        // }
    }, [yOffset])

    // console.log("this is the y : " + yOffset)


    const canvasRef = useRef(null);
    let count = 0
    let interVar = 200


    let xstore = 0
    let ystore = 0

    let positions = Array(3).fill([])

    const outsideResizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = document.body.scrollHeight;
    }


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
                // console.log("this is the positions object data")
                // console.log(positions)
                if (positions[j].length > 2) {
                    // console.log(xstore)
                    // console.log(positions[j][positions.length - 1].x)
                    // console.log(ystore)
                    // console.log(positions[j][positions.length - 1].y)
                    // console.log(positions[j])

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

                    // if (
                    //     Math.abs(
                    //         positions[j][0].x
                    //         - positions[j][1].x
                    //     ) < 200
                    //     &&
                    //     Math.abs(
                    //         positions[j][0].y
                    //         - positions[j][1].y
                    //     ) < 200) {
                    //     positions[j].shift()
                    // }
                }
            }
        }, 30);




        animate();
        return () => clearInterval(interval);



    }, [open, boopBoop, currCourse]);

    // const deleteLines = () => {
    if (Math.abs(yOffset - 3000) <= 100 && runOnce == 0) {
        setBoopBoop(!boopBoop)
        setRunOnce(1)
        setTimeout(() => {
            setRunOnce(0)
        }, [5000])
    }

    console.log(yOffset)

    return (

        <div className={styles.master}>
            <BasicPageTop />
            <NavBar />
            <canvas ref={canvasRef} className={styles.canvas} style={{ height: { totalHeight } + "px" }} />

            <div className={styles.mini_master}>

                <h1 className={styles.title}>Hey I'm <strong style={{ color: "rgb(100, 157, 224)" }}>Alex</strong> and I'm a...</h1>
                <Spacer height="5vw" />

                <div style={{ position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

                    <div className={styles.image_container}>
                        <img src="/IMGassets/me2.png" className={styles.image} />
                    </div>
                    <div className={styles.scroller}><div className={scrollerState}><br /><br />&#x21d3;</div></div>
                    <h3 className={styles.image_text}>
                        {/* <Typing content={"Self-taught developer and product enthusiast with a passion for building customer-obsessed solutions."} /> */}
                        <Typing content={`Self-taught developer
                    <br/>Product enthusiast
                    <br/>Behavioral economist
                    <br/>Avid learner
                    <br/>Builder
                    <br/>and more...`} />
                    </h3>
                </div>
                <Spacer />

                <div className={styles.left_right_wrapper}>

                    <div className={styles.left_container}>
                        <h3 style={{ padding: "7vw", opacity: (determineFadeIn(0, .3) + '%') }}
                            className={styles.left_container}
                        >  A broad range of experiences across product, operations, analytics, and engineering has given my development work diversity and perspective.
                        </h3>
                    </div>
                    <div className={styles.right_container}>
                        <a href="#resume" style={{ opacity: (determineFadeIn(0, .3) + '%'), left: "-7vw", position: "relative" }}><NavButton buttonName={"Resume"} /></a>
                        <Spacer height={"5vw"} />
                        <a href="/portfolio" style={{ opacity: (determineFadeIn(75, .2) + '%'), left: "-7vw", position: "relative" }}><NavButton buttonName={"Projects"} /></a>
                        <Spacer height={"5vw"} />
                        <a href="#resume" style={{ opacity: (determineFadeIn(150, .1) + '%'), left: "-7vw", position: "relative" }} ><NavButton buttonName={"Contact"} /></a>

                    </div>
                </div>
                <Spacer height={"20vh"} />
                <h1>Resume</h1>
        <Spacer height={"5vh"} />
                <div style={{ position: "relative", textAlign: "center" }} id="resume">
                    <div className={border1} />
                    <div className={border2} />
                    <div className={border3} />
                    <div className={border4} />




                    <div >
                        <h3 ref={targetRef1} className={styles.vc} style={{ right: (Math.min(determineGlideIn(.3), 0) + 'vw') }}>Worked on hypergrowth solutions backed by...</h3>
                        <h2 className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[1]), 0) + 'vw') }}>2x Accel                </h2>
                        <h2 className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[2]), 0) + 'vw') }}>1x FAANG                </h2>
                        <h2 className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[3]), 0) + 'vw') }}>2x Seqouia                 </h2>
                        <h2 className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[4]), 0) + 'vw') }}>1x 500 Startups                </h2>
                        <h2 className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[5]), 0) + 'vw') }}>2x Y Combinator                </h2>
                        <h2 className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[6]), 0) + 'vw') }}>2x First Round Capital                </h2>

                    </div>
                </div>
                <Spacer height={"10vh"} />

                <JobSection style={{ zIndex: -1 }} open={open} setOpen={setOpen} />
                <Spacer height={"10vh"} />
        <h1>Projects</h1>
        <Spacer height={"5vh"} />

                <div className={styles.project_container_left}>
                    <img className={styles.project_image_left} src="newIMGassets/giftee.png" />

                    <div className={styles.project_image_blocker_left}></div>

                    <div className={styles.project_details_wrapper_left}>
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
                        <h3 className={styles.project_header_right}> Pomodomo </h3>

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

                </div>
                <Spacer height={"10vh"} />

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
                            <h5>EC2</h5>                        </div>


                    </div>
                </div>
                <Spacer height={"15vh"} />
                <h1>Feedback</h1>
        <Spacer height={"5vh"} />
                <Quotes style={{ position: "relative" }} />
                <Spacer height={"10vh"} />
                {/* <SVGSpacers type="top" num="2" width={width} />
            <SVGSpacers type="bot" num="3" width={width} /> */}
                <Spacer height={"5vw"} />
                <div style={{ position: "relative" }} >
                    <div >

                        <h3 className={styles.image_text_center} style={{ top: "45%", fontWeight: 200 }}>I'm also a drone videographer!</h3>
                        {/* <div height={600}> */}
                        {/* <Iceland width={width} height={height} className={styles.video} style={{ pointerEvents: "none" }} /> */}
                        {/* </div> */}
                        <div className={styles.video} onHover={() => setBoopBoop(!boopBoop)}>
                            <iframe className={styles.video_inner} style={{ pointerEvents: "none", borderRadius: "40px" }} width={width} height={width >= 2000 ? width * .375 : width * .45} src="https://www.youtube.com/embed/vNF94UrluYg?autoplay=1&mute=1&controls=0&vq=highres&modestbranding=1&start=45" align-content={"center"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <Spacer height={"5vw"} />
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


                <Spacer />
                {/* <SVGSpacers type="top" num="2" width={width} /> */}
                <div style={{ zIndex: "100", position: "relative" }}>
                    <PageBot />
                </div>
            </div>
        </div>

    )
}
