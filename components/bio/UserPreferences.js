import React, { useState, useEffect } from 'react';
import styles from './SignupLogin.module.css'
import LoginInput from './LoginInput';
import LoginWindow from './LoginWindow';
import LogActivity from '@components/DBcomponents/LogActivity';

export default function UserPreferences({ setLoginOrSignUp }) {

    //logic to see if they are already logged in or not



    const logOut = () => {
        LogActivity(localStorage.getItem('uid'), "logged out")
        localStorage.setItem('username', 'null');
        localStorage.setItem('password', 'null');
        localStorage.setItem('uid', 0);
        setLoginOrSignUp('choose')
    }


    return (
        <>
            <div className={styles.login_container}>
                <div className={styles.login_text}>
                    Welcome {localStorage.getItem('username')}! You can find your preferences here :)
                    <br></br>
                    <br></br>
                    {/* <a href='/login'><button className={styles.login_button}>Login</button></a> */}
                    <button className={styles.login_button} onClick={logOut}>Log Out</button>

                    <br></br>
                    <br></br>
                    {/* <a href='/login'><button className={styles.login_button}>Signup</button></a> */}
                    {/* <button className={styles.login_button} onClick={signUp}>Signup</button> */}

                </div>
                {/* <LoginInput inputPrompt1={"Enter a username"} fieldPrompt={"e.g. yeagle_bagel"}/> */}
            </div>
        </>
    )
}
