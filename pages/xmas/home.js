
import Resizer from "@components/functional/Resizer";
import { useEffect, useState } from "react";
import styles from './xmas.module.css'
import Spacer from "@components/bio/Spacer";
import LogActivity from "@components/DBcomponents/LogActivity";
import Typing from "@components/bio/Typing";
import Login from "@components/xmas/Login";
import UserSelect from "@components/xmas/UserSelect";
import { getGroupObject } from "@components/xmas/DB/curr_group_data";
import Gifts from "@components/xmas/Gifts";
import XMAS_GetGroupObject from "@components/xmas/DB/XMAS_GetGroupObject";

let curr_group = getGroupObject()
let name = ''

// let userCheckVal = localStorage.getItem('current_user')
// let group_id = localStorage.getItem('group_id')

export default function Home() {

    const [groupData, setGroupData] = useState(curr_group)




    const validate = () => {
        // let promise = XMAS_ValidateLogin(userCheckVal)
        let promise = XMAS_GetGroupObject(localStorage.getItem('current_user'), localStorage.getItem('group_id'))
    
    
        promise.then((data) => {
            // setValidName(!data)
            // console.log(!data + " this is in the inverse data")
            // console.log("data: " + data)
            // // console.log("isNew: " + isNew)
            // // setAddPrompt("Successful Login")
            // console.log("curr_group data available just before redirect")
            // console.log(curr_group)
            // redirect(<UserSelect groupData={curr_group}/>)
            // updateGroupObject(curr_group)
            curr_group = data
            setGroupData(curr_group)
            // getGroup()
            // redirect('/xmas/create')
    
        }
        )
    }
    
    useEffect(() => {
        validate()
    }, [groupData, setGroupData])
    




    console.log(curr_group)

    return (
        <>
            {/* <Gifts/> */}
            <Gifts groupData={groupData} setGroupData={setGroupData}/>

        </>
    )
}
