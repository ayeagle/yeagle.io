
import { useEffect, useState } from "react";
import styles from './xmas.module.css'
import Spacer from "@components/bio/Spacer";
import { getGroupObject, updateGroupObject } from "@components/xmas/DB/curr_group_data";
import XMAS_GetGroupObject from "@components/xmas/DB/XMAS_GetGroupObject";
import NavBar from "@components/xmas/NavBar";
import Explore from "@components/xmas/Explore";
import AddGift from "@components/xmas/AddGift";
import Profile from "@components/xmas/Profile"
import Begin from "./begin";
import { Route } from "react-router";
import Typing from "@components/bio/Typing";

let curr_group = getGroupObject()

export default function Home() {

    const [groupData, setGroupData] = useState('')
    const [groupName, setGroupName] = useState('')
    const [oneOpen, setOneOpen] = useState(false)
    const [currPageName, setCurrPageName] = useState('explore')
    const [runOnce, setRunOnce] = useState(0)
    const [dataChange, setDataChange] = useState(false)
    const [userName, setUserName] = useState('')

    const [currPageCode, setCurrPageCode] = useState(<Explore oneOpen={oneOpen} setOneOpen={setOneOpen} groupData={groupData} setGroupData={setGroupData} dataChange={dataChange} setDataChange={setDataChange} />)

    console.log(curr_group)

    // if(curr_group.group_id == ''){
    //     useEffect(() => {
    //         // window.location.href = "/giftly/begin" 
    //     }, [])


    //     return(
    //         <>
    //         <div className={styles.page_container}>
    //             <div className={styles.left_element_wrapper}>
    //                 <div className={styles.centering_unit}>
    //                     {/* <Typing content={"Gift exchanges with friends and family made easy :D"} /> */}
    //                 </div>
    //             </div>
    //             <div className={styles.right_element_wrapper}>
    //                 <div className={styles.centering_unit}>
    //                     {/* <Login move={setMoveToCreate}/> */}
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    //     )
    // }



    if (dataChange) {
        setDataChange(false)
    }

    const validate = () => {

        let promise = XMAS_GetGroupObject(localStorage.getItem('current_user'), localStorage.getItem('group_id'))

        promise.then((data) => {
            updateGroupObject(curr_group)
            curr_group = data
            setGroupData(data)
        }
        )
    }

    const sendPage = () => {
        switch (currPageName) {
            case 'explore':
                setCurrPageCode(<Explore oneOpen={oneOpen} setOneOpen={setOneOpen} groupData={groupData} setGroupData={setGroupData} dataChange={dataChange} setDataChange={setDataChange} setCurrPageName={setCurrPageName}/>)
                return
            case 'add':
                setCurrPageCode(<AddGift />)
                return
            case 'profile':
                setCurrPageCode(<Profile/>)
                return
            default:
                setCurrPageCode(<Explore oneOpen={oneOpen} setOneOpen={setOneOpen} groupData={groupData} setGroupData={setGroupData} dataChange={dataChange} setDataChange={setDataChange} />)
                return
        }
    }

    useEffect(() => {
        sendPage()
    }, [currPageName, setCurrPageName, groupData, setGroupData, dataChange, setDataChange])

    useEffect(() => {
        setGroupName(localStorage.getItem('group_name'))
        setUserName(localStorage.getItem('current_user'))
        validate()
        console.log("this is the group_name : " + groupName)
    }, [dataChange, setDataChange])

    return (
        <>
            <div style={{ backgroundColor: oneOpen ? "rgba(0, 0, 0, 0.657)" : '' }}>
                <div className={styles.gift_header_container}>
                    <div className={styles.gift_header}>
                        {/* <img src="/IMGassets/bow.png" className={styles.image} /> */}
                        <a href='/giftly/begin' style={{ textDecoration: "none", color: "white" }}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}   >
                                Change <br/>Groups
                            </div>
                        </a>
                        <div className={styles.giftly_style} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} >Giftly</div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}   >
                            <div  >{userName}</div>
                            <div  >{groupName}</div>
                            <div>{groupData ? groupData.year : ''}</div>
                        </div>

                    </div>
                </div>
                <NavBar currPageName={currPageName} setCurrPageName={setCurrPageName} />
                {currPageCode}
                {/* <Explore  oneOpen={oneOpen} setOneOpen={setOneOpen} groupData={groupData} setGroupData={setGroupData}/>
                <AddGift /> */}
            </div>
            <div style={{ backgroundColor: oneOpen ? "rgba(0, 0, 0, 0.657)" : '', bottom: "0px" }}>
                <div className={styles.gift_header_container}>
                    <div className={styles.gift_header}>
                        {/* <img src="/IMGassets/bow.png" className={styles.image} /> */}
                        <a href='/giftly/begin' style={{ textDecoration: "none", color: "white" }}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}   >
                                blah blah <br/>blah
                            </div>
                        </a>
                        <div className={styles.giftly_style} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} >Giftly</div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}   >
                            <div  >blah</div>
                            <div  >blahblah</div>
                            {/* <div>{groupData ? groupData.gifts[0].year : ''}</div> */}
                            <div>Placeholder</div>
                        </div>

                    </div>
                </div>
                </div>

        </>
    )
}