import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'
import Input from '@components/legacyComponents/Input'
import 'imported/confetti'
import Timer from '@components/Timer'
import { useEffect, useState } from 'react'
import Table from '@components/Table'

import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { updateBreakTime, updateIterations, updateReady, updateWorkTime, updateTimeActive, updateTimeRemain, updateTotalTime, updatePage, updateIterationsRemain} from 'src/actions/cartAction'




export default function Break() {

    // const [count, setCount] = useState(0);
    // const [workTime, setWorkTime] = useState(0);
    // const [breakTime, setBreakTime] = useState(0);
    // const [iterations, setIterations] = useState(0);
    // const [timeRemain, setTimeRemain] = useState(0);
    // const [timeActive, setTimeActive] = useState(true);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    //should I just init all of these useStates with the state.val as the initial value?



    const buttonClick = () => {
        dispatch(updatePage("main"))
        // setReady(false)
        console.log("The state val is now: " + state.ready)
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
                <Header title="Break Time ;)" />
                {/* <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p> */}
                {/* <p>Count is {count}</p>

                <Button handleClick={handleClick} buttonName={"Click Counter"} /> */}

                <br></br>
                <Timer type  ={"break"} startVar={+state.breakTime}/>

               <div> YOU'RE ON A BREAK NOW YAAY</div>
                <div>Work Period Length: {state.workTime}</div>
                <div>Break Period Length: {state.breakTime}</div>
                <div>Iterations left: {state.iterations}</div>
                <br></br>

                <div></div>
                <div>total seconds elapsed {state.totalTime - state.timeRemain}</div>
                <br></br>
                <div>Total time planned for working is:</div>
                <div> hours: {Math.floor(state.totalTime / 3600)}  </div>
                <div> minutes: {Math.floor((state.totalTime % 3600) / 60)} </div>
                <div> seconds: {state.totalTime % 60} </div>

                {/* <Table  name={"Times Selected"}
                        name1={"Working"}
                        name2={"Break"}
                        name3={"Iterations"}
                        val1={state.workTime}
                        val2={state.breakTime}
                        val3={state.iterations} /><Table  name={"Times Selected"}
                        name1={"Working"}
                        name2={"Break"}
                        name3={"Iterations"}
                        val1={state.workTime}
                        val2={state.breakTime}
                        val3={state.iterations} />
                <br></br> */}


                <Button className='btn' handleClick={buttonClick} buttonName={"Return Home"} >Let's get to work</Button>


            </main>

            <Footer />
            {/* <script src="jsapp.js"></script> */}
        </div>
    )
}
