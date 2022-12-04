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
import { updateBreakTime, updateIterations, updateReady, updateWorkTime, updateTimeActive, updateTimeRemain, updateTotalTime, updatePage, updateIterationsRemain } from 'src/actions/cartAction'




export default function Finished() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);


    const buttonClick = () => {
        dispatch(updatePage("main"))
        console.log("The state val is now: " + state.ready)
    }

    console.log("finished was indeed loaded!!!!!!!!!")

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
                <Header title="Nice Work!!!" />
                {/* <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p> */}
                {/* <p>Count is {count}</p>

                <Button handleClick={handleClick} buttonName={"Click Counter"} /> */}

                <br></br>
                {/* <Timer type={"break"} startVar={+state.breakTime} /> */}

                <div> You were working for a total of x time</div>
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
