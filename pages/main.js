import Waves from "@components/pomodomo/Waves";
import Break from '@components/pomodomo/Break';
import Button from "@components/pomodomo/Button";
import NavBar from "@components/new/Navbar";
import BasicPageTop from "@components/bio/BasicPageTop";
import SVGSpacers from "@components/bio/SVGSpacers";
import Resizer from "@components/functional/Resizer";
import { useEffect, useState } from "react";
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



let master_backgroundColor = 'rgb(20, 23, 41)'
let master_color = 'rgb(197, 197, 197)'

export default function Main() {



    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)
    // const dispatch = useDispatch();
    // const state = useSelector((state) => state);
    const [yOffset, setYOffset] = useState(0)

    // console.log("this is the height (start) ==> " + height)
    //     console.log("this is the width (start) ==> " + width)

    const [limiter, setLimiter] = useState(0)
    const [trans, setTrans] = useState(styles.left_container)

    useEffect(() => {
        // Update the height and width state when the component is mounted
        updateHeight(window.innerHeight)
        updateWidth(window.innerWidth)
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
        let retVal = (((yOffset/width) - start)) * 100

        console.log(retVal)
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

    console.log("this is the y : " + yOffset)


    return (
        <div className={styles.master}>
            <Flood />
            <BasicPageTop />
            <NavBar />
            <div className={styles.image_container}>
                <img src="/IMGassets/me2.png" className={styles.image} />
            </div>
            <div className={styles.image_text}>
                {/* <Typing content={"Self-taught developer and product enthusiast with a passion for building customer-obsessed solutions."} /> */}
                <Typing content={`Self-taught developer
                    <br/>Product enthusiast
                    <br/>Builder`} />
            </div>

            

            <Spacer height={"15vh"} />

            {/* <h4 style={{ padding: "7vw", fontSize: "4vw" }}> Hear what others have to say: </h4> */}
            <Quotes />
            <Spacer height={"10vh"} />

            {/* <Spacer height={"5vw"}/> */}
            {/* <a href="/resume"><NavButton buttonName={"See my work"} /></a> */}
            <SVGSpacers type="top" num="1" width={width} />
            <SVGSpacers type="bot" num="4" width={width} />
            <div style={{ height: "15vh", fill: "black", zIndex: 500 }} />
            <div className={styles.left_right_wrapper}>
                <div className={styles.left_container}>
                    <h4 style={{ padding: "7vw", fontSize: "4vw", left: (Math.min(determineGlideIn(.7), 3) + 'vw') }}
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
            <Spacer />

            <div style={{position: "relative", textAlign: "right"}}>

                    <div  style={{position: "relative", right: (Math.min(determineGlideIn(1.1), 3) + 'vw') }}>Worked on hypergrowth solutions <br/>backed by...</div>
                    <div  style={{position: "relative", right: (Math.min(determineGlideIn(1.15), 3) + 'vw') }}>2x Accel                </div>

                    <div  style={{position: "relative", right: (Math.min(determineGlideIn(1.2), 3) + 'vw') }}>1x FAANG                </div>
                    <div  style={{position: "relative", right: (Math.min(determineGlideIn(1.25), 3) + 'vw') }}>2x Seqouia                 </div>

                    <div  style={{position: "relative", right: (Math.min(determineGlideIn(1.3), 3) + 'vw') }}>1x 500 Startups                </div>

                    <div  style={{position: "relative", right: (Math.min(determineGlideIn(1.35), 3) + 'vw') }}>2x Y Combinator                </div>

                    <div  style={{position: "relative", right: (Math.min(determineGlideIn(1.45), 3) + 'vw') }}>2x First Round Capital                </div>

                </div>
            <Spacer />
            <SVGSpacers type="top" num="2" width={width} />
            <SVGSpacers type="bot" num="3" width={width} />
            <Spacer height={"5vw"} />

            <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: "2vh" }}>

                    <div className={styles.image_text_center} style={{ top: "26vw" }}>I'm also a drone videographer!</div>
                    {/* <div height={600}> */}
                    <Iceland width={width} height={height} className={styles.video} />
                    {/* </div> */}
                </div>
            </div>
            <Spacer height={"50vw"} />

            <Spacer />
            <SVGSpacers type="top" num="2" width={width} />
            <div className={styles.box}>
                <PageBot />
            </div>
        </div>
    )
}
