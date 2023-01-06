import React, { useState, useEffect } from 'react';
import styles from './LoginButton.module.css'



export default function LoginButton() {

    //logic to see if they are already logged in or not


    const logClick = () => {

        //logic to see if they are 

    }

    return (
        <>
            <div className={styles.login_container} onClick={logClick}>
                <a href='/login' className={styles.login_text}>
                    <div className={styles.login_text}>Login / Signup</div>
                </a>
            </div>
        </>
    )
}
