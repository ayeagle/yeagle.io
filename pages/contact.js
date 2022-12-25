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
import Socials from "@components/bio/Socials";




export default function Contact() {


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
            <NavBar/>
            <SVGSpacers type="bot" num="3" width={width} />

            <div style={{position:"relative"}}>
                <img src="/IMGassets/sf.png" className={styles.image}  />
                <div className={styles.image_text_center} style={{top:"2em"}}>Interested in building something together?</div>
            </div>
            <SVGSpacers type="top" num="5" width={width} />

            <SVGSpacers type="bot" num="1" width={width} />
            <div style={{ height: "60vh", fill: "black", zIndex: 500 }} />



            {/* <div className={styles.app_module_center_wrapper} style={{ height: "200px", top: "30%", fill: "none" }}> */}
            {/* <div className={styles.app_module_center_wrapper} style={{ top: "30%"}}/> */}


            {/* <div className={styles.app_module_center_wrapper} style={{ height: "200px", top: "50%", fill: "none" }} /> */}

            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <SVGSpacers type="top" num="4" width={width} />
            <div className={styles.box}>
                <BasicPageBottom />
            </div>


        </div>
    )
}
