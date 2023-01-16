
import Resizer from "@components/functional/Resizer";
import { useEffect, useState } from "react";
import styles from 'pages/xmas/xmas.module.css'
import Spacer from "@components/bio/Spacer";
import LogActivity from "@components/DBcomponents/LogActivity";
import Typing from "@components/bio/Typing";
import Login from "@components/xmas/Login";
import UserSelect from "@components/xmas/UserSelect";
import { getGroupObject } from "@components/xmas/DB/curr_group_data";
import Gifts from "@components/xmas/Gifts";
import XMAS_GetGroupObject from "@components/xmas/DB/XMAS_GetGroupObject";
import NavBar from "@components/xmas/NavBar";


// let curr_group = getGroupObject()

export default function Explore({oneOpen, setOneOpen, groupData, setGroupData}) {

    // const [groupData, setGroupData] = useState('')
    const [groupName, setGroupName] = useState('')
    // const [oneOpen, setOneOpen] = useState(false)

    // const validate = () => {
    //     // let promise = XMAS_ValidateLogin(userCheckVal)
    //     let promise = XMAS_GetGroupObject(localStorage.getItem('current_user'), localStorage.getItem('group_id'))


    //     promise.then((data) => {
    //         // setValidName(!data)
    //         // console.log(!data + " this is in the inverse data")
    //         // console.log("data: " + data)
    //         // // console.log("isNew: " + isNew)
    //         // // setAddPrompt("Successful Login")
    //         // console.log("curr_group data available just before redirect")
    //         // console.log(curr_group)
    //         // redirect(<UserSelect groupData={curr_group}/>)
    //         // updateGroupObject(curr_group)
    //         curr_group = data
    //         setGroupData(data)
    //         // getGroup()
    //         // redirect('/xmas/create')
    //     }
    //     )
    // }

    useEffect(() => {
        setGroupName(localStorage.getItem('group_name'))
        console.log("this is the group_name : " + groupName)
    }, [])


    // console.log("groupdata")
    // console.log(groupData)
    // console.log("groupdata")


    return (
        <>
                <Spacer/>
                <div>Gifts Up for Grabs</div>
                <Gifts claimed={false} oneOpen={oneOpen} setOneOpen={setOneOpen}/>
                <Spacer/>

                <div>Gifts Already Claimed</div>
                <Gifts claimed={true} oneOpen={oneOpen} setOneOpen={setOneOpen}/>
                <Spacer height={"20vw"}/>
        </>
    )
}
