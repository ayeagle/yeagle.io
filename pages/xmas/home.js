
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
import NavBar from "@components/xmas/NavBar";
import Explore from "@components/xmas/Explore";
import AddGift from "@components/xmas/AddGift";

let curr_group = getGroupObject()
// let name = ''

// let userCheckVal = localStorage.getItem('current_user')
// let group_id = localStorage.getItem('group_id')

export default function Home() {

    const [groupData, setGroupData] = useState('')
    const [groupName, setGroupName] = useState('')
    const [oneOpen, setOneOpen] = useState(false)
    const [currPage, setCurrPage] = useState('')
    // const [pageRouter, setPageRouter] = useState()

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
            setGroupData(data)
            // getGroup()
            // redirect('/xmas/create')
        }
        )
    }

    


        //       case "main":
        //         return <Main />
        

    useEffect(() => {
        setGroupName(localStorage.getItem('group_name'))
        validate()
        // setGroupData(curr_group)
        console.log("this is the group_name : " + groupName)
    }, [])


    console.log("groupdata")
    console.log(groupData)
    console.log("groupdata")


    return (
        <>
            <div style={{backgroundColor: oneOpen ? "rgba(0, 0, 0, 0.657)" : ''}}>
                <div className={styles.gift_header_container}>
                    <div className={styles.gift_header}>
                        <div>{groupName}</div>
                        <img src="/IMGassets/bow.png" className={styles.image} />

                        <div>{groupData != '' ? groupData.gifts[1].year : ''}</div>
                    </div>
                </div>
                <NavBar  currPage={currPage} setCurrPage={setCurrPage} />
                {/* {pageRouter} */}
                <Explore  oneOpen={oneOpen} setOneOpen={setOneOpen} groupData={groupData} setGroupData={setGroupData}/>
                <AddGift />
            </div>
        </>
    )
}
