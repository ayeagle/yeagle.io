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
import Waves from "@components/pomodomo/Waves";
import styles2 from '/components/pomodomo/Footer.module.css'
import Flood from "@components/bio/Flood";


export default function Portfolio() {

    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)

    // console.log("this is the height (start) ==> " + height)
    //     console.log("this is the width (start) ==> " + width)


    useEffect(() => {
        // Update the height and width state when the component is mounted
        updateHeight(document.documentElement.scrollHeight)
        updateWidth(document.documentElement.scrollWidth)
        console.log("this is the height (useeffect) ==> " + height)
        console.log("this is the width (useeffect) ==> " + width)

        function handleWindowResize() {
            // Update the height and width state when the window is resized
            updateHeight(document.documentElement.scrollHeight)
            updateWidth(document.documentElement.scrollWidth)
        }

        // Add the event listener
        window.addEventListener('resize', handleWindowResize)

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])



    return (
        <div className={styles.master}>
                        <Flood/>

            <BasicPageTop />
            <NavBar />
            <SVGSpacers type="bot" num="2" width={width} />
            <div style={{position:"relative"}}>

            <div style={{ height: "60vh", fill: "black", zIndex: 500}} />



            {/* <div className={styles.app_module_center_wrapper} style={{ height: "200px", top: "30%", fill: "none" }}> */}
            {/* <div className={styles.app_module_center_wrapper} style={{ top: "30%"}}/> */}
           <a href="/pomodomo">
                <div className={styles.hov_catch}>
                    <visualViewport className={styles.app_module_center} style={{ top: "25%" }}>
                        {/* <Waves h={400/4} w={800/4}> */}
                        <Waves h={200} w={1000} />
                        <div className={styles.app_module_center_title}>P<img src="/tomato2.png" className={styles2.tomat} />m<img src="/tomato2.png" className={styles2.tomat} />d<img src="/tomato2.png" className={styles2.tomat} />m<img src="/tomato2.png" className={styles2.tomat} /></div>
                    </visualViewport>
                    {/* </div> */}
                </div>
            </a>

            {/* <div className={styles.app_module_center_wrapper} style={{ height: "200px", top: "50%", fill: "none" }} /> */}
            <a href="/about">
                <div className={styles.hov_catch}>
                    <visualViewport className={styles.app_module_center} style={{ top: "55%", fill: "none" }}>
                        <iframe style={{ width: "1000px", height: "600px", marginTop: "-2vh" }} className={styles.app_module_center} src="https://www.youtube.com/embed/vNF94UrluYg?autoplay=1&mute=1&controls=0&vq=highres&modestbranding=1&start=42" align-content={"center"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div className={styles.app_module_center_title} style={{ fontWeight: 600, color: "white" }}>Personal Site</div>
                    </visualViewport>
                </div>
            </a>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>

            <SVGSpacers type="top" num="2" width={width} />
            <div className={styles.box}>
                <BasicPageBottom />
            </div>


        </div>
    )
}
