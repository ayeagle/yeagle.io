import React, { useState, useEffect } from 'react';
import styles from './LoginWindow.module.css'
import LoginInput from './LoginInput';


export default function LoginWindow() {

    //logic to see if they are already logged in or not


    const logClick = () => {

        //logic to see if they are

    }

    return (
        <>
            <div className={styles.login_container}>
                    <LoginInput inputPrompt1={"Enter a username"} fieldPrompt={"e.g. yeagle_bagel"}/>
            </div>
        </>
    )
}
