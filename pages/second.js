import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'
import Input from '@components/Input'

import { useState, useEffect } from 'react'


import Link from 'next/link';




export default function secondpage() {
    const [count, setCount] = useState(0);
    const [workTime, setWorkTime] = useState(0);
    const [breakTime, setBreakTime] = useState(0);
    const [iterations, setIterations] = useState(0);
    const [timeRemain, setTimeRemain] = useState(0);
    const [timeActive, setTimeActive] = useState(true);


    useEffect(() => {
        // Perform localStorage action
        setWorkTime(localStorage.getItem('workTime'))
        setBreakTime(localStorage.getItem('breakTime'))
        setIterations(localStorage.getItem('iterations'))
        setTimeRemain(localStorage.getItem('workTime'))
        localStorage.setItem('timeActive', timeActive)

        // const item = localStorage.getItem('key')
    }, [])

    // const newTime = localStorage.getItem('workTime')

    // const handleClick = () => setCount(count + 1);
    const handleClick = () => {
        // setInterval(() => {
        // },  3000);
    }

    // const handleInputClick = (e) => {
    //   console.log("val1 is " + e.target.value)
    //   setGoal(e.target.value)
    //   console.log("val1 is " + e.target.value)
    // };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleInputClick1 = (val1) => {
        console.log("val1 pre set is " + val1)
        // setWorkTime(val1)
        console.log("val1 post set is " + val1)
        console.log("this is period of work " + workTime)
    };
    const handleInputClick2 = (val2) => {
        console.log("val1 pre set is " + val2)
        // setBreakTime(val2)
        console.log("val1 post set is " + val2)
        console.log("this is the period of break " + breakTime)
    };
    const handleInputClick3 = (val3) => {
        console.log("val1 pre set is " + val3)
        // setIterations(val3)
        console.log("val1 post set is " + val3)
        console.log("this is the num iterations " + iterations)
    };

    let var1 = timeRemain

    const stopTimer = () => {
        console.log('before ' + timeActive)
        setTimeActive(false)
        localStorage.setItem('timeActive', timeActive)
        console.log('after ' + timeActive)
    }

    async function timeDisplay() {
        // setTimeActive(true)

        console.log(timeRemain)
        while (var1 > 0 && timeActive) {
            var1 -= 1
            setTimeRemain(var1)
            console.log(var1)
            await sleep(1000)
            // if (localStorage.getItem('timeActive') === false) {
            //     break;
            // }
        }
    }

    // const updateTime = setTimeLeft(timeLeft-1);
    let totalTimeSum = (+workTime + +breakTime) * Math.min(+iterations,1)

    return (
        <div className="container">
            <Head>
                <title>Yeagle's Bagels!</title>
                <link rel="icon" href="/bagel_logo.png" />
            </Head>

            <main>
                <Header title="Let's do this!" />
                {/* <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p> */}
                {/* <p>Count is {count}</p>

                <Button handleClick={handleClick} buttonName={"Click Counter"} /> */}

                <br></br>
                <Button handleClick={timeDisplay} buttonName={"Start Timer"} />
                <div>Time Remaining is {Math.floor(timeRemain / 60)} minute(s) and {timeRemain % 60} seconds</div>
                <Button handleClick={stopTimer} buttonName={"Stop Timer"} />
                <div>Work Period Length: {workTime}</div>
                <div>Break Period Length: {breakTime}</div>
                <div>Iterations left: {iterations}</div>
                <br></br>

                <div></div>
                <div>total seconds passed in {totalTimeSum}</div>
<br></br>
                <div>Total time planned for working is:</div>
                <div> hours: {Math.floor(totalTimeSum/3600)}  </div>
                <div> minutes:{Math.floor((totalTimeSum%3600)/60)} </div>
                <div> seconds: {totalTimeSum%60} </div>


                <br></br>

                {/* <Input handleInputClick1={handleInputClick1} handleInputClick2={handleInputClick2} handleInputClick3={handleInputClick3} inputPrompt1={"How long do you want to work?"} inputPrompt2={"How long do you want to break?"} inputPrompt3={"How many cycles would you like to do?"} /> */}
                {/* <div>{val1}</div> */}
                {/* how to get component value returned so it can be dynamically displayed on the page after */}
                {/* <Input handleInputClick={handleInputClick} inputPrompt={"How long do you want to break?"} /> */}
                {/* <Input handleInputClick={handleInputClick} inputPrompt={"How many cycles would you like to do?"} /> */}
                {/* <p> Time remaining is :{timeLeft}</p> */}
                <Link href="/">Back to home</Link>


            </main>

            <Footer />
            {/* <script src="jsapp.js"></script> */}
        </div>
    )
}
