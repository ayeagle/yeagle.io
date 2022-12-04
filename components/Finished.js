import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'
import Input from '@components/legacyComponents/Input'
import 'imported/confetti'
import Timer from '@components/Timer'
import { useEffect, useState } from 'react'
import Table from '@components/Table'
import styles from './Table.module.css'

import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { updateBreakTime, updateIterations, updateReady, updateWorkTime, updateTimeActive, updateTimeRemain, updateTotalTime, updatePage, updateIterationsRemain, updateGif } from 'src/actions/cartAction'




export default function Finished() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);


    // const options = {
    //     method: 'GET',
    //     url: 'http://api.giphy.com/v1/gifs/search?q=celebrate&api_key=fk4nuCWHZdfaRasp0vvMdbuDO0urqGw3&limit=1',
    //     // headers: {
    //     //     'api_key': 'fk4nuCWHZdfaRasp0vvMdbuDO0urqGw3',
    //     //     'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    //     // }
    // };


    // useEffect(() => {
    //     axios.request(options)
    //         .then(function (response) {
    //             console.log(response.data)
    //             console.log(response.data.data[0].url)
    //             dispatch(updateGif(response.data.data[0].embed_url))
    //             // setIsHovering(false);
    //             console.log("this is before the joke is written to redux")
    //             console.log(response.data.body[0].setup);
    //             console.log(response.data.body[0].punchline);
    //             // dispatch(updateJoke(response.data.body[0].setup, response.data.body[0].punchline))
    //             console.log("this is the joke that was just fetched")
    //             console.log(state.jokeSetup)
    //             console.log(state.jokePunchline)
    //         })
    //         // .then(function (response){
    //         //   jokePlaceholder = response.data
    //         // })
    //         .catch(function (error) {
    //             console.error(error);
    //         });
    // }, [])

    // function get_joke() {

    //     axios.request(options)
    //         .then(function (response) {
    //             console.log(response.data)
    //             console.log(response.data.body[0].NSFW)
    //             // setIsHovering(false);
    //             console.log("this is before the joke is written to redux")
    //             console.log(response.data.body[0].setup);
    //             console.log(response.data.body[0].punchline);
    //             // dispatch(updateJoke(response.data.body[0].setup, response.data.body[0].punchline))
    //             console.log("this is the joke that was just fetched")
    //             console.log(state.jokeSetup)
    //             console.log(state.jokePunchline)
    //         })
    //         // .then(function (response){
    //         //   jokePlaceholder = response.data
    //         // })
    //         .catch(function (error) {
    //             console.error(error);
    //         });

    // }



    const buttonClick = () => {
        dispatch(updatePage("main"))
        // console.log("The state val is now: " + state.ready)
    }

    // console.log("finished was indeed loaded!!!!!!!!!")

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
                <iframe src={state.gif[Math.floor(Math.random()*25)].embed_url} width="480" height="400" frameBorder="0" allowFullScreen></iframe>
                {/* class="giphy-embed" */}
                <h3> You worked for a total of {state.workTime / 60 * state.iterations} minutes!</h3>
                {/* <div>Work Periods: {state.workTime/60} minutes</div>
                <div>Break Periods: {state.breakTime/60} minutes</div>
                <div>Total Cycles: {state.iterations}</div> */}
                <br></br>
                <div className={styles.wrapper}>
                    <Table
                        name={"Finished Work Plan"}
                        name1={"Working"}
                        name2={"Breaking"}
                        name3={"Iterations"}
                        val1={state.workTime / 60 + " Minute(s)"}
                        val2={state.breakTime / 60 + " Minute(s)"}
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

                <div></div>
                {/* <div>total seconds elapsed {state.totalTime - state.timeRemain}</div>
                <br></br>
                <div>Total time planned for working is:</div>
                <div> hours: {Math.floor(state.totalTime / 3600)}  </div>
                <div> minutes: {Math.floor((state.totalTime % 3600) / 60)} </div>
                <div> seconds: {state.totalTime % 60} </div> */}

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
