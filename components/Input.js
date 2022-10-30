import React, {Component, useState, useEffect } from 'react'
import reactDom from 'node_modules/react-dom/index';



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

const Input = ({ handleInputClick, inputPrompt }) => {
    const [time, setTime] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${time}`)
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label>{inputPrompt} <br className='btn'></br><br className='btn'></br>
                <input
                    type="number"
                    value={time}
                    onChange={(e) =>
                        setTime(e.target.value)
                    }/>
            </label>
            <input type="submit" className='btn' onClick= {handleInputClick(time)}/>

            {/* <p>The time you entered was {time}</p> */}
        </form>
    )
}

export default Input
