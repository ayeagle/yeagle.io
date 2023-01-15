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
import UserSelect from './UserSelect';


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
    const [groupData, setGroupData] = useState(curr_group)


    const redirect = (loc) => {
        setTimeout(() => {
            // window.location.href = loc;
            setCode(loc)
        }, 1000);

    }


    const getGroupDataFromServer = () => {
        let promise = XMAS_GetGroupObject(localStorage.getItem('group_name'), localStorage.getItem('group_id'))
        promise.then((data) => {
            setValidName(!data)
            setAddPrompt("Successful Login")
            console.log("curr_group data available just before redirect")
            // curr_group = data
            // updateGroupObject(data)
        }
        )
    }


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Perform desired action
      console.log('Enter key pressed');
      validate()
    }
  }



    const validate = () => {
        // let promise = XMAS_ValidateLogin(userCheckVal)
        let promise = XMAS_CheckUser(userCheckVal, 1)



        promise.then((data) => {
            // setValidName(!data)
            // console.log(!data + " this is in the inverse data")
            // console.log("data: " + data)
            // console.log("isNew: " + isNew)

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
                    // setCreateNew(false)
                    move(true)
                    // getGroup()
                    curr_group.group_name = userCheckVal
                    curr_group.num_users = numUsers
                    console.log("this is the curr group after name add: ")
                    // console.log(curr_group)

                    // updateGroupObject(curr_group)
                    localStorage.setItem('group_name', userCheckVal);

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
                    // console.log("curr_group data available just before redirect")

                    // console.log(curr_group)
                    console.log("about to redirect...")

                    // setGroupData(data)

                    localStorage.setItem('group_name', data.name);
                    localStorage.setItem('group_id', data.id);
                    getGroupDataFromServer()

                    // updateGroupObject(curr_group)

                    redirect(<UserSelect groupData={groupData}/>)

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
                            }}
                            onKeyDown={event => {
                                if(event.key === 'Enter'){
                                    validate()                                
                                }
                             }} />
                    </label>
                    <br></br>
                    <br></br>

                <div className={styles.warning} style={{ color: greenSwitch ? "green" : "red" }}>{addPrompt}</div>

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
                            }}
                            onKeyDown={event => {
                                if(event.key === 'Enter'){
                                    validate()                                
                                }
                             }} />
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



                    // getGroup()
                    // redirect('/xmas/create')