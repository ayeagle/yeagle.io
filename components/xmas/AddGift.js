import React, { Component, useState, useEffect } from 'react'
import styles from '@components/xmas/AddGift.module.css'
import { Redirect } from 'react-router';
import XMAS_AddGift from './DB/XMAS_AddGift';
import { getGroupObject } from './DB/curr_group_data';
import XMAS_GetGroupObject from './DB/XMAS_GetGroupObject';
import Spacer from '@components/bio/Spacer';
import { SP } from 'node_modules/next/dist/shared/lib/utils';


let curr_group = getGroupObject()

export default function AddGift({ }) {
    const [userCheckVal, setUserCheckVal] = useState('')
    const [userPasswordCheckVal, setUserPasswordCheckVal] = useState('')
    const [validName, setValidName] = useState('')
    const [addPrompt, setAddPrompt] = useState('')
    const [addSecPrompt, setAddSecPrompt] = useState('')
    const [greenSwitch, setGreenSwitch] = useState(false)
    const [greenSecSwitch, setSecGreenSwitch] = useState(false)
    const [viewPassword, setViewPassword] = useState('password')
    const [createNew, setCreateNew] = useState(false)
    const [numUsers, setNumUsers] = useState(0)
    const [groupData, setGroupData] = useState(curr_group)




    useEffect(() => {

    }, [])




    return (
        <>
            <div className={styles.login_container}>
                <div className={styles.login_signup_wrapper}>
                <div className={styles.form}>
                {/* {prompt} */}
                <div className={styles.inline_wrapper}>
                    <label>
                        <br />
                        <input
                            className={styles.input}
                            type="string"
                            placeholder="gift idea"
                            onChange={(e) => {
                                // setUserCheckVal(e.target.value)
                            }}
                            onKeyDown={event => {
                                if(event.key === 'Enter'){
                                    // validate()                                
                                }
                             }} />
                    </label>
                    <br></br>
                    <br></br>

                <div className={styles.warning} style={{ color: greenSwitch ? "green" : "red" }}>{addPrompt}</div>

                </div>
                <div className={styles.inline_wrapper}>
                    <label>
                        <br />
                        <input
                            className={styles.input}
                            type="string"
                            placeholder="url example"
                            onChange={(e) => {
                                // setNumUsers(e.target.value)
                            }}
                            onKeyDown={event => {
                                if(event.key === 'Enter'){
                                    // validate()                                
                                }
                             }} />
                    </label>
                </div>
                <div className={styles.inline_wrapper}>
                    <label>
                        <br />
                        <input
                            className={styles.input}
                            type="number"
                            placeholder="approx. cost"
                            onChange={(e) => {
                                // setNumUsers(e.target.value)
                            }}
                            onKeyDown={event => {
                                if(event.key === 'Enter'){
                                    // validate()                                
                                }
                             }} />
                    </label>
                </div>
                <div className={styles.inline_wrapper}>
                    <label>
                        <br />
                        <input
                            className={styles.input}
                            style={{height: "10vh"}}
                            type="string"
                            placeholder="full details"
                            onChange={(e) => {
                                // setNumUsers(e.target.value)
                            }}
                            onKeyDown={event => {
                                if(event.key === 'Enter'){
                                    // validate()                                
                                }
                             }} />
                    </label>
                </div>
                <br></br>
                <div className={styles.warning} style={{ color: greenSwitch ? "green" : "red" }}>{addSecPrompt}</div>
                <br></br>
                <button className={styles.go_button} >Let's go!</button>
            </div>

                </div>

            </div>
            <Spacer/>
            <Spacer/>
            <Spacer/>

        </>
    )
}


