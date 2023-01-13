
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
// import XMAS_GetGroupObject from './DB/XMAS_GetGroupObject';
// import InputUsers from '@components/xmas/InputUsers'



let curr_group = getGroupObject()


export default function InputUsers({ prompt }) {

    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)
    const [limiter, setLimiter] = useState(0)
    const [groupData, setGroupData] = useState(getGroupObject())



    console.log("HERE IT IS THIS IS IT")
    console.log(getGroupObject())

    console.log(getGroupObject())


    console.log("this is the curr name: " + curr_group[0].group_name)


    return (
        <>
            {prompt}
            <div>
                {Array.from({ length: curr_group[0].num_users }, (_, i) => (
                    <div key={i} className={styles.slowDown}>
                        <br></br>
                        <input
                            className={styles.user_input}
                            type="string"
                            placeholder={"user " + (i + 1)}
                            onChange={(e) => {
                                curr_group[0].group_members[i] = (e.target.value)
                                console.log("curr_group has been updated")
                                console.log(curr_group)
                            }
                            } />
                    </div>

                ))}
            </div>



        </>
    )
}
