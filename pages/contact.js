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
import NavButton from "@components/bio/NavButton";
import Typing from "@components/bio/Typing";
import Flood from "@components/bio/Flood";
import Spacer from "@components/bio/Spacer";
import LogActivity from "@components/DBcomponents/LogActivity";

let userId = 20

export default function Contact() {


    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)
    const [limiter, setLimiter] = useState(0)

    // console.log("this is the height (start) ==> " + height)
    //     console.log("this is the width (start) ==> " + width)

    function sendEmail() {
        window.open('mailto:alexyeagle@gmail.com,alex@yeagle.io?subject=Would love to chat!&body=Hey Alex I saw your website and...');
    }


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
        if (limiter <=3 ) {
            setLimiter(limiter + 1)
            LogActivity(userId, "loaded contact page")
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
                <img src="/IMGassets/sf.png" className={styles.image} />
                <div className={styles.image_text_center} style={{ top: "2em" }}><Typing content={"Interested in building something together?"} /></div>
            </div>
            <SVGSpacers type="top" num="5" width={width} />

            <SVGSpacers type="bot" num="1" width={width} />
            <Spacer/>
            <div >
                <div>
                    <Socials size={"3vw"} loc={"center"} />
                    <div className={styles.contact_element}>+1 (559) 451 6174</div>
                    <div className={styles.contact_element} onClick={sendEmail}  >alexyeagle@gmail.com</div>
                    <div className={styles.contact_element} onClick={sendEmail}  >alex@yeagle.io</div>
                    <div className={styles.contact_element}>SF, CA</div>
                    <br></br>
                    <a><NavButton buttonName={"Get in touch"} handleClick={sendEmail} /></a>
                    <Spacer/>
                </div>
            </div>



            {/* <div className={styles.app_module_center_wrapper} style={{ height: "200px", top: "30%", fill: "none" }}> */}
            {/* <div className={styles.app_module_center_wrapper} style={{ top: "30%"}}/> */}


            {/* <div className={styles.app_module_center_wrapper} style={{ height: "200px", top: "50%", fill: "none" }} /> */}

            <SVGSpacers type="top" num="4" width={width} />
            <div className={styles.box}>
                <BasicPageBottom />
            </div>


        </div>
    )
}
