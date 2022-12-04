import React, {Component, useState, useEffect } from 'react'
import styles from './Input.module.css'


const Input = ({handleGeneralInput, inputType, inputPrompt1, func, state, dispatch}) => {
    const [time1, setTime1] = useState(0);

    return (
        <div className={styles.form}    >   {/* onSubmit={handleSubmit}*/}
            <label>{inputPrompt1} <br className='btn'></br><br className='btn'></br>
                <input
                    type="number"
                    value={time1}
                    onChange={(e) => {
                        console.log("handle click was invoked")
                        dispatch(func(+e.target.value))
                        setTime1(+e.target.value)
                        console.log(+e.target.value)
                        console.log("this is time1: " + +time1)

                        // handleGeneralInput(inputType,time1)
                    }
                    }/>
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
