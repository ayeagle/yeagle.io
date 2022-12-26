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




export default function Resume() {

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
                <div className={styles.image_text_center} style={{ top: "2em" }}>
                    Worked on hypergrowth solutions backed by...
                    <br />2x Accel
                    <br />1x FAANG
                    <br />2x Seqouia
                    <br />1x 500 Startups
                    <br />2x Y Combinator
                    <br />2x First Round Capital
                </div>
            </div>
            <SVGSpacers type="top" num="5" width={width} />

            <SVGSpacers type="bot" num="1" width={width} />
            <h1 style={{ fontSize: "5vw" }}> Work Experience</h1>
            <JobSection />

            <SVGSpacers type="top" num="5" width={width} />

            <SVGSpacers type="bot" num="1" width={width} />
            <h1 style={{ fontSize: "5vw" }}> Education</h1>
            <EducationSection />
            <h1 style={{ fontSize: "5vw" }}> Education</h1>
            <h1 style={{ fontSize: "5vw" }}> Education</h1>
            <h1 style={{ fontSize: "5vw" }}> Education</h1>
            <h1 style={{ fontSize: "5vw" }}> Education</h1>

            {/*
            <div style={{ position: "relative" }}>
                <div style={{ height: "100vh", fill: "black", zIndex: 500 }} />
                <div className={styles.hov_catch}>
                    <visualViewport className={styles.jobs} style={{ top: "15%" }}>
                        <img src="/IMGassets/meta4.png" className={styles.logo} style={{ top: "-100%" }} />
                    </visualViewport>
                </div>
                <div className={styles.hov_catch}>
                    <visualViewport className={styles.jobs} style={{ top: "35%" }}>
                        <img src="/IMGassets/captivateiq.png" className={styles.logo} style={{ backgroundColor: "white", top: "-150%" }} />
                    </visualViewport>
                </div>
                <div className={styles.hov_catch}>
                    <visualViewport className={styles.jobs} style={{ top: "55%" }}>
                        <img src="/IMGassets/guide.png" className={styles.logo} style={{ top: "-65%" }} />
                    </visualViewport>
                </div>
                <div className={styles.hov_catch}>
                    <visualViewport className={styles.jobs} style={{ top: "75%" }}>
                        <img src="/IMGassets/sift2.png" className={styles.logo} style={{ top: "-60%" }} />
                    </visualViewport>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div> */}
            {/*
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
            <h2>Stuff</h2> */}


            <SVGSpacers type="top" num="4" width={width} />
            <div className={styles.box}>
                <BasicPageBottom />
            </div>


        </div>
    )
}
