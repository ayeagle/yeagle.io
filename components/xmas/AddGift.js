import React, { Component, useState, useEffect } from 'react'
import styles from '@components/xmas/AddGift.module.css'
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


    const [giftName, setGiftName] = useState('')
    const [giftURL, setGiftURL] = useState('')
    const [giftCost, setGiftCost] = useState(0)
    const [giftDetails, setGiftDetails] = useState('')


    console.log("////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")
    console.log(localStorage.getItem('current_user'))
    console.log(localStorage.getItem('group_name'))
    console.log(localStorage.getItem('group_id'))
    console.log("////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")

    useEffect(() => {

    }, [])

    const validate = () => {

        if (!giftName) {
            setAddPrompt("Oops you didn't enter a gift name")
            setGreenSwitch(false)
            return
        } else if (!Number.isInteger(+giftCost)) {
            setAddPrompt("The cost needs be a round number (without symbols)")
            setGreenSwitch(false)
            return
        }
        setGiftAdded(true)
        //potentially other forms of validation
        let promise = XMAS_AddGift(
            localStorage.getItem('current_user'),
            localStorage.getItem('group_id'),
            giftName,
            giftURL,
            giftCost,
            giftDetails
        )
        setAddPrompt('')

        setGiftName('')
        setGiftURL('')
        setGiftCost(0)
        setGiftDetails('')

        promise.then((data) => {
            console.log("yay we did it or something")
        }
        )
    }

    useEffect(() => {
        setGiftAdded(false)
        setGreenSwitch(true)
    }, [giftAdded, setGiftAdded, setGreenSwitch, greenSwitch])


    return (
        <>
            <div className={styles.add_gift_container}>
                <Spacer height="20vw" />
                <div className={styles.login_container}>
                    <div className={styles.title}>
                        Add new gifts ideas below!
                    </div>
                    <br></br>

                    <br></br>
                    <div className={styles.login_signup_wrapper}>
                        <div className={styles.form}>
                            {/* {prompt} */}
                            <div className={styles.inline_wrapper}>
                                <div style={{ display: "flex", flexDirection: "row" }}>

                                    <input
                                        className={styles.input}
                                        type="string"
                                        placeholder="Gift idea/name"
                                        value={giftAdded ? '' : null}
                                        onChange={(e) => {
                                            setGiftName(e.target.value)
                                        }}
                                        onKeyDown={event => {
                                            if (event.key === 'Enter') {
                                                // validate()                                
                                            }
                                        }} />
                                    <div className={styles.input_option} style={{ color: greenSwitch ? "" : "red", transition: greenSwitch ? "3s ease-in" : "0s" }}>required</div>
                                </div>
                                <br></br>
                                <br></br>
                            </div>
                            <div className={styles.inline_wrapper}>
                                <div style={{ display: "flex", flexDirection: "row" }}>

                                    <input
                                        className={styles.input}
                                        type="string"
                                        placeholder="Link of gift or similar"
                                        value={giftAdded ? '' : null}

                                        onChange={(e) => {
                                            setGiftURL(e.target.value)
                                        }}
                                        onKeyDown={event => {
                                            if (event.key === 'Enter') {
                                                // validate()                                
                                            }
                                        }} />
                                    <div className={styles.input_option} style={{ color: greenSwitch ? "" : "rgb(211, 134, 0)", transition: greenSwitch ? "3s ease-in" : "0s" }}>recommended</div>
                                </div>
                                <br></br>
                                <br></br>

                            </div>
                            <div className={styles.inline_wrapper}>
                                <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>

                                    <br />
                                    <input
                                        className={styles.input}
                                        type="string"
                                        placeholder="Approx. cost"
                                        value={giftAdded ? '' : null}
                                        onChange={(e) => {
                                            setGiftCost(e.target.value)
                                        }}
                                        onKeyDown={event => {
                                            if (event.key === 'Enter') {
                                                // validate()                                
                                            }
                                        }} />
                                    <div className={styles.input_option}>optional</div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>

                            <div className={styles.inline_wrapper}>
                                <div style={{ display: "flex", flexDirection: "row" }}>

                                    <br />
                                    <textarea
                                        rows="1"
                                        className={styles.input_long}
                                        style={{ height: "10vh" }}
                                        type="text"
                                        placeholder="Additional details"
                                        value={giftAdded ? '' : null}
                                        onChange={(e) => {
                                            setGiftDetails(e.target.value)
                                            e.target.style.maxHeight = "auto";
                                            e.target.style.maxHeight = e.target.scrollHeight + "px";
                                        }}
                                        onKeyDown={event => {
                                            if (event.key === 'Enter') {
                                                // validate()                                
                                            }
                                        }} />
                                    <div className={styles.input_option} style={{ color: greenSwitch ? "" : "rgb(211, 134, 0)", transition: greenSwitch ? "3s ease-in" : "0s" }}>recommended</div>
                                    <br></br>
                                    <br></br>

                                </div>
                            </div>

                            <br></br>

                            {giftAdded ? <div className={styles.gift_added}>Gift successfully added!</div> : <div className={styles.gift_added_after}>Gift successfully added! </div>}
                            <div className={styles.warning} style={{ color: greenSwitch ? "black" : "red", transition: greenSwitch ? "3s ease-in" : "0s" }}>{addPrompt}</div>
                            <br></br>
                            <button className={styles.go_button} onClick={validate} >Let's go!</button>
                            <br></br>
                            <br></br>
                        </div>

                    </div>

                </div>
                <Spacer />
            </div>
        </>
    )
}


