import { useEffect, useState } from "react";
import styles from 'pages/giftly/xmas.module.css'
import Spacer from "@components/bio/Spacer";
import { getGroupObject } from "@components/xmas/DB/curr_group_data";
import Gifts from "@components/xmas/Gifts";

let curr_group = getGroupObject()

export default function Explore({ oneOpen, setOneOpen, groupData, setGroupData, dataChange, setDataChange, setCurrPageName }) {

    const [groupName, setGroupName] = useState('')

    useEffect(() => {
        setGroupName(localStorage.getItem('group_name'))
        setGroupData(curr_group)
    }, [])


    return (
        <>
            <Spacer height={"3vw"} />
            <br></br>
            <div className={styles.descript_container}>
                "{groupData.description}"
            </div>
            <Spacer height={"8vw"} />
            <div className={styles.master_container}>
                <Gifts prompt={'Gifts Up for Grabs'} claimed={false} oneOpen={oneOpen} setOneOpen={setOneOpen} groupData={groupData} setGroupData={setGroupData} dataChange={dataChange} setDataChange={setDataChange} setCurrPageName={setCurrPageName} />
            </div>
            <Spacer height={"10vw"} />

            <br></br>
            <div className={styles.master_container}>

                <Gifts prompt={'Gifts Already Claimed'} claimed={true} oneOpen={oneOpen} setOneOpen={setOneOpen} groupData={groupData} setGroupData={setGroupData} dataChange={dataChange} setDataChange={setDataChange} setCurrPageName={setCurrPageName} />
            </div>
            <Spacer height={"20vw"} />
        </>
    )
}
