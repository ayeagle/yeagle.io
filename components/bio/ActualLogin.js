import React, { Component, useState, useEffect } from 'react'
import styles from './LoginInput.module.css'
import CheckUser from '@components/DBcomponents/CheckUser';
import AddNewUser from '@components/DBcomponents/AddNewUser';
// import { useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router';
import About from 'pages/about';
import ValidateLogin from '@components/DBcomponents/ValidateLogin';
import UserPreferences from '@components/bio/UserPreferences';
import LogActivity from '@components/DBcomponents/LogActivity';



export default function ActualLogin({ setLoginOrSignUp }) {
    const [userCheckVal, setUserCheckVal] = useState('')
    const [userPasswordCheckVal, setUserPasswordCheckVal] = useState('')
    const [validName, setValidName] = useState('')
    const [addPrompt, setAddPrompt] = useState('')
    const [addSecPrompt, setAddSecPrompt] = useState('')
    const [greenSwitch, setGreenSwitch] = useState(false)
    const [greenSecSwitch, setSecGreenSwitch] = useState(false)
    const [viewPassword, setViewPassword] = useState('password')

    const [userGenResult, setUserGenResult] = useState('')

    // const navigate = useNavigate()

    let updater = 0
    let newVal = 0;

    

    console.log(typeof validName)

    function isValidName(string) {
        var regex = /^[a-zA-Z0-9_]+$/;
        return regex.test(string);
    }

    function isValidPassword(string) {
        var regex = /^[a-zA-Z0-9*!.]+$/;
        return regex.test(string);
    }


    const validate = () => {
        let promise = ValidateLogin(userCheckVal,userPasswordCheckVal)

        promise.then((data) => {
            setValidName(!data)
            console.log(!data + " this is in the inverse data")

           if (data) {
                setAddPrompt("Successful Login")
                setGreenSwitch(true)
                setLoginOrSignUp('logged in')
                LogActivity(localStorage.getItem('uid'), "logged in normally")
                        } else {
                setAddPrompt("Uh oh looks like something went wrong...")
                setGreenSwitch(false)
            }
        })
        
    }

    const sendUsernameCheck = () => {
        let promise = CheckUser(userCheckVal)

        promise.then((data) => {
            setValidName(!data)
            console.log(!data + " this is in the inverse data")

            if (userCheckVal == '') {
                setAddPrompt("Oops you didn't enter anything!")
                setGreenSwitch(false)
            } else if (!isValidName(userCheckVal)) {
                setAddPrompt("Special characters and white spaces aren't allowed!")
                setGreenSwitch(false)
            } else if (!data) {
                setAddPrompt("That name is available!")
                setGreenSwitch(true)
            } else {
                setAddPrompt("That name is already taken, sorry!")
                setGreenSwitch(false)
            }
        })
    }


    const sendPasswordCheck = () => {

        if (userPasswordCheckVal == '') {
            setAddSecPrompt("Oops you didn't enter anything!")
            setSecGreenSwitch(false)
        } else if (!isValidPassword(userPasswordCheckVal)) {
            setAddSecPrompt("You can only use letters, numbers, and ! * .")
            setSecGreenSwitch(false)
        } else if (userPasswordCheckVal.length < 6) {
            setAddSecPrompt("Umm... your password needs to be a bit longer.....")
            setSecGreenSwitch(false)
        } else {
            setAddSecPrompt("Looks good to me!")
            setSecGreenSwitch(true)
        }
    }

    const changePasswordVisibility = () => {
        if (viewPassword == 'string') {
            setViewPassword('password')
        } else {
            setViewPassword('string')
        }
    }

    // const redirect = () => {
    //     console.log("redirect function was triggered")
    //     return About()
    // }

    const initUserCreation = () => {
        sendUsernameCheck()
        sendPasswordCheck()

        if (greenSwitch && greenSecSwitch) {
            // setUserGenResult(
                AddNewUser(userCheckVal, userPasswordCheckVal)
                // redirect()
                // navigate('./about')
            //     .then(response => {
            //         return response.data
            //     })
            // )
        }
    }



    useEffect(() => {



    }, [greenSwitch, greenSecSwitch])


    return (
        <>            <div className={styles.login_container}>
            {/* <div style={{color: "black"}}>current user = {localStorage.getItem('username')} and {localStorage.getItem('password')}</div> */}

            <div className={styles.form}>
                <div className={styles.inline_wrapper}>
                    <label>Enter username<br />
                        <input
                            className={styles.input}
                            type="string"
                            placeholder="username"
                            // value={time1}
                            onChange={(e) => {
                                setUserCheckVal(e.target.value)
                            }
                            } />
                    </label>
                    {/* <button className={styles.check_button} onClick={sendUsernameCheck}>Check Username</button> */}
                </div>
                <div className={styles.warning} style={{ color: greenSwitch ? "green" : "red" }}>{addPrompt}</div>
                <br></br>
                <div className={styles.inline_wrapper}>
                    <label>Enter password<br />
                        <input
                            className={styles.input}
                            type={viewPassword}
                            placeholder="password"
                            // value={time1}
                            onChange={(e) => {
                                setUserPasswordCheckVal(e.target.value)
                            }
                            } />
                    </label>
                    <br></br>
                    <button className={styles.check_button} style={{ width: "40%" }} onClick={changePasswordVisibility}>View Password</button>
                    {/* <button className={styles.check_button} style={{ width: "25%" }} onClick={sendPasswordCheck}>Check</button> */}
                    <div className={styles.warning} style={{ color: greenSecSwitch ? "green" : "red" }}>{addSecPrompt}</div>
                    {/* <div className={styles.warning} style={{ bottom: "-30px" }}>This website is a test project with minimal security. Please do not enter any passwords used on other sites.</div> */}

                </div>

            </div>
            <br></br>

            <button className={styles.submit_button} onClick={validate}>Log In</button>
            <br></br>
            </div>

        </>
    )
}
