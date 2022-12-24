import Head from 'next/head'
import Header from '@components/pomodomo/Header'
import Footer from '@components/pomodomo/Footer'
import Button from '@components/pomodomo/Button'
import 'imported/confetti'
import Timer from '@components/pomodomo/Timer'
import { useEffect, useState } from 'react'
import DadJoke from './DadJoke'

import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { updateBreakTime, updateIterations, updateReady, updateWorkTime, updateTimeActive, updateTimeRemain, updateTotalTime, updatePage, updateIterationsRemain, updateJoke } from 'src/actions/cartAction'




export default function Break() {

    // const [count, setCount] = useState(0);
    // const [workTime, setWorkTime] = useState(0);
    // const [breakTime, setBreakTime] = useState(0);
    // const [iterations, setIterations] = useState(0);
    // const [timeRemain, setTimeRemain] = useState(0);
    // const [timeActive, setTimeActive] = useState(true);


    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)

    const dispatch = useDispatch();
    const state = useSelector((state) => state);




    const buttonClick = () => {
        dispatch(updatePage("main"))
        // setReady(false)
        console.log("The state val is now: " + state.ready)
        // console.log("new value of ready is: " + ready)
    }


    console.log("break was indeed loaded!!!!!!!!!")
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return (
        <div className="container">
            <Head>
                <title>Yeagle's Bagels!</title>
                <link rel="icon" href="/bagel_logo.png" />
            </Head>

            <main>
                <br></br>                <br></br>
                <br></br>

                <Header style={{zIndex:30}} title="Break Time ;)" />
                <Timer type={"break"} startVar={+state.breakTime} />
                <br></br>
                <DadJoke />

                <br></br>

                <Button className='btn' handleClick={buttonClick} buttonName={"Return Home"} >Let's get to work</Button>


            </main>

            <Footer />
            {/* <script src="jsapp.js"></script> */}
        </div>
    )
}
