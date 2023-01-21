import React, { Component, useState, useEffect } from 'react'
import styles from '@components/xmas/Login.module.css'
import SubmissionCode from './SubmissionCode';


// let curr_group = getGroupObject()

export default function Login({ setLoginOrSignUp, move }) {
    // const [userCheckVal, setUserCheckVal] = useState('')
    // const [userPasswordCheckVal, setUserPasswordCheckVal] = useState('')
    // const [validName, setValidName] = useState('')
    // const [addPrompt, setAddPrompt] = useState('')
    // const [addSecPrompt, setAddSecPrompt] = useState('')
    // const [greenSwitch, setGreenSwitch] = useState(false)
    // const [greenSecSwitch, setSecGreenSwitch] = useState(false)
    // const [viewPassword, setViewPassword] = useState('password')
    // const [createNew, setCreateNew] = useState(false)
    const [focus, setFocus] = useState('login')
    const [submitCode, setSubmitCode] = useState()

    // const [userGenResult, setUserGenResult] = useState('')

    // let updater = 0
    // let newVal = 0;

    useEffect(() => {
        setSubmitCode(<SubmissionCode prompt={"Enter your group's name"} isNew={false} setCode={setSubmitCode} move={move} focus={'login'} />)
    }, [])


    const changeFocus = (current) => {
        if (focus === 'login' && current !== 'login') {
            setFocus('signup')
            setSubmitCode(<SubmissionCode prompt={"Let's create a group!"} isNew={true} setCode={setSubmitCode} move={move} focus={'signup'} />)
            move(false)

        } else if (focus === 'signup' && current !== 'signup') {

            setFocus('login')
            setSubmitCode(<SubmissionCode prompt={"Enter your group's name"} isNew={false} setCode={setSubmitCode} move={move} focus={'login'} />)
            move(false)

        }
    }


    return (
        <>
            <div className={styles.login_container}>

                <div className={styles.login_signup_wrapper}>
                    <button className={styles.submit_buttonl} style={{ color: focus === 'login' ? 'white' : 'black', backgroundColor: focus === 'login' ? 'black' : 'white' }} onClick={() => changeFocus('login')}>Log In</button>
                    <button className={styles.submit_buttonr} style={{ color: focus === 'signup' ? 'white' : 'black', backgroundColor: focus === 'signup' ? 'black' : 'white' }} onClick={() => changeFocus('signup')}>Sign Up</button>
                </div>
                {submitCode}
                <br></br>
                <br></br>
            </div>
        </>
    )
}
