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
import LogActivity from "@components/DBcomponents/LogActivity";
import LoginButton from "@components/bio/LoginButton";
import CheckUser from "@components/DBcomponents/CheckUser";
import AddNewUser from "@components/DBcomponents/AddNewUser";

// StartDatabaseConnection()

let userId = 20
let username = "jhsjk"

let randomusername = Math.floor(Math.random()*1000000)


export default function Debug() {

    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [limiter, setLimiter] = useState(0)

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

        if (limiter <= 1) {

            AddNewUser(randomusername, "test_password")
            // const promise = CheckUser("asdjkhkjh");

            setLimiter(limiter + 1)
            // // LogActivity(userId, "loaded debug page")
            // console.log("this is the result of the user check:::: ")

            // promise.then((data) => {
            //     // the data argument contains the value that the Promise was resolved with
            //     console.log(!data)
            // }) //does the user exist?
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

            {/* <Connect /> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <LoginButton />
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
