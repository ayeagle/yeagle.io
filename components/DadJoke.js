import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'
import Input from '@components/legacyComponents/Input'
import 'imported/confetti'
import Timer from '@components/Timer'
import { useEffect, useState } from 'react'
import Table from '@components/Table'
import styles from './DadJoke.module.css'

import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux";
import { updateBreakTime, updateIterations, updateReady, updateWorkTime, updateTimeActive, updateTimeRemain, updateTotalTime, updatePage, updateIterationsRemain, updateJoke } from 'src/actions/cartAction'




export default function DadJoke() {


    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    let temp = "click to reveal punchline"


    const axios = require("axios");


    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const options = {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
            'X-RapidAPI-Key': '3b1e0fb649mshe0576828f673b45p190bb4jsn623411e52e48',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };

    function get_joke() {

        axios.request(options)
            .then(function (response) {
                console.log(response.data)
                console.log(response.data.body[0].NSFW)
                if(response.data.body[0].NSFW){
                    console.log("!!!!!!!!!!!!!!!!!! uh oh this was a naughty joke.........")
                    get_joke()
                }
                setIsHovering(false);
                console.log("this is before the joke is written to redux")
                console.log(response.data.body[0].setup);
                console.log(response.data.body[0].punchline);
                dispatch(updateJoke(response.data.body[0].setup, response.data.body[0].punchline))
                console.log("this is the joke that was just fetched")
                console.log(state.jokeSetup)
                console.log(state.jokePunchline)
            })
            // .then(function (response){
            //   jokePlaceholder = response.data
            // })
            .catch(function (error) {
                console.error(error);
            });

    }

    // const handleMouseOut = () => {
    //     setIsHovering(false);
    // };


    return (
        <div className={styles.dadjoke}>

            <h2> DAD JOKE TIME</h2>
            <div className={styles.explain}> Jokes are from a public api and may contain content inappropriate for some viewers.</div>
            <br></br>
            <div className={styles.dadjokesetup}> {state.jokeSetup} </div>


            <div className={styles.dadjokepunchline}>
                <div onMouseOver={handleMouseOver}>
                {!isHovering && (
                    <div>
                        <h1>Show Punchline</h1>
                    </div>
                )}
                </div>

                {isHovering && (
                    <div>
                        <div>{state.jokePunchline}</div>
                    </div>
                )}
            </div>
                <br></br>


            <Button handleClick={get_joke} buttonName={"New Dad Joke"} />

        </div>
    )
}


// className={styles.dadjokepunchline }
