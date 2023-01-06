import React, { Component, useState, useEffect } from 'react'
import styles from './LoginInput.module.css'
import CheckUser from '@components/DBcomponents/CheckUser';

export default function LoginInput({ type, inputPrompt1, fieldPrompt }) {
    const [userCheckVal, setUserCheckVal] = useState('')
    const [validName, setValidName] = useState('')
    const [addPrompt, setAddPrompt] = useState('')
    let updater = 0
    let newVal = 0;

    console.log(typeof validName)

    const sendCheck = () => {
        let promise = CheckUser(userCheckVal)

        promise.then((data) => {
            setValidName(!data)
            console.log(!data + " this is in the inverse data")

            if (userCheckVal == ''){
                setAddPrompt("Oops you didn't enter anything!")
            } else if (!data) {
                setAddPrompt("That name is available!")
            } else {
                setAddPrompt("That name is already taken, sorry!")
            }
        })
    }

    return (
        <>
            <div className={styles.form}>
                <div className={styles.inline_wrapper}>
                    <label>{inputPrompt1} <br/>
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
                    <button className={styles.check_button} onClick={sendCheck}>Check Username</button>
                </div>
            </div>
            <div style={{ color: "black" }}>{addPrompt}</div>

        </>
    )
}
