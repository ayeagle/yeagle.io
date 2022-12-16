import React, { Component, useState, useEffect } from 'react'
import styles from './Input.module.css'


const Input = ({ type, inputPrompt1, state, func, dispatch, updateTotalTime, step, fieldPrompt }) => {
    const [time1, setTime1] = useState(0);
    let updater = 0
    let newVal = 0;


    return (
        <div className={styles.form}    >   {/* onSubmit={handleSubmit}*/}
            <label>{inputPrompt1} <br></br><br></br>
                <input
                    type="number"
                    placeholder= {fieldPrompt}

                    min="0"
                    step= {step}
                    // value={time1}
                    onChange={(e) => {
                        if (type == "work"){
                            updater = (+newVal + +state.breakTime) * Math.min(+state.iterations, 1)
                            newVal = +e.target.value * 60

                        } else if (type == "break") {
                            updater = (+state.workTime + +newVal) * Math.min(+state.iterations, 1)
                            newVal = +e.target.value * 60

                        } else {
                            updater = (+state.workTime + +state.breakTime) * Math.min(+newVal, 1)
                            newVal = +e.target.value
                            console.log(newVal + "looks like iter was update here !!!!!!!!!!!!!!!!!")
                        }
                        console.log("handle click was invoked")
                        dispatch(func(+newVal))
                        setTime1(+newVal)
                        console.log(+newVal)
                        console.log("this is time1: " + +time1 + "before the re-render")
                        dispatch(updateTotalTime((updater)))
                        console.log("this is the total time: " + state.totalTime)
                        // handleGeneralInput(inputType,time1)
                    }
                    } />
            </label>
            {/* <button className='btn' onClick= {handleGeneralInput(inputType,time1)}>{inputPrompt4}</button> */}

            {/* <p>The time you entered was {time}</p> */}
        </div>
    )
}

export default Input







    // const [time2, setTime2] = useState(0);
    // const [time3, setTime3] = useState(0);

    // const clickey = (numName, numUpdate) => {
    //      localStorage.setItem(numName, +numUpdate)
    //      console.log(numName + " is being updated with value "+numUpdate)
    //     //  clickRoute()
    //     //  localStorage.setItem('breakTime', +time2)
    //     //  localStorage.setItem('iterations', +time3)
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`The name you entered was: ${time}`)
    // }
