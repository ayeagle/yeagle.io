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
import NavButton from "@components/bio/NavButton";
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

let glideArray = Array(10)
let startVal = .4
let increment = .09

for (let i = 0; i < glideArray.length; i++) {
    glideArray[i] = startVal + increment * (i)
}


let master_backgroundColor = 'rgb(20, 23, 41)'
let master_color = 'rgb(197, 197, 197)'

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


    // const noise =  noise2D

    function sendEmail() {
        window.open('mailto:alexyeagle@gmail.com,alex@yeagle.io?subject=Would love to chat!&body=Hey Alex I saw your website and...');
    }



    useEffect(() => {
        // Update the height and width state when the component is mounted
        updateHeight(window.scrollHeight)
        updateWidth(window.innerWidth)
        // setTotalHeight(document.body.scrollHeight)
        setTotalHeight(window.outerWidth)

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


    const determineGlideIn = (start, end) => {
        let retVal = (((yOffset / width) - start)) * 100

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
    let interVar = 100


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

            // ctx.lineCap = "round";

            // for (let j = 0; j < positions.length ; j++) {
            //     for (let i = 0; i < positions[j].length; i++) {
            //         ctx.beginPath();
            //         if (i > 0) {
            //             ctx.lineWidth = Math.max(((i)/20), 1)
            //             ctx.strokeStyle = `rgba(31, 143, ${156 - i}, ${i*.01})`

            //             ctx.bezierCurveTo(positions[j][i - 1].x + (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3, positions[j][i - 1].y) + (Math.random() -.5)*(100-i)* Math.sin(i*j);

            //         } else {
            //             ctx.bezierCurveTo(positions[j][i].x, positions[j][i].y);

            //         }
            //         ctx.lineTo(positions[j][i].x, positions[j][i].y);
            //         ctx.stroke();


            //     }
            // }

            for (let j = 0; j < positions.length; j++) {
                for (let i = 0; i < positions[j].length; i++) {
                    ctx.beginPath();
                    if (i > 1) {
                        ctx.lineWidth = Math.max(((i) / 20), 1);
                        ctx.strokeStyle = `rgba(31, 143, ${156 - i}, ${i * .01})`;

                        // calculate control point coordinates
                        let controlPoint1X = positions[j][i - 2].x + (interVar - i) / 2 * Math.sin(i * j);//+ (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3;
                        let controlPoint1Y = positions[j][i - 2].y - (interVar - i) / 2 * Math.cos(i * j);//+ (Math.random() -.5)*(100-i)* Math.sin(i*j);
                        let controlPoint2X = positions[j][i - 1].x + (interVar - i) / 2 * Math.cos(i * j);//+ (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3;
                        let controlPoint2Y = positions[j][i - 1].y + (interVar - i) / 2 * Math.sin(i * j);//+ (Math.random() -.5)*(100-i)* Math.sin(i*j);

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

                // console.log("this is the xy store")
                // console.log(xstore)
                // console.log(ystore)
                // let x = event.clientX;
                // let y = event.clientY;
                // let angle = noise2D(x / 100, y / 100) * Math.PI * j ;
                // let offsetX = Math.cos(angle) * 10;
                // let offsetY = Math.sin(angle) * 10;
                // positions[j].push({ x: x + offsetX, y: y + offsetY });
                if (positions[j].length >= interVar) positions[j].shift()
                // clearTimeout(timeout);
                // timeout = setTimeout(deleteLines(), 100);
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
                            positions[j][positions.length - 2].x
                            - positions[j][positions.length - 3].x
                        ) < 400
                        &&
                        Math.abs(
                            positions[j][positions.length - 2].y
                            - positions[j][positions.length - 3].y
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
        


    }, []);

    // const deleteLines = () => {




    return (

        <div className={styles.master}>
            <Flood />
            <BasicPageTop />
            <NavBar />
            <canvas ref={canvasRef} className={styles.canvas} style={{ height: { totalHeight } + "px" }} />

            <div className={styles.image_container}>
                <img src="/IMGassets/me2.png" className={styles.image} />
            </div>
            <div className={styles.image_text}>
                {/* <Typing content={"Self-taught developer and product enthusiast with a passion for building customer-obsessed solutions."} /> */}
                <Typing content={`Self-taught developer
                    <br/>Product enthusiast
                    <br/>Builder`} />
            </div>


            {/* <Spacer height={"5vw"}/> */}
            {/* <a href="/resume"><NavButton buttonName={"See my work"} /></a> */}
            {/* <SVGSpacers type="top" num="1" width={width} />
            <SVGSpacers type="bot" num="4" width={width} /> */}
            {/* <div style={{ height: "15vh", fill: "black", zIndex: 500 }} /> */}

            <Spacer />


            <div className={styles.left_right_wrapper}>
                <div className={styles.left_container}>
                    <h4 style={{ padding: "7vw", fontSize: "4vw", left: (Math.min(determineGlideIn(.1) * 6, 3) + 'vw') }}
                        className={styles.left_container}

                    // className={yOffset >= 500 ? styles.left_container_after : styles.left_container}

                    >  A broad range of experiences across product, operations, analytics, and engineering has given my development work diversity and perspective.
                    </h4>
                </div>
                <div className={styles.right_container}>
                    <a href="/portfolio"><NavButton buttonName={"My Projects"} /></a>
                    <Spacer />
                    <a href="/resume"><NavButton buttonName={"My Resume"} /></a>
                </div>
            </div>
            <Spacer height={"5vh"} />

            <div style={{ position: "relative", textAlign: "center" }} id="resume">

                <div className={styles.vc} style={{ fontSize: "4vw", right: (Math.min(determineGlideIn(.6), 0) + 'vw') }}>Worked on hypergrowth solutions backed by...</div>
                <div className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[1]), 0) + 'vw') }}>2x Accel                </div>
                <div className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[2]), 0) + 'vw') }}>1x FAANG                </div>
                <div className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[3]), 0) + 'vw') }}>2x Seqouia                 </div>
                <div className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[4]), 0) + 'vw') }}>1x 500 Startups                </div>
                <div className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[5]), 0) + 'vw') }}>2x Y Combinator                </div>
                <div className={styles.vc} style={{ right: (Math.min(determineGlideIn(glideArray[6]), 0) + 'vw') }}>2x First Round Capital                </div>

            </div>
            <Spacer height={"5vh"} />

            <JobSection />
            <Spacer />

            {/* <h4 style={{ padding: "7vw", fontSize: "4vw" }}> Hear what others have to say: </h4> */}
            <Quotes />
            <Spacer height={"10vh"} />
            {/* <SVGSpacers type="top" num="2" width={width} />
            <SVGSpacers type="bot" num="3" width={width} /> */}
            <Spacer height={"5vw"} />
            <div style={{ position: "relative" }}>
                <div >

                    <div className={styles.image_text_center} style={{ top: "26vw" }}>I'm also a drone videographer!</div>
                    {/* <div height={600}> */}
                    <Iceland width={width} height={height} className={styles.video} style={{ pointerEvents: "none" }} />
                    {/* </div> */}
                </div>
            </div>
            <Spacer height={"5vw"} />
            <Spacer height={"10vw"} />

            <div style={{zIndex: "1"}}>
                <div>
                    <Socials size={"3vw"} loc={"center"} />
                    <div className={styles.contact_element}>+1 (559) 451 6174</div>
                    <div className={styles.contact_element} onClick={sendEmail}  >alexyeagle@gmail.com</div>
                    <div className={styles.contact_element} onClick={sendEmail}  >alex@yeagle.io</div>
                    <div className={styles.contact_element}>SF, CA</div>
                    <br></br>
                    <a><NavButton buttonName={"Get in touch"} handleClick={sendEmail} /></a>
                </div>
            </div>


            <Spacer />
            {/* <SVGSpacers type="top" num="2" width={width} /> */}
            <div className={styles.box}>
                <PageBot />
            </div>
        </div>

    )
}
