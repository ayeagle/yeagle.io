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
import { updateBreakTime, updateIterations, updateReady, updatePage, updateWorkTime, updateTotalTime, updateTimeRemain, updateTimeActive, updateIterationsRemain, updateJoke, updateGif } from 'src/actions/cartAction'
import styles from '../components/Tomato.module.css'
import styles2 from '../components/Footer.module.css'
import Timer from '@components/Timer.js'
// import { GiphyFetch } from '@giphy/js-fetch-api'

// import jQuery from 'node_modules/cypress/types/jquery/index'

import { GiphyFetch } from '@giphy/js-fetch-api'
import TextList from 'src/components/TextList'
import Error from 'src/components/Error'//'./components/Error'
// import REACT_APP_GIPHY_KEY from 'env'




export default function Main() {


  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const axios = require("axios");


  const [text, setText] = useState('')
  const [results, setResults] = useState([])
  const [err, setErr] = useState(false)
  const [joke, setJoke] = useState('')

  const options = {
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/search?q=celebrate&api_key=fk4nuCWHZdfaRasp0vvMdbuDO0urqGw3&limit=25',
    // headers: {
    //     'api_key': 'fk4nuCWHZdfaRasp0vvMdbuDO0urqGw3',
    //     'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    // }
};

  //why is there input lag with the data being stored vs what is being displayed?
  //need to be leveraging promises???
  //why do these need to be included in each component? should i re-declare or pass as props?

  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  //   console.log("this button was clicked")
  // }

  const buttonClick = () => {
    console.log(state)

    if( state.workTime <= 0 || state.breakTime <= 0 || state.iterations <= 0) {
      window.alert("Uh oh! Looks like one or more values is zero. Please make sure all values are positive numbers.")
      return;
    }
    dispatch(updateIterationsRemain((+state.iterations * 2) + 1))
    dispatch(updateTotalTime((+state.workTime + +state.breakTime) * Math.max(+state.iterations, 1)))
    dispatch(updateTimeRemain((+state.workTime)))

    dispatch(updatePage("work"))
    // console.log("The state val is now: " + state.page)
    // console.log("new value of ready is: " + state.ready)
  }

  useEffect(() => {
    dispatch(updateTotalTime((+state.workTime + +state.reakTime) * +Math.max(+state.iterations, 1)))


    axios.request(options)
        .then(function (response) {
            console.log(response.data)
            console.log(response.data.data[Math.floor(Math.random()*25)].embed_url)
            console.log(Math.floor(Math.random()*25))
            dispatch(updateGif(response.data.data))
            console.log(typeof(response.data.data))                            //Math.floor(Math.random()*25)]
            console.log("this is the new gif state object BELOW")
            console.log(state.gif)

        })
        // .then(function (response){
        //   jokePlaceholder = response.data
        // })
        .catch(function (error) {
            console.error(error);
        });
  }, [])



  //   if (state.page == "main") {

  return (
    <div className="container">
      <Head>
        <title>Yeagle's Bagels!</title>
        <link rel="icon" href="/bagel_logo.png" />
      </Head>
      {/* <img src="http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=fk4nuCWHZdfaRasp0vvMdbuDO0urqGw3&limit=1" /> */}
      {/* <div>{GIF()}</div> */}
      <main>
        {/* <Header title="Welcome to PomoDomo" /><img src="/tomato2.png" className={styles2.tomat}/> */}
        <h1>Welcome to P<img src="/tomato2.png" className={styles2.tomat} />m<img src="/tomato2.png" className={styles2.tomat} />d<img src="/tomato2.png" className={styles2.tomat} />m<img src="/tomato2.png" className={styles2.tomat} /></h1>
        <h3>An easy way to plan a working session <br></br>using the Pomodoro productivity method.</h3>
        <h4>Also comes with dad jokes during the break!!!</h4>


        {/* <div className={styles.leaves}>
          <i></i>
          <i></i>



          </div> */}

        <Input
          type={"work"}
          inputPrompt1={"How long do you want to work?"}
          func={updateWorkTime}
          state={state}
          dispatch={dispatch}
          updateTotalTime={updateTotalTime}
          step = {5}
          fieldPrompt = {"e.g. 25 minutes"}
        />
        <Input
          type={"break"}

          inputPrompt1={"How long do you want to break?"}
          func={updateBreakTime}
          state={state}
          dispatch={dispatch}
          updateTotalTime={updateTotalTime}
          step = {1}
          fieldPrompt = {"e.g. 5 minutes"}

        />
        <Input
          type={"iter"}

          inputPrompt1={"How many iterations do you want to do?"}
          func={updateIterations}
          state={state}
          dispatch={dispatch}
          updateTotalTime={updateTotalTime}
          step = {1}
          fieldPrompt = {"e.g. 4 iterations"}


        />
<br></br>
        <Button className='btn' handleClick={buttonClick} buttonName={"Let's do this v2"} >Let's get to work</Button>

        {/* onClick= {handleGeneralInput(inputType,time1)} */}

        {/* <>Current total time is {state.totalTime} and also </> */}

        {/* <div>work time is {state.workTime} and also </div>
        <div>break time is {state.breakTime} and also </div>
        <div>iterations is {state.iterations} and also </div>




        <div>Total time planned for working is:</div>
        <div> hours: {Math.floor(state.totalTime / 3600)}  </div>
        <div> minutes:{Math.floor((state.totalTime % 3600) / 60)} </div>
        <div> seconds: {state.totalTime % 60} </div> */}

      </main>

      <Footer />
      <script src="imported/confetti.js"></script>

    </div>
  )

  //   } else if (state.page = "timer") return Second(count, setCount, workTime, setWorkTime, breakTime, setBreakTime, iterations, setIterations, totalTime, setTotalTime, timeRemain, setTimeRemain, timeActive, setTimeActive, dispatch, state, ready, setReady

  //   )


}
