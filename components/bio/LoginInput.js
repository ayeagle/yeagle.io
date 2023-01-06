import React, { Component, useState, useEffect } from 'react'
import styles from './LoginInput.module.css'
import CheckUser from '@components/DBcomponents/CheckUser';

export default function LoginInput({ type, inputPrompt1, fieldPrompt }) {
    const [userCheckVal, setUserCheckVal] = useState('')
    const [userPasswordCheckVal, setUserPasswordCheckVal] = useState('')
    const [validName, setValidName] = useState('')
    const [addPrompt, setAddPrompt] = useState('')
    const [addSecPrompt, setAddSecPrompt] = useState('')
    const [greenSwitch, setGreenSwitch] = useState(false)
    const [greenSecSwitch, setSecGreenSwitch] = useState(false)
    const [viewPassword, setViewPassword] = useState('password')

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



    useEffect(() => {



    },[greenSwitch, greenSecSwitch])


    return (
        <>
            <div className={styles.form}>
                <div className={styles.inline_wrapper}>
                    <label>{inputPrompt1} <br />
                        <input
                            className={styles.input}
                            type="string"
                            placeholder={fieldPrompt}
                            // value={time1}
                            onChange={(e) => {
                                setUserCheckVal(e.target.value)
                            }
                            } />
                    </label>
                    <button className={styles.check_button} onClick={sendUsernameCheck}>Check Username</button>
                </div>
                <div className={styles.warning} style={{ color: greenSwitch ? "green" : "red" }}>{addPrompt}</div>
                <br></br>
                <div className={styles.inline_wrapper}>
                    <label>Enter a password<br />
                        <input
                            className={styles.input}
                            type={viewPassword}
                            placeholder="e.g. test_password"
                            // value={time1}
                            onChange={(e) => {
                                setUserPasswordCheckVal(e.target.value)
                            }
                            } />
                    </label>
                    <button className={styles.check_button} style={{ width: "15%" }} onClick={changePasswordVisibility}>View</button>
                    <button className={styles.check_button} style={{ width: "25%" }} onClick={sendPasswordCheck}>Check</button>
                    <div className={styles.warning} style={{ color: greenSecSwitch ? "green" : "red" }}>{addSecPrompt}</div>
                    <div className={styles.warning} style={{ bottom: "-30px" }}>This website is a test project with minimal security. Please do not enter any passwords used on other sites.</div>

                </div>

            </div>
            <br></br>

            <button className={styles.submit_button} style={{display: (greenSwitch && greenSecSwitch) ? '' : "none"}} onClick={sendPasswordCheck}>Create Account</button>
            <br></br>

        </>
    )
}
