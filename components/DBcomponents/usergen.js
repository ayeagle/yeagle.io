import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react"
import { updateUuid } from 'src/actions/cartAction'


console.log("the usergen file was accessed")

export default function GenSessionUuid() {



  // const buttonClick = () => {
  //   console.log(state)

  //   if (state.workTime <= 0 || state.breakTime <= 0 || state.iterations <= 0) {
  //     window.alert("Uh oh! Looks like one or more values is zero. Please make sure all values are positive numbers.")
  //     return;
  //   }
  //   dispatch(updateIterationsRemain((+state.iterations * 2) + 1))
  //   dispatch(updateTotalTime((+state.workTime + +state.breakTime) * Math.max(+state.iterations, 1)))
  //   dispatch(updateTimeRemain((+state.workTime)))

  //   dispatch(updatePage("work"))
  //   // console.log("The state val is now: " + state.page)
  //   // console.log("new value of ready is: " + state.ready)
  // }

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log(state.uuid + " : state before useffect")


  useEffect(() => {

    console.log(state.uuid + " : this is the state.uuid value before eval")
    const sesh = document.cookie.substr( document.cookie.indexOf("=")+1, document.cookie.indexOf("=") + 36)
    // dispatch(updateUuid(sessionId))
    console.log( "this is the value of sesh: " + sesh)

    if(sesh == ""){
      console.log("Generating a new session ID......")
      const sessionId = uuidv4();
      // console.log(typeof(sessionId) + "this is the type of the sessionID")
      // console.log("this is the session id: " + sessionId)
      document.cookie = `sessionId=${sessionId}`;
      // console.log("this is the doc cookie: " + document.cookie)
      dispatch(updateUuid(sessionId))
      // console.log("sessionid was dispatch!")
    } else {
      console.log("Sessionid already exists = " + sesh)
    }
  }, [])

}



// c9284c77-30fd-45e4-a34c-691a39163f80


// 36d080fa-41d5-4b1c-b12b-7d1261f24ee7


// sessionId=cc37d8aa-5a46-4351-b6b4-2927d002a405
