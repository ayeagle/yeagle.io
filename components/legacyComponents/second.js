import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'
import Input from '@components/legacyComponents/Input'
import 'imported/confetti'
import Timer from '@components/Timer'
import { useEffect, useState } from 'react'
import Table from '@components/Table'
import styles from '../Table.module.css'
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { updateBreakTime, updateIterations, updateReady, updateWorkTime, updateTimeActive, updateTimeRemain, updateTotalTime, updatePage, updateIterationsRemain, updateJoke } from 'src/actions/cartAction'




export default function Second() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [timeRemain, setTimeRemain] = useState(state.timeRemain);
    const [totalTime, setTotalTime] = useState(state.totalTime);

    const axios = require("axios");

    console.log("this is the new gif state object BELOW")
    console.log(state.gif)

    const options = {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
            'X-RapidAPI-Key': '3b1e0fb649mshe0576828f673b45p190bb4jsn623411e52e48',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            dispatch(updateJoke(response.data.body[0].setup, response.data.body[0].punchline))
        }).catch(function (error) {
            console.error(error);
        });
    }, [])


    const buttonClick = () => {
        dispatch(updatePage("main"))
        // setReady(false)
        console.log("The page val is now: " + state.page)
        // console.log("new value of ready is: " + ready)
    }

    // async function stopTimer() {
    //     console.log('before ' + timeActive)
    //     console.log('before state ' + state.timeActive)
    //     setTimeActive(false)
    //     dispatch(updateTimeActive(false))
    //     console.log('after ' + timeActive)
    //     console.log('after state ' + state.timeActive)
    // }

    // async function timeDisplay() {
    //     console.log(state.timeRemain + " <---- this is the time remaining")
    //     let var1 = timeRemain

    //     async function loop() {
    //         if (var1 > 0 && timeActive === true) {
    //             var1 -= 1
    //             setTimeRemain(var1)
    //             console.log(var1)
    //             console.log("state: " + state.timeActive)
    //             console.log("Local use " + timeActive)
    //         }
    //         console.log("before await, time active is ----> " + timeActive)
    //         await setTimeActive(state.timeActive)
    //         console.log("after await, time active is ----> " + timeActive)

    //         if (var1 > 0 && timeActive === true) setTimeout(loop, 1000)
    //     }
    //     loop()
    // }

    // const updateTime = setTimeLeft(timeLeft-1);
    // let totalTimeSum = (+workTime + +breakTime) * Math.min(+iterations, 1)


    // function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }

    return (
        <div className="container">
            <Head>
                <title>Yeagle's Bagels!</title>
                <link rel="icon" href="/bagel_logo.png" />
            </Head>

            <main>
                <Header title="Let's get to work!" />
                {/* <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p> */}
                {/* <p>Count is {count}</p>

                <Button handleClick={handleClick} buttonName={"Click Counter"} /> */}

                <br></br>

                {/* <Button handleClick={timeDisplay} buttonName={"Start Timer"} />
                <div>Time Remaining is {Math.floor(timeRemain / 60)} minute(s) and {timeRemain % 60} seconds</div> */}
                <Timer type={"work"} startVar={+state.workTime} />

                {/* <Button handleClick={stopTimer} buttonName={"Stop Timer"} /> */}
                {/* <div>Work Period Length: {state.workTime}</div>
                <div>Break Period Length: {state.breakTime}</div>
                <div>Iterations left: {state.iterations}</div>
                <br></br>

                <div></div>
                <div>total seconds elapsed {totalTime - timeRemain}</div>
                <br></br>
                <div>Total time planned for working is:</div>
                <div> hours: {Math.floor(totalTime / 3600)}  </div>
                <div> minutes: {Math.floor((totalTime % 3600) / 60)} </div>
                <div> seconds: {totalTime % 60} </div> */}
                <div className={styles.wrapper}>
                    <Table
                        name={"Current Work Plan"}
                        name1={"Working"}
                        name2={"Breaking"}
                        name3={"Iterations"}
                        val1={state.workTime/60 + " Minute(s)"}
                        val2={state.breakTime/60 + " Minute(s)"}
                        val3={state.iterations + " Cycle(s)"} />
                    {/* <Table className={styles.second}
                        name={"Times Selected"}
                        name1={"Working"}
                        name2={"Break"}
                        name3={"Iterations"}
                        val1={state.workTime}
                        val2={state.breakTime}
                        val3={state.iterations} /> */}
                </div>
                <br></br>
                <Button className='btn' handleClick={buttonClick} buttonName={"Return Home"} >Let's get to work</Button>


            </main>

            <Footer />
            {/* <script src="jsapp.js"></script> */}
            <script src="imported/confetti.js"></script>
        </div>
    )
}
