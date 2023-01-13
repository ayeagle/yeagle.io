import React, { Component, useState, useEffect } from 'react'
import styles from '@components/xmas/Login.module.css'

// import { useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router';
import About from 'pages/about';
import XMAS_CheckUser from './DB/XMAS_CheckUser';
import XMAS_ValidateLogin from './DB/XMAS_ValidateLogin';
import XMAS_AddNewUser from './DB/XMAS_AddNewUser';

// import LogActivity from '@components/DBcomponents/LogActivity';
import { getGroupObject, updateGroupObject } from './DB/curr_group_data';
import XMAS_GetGroupObject from './DB/XMAS_GetGroupObject';
import Create from '@components/xmas/Create'


let curr_group = getGroupObject()

export default function SubmissionCode({ prompt, isNew, setCode, move, focus}) {
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


    const redirect = (loc) => {
        setTimeout(() => {
            // window.location.href = loc;
            setCode(loc)
        }, 100);

    }


    const validate = () => {
        // let promise = XMAS_ValidateLogin(userCheckVal)
        let promise = XMAS_CheckUser(userCheckVal, 2)



        promise.then((data) => {
            setValidName(!data)
            console.log(!data + " this is in the inverse data")
            console.log("data: " + data)
            console.log("isNew: " + isNew)

            if (isNew){

                if (numUsers <= 2) {
                    // console.log("thats not valid num users ")
                    setAddSecPrompt("That's not a valid number of users!")
                    return
                } else {
                    setAddSecPrompt("")
                }
                if (!data) {
                    setAddPrompt("That group name's available!")
                    setGreenSwitch(true)
                    setCreateNew(false)
                    move(true)
                    // getGroup()
                    curr_group[0].group_name = userCheckVal
                    curr_group[0].num_users = numUsers
                    console.log("this is the curr group after name add: ")
                    console.log(curr_group)

                    updateGroupObject(curr_group)
                    redirect(<Create/>)
                } else {
                    setAddPrompt("Hmm looks like that group name is taken...")
                    setGreenSwitch(false)
                    setCreateNew(true)
                }
            } else {
                if (data) {
                    setAddPrompt("Successful Login")
                    setGreenSwitch(true)
                    setCreateNew(false)
                    getGroup()
                    // redirect('/xmas/create')
                } else {
                    setAddPrompt("Hmm I don't think that group exists...")
                    setGreenSwitch(false)
                    setCreateNew(true)
                }
            }
        })

    }

    return (
        <>
            <div className={styles.form}>
                {prompt}
                <div className={styles.inline_wrapper}>
                    <label>
                        <br />
                        <input
                            className={styles.input}
                            type="string"
                            placeholder="group name"
                            onChange={(e) => {
                                setUserCheckVal(e.target.value)
                            }
                            } />
                    </label>
                </div>
                <div className={styles.inline_wrapper} style={{display: focus === 'login' ? "none" : ""}}>
                    <label>
                        <br />
                        <input
                            className={styles.input}
                            type="number"
                            placeholder="# of users"
                            onChange={(e) => {
                                setNumUsers(e.target.value)
                            }
                            } />
                    </label>
                </div>
                <br></br>
                <div className={styles.warning} style={{ color: greenSwitch ? "green" : "red" }}>{addSecPrompt}</div>
                <br></br>
                <button className={styles.go_button} onClick={validate}>Let's go!</button>
            </div>

        </>
    )
}
