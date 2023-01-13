import React, { Component, useState, useEffect } from 'react'
import styles from '@components/xmas/Login.module.css'

// import { useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router';
import About from 'pages/about';
import XMAS_CheckUser from './DB/XMAS_CheckUser';
import XMAS_ValidateLogin from './DB/XMAS_ValidateLogin';
import XMAS_AddNewUser from './DB/XMAS_AddNewUser';

import create from '/pages/xmas/create.js'
// import LogActivity from '@components/DBcomponents/LogActivity';
import { getGroupObject } from './DB/curr_group_data';
import XMAS_GetGroupObject from './DB/XMAS_GetGroupObject';




let curr_group = getGroupObject()

export default function ActualLogin({ setLoginOrSignUp }) {
    const [userCheckVal, setUserCheckVal] = useState('')
    const [userPasswordCheckVal, setUserPasswordCheckVal] = useState('')
    const [validName, setValidName] = useState('')
    const [addPrompt, setAddPrompt] = useState('')
    const [addSecPrompt, setAddSecPrompt] = useState('')
    const [greenSwitch, setGreenSwitch] = useState(false)
    const [greenSecSwitch, setSecGreenSwitch] = useState(false)
    const [viewPassword, setViewPassword] = useState('password')
    const [createNew, setCreateNew] = useState(false)


    const [userGenResult, setUserGenResult] = useState('')

    // const navigate = useNavigate()

    let updater = 0
    let newVal = 0;



    // console.log(typeof validName)

    // function isValidName(string) {
    //     var regex = /^[a-zA-Z0-9_]+$/;
    //     return regex.test(string);
    // }

    // function isValidPassword(string) {
    //     var regex = /^[a-zA-Z0-9*!.]+$/;
    //     return regex.test(string);
    // }



    const getGroup = () => {
        // let promise = XMAS_ValidateLogin(userCheckVal)
        let promise = XMAS_GetGroupObject(userCheckVal)
        console.log("promise was executed")
    }

        // promise.then((data) => {
        //     // setValidName(!data)
        //     // console.log(!data + " this is in the inverse data")
        //     // console.log("data: " + data)

        //     if (data) {
        //         setAddPrompt("Successful Login")
        //         setGreenSwitch(true)
        //         setCreateNew(false)













        //         setTimeout(() => {
        //             window.location.href='/xmas/create';
        //           }, 1000);


        //         // setLoginOrSignUp('logged in')
        //         // LogActivity(localStorage.getItem('uid'), "logged in normally")
        //     } else {
        //         setAddPrompt("Hmm I don't think that group exists...")
        //         setGreenSwitch(false)
        //         setCreateNew(true)
        //     }
        // })







    const validate = () => {
        // let promise = XMAS_ValidateLogin(userCheckVal)
        let promise = XMAS_CheckUser(userCheckVal, 2)


        promise.then((data) => {
            setValidName(!data)
            // console.log(!data + " this is in the inverse data")
            // console.log("data: " + data)

            if (data) {
                setAddPrompt("Successful Login")
                setGreenSwitch(true)
                setCreateNew(false)


                getGroup()










                // setTimeout(() => {
                //     window.location.href='/xmas/create';
                //   }, 1000);


                // setLoginOrSignUp('logged in')
                // LogActivity(localStorage.getItem('uid'), "logged in normally")
            } else {
                setAddPrompt("Hmm I don't think that group exists...")
                setGreenSwitch(false)
                setCreateNew(true)
            }
        })

    }

    // const sendUsernameCheck = () => {
    //     let promise = XMAS_CheckUser(userCheckVal)

    //     promise.then((data) => {
    //         setValidName(!data)

    //         console.log(!data + " this is in the inverse data")

    //         if (userCheckVal == '') {
    //             setAddPrompt("Oops you didn't enter anything!")
    //             setGreenSwitch(false)
    //         } else if (!isValidName(userCheckVal)) {
    //             setAddPrompt("Special characters and white spaces aren't allowed!")
    //             setGreenSwitch(false)
    //         } else if (!data) {
    //             setAddPrompt("That name is available!")
    //             setGreenSwitch(true)
    //         } else {
    //             setAddPrompt("That name is already taken, sorry!")
    //             setGreenSwitch(false)
    //         }
    //     })
    // }

    // const initUserCreation = () => {
    //     sendUsernameCheck()
    //     sendPasswordCheck()

    //     if (greenSwitch && greenSecSwitch) {
    //         // setUserGenResult(
    //         XMAS_AddNewUser(userCheckVal, userPasswordCheckVal)
    //         // redirect()
    //         // navigate('./about')
    //         //     .then(response => {
    //         //         return response.data
    //         //     })
    //         // )
    //     }
    // }


    return (
        <>
            <div className={styles.login_container}>

                <div className={styles.form}>
                    Have a group already?
                    <div className={styles.inline_wrapper}>
                        <label>
                            <br />
                            <input
                                className={styles.input}
                                type="string"
                                placeholder="group name"
                                onChange={(e) => {
                                    setUserCheckVal(e.target.value)
                                }
                                } />
                        </label>
                    </div>
                    <br></br>
                    <div className={styles.warning} style={{ color: greenSwitch ? "green" : "red" }}>{addPrompt}</div>
                    <br></br>
                    <button className={styles.submit_button} onClick={validate}>Log In</button>
                </div>

                {/* <button className={styles.submit_button} onClick={validate}>Log In</button> */}
                <div>or...</div>
                <br></br>

                <a href="/xmas/create"><button className={styles.submit_button}>Create a new group!</button></a>

                <br></br>
            </div>

        </>
    )
}