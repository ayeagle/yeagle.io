import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'
import RouteButton from '@components/legacyComponents/RouteButton'
import Input from '@components/Inputv2'
import Second from './legacyComponents/second'
import Settings from '../components/legacyComponents/settings'
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateBreakTime, updateIterations, updateReady, updatePage, updateWorkTime, updateTotalTime, updateTimeRemain, updateTimeActive } from 'src/actions/cartAction'
import Break from '@components/Break'

import styles from './Timer.module.css'



export default function Timer() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    // let flexVar = 0
    // if (type == "work") {
    //     flexVar = state.workTime
    // } else if (type = "break") {
    //     flexVar = state.breakTime
    // } else {
    //     flexvar = 0
    // }
    // console.log("this is the flexvar: " + flexVar)
    console.log(state)
    console.log("above is the state before setting timeremain and totaltime")
    const [timeRemain, setTimeRemain] = useState(state.workTime); //setting these to input instead now --> state.timeRemain
    const [totalTime, setTotalTime] = useState(state.totalTime);   //setting these to input instead now --> state.totalTime


    const [dashVal, setDashVal] = useState(283)
    const timePassed = 0
    const timeLeft = state.workTime


    //timeRemain variable is loading as -1 for some reason?


    console.log(state)
    console.log(timeLeft)


    async function stopTimer() {
        // console.log('before ' + timeActive)
        console.log('before state ' + state.timeActive)
        // setTimeActive(false)
        dispatch(updateTimeActive(false))
        // console.log('after ' + timeActive)
        console.log('after state ' + state.timeActive)
    }

    // const timeDisplay = () => {
    //     console.log(state.timeRemain + " <---- this is the time remaining")
    //     let var1 = timeRemain
    //     // startTimer()

    //     const loop = () => {
    //         if (var1 > 0 && state.timeActive === true) {
    //             var1 -= 1
    //             setTimeRemain(var1)
    //             // console.log(var1)
    //             // console.log("state: " + state.timeActive)
    //             // console.log("Local use " + timeActive)
    //             // startTimer()
    //             setCircleDasharray();
    //         }
    //         // console.log("before await, time active is ----> " + timeActive)
    //         // await setTimeActive(state.timeActive)
    //         // console.log("after await, time active is ----> " + timeActive)

    //         if (var1 > 0 && state.timeActive === true) setTimeout(loop, 1000)
    //     }
    //     loop()
    // }


    /////////////////////////////////////



    /////////////////////////////////////



    /////////////////////////////////////



    /////////////////////////////////////



    /////////////////////////////////////



    /////////////////////////////////////



    /////////////////////////////////////





    // Warning occurs at 10s
    const WARNING_THRESHOLD = 60;
    // Alert occurs at 5s
    const ALERT_THRESHOLD = 15;

    const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
    };



    function startTimer() {
        var timerInterval = setInterval(() => {

            console.log(state)
            console.log(timeRemain)

            // // The amount of time passed increments by one
            // timePassed = timePassed += 1;
            // timeLeft = TIME_LIMIT - timePassed;

            timePassed = timePassed += 1;
            timeLeft = (timeRemain - timePassed)
            setTimeRemain(timeLeft)

            // // The time left label is updated
            // document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
            // setTimeRemain(timeRemain - 1)

            setCircleDasharray();
            if (timeLeft <= 0) {
                clearInterval(timerInterval);

                if (type == "work") dispatch(updatePage("break"))
                else dispatch(updatePage("timer"))


            }
        }, 1000)

    }

    //need to use a useeffect to check state of timer readiness and start timer
    ///////////////////


    function formatTimeLeft() {
        // The largest round integer less than or equal to the result of time divided being by 60.
        const time = timeRemain
        console.log("this is the remain time var from within the format time left function: " + timeRemain)

        console.log("this is the remaining time from within the format time left function: " + time)
        const minutes = Math.floor(time / 60);

        // Seconds are the remainder of the time divided by 60 (modulus operator)
        let seconds = time % 60;

        // If the value of seconds is less than 10, then display seconds with a leading zero
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        // The output in MM:SS format
        return `${minutes}:${seconds}`;
    }


    let remainingPathColor = COLOR_CODES.info.color;

    function calculateTimeFraction() {
        // return timeLeft / TIME_LIMIT;
        const rawTimeFraction = timeLeft / timeRemain;
        console.log("fraction time remain: " + timeRemain)
        console.log("fraction time total: " + timeRemain)
        return rawTimeFraction - (1 / timeRemain) * (1 - rawTimeFraction);
    }


    // Update the dasharray value as time passes, starting with 283
    function setCircleDasharray() {
        const FULL_DASH_ARRAY = 283
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        setDashVal(circleDasharray)
        console.log("this is the current dash value: " + dashVal)
        // document
        //     .getElementById("base-timer-path-remaining")
        //     .setAttribute("stroke-dasharray", circleDasharray);

    }




    // function setRemainingPathColor(timeLeft) {
    //     const { alert, warning, info } = COLOR_CODES;

    //     // If the remaining time is less than or equal to 5, remove the "warning" class and apply the "alert" class.
    //     if (timeLeft <= alert.threshold) {
    //         document
    //             .getElementById("base-timer-path-remaining")
    //             .classList.remove(warning.color);
    //         document
    //             .getElementById("base-timer-path-remaining")
    //             .classList.add(alert.color);

    //         // If the remaining time is less than or equal to 10, remove the base color and apply the "warning" class.
    //     } else if (timeLeft <= warning.threshold) {
    //         document
    //             .getElementById("base-timer-path-remaining")
    //             .classList.remove(info.color);
    //         document
    //             .getElementById("base-timer-path-remaining")
    //             .classList.add(warning.color);
    //     }
    // }
    return (
        <>
            <div ><Button handleClick={startTimer} buttonName={"Start Timer"} /> <Button handleClick={stopTimer} buttonName={"Stop Timer"} /></div>
            {/* <div>Time Remaining is {Math.floor(timeRemain / 60)} minute(s) and {timeRemain % 60} seconds</div> */}

            <div className={styles.base_timer}>
                <svg className={styles.base_timer__svg} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g className={styles.base_timer__circle} >
                        <circle className={styles.base_timer__path_elapsed} cx="50" cy="50" r="45" />
                        <path
                            className={styles.base_timer_path_remaining}
                            id="base_timer_path_remaining"
                            stroke-dasharray={dashVal}
                            className={styles.base_timer__path_remaining}
                            color={remainingPathColor}
                            d="
                            M 50, 50
                            m -45, 0
                            a 45,45 0 1,0 90,0
                            a 45,45 0 1,0 -90,0
                            "
                        ></path>
                    </g>
                </svg>
                <span className={styles.base_timer__label}>
                    {formatTimeLeft()}
                </span>
            </div>


        </>
    )

}
