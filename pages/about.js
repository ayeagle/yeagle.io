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



export default function About() {

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
            <span>
                <img src="/IMGassets/me.png" className={styles.image} />
                <div className={styles.image_text} style={{ top: (`20vh`) }} >Self-taught frontend programmer and product enthusiast with a passion for building and scaling customer-obsessed solutions.</div>
            </span>
            <SVGSpacers type="bot" num="2" width={width} />
            <h4 className={styles.text_left} >"I chose Alex because he contains all
                of the ingredients for a strong team member... I am confident
                he will be a valuable addition to any product teams solving tough problems."</h4>
            <h3 className={styles.text_left} >Marcus Lowe, Head of Product @ Resource.io
                <br></br>
                <br></br>
                <NavButton handleClick={{}} buttonName={"Learn Why"} />
            </h3>
            <Carousel/>

            <SVGSpacers type="top" num="1" width={width} />
            <SVGSpacers type="bot" num="4" width={width} />
            <h4 > A broad range of experiences
                has given my product work diversity and perspective.

                <br></br>
                <br></br>
                <NavButton handleClick={{}} buttonName={"See my Projects"} />
            </h4>
            <SVGSpacers type="top" num="2" width={width} />
            <SVGSpacers type="bot" num="3" width={width} />
            <h3>I'm also a drone videographer!</h3>
            {/* <div height={600}> */}
            <Iceland width={width} height-={height} />
            {/* </div> */}
            <SVGSpacers type="top" num="2" width={width} />
            <div className={styles.box}>
                <BasicPageBottom />
            </div>


        </div>
    )
}
