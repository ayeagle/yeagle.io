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
import styles from '../components/Tomato.module.css'
import styles2 from '../components/Footer.module.css'
import Timer from '@components/Timer.js'



export default function Main() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);


  //why is there input lag with the data being stored vs what is being displayed?
  //need to be leveraging promises???
  //why do these need to be included in each component? should i re-declare or pass as props?

  const [count, setCount] = useState(0);
  const [workTime, setWorkTime] = useState(0);   //set these to state. values?
  const [breakTime, setBreakTime] = useState(0);
  const [iterations, setIterations] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [timeRemain, setTimeRemain] = useState(0);
  const [timeActive, setTimeActive] = useState(true);
  const [ready, setReady] = useState(false);


  const handleClick = () => {
    setCount(count + 1);
    console.log("this button was clicked")
  }

  const buttonClick = () => {
    console.log(state)
    // setTimeRemain(totalTime)
    dispatch(updateWorkTime(workTime))
    dispatch(updateBreakTime(breakTime))
    dispatch(updateIterations(iterations))
    dispatch(updateTotalTime(totalTime))
    dispatch(updateTimeRemain(timeRemain))
    dispatch(updatePage("timer"))
    console.log("The state val is now: " + state.page)
    console.log("new value of ready is: " + ready)
  }

  const handleGeneralInput = (setFunc, setVal) => {
    console.log("--> this is the set func: " + setFunc)
    console.log("--> this is the set val: " + setVal)
    // setTimeRemain(getTotalTime())

    switch (setFunc) {
      case "work":
        setWorkTime(+setVal)
        dispatch(updateWorkTime(+setVal))
        console.log("case matched")
        break

      case 'break':
        setBreakTime(+setVal)
        dispatch(updateBreakTime(+setVal))
        console.log("case matched")
        break

      case 'iter':
        setIterations(+setVal)
        dispatch(updateIterations(+setVal))
        console.log("case matched")
        break
    }

    console.log("net value added: " + setVal + " to " + setFunc)
    console.log("new total time is: " + (+workTime + +breakTime) * +Math.max(+iterations, 1))
    dispatch(updateTotalTime((+state.workTime + +state.breakTime) * Math.max(+state.iterations, 1)))
    console.log("well it looks like this is the current total time:  " + state.totalTime)
    setTotalTime(state.totalTime)
    // setTimeRemain(state.totalTime)

    //need to be leveraging promises???
    //need to be leveraging promises???
    //need to be leveraging promises???
    //need to be leveraging promises???
    //need to be leveraging promises???
    //need to be leveraging promises???

    console.log("this is the time remain var: ---> " + timeRemain)
    console.log("this is the time remain var: ---> " + totalTime)


  }

  // const getTotalTime = () => {
  //   return (+state.workTime + +state.breakTime) * Math.max(+state.iterations, 1)
  // }

  // useEffect(() => {
  //   setTotalTime((+workTime + +breakTime) * +Math.max(+iterations, 1))
  //   // dispatch(updateTotalTime((+state.workTime + +state.breakTime) * Math.min(+state.iterations, 1)))
  // }, [workTime, breakTime, iterations])




//   if (state.page == "main") {

    return (
      <div className="container">
        <Head>
          <title>Yeagle's Bagels!</title>
          <link rel="icon" href="/bagel_logo.png" />
        </Head>

        <main>
          {/* <Header title="Welcome to PomoDomo" /><img src="/tomato2.png" className={styles2.tomat}/> */}
          <h1>Welcome to P<img src="/tomato2.png" className={styles2.tomat}/>m<img src="/tomato2.png" className={styles2.tomat}/>d<img src="/tomato2.png" className={styles2.tomat}/>m<img src="/tomato2.png" className={styles2.tomat}/></h1>


          {/* <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p> */}
          <p>Count is {count}</p>

          <Button handleClick={handleClick} buttonName={"Click Counter"} />

          {/* <div className={styles.leaves}>
          <i></i>
          <i></i>



          </div> */}

          <Input
            handleGeneralInput={handleGeneralInput}
            inputType={"work"}
            inputPrompt1={"How long do you want to work?"}
          />
          <Input
            handleGeneralInput={handleGeneralInput}
            inputType={"break"}
            inputPrompt1={"How long do you want to break?"}
          />
          <Input
            handleGeneralInput={handleGeneralInput}
            inputType={"iter"}
            inputPrompt1={"How many iterations do you want to do?"}
          />

          <Button className='btn' handleClick={buttonClick} buttonName={"Let's do this v2"} >Let's get to work</Button>

          {/* onClick= {handleGeneralInput(inputType,time1)} */}

          <>Current time is {workTime} and also {ready}</>

          <div>Total time planned for working is:</div>
          <div> hours: {Math.floor(totalTime / 3600)}  </div>
          <div> minutes:{Math.floor((totalTime % 3600) / 60)} </div>
          <div> seconds: {totalTime % 60} </div>

        </main>

        <Footer />
        <script src="imported/confetti.js"></script>

      </div>
    )

//   } else if (state.page = "timer") return Second(count, setCount, workTime, setWorkTime, breakTime, setBreakTime, iterations, setIterations, totalTime, setTotalTime, timeRemain, setTimeRemain, timeActive, setTimeActive, dispatch, state, ready, setReady

//   )


}
