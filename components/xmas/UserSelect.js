import React, { Component, useState, useEffect } from 'react'
import styles from '@components/xmas/UserSelect.module.css'

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
let curr_group = getGroupObject()

export default function UserSelect({ }) {
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
    const [data, setData] = useState('')
    const [runOnce, setRunOnce] = useState(0)

    // let curr_group = await getGroupObject();


    if (runOnce === 0) {
        // validate()
        setRunOnce(2)
        console.log('fetching object')
        curr_group = getGroupObject();
        console.log('retrieved object')
        console.log(curr_group)
    }



    // let curr_group = getGroupObject()


    // async function validate () {
    //     // let promise = XMAS_ValidateLogin(userCheckVal)
    //     let promise = await XMAS_GetGroupObject(localStorage.getItem('group_name'), localStorage.getItem('group_id'))

    //     // localStorage.setItem('group_name', data.name);
    //     // localStorage.setItem('group_id', data.id);


    //     promise.then((data) => {
    //         setValidName(!data)
    //         // console.log(!data + " this is in the inverse data")
    //         // console.log("data: " + data)
    //         // console.log("isNew: " + isNew)
    //         setAddPrompt("Successful Login")
    //         console.log("curr_group data available just before redirect")
    //         // console.log(curr_group)
    //         // redirect(<UserSelect groupData={curr_group}/>)
    //         // updateGroupObject(curr_group)
    //         curr_group = data
    //         // getGroup()
    //         // redirect('/xmas/create')

    //     }
    //     )
    // }


    // useEffect(() => {
    //     // setData(curr_group)
    // }, [])

    const userChoose = (name) => {
        console.log(name)
        // LogActivity(localStorage.getItem('uid'), "logged out")
        localStorage.setItem('current_user', name);
        localStorage.setItem('group_id', curr_group.group_id);
        redirect('/giftly/home')
    }


    const redirect = (loc) => {
        // setTimeout(() => {
        window.location.href = loc;
        // setCode(loc)
        // }, 100);

    }


    // let groupData = getGroupObject()
    console.log("this is the group being passed into the userselect page")
    // console.log(curr_group)

    console.log("this is the goupdata passed into the userselect page")
    // console.log(curr_group.group_members[0])

    // console.log(groupData)

    // if (data == '') return <></>

    return (
        <>
            <div className={styles.title_wrapper}>
                And who might you be?
            </div>
            {curr_group.name != '' ? (<div>
                {curr_group.group_members.map((name, index) => {
                    console.log("----------------> this is the index: " + index)
                    console.log("----------------> this is the name: " + name)

                    return (
                        <div className={styles.name_option} onClick={() => userChoose(name)}>
                            <div key={index}>
                                <div key={index}>{name}</div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            ) : (
                <div>Loading...</div>)}
        </>
    )
}

