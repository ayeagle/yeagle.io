import React, { useState, useEffect } from 'react';
import styles from './SignupLogin.module.css'
import LoginInput from './LoginInput';
import LoginWindow from './LoginWindow';


export default function SignupLogin({setLoginOrSignUp}) {

    //logic to see if they are already logged in or not


    const logClick = () => {

        //logic to see if they are

    }

    const login = () => {
        setLoginOrSignUp('login')
    }

    const signUp = () => {
        setLoginOrSignUp('sign up')
    }

    return (
        <>
            <div className={styles.login_container}>
                <div className={styles.login_text}>
                    Login or signup to make a new account that saves your preferences!
                    <br></br>

                    <br></br>

                    {/* <a href='/login'><button className={styles.login_button}>Login</button></a> */}
                <button className={styles.login_button} onClick={login}>Login</button>

                    <br></br>
                    <br></br>
                    {/* <a href='/login'><button className={styles.login_button}>Signup</button></a> */}
                    <button className={styles.login_button} onClick={signUp}>Signup</button>

                </div>
                    {/* <LoginInput inputPrompt1={"Enter a username"} fieldPrompt={"e.g. yeagle_bagel"}/> */}
            </div>
        </>
    )
}
