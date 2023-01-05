import Waves from "@components/pomodomo/Waves";
import Break from '@components/pomodomo/Break';
import Button from "@components/pomodomo/Button";
import NavBar from "@components/bio/navbar";
import BasicPageTop from "@components/bio/BasicPageTop";
import BasicPageBottom from "@components/bio/BasicPageBottom";
import SVGSpacers from "@components/bio/SVGSpacers";
import Resizer from "@components/functional/Resizer";
import { useEffect, useState } from "react";
import PNGSpacers from "@components/bio/PNGSpacers";
import styles from './master.module.css';
import Iceland from "@components/bio/Iceland";
import NavButton from "@components/bio/NavButton";
import Carousel from "@components/bio/Carousel";
import Typing from "@components/bio/Typing";
import Flood from "@components/bio/Flood";
import Flood2 from "@components/bio/Flood2";
import { useSelector, useDispatch } from "react-redux";
import Spacer from "@components/bio/Spacer";
import axios from "node_modules/axios/index";
import LogActivity from "@components/DBcomponents/LogActivity";

export default function About() {



    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    // console.log("this is the height (start) ==> " + height)
    //     console.log("this is the width (start) ==> " + width)

    const [limiter, setLimiter] = useState(0)


    // if (limiter <= 3) {
    //     setLimiter(limiter + 1)

    //     axios.get('http://ec2-44-210-111-39.compute-1.amazonaws.com:3000/')
    //         .then(response => {
    //             console.log(response.data); // 'Hello World!'
    //             console.log("the request was successful")
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             console.log("the request was NOT NOT NOT successful")
    //         });
    // }

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

        // console.log("CLIENT SIDE: session id value is " +userId + " and the type of this is " + typeof(userId))
        // console.log("CLIENT SIDE: activity value is " +activity + " and the type of this is " + typeof(activity))
        // console.log("CLIENT SIDE: timestamp value is " +timestamp + " and the type of this is " + typeof(timestamp))



        if (limiter <=3 ) {
            setLimiter(limiter + 1)
            LogActivity(userId, "loaded about page")
        }







        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])



    return (
        <div className={styles.master}>
            <Flood />
            <BasicPageTop />
            <NavBar />
            <SVGSpacers type="bot" num="2" width={width} />
            <div style={{ position: "relative" }}>
                <img src="/IMGassets/me2.png" className={styles.image} />
                <div className={styles.image_text}><Typing content={"Self-taught developer and product enthusiast with a passion for building functional and valuable customer-obsessed solutions."} /></div>
            </div>
            <SVGSpacers type="top" num="1" width={width} />
            <SVGSpacers type="bot" num="2" width={width} />
            <Spacer />
            <div style={{ position: "relative", height: "30em", width: "100%" }}>
                <Carousel className={styles.caro} />
            </div>
            <a href="/resume"><NavButton buttonName={"See my work"} /></a>
            <Spacer />
            <SVGSpacers type="top" num="1" width={width} />
            <SVGSpacers type="bot" num="4" width={width} />
            <div style={{ height: "15vh", fill: "black", zIndex: 500 }} />
            <h4 style={{ padding: "7vw", fontSize: "5vw" }}> A broad range of experiences across product, operations, analytics, and engineering
                has given my product work diversity and perspective. <br></br><br></br>
                <a href="/portfolio"><NavButton buttonName={"See my Projects"} /></a>
            </h4>
            <Spacer />
            <SVGSpacers type="top" num="2" width={width} />
            <SVGSpacers type="bot" num="3" width={width} />
            <Spacer />
            <h3>I'm also a drone videographer!</h3>
            {/* <div height={600}> */}
            <Iceland width={width} height={height} className={styles.video} />
            {/* </div> */}
            <Spacer />
            <SVGSpacers type="top" num="2" width={width} />
            <div className={styles.box}>
                <BasicPageBottom />
            </div>


        </div>
    )
}
