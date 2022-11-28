import React, {Component, useState, useEffect } from 'react'
// import styles from './Input.module.css'



// const Input = ({ handleClick }) => { //args are called props
//     return (
//         <>
//             <form onSubmit={(e) => {
//                 e.preventDefault()
//                 console.log(document.getElementById("fname").value)

//                 handleClick(document.getElementById("fname").value)
//                 console.log(document.getElementById("fname").value)
//             }}>
//                 <label>First name:</label>
//                 <input type="number" id="fname" name="fname" /><br></br>
//                 <input type="button" value="Submit" />
//             </form>
//         </>
//     )
// }

// export default Input
// br {
//     display: block;
//     margin: 10px 0;
//  }

const Input = ({clickRoute, handleInputClick1, handleInputClick2, handleInputClick3, inputPrompt1, inputPrompt2, inputPrompt3 }) => {
    const [time1, setTime1] = useState(0);
    // const [time2, setTime2] = useState(0);
    // const [time3, setTime3] = useState(0);

    const clickey = (numName, numUpdate) => {
         localStorage.setItem(numName, +numUpdate)
         console.log(numName + " is being updated with value "+numUpdate)
         clickRoute()
        //  localStorage.setItem('breakTime', +time2)
        //  localStorage.setItem('iterations', +time3)
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`The name you entered was: ${time}`)
    // }

    return (
        <div className={styles.form} >   {/*onSubmit={handleSubmit}*/}
            <label>{inputPrompt1} <br className='btn'></br><br className='btn'></br>
                <input
                    type="number"
                    value={time1}
                    onChange={(e) => {
                        setTime1(e.target.value)
                        clickey('workTime',time1)
                    }
                    }/>
            </label>
            <br></br>
            <br></br>
            <label>{inputPrompt2} <br className='btn'></br><br className='btn'></br>
                <input
                    type="number"
                    value={time2}
                    onChange={(e) => {
                        setTime2(e.target.value)
                        clickey('breakTime',time2)
                    }
                    }/>
            </label>
            <br></br>
            <br></br>
            <label>{inputPrompt3} <br className='btn'></br><br className='btn'></br>
                <input
                    type="number"
                    value={time3}
                    onChange={(e) => {
                        setTime3(e.target.value)
                        clickey('breakTime',time3)
                    }
                    }/>
            </label>
            <button className='btn' onClick= { handleInputClick1(time1), handleInputClick2(time2), handleInputClick3(time3)}>Let's Get to Work!</button>

            {/* <p>The time you entered was {time}</p> */}
        </div>
    )
}

export default Input
