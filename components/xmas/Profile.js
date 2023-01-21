import React, { Component, useState, useEffect } from 'react'
import styles from '@components/xmas/Profile.module.css'
import { Redirect } from 'react-router';
import XMAS_AddGift from './DB/XMAS_AddGift';
import { getGroupObject } from './DB/curr_group_data';
import XMAS_GetGroupObject from './DB/XMAS_GetGroupObject';
import Spacer from '@components/bio/Spacer';






let curr_group = getGroupObject()

export default function AddGift({ }) {
    const [userCheckVal, setUserCheckVal] = useState('')
    const [userPasswordCheckVal, setUserPasswordCheckVal] = useState('')
    const [validName, setValidName] = useState('')
    const [addPrompt, setAddPrompt] = useState('')
    const [addSecPrompt, setAddSecPrompt] = useState('')
    const [greenSwitch, setGreenSwitch] = useState(true)
    // const [greenSecSwitch, setSecGreenSwitch] = useState(true)
    const [viewPassword, setViewPassword] = useState('password')
    const [createNew, setCreateNew] = useState(false)
    const [numUsers, setNumUsers] = useState(0)
    const [groupData, setGroupData] = useState(curr_group)
    const [giftAdded, setGiftAdded] = useState(false)
    const [currUser, setCurrUser] = useState('')


    useEffect(() => {
        setGiftAdded(false)
        setGreenSwitch(true)
    }, [giftAdded, setGiftAdded, setGreenSwitch, greenSwitch])


    useEffect(() => {
        setCurrUser(localStorage.getItem('current_user'))
    }, [])


    const editInfo = () => {
        
    }






    return (
        <>
            <div className={styles.add_gift_container}>
                <Spacer height="20vw" />
                <div className={styles.login_container}>
                    <div className={styles.title}>
                        Your Profile
                    </div>

                    <br></br>

                    <br></br>
                    <div className={styles.login_signup_wrapper}>
                        <div className={styles.form}>

                            <div className={styles.row_align}>
                                <div>
                                    Logged in as:
                                </div>
                                <div>
                                    {currUser} <button className={styles.change_data_button}><img className={styles.change_data_button_image} src='/IMGassets/edit.png' /></button>

                                </div>
                            </div>
                            <div className={styles.row_align}>
                                <div>
                                    Group Name:
                                </div>
                                <div>
                                    {curr_group.group_name} <button className={styles.change_data_button}><img className={styles.change_data_button_image} src='/IMGassets/edit.png' /></button>
                                </div>
                            </div>
                            <div className={styles.row_align}>
                                <div>
                                    Group Description:
                                </div>
                                <div>
                                    {curr_group.description} <button className={styles.change_data_button}><img className={styles.change_data_button_image} src='/IMGassets/edit.png' /></button>
                                </div>
                            </div>
                            <div className={styles.row_align}> 
                                <div style={{width:"40%", textAlign:  "left"}}>
                                    Current Members:
                                </div> 
                                <div className={styles.name_container} >
                                    {curr_group.group_members.map(function (names, index) {
                                        return (
                                            <div className={styles.name_option} key={index}>{names}</div>
                                        )
                                    }) 

                                    } 
                                </div> <button className={styles.change_data_button}><img className={styles.change_data_button_image} style={{right: "0vw"}} src='/IMGassets/edit.png' /></button> 
                            </div>
                            <br></br>
                            {/* {prompt} */}

                        </div>

                    </div>

                </div>
                <Spacer />
            </div>
        </>
    )
}


