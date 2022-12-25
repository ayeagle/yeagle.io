import Waves from "@components/pomodomo/Waves";
import Break from '@components/pomodomo/Break';
import Button from "@components/pomodomo/Button";
import NavBar from "@components/bio/Navbar";
import BasicPageTop from "@components/bio/BasicPageTop";
import BasicPageBottom from "@components/bio/BasicPageBottom";
import SVGSpacers from "@components/bio/SVGSpacers";
import Resizer from "@components/functional/Resizer";
import { useEffect, useState } from "react";
import PNGSpacers from "@components/bio/PNGSpacers";
import styles from './master.module.css';
import Iceland from "@components/bio/Iceland";
import Lines from "@components/bio/Lines";


export default function Coding() {

    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)

    // console.log("this is the height (start) ==> " + height)
    //     console.log("this is the width (start) ==> " + width)


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

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])


    return (
        <div className={styles.master}>
            <BasicPageTop />
            <NavBar />
            <SVGSpacers type="bot" num="3" width={width} />

            <div style={{ position: "relative" }}>
                <img src="/IMGassets/city.png" className={styles.image} />
                <div className={styles.image_text_center} >Self-taught frontend programmer and product enthusiast with a passion for building and scaling customer-obsessed solutions.</div>
            </div>
            <SVGSpacers type="top" num="5" width={width} />

            <SVGSpacers type="bot" num="1" width={width} />
            <div style={{ position: "relative" }}>

                <div style={{ height: "60vh", fill: "black", zIndex: 500 }} />



                {/* <div className={styles.app_module_center_wrapper} style={{ height: "200px", top: "30%", fill: "none" }}> */}
                {/* <div className={styles.app_module_center_wrapper} style={{ top: "30%"}}/> */}
                {/* <a href="/pomodomo"> */}
                    <div className={styles.hov_catch}>
                        <visualViewport className={styles.jobs} style={{ top: "25%" }}>
                            {/* <Waves h={400/4} w={800/4}> */}
                            <img src="/IMGassets/meta4.png" className={styles.logo} style={{}} />

                        </visualViewport>
                        {/* </div> */}
                    </div>
                {/* </a> */}

                {/* <div className={styles.app_module_center_wrapper} style={{ height: "200px", top: "50%", fill: "none" }} /> */}
                    <div className={styles.hov_catch}>
                        <visualViewport className={styles.jobs} style={{ top: "55%" }}>
                            {/* <Waves h={400/4} w={800/4}> */}
                            <img src="/IMGassets/captivateiq.png" className={styles.logo} style={{backgroundColor:"white", top:"-45%"}} />

                        </visualViewport>
                        {/* </div> */}
                    </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>

            <SVGSpacers type="top" num="5" width={width} />
            <SVGSpacers type="bot" num="3" width={width} />
            <h2>Projects</h2>
            <div className={styles.list}>
                <div className={styles.ind_list}> Work
                    <li> Created and maintain multibillion row structured datasets on user reports </li>
                    <li> Created multiple PHP methods to extract information from production code to be used in Hive tables</li>
                </div>
                <div></div>
                <div className={styles.ind_list}>Personal
                    <li> Personal Website </li>
                    <li> Pomodomo</li>
                </div>
            </div>
            <SVGSpacers type="top" num="1" width={width} />
            <SVGSpacers type="bot" num="2" width={width} />
            <h2>Stuff</h2>


            <SVGSpacers type="top" num="4" width={width} />
            <div className={styles.box}>
                <BasicPageBottom />
            </div>


        </div>
    )
}
