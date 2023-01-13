import React, { Component, useState, useEffect } from 'react'
import styles from '@components/bio/LoginInput.module.css'

// import { useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router';
import About from 'pages/about';
import XMAS_CheckUser from './DB/XMAS_CheckUser';
import XMAS_ValidateLogin from './DB/XMAS_ValidateLogin';
import XMAS_AddNewUser from './DB/XMAS_AddNewUser';

import UserPreferences from '@components/bio/UserPreferences';
// import LogActivity from '@components/DBcomponents/LogActivity';
import { getGroupObject } from './DB/curr_group_data';
import XMAS_GetGroupObject from './DB/XMAS_GetGroupObject';

// let curr_group = getGroupObject()

export default function UserSelect({ groupData, setGroupData}) {
    const [userCheckVal, setUserCheckVal] = useState('')
    const [userPasswordCheckVal, setUserPasswordCheckVal] = useState('')
    const [validName, setValidName] = useState('')
    const [addPrompt, setAddPrompt] = useState('')
    const [addSecPrompt, setAddSecPrompt] = useState('')
    const [greenSwitch, setGreenSwitch] = useState(false)
    const [greenSecSwitch, setSecGreenSwitch] = useState(false)
    const [viewPassword, setViewPassword] = useState('password')
    const [createNew, setCreateNew] = useState(false)
    const [userGenResult, setUserGenResult] = useState('')
    // const [groupData, setGroupData] = useState(getGroupObject())

    // let groupData = getGroupObject()

   

    return (
        <>   <div>
            {groupData[0].group_members.map((index) => {
                console.log("----------------> this is the index: " + index)
                return (
                    <div className={styles.gift_box}>
                        <div key={index}>
                            <div>{groupData[0].group_members[index]}</div>
                        </div>
                    </div>

                )
            })
            }
        </div>
            <div className={styles.login_container}>
                Who are you ?




                <br></br>
                <div className={styles.warning} >{addPrompt}</div>
                <br></br>
            </div>
            <button className={styles.submit_button} onClick={getinfo}>Create a Group!</button>

            <br></br>

            <button className={styles.submit_button} >Log In</button>
            <br></br>

        </>
    )
}

