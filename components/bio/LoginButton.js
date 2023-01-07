import React, { useState, useEffect } from 'react';
import styles from './LoginButton.module.css'



export default function LoginButton({ position, right, margin }) {

    const [loginPlaceholder, setLoginPlaceholder] = useState('')
    //logic to see if they are already logged in or not


    // const logClick = () => {

    //     //logic to see if they are

    // }

    const handleStorageChange = () => {
        if (localStorage.getItem('username') == 'null') {
            setLoginPlaceholder("Login")
        } else {
            setLoginPlaceholder("Profile")
        }
    }



    useEffect(() => {
        handleStorageChange()
    }, [])

    return (
        <>
            <div className={styles.login_container} style={{ position: position, right: right, margin: margin }}>
                <a href='/login' className={styles.login_text}>
                    <div className={styles.login_text}>{loginPlaceholder}</div>
                </a>
            </div>
        </>
    )
}
