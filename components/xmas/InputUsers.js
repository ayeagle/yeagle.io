
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


export default function InputUsers({ prompt, groupData, setGroupData}) {

    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)
    const [limiter, setLimiter] = useState(0)
    // const [groupData, setGroupData] = useState('')
    const [nameHold, setNameHold] = useState([''])

    const [nameFloat, setNameFloat] = useState([false])
    const [submitReady, setSubmitReady] = useState(false)
    const [dumb, setDumb] = useState(false)
    const [stylesState, setStyles] = useState([])
    const [progress, setProgress] = useState(0)
    const [descFloat, setDescFloat] = useState(false)
    const [desc, setDesc] = useState('')


    useEffect(() => {
        if (desc != '') {
            setDescFloat(true)
        } else {
            setDescFloat(false)
        }
    }, [desc, setDesc])

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

    const backClick = () => {
        setProgress(progress - 1)
    }

    const firstClick = () => {
        // let promise = XMAS_ValidateLogin(userCheckVal)
        curr_group.group_members = nameHold

        setProgress(1)
        setSubmitReady(false)
    }

    const secClick = () => {
        console.log("this is the sec click execution")

        let promise = XMAS_PostGroupObject(curr_group.group_name, nameHold, desc)


        promise.then((data) => {

            curr_group.group_members = nameHold
            curr_group.description = desc

            updateGroupObject(curr_group)
            console.log("progress update dispatched ++++++++++++++++++++++")
            setGroupData(curr_group)
            redirect('/giftly/home')
        }
        )
    }

    console.log(curr_group)
    console.log("progress is equal to " + progress)

    useEffect(() => {
        if (progress == -1) redirect('/giftly/begin')

    }, [progress, setProgress])



    return (
        <div>
            <button className={styles.change_data_button} onClick={backClick}><img className={styles.change_data_button_image} src='/IMGassets/arrow.png' /></button>
            <br></br>
            {progress == 0 ? (
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
                                        }
                                        } />
                                </div>

                            ))
                        }
                        < button className={styles.go_button} onClick={firstClick} style={{ backgroundColor: submitReady ? "rgb(100, 207, 50)" : "", transition: submitReady ? "1.5s" : ".5s", }} >Let's go!</button>
                    </div >
                </>

            ) :
                progress == 1 ? (
                    // <div></div>
                    <UserSelect setProgress={setProgress} progress={progress} />
                ) : (
                    <>
                        <div className={styles.title_text}>What's the purpose for your gift exchange?</div>
                        <div className={styles.sub_text}>e.g. Jennifer's secret santa!</div>
                        <div className={styles.slowDown}>
                            <br></br>
                            <label className={descFloat ? styles.label_float : styles.label} >Group Description</label>
                            <input
                                className={styles.input}
                                type="string"
                                // placeholder={"user " + (i + 1)}
                                onChange={(e) => {
                                    setDesc(e)
                                    if (e.target.value.length > 0) {
                                        setSubmitReady(true)
                                    } else setSubmitReady(false)
                                    // console.log(curr_group)
                                }
                                } />
                        </div>
                        <Spacer height="5vw" />
                        <div className={styles.sub_text} style={{ fontStyle: "italic" }}>This will be displayed on your homepage</div>

                        < button
                            className={styles.go_button}
                            onClick={secClick}
                            style={{ backgroundColor: submitReady ? "rgb(100, 207, 50)" : "", transition: submitReady ? "1.5s" : ".5s", }}
                        >Let's go!</button>

                    </>
                )

            }
        </div>
    )
}
