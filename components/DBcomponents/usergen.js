import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react"
import { updateUuid } from 'src/actions/cartAction'


console.log("this file was accessed")

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

  useEffect(() => {
    if(state.uuid === ""){
      const sessionId = uuidv4();
      console.log("this is the session id: " + sessionId)
      document.cookie = `sessionId=${sessionId}`;
      console.log("this is the doc cookie: " + document.cookie)
      dispatch(updateUuid(sessionId))
      console.log("sessionid was dispatch!")
    } else {
      console.log("sessionid already exists, sorry. The existing sessionId = " + state.uuid)
    }
  }, [])

}
