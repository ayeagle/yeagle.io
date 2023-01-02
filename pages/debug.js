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
// import {StartDatabaseConnection} from "../components/DBcomponents/Connect"
import Connect from "@components/DBcomponents/Connect";


// StartDatabaseConnection()


export default function Debug() {

    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    // console.log("this is the height (start) ==> " + height
    //     console.log("this is the width (start) ==> " + width)
    const [CID, setCID] = useState(0);

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
        setCID(document.cookie)
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

            <Connect />
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div style={{ height: "80vh", fill: "black", zIndex: 500, }} >

                <div>This is your uuid lol <br></br>{state.uuid}</div>
                <div>This is your cookie lol (static) <br></br>{CID}</div>

            </div>

            <SVGSpacers type="top" num="2" width={width} />
            <div className={styles.box}>
                <BasicPageBottom />
            </div>


        </div>
    )
}
