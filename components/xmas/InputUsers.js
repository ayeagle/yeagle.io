
import Resizer from "@components/functional/Resizer";
import { useEffect, useState } from "react";
import styles from './InputUsers.module.css'
import Spacer from "@components/bio/Spacer";
import LogActivity from "@components/DBcomponents/LogActivity";
import Typing from "@components/bio/Typing";
import Login from "@components/xmas/Login";
import UserSelect from "@components/xmas/UserSelect";
import Gifts from "@components/xmas/Gifts";
import { getGroupObject, updateGroupObject } from '@components/xmas/DB/curr_group_data';
import XMAS_PostGroupObject from './DB/XMAS_PostGroupObject';
// import XMAS_GetGroupObject from './DB/XMAS_GetGroupObject';
// import InputUsers from '@components/xmas/InputUsers'
// import UserSelect from "@components/xmas/UserSelect";



let curr_group = getGroupObject()


export default function InputUsers({ prompt }) {

    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)
    const [limiter, setLimiter] = useState(0)
    const [groupData, setGroupData] = useState('')
    const [nameHold, setNameHold] = useState([''])

    const [nameFloat, setNameFloat] = useState([false])
    const [submitReady, setSubmitReady] = useState(false)
    const [dumb, setDumb] = useState(false)
    const [stylesState, setStyles] = useState([])
    const [progress, setProgress] = useState(false)

    const inputEval = (e, i) => {
        let tempArray = nameFloat
        let tempStyles = styles
        let isReady = 0
        let temp = nameHold
        let temp2 = nameFloat
        temp[i] = (e.target.value)

        if (temp[i] != '' && temp[i] != null) {
            temp2[i] = true
        } else {
            temp2[i] = false
        }

        for (let i = 0; i < curr_group.num_users; i++) {
            console.log(nameHold[i])

            if (nameHold[i] == '' || nameHold[i] == null) {        //
                tempStyles[i] = styles.label
                isReady = 2

            } else {
                tempStyles[i] = styles.label_float
                if (isReady == 0 || isReady == 1) {
                    isReady = 1
                }
            }
        }
        if (isReady == 2) {
            setSubmitReady(false)
        } else {
            setSubmitReady(true)
        }

        setDumb(!dumb)
        setNameHold(temp)
        setNameFloat(temp2)
        setStyles(tempStyles)
        console.log("this is submit ready")
        console.log(submitReady)
    }


    const redirect = (loc) => {
        // setTimeout(() => {
        window.location.href = loc;
        // setCode(loc)
        // }, 100);

    }

    const validate = () => {
        // let promise = XMAS_ValidateLogin(userCheckVal)
        let promise = XMAS_PostGroupObject(curr_group.group_name, nameHold, "this is a test")


        promise.then((data) => {

            curr_group.group_members = nameHold

            updateGroupObject(curr_group)

            setProgress(true)
            // curr_group.
            // setValidName(!data)
            // console.log(!data + " this is in the inverse data")
            // console.log("data: " + data)
            // // console.log("isNew: " + isNew)
            // // setAddPrompt("Successful Login")
            // console.log("curr_group data available just before redirect")
            // console.log(curr_group)
            // redirect(<UserSelect groupData={curr_group}/>)

            // redirect('/giftly/home')

            // updateGroupObject(curr_group)
            // curr_group = data
            // setGroupData(data)
            // if (runOnce === 0) {
            //     // setRunOnce(2)
            //     // location.href = '/giftly/home'
            //     // console.log('fetching object')
            //     // // curr_group = getGroupObject();
            //     // console.log('retrieved object')
            //     // console.log(curr_group)
            // }
            // location.href = '/giftly/home'

            // getGroup()
            // redirect('/giftly/home')

        }
        )
    }

    console.log(curr_group)

    return (
        <div>
            {progress == false ? (
                <>
                    {prompt}
                    < div >
                        {
                            Array.from({ length: curr_group.num_users }, (_, i) => (
                                <div key={i} className={styles.slowDown}>
                                    <br></br>
                                    <label className={stylesState[i] ? stylesState[i] : styles.label}>{"user" + (i + 1)}</label>
                                    <input
                                        className={styles.input}
                                        type="string"
                                        // placeholder={"user " + (i + 1)}
                                        onChange={(e) => {
                                            inputEval(e, i)
                                            // console.log(curr_group)
                                        }
                                        } />
                                </div>

                            ))
                        }
                        < button className={styles.go_button} onClick={validate} style={{ backgroundColor: submitReady ? "rgb(100, 207, 50)" : "", transition: submitReady ? "1.5s" : ".5s", }} >Let's go!</button>
                    </div >
                </>

            ) : (
                // <div></div>
                <UserSelect />
            )
            }
        </div>
    )
}
