import Head from 'next/head'
import React, { useState, useEffect } from "react"

import Main from './main'


export default function Index() {

  // return <About/>

  //just ignore this files existence plz thankyou

  console.log("minor change is in effect now")
  console.log("removed the stupid fucking about import")


  const [count, setCount] = useState(0);
  const [workTime, setWorkTime] = useState(0);   //set these to state. values?
  const [breakTime, setBreakTime] = useState(0);
  const [iterations, setIterations] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [timeRemain, setTimeRemain] = useState(0);
  const [timeActive, setTimeActive] = useState(true);
  const [ready, setReady] = useState(false);
  const [limiter, setLimiter] = useState(0)


  return (
    // <About/>
    <Main />

  )

}
