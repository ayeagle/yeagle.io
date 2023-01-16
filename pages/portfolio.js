
import NavBar from "@components/bio/navbar";
import BasicPageTop from "@components/bio/BasicPageTop";
import BasicPageBottom from "@components/bio/BasicPageBottom";
import SVGSpacers from "@components/bio/SVGSpacers";
import Resizer from "@components/functional/Resizer";
import { useEffect, useState } from "react";
import PNGSpacers from "@components/bio/PNGSpacers";
import styles from './master.module.css';
import Waves from "@components/pomodomo/Waves";
import styles2 from '/components/pomodomo/Footer.module.css'
import Flood from "@components/bio/Flood";
import Spacer from "@components/bio/Spacer";
import LogActivity from "@components/DBcomponents/LogActivity";
import Lines from "@components/bio/Lines";

let userId = 20


const pomodomo_more_info = [
    {
        id: 1,
        words: "Working with Single Page Applications",
    }, {
        id: 6,
        words: "React Fundamentals",
    }, {
        id: 3,
        words: "React Redux",
    }, {
        id: 7,
        words: "2022 Complete Python Bootcamp",
    }, {
        id: 9,
        words: "2022 Complete Python Bootcamp",
    }, {
        id: 10,
        words: "2022 Complete Python Bootcamp",
    }, {
        id: 11,
        words: "2022 Complete Python Bootcamp",
    }
]

export default function Portfolio() {

    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)
    const [limiter, setLimiter] = useState(0)

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
        if (limiter <= 3) {
            setLimiter(limiter + 1)
            LogActivity(userId, "loaded portfolio page")
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
            <Flood />

            <BasicPageTop />
            <NavBar />
            <SVGSpacers type="bot" num="2" width={width} />
            <div style={{ position: "relative" }}>

                {/* <div style={{ height: "60vh", fill: "black", zIndex: 500}} /> */}

                <Spacer />
                <Spacer />


                {/* <div className={styles.app_module_center_wrapper} style={{ height: "200px", top: "30%", fill: "none" }}> */}
                {/* <div className={styles.app_module_center_wrapper} style={{ top: "30%"}}/> */}
                <a href="/pomodomo">
                    <div className={styles.hov_catch}>
                        <visualViewport className={styles.app_module_center}>
                            {/* <Waves h={400/4} w={800/4}> */}
                            <Waves h={400} w={2000} />
                            <div className={styles.app_module_center_title}>P<img src="/tomato2.png" className={styles2.tomat} />m<img src="/tomato2.png" className={styles2.tomat} />d<img src="/tomato2.png" className={styles2.tomat} />m<img src="/tomato2.png" className={styles2.tomat} /></div>
                            <br></br>
                        </visualViewport>
                        {/* <div className={styles.more_info}> More Info </div> */}

                        {/* </div> */}
                    </div>
                </a>
                {/* <Spacer/> */}
                <Spacer height={"30vw"} />
                {/* <Spacer/> */}

                {/* <div className={styles.app_module_center_wrapper} style={{ height: "200px", top: "50%", fill: "none" }} /> */}
                <a href="/about" style={{ position: "relative" }}>
                    <div className={styles.hov_catch} style={{ position: "relative" }}>

                        <visualViewport className={styles.app_module_center} style={{ top: "55%", fill: "none" }}>
                            <iframe style={{ width: "80vw", height: "48vw", marginTop: "-2vh" }} className={styles.app_module_center} src="https://www.youtube.com/embed/vNF94UrluYg?autoplay=1&mute=1&controls=0&vq=highres&modestbranding=1&start=42" align-content={"center"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className={styles.app_module_center_title} style={{ fontWeight: 600, color: "white" }}>Personal Site</div>
                        </visualViewport>
                        {/* <div className={styles.more_info}> More Info </div> */}

                    </div>

                </a>
                {/* <Lines content={pomodomo_more_info} /> */}
                {/* <Spacer height={"30vw"} />A

                <a href="/about" style={{ position: "relative" }}>
                    <div className={styles.hov_catch} style={{ position: "relative" }}>

                        <visualViewport className={styles.app_module_center} style={{ top: "55%", fill: "none" }}>
                            <div style={{backgroundColor: "white"}}>Stuff</div>
                            <iframe style={{ width: "80vw", height: "48vw", marginTop: "-2vh" }} className={styles.app_module_center} src="https://www.youtube.com/embed/vNF94UrluYg?autoplay=1&mute=1&controls=0&vq=highres&modestbranding=1&start=42" align-content={"center"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className={styles.app_module_center_title} style={{ fontWeight: 600, color: "white" }}>Personal Site</div>
                        </visualViewport>
                        <div className={styles.more_info}> More Info </div>

                    </div>
                  
                </a> */}


                {/* <div className={styles.more_info}>
                            <Lines content={pomodomo_more_info} />
                        </div> */}


                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <Spacer height={"20vw"} />

            <SVGSpacers type="top" num="2" width={width} />
            <div className={styles.box}>
                <BasicPageBottom />
            </div>


        </div>
    )
}
