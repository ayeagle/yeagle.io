import Head from 'next/head'
import Second from '../components/pomodomo/second'
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateBreakTime, updateIterations, updateReady, updatePage, updateWorkTime, updateTotalTime, updateTimeRemain, updateTimeActive } from 'src/actions/cartAction'
import Main from '@components/pomodomo/Main'
import Break from '@components/pomodomo/Break'
import Finished from '@components/pomodomo/Finished'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Waves from '@components/pomodomo/Waves'

// import About from './About';  // this is the React component you want to render

import About from './about';


export default function Index() {

  // return <About/>

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

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


  return(
    <About/>
  )
  // return (
  //   <Router>
  //     <Route path="/about" component={About} />
  //   </Router>
  // );

//   const sendPage = () => {
//     switch (state.page) {
//       case "main":
//         return <Main />

//       case "work":
//         return <Second />

//       case "break":
//         return <Break />

//       case "finished":
//         return <Finished />

//       default:
//         return <Main />

//     }
//   }

//   return(
//     <>
//     <Waves/>
//     {sendPage()}
//     </>
//   )

}
