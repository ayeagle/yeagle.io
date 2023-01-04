import Waves from "@components/pomodomo/Waves";
import Break from '@components/pomodomo/Break';
import Button from "@components/pomodomo/Button";
import BasicPageTop from "@components/bio/BasicPageTop";
import BasicPageBottom from "@components/bio/BasicPageBottom";
import SVGSpacers from "@components/bio/SVGSpacers";
import Resizer from "@components/functional/Resizer";
import { useEffect, useState } from "react";
import PNGSpacers from "@components/bio/PNGSpacers";
import styles from './master.module.css';
import Iceland from "@components/bio/Iceland";
import Lines from "@components/bio/Lines";
import NavBar from "@components/bio/navbar";
import JobSection from "@components/bio/JobSection";
import EducationSection from "@components/bio/EducationSection";
import Typing from "@components/bio/Typing";
import Flood from "@components/bio/Flood";
import Spacer from "@components/bio/Spacer";



export default function Resume() {

    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)

    // console.log("this is the height (start) ==> " + height)
    //     console.log("this is the width (start) ==> " + width)


    useEffect(() => {
        // Update the height and width state when the component is mounted
        updateHeight(window.innerHeight)
        updateWidth(window.innerWidth)
        // console.log("this is the height (useeffect) ==> " + height)
        // console.log("this is the width (useeffect) ==> " + width)

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
            <Flood />

            <BasicPageTop />
            <NavBar />
            <SVGSpacers type="bot" num="3" width={width} />

            <div style={{ position: "relative" }}>
                <img src="/IMGassets/city.png" className={styles.image} />
                <div className={styles.image_text_center} style={{ top: "2em" }}>
                    <Typing content={`Worked on hypergrowth solutions backed by...<br/>2x Accel<br/>1x FAANG<br />2x Seqouia <br />1x 500 Startups<br />2x Y Combinator<br />2x First Round Capital`} />
                </div>
            </div>
            <SVGSpacers type="top" num="5" width={width} />

            <SVGSpacers type="bot" num="1" width={width} />
            <Spacer/>
            <h1 style={{ fontSize: "5vw" }}> Work Experience</h1>
            <JobSection />
            <Spacer/>

            <SVGSpacers type="top" num="5" width={width} />

            <SVGSpacers type="bot" num="1" width={width} />
            <Spacer/>

            <h1 style={{ fontSize: "5vw" }}> Education</h1>
            <EducationSection />
            {/* <div style={{ height: "20vh", fill: "black", zIndex: 500 }} /> */}
            <Spacer/>


            <SVGSpacers type="top" num="4" width={width} />
            <div className={styles.box}>
                <BasicPageBottom />
            </div>


        </div>
    )
}
