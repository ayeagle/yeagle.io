
import Resizer from "@components/functional/Resizer";
import { useEffect, useState } from "react";
// import styles from '@pages/xmas/xmas.module.css'
import Spacer from "@components/bio/Spacer";
import LogActivity from "@components/DBcomponents/LogActivity";
import Typing from "@components/bio/Typing";
import Login from "@components/xmas/Login";
import UserSelect from "@components/xmas/UserSelect";
import Gifts from "@components/xmas/Gifts";
import { getGroupObject, updateGroupObject } from '@components/xmas/DB/curr_group_data';
// import XMAS_GetGroupObject from './DB/XMAS_GetGroupObject';
import InputUsers from '@components/xmas/InputUsers'



let curr_group = getGroupObject()





export default function Create() {


    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)
    const [limiter, setLimiter] = useState(0)
    const [groupData, setGroupData] = useState(getGroupObject())


    console.log("this is the curr name: "+ curr_group[0].group_name)

    return (
        <>
                    <br></br><br></br>

                    Welcome {curr_group[0].group_name}!
                    <br></br>


                        {/* What are the user's names? */}
                        <br></br>

                        <InputUsers prompt={"What are your member's names?"} numUsers={curr_group[0].num_users}/>
                        
                        {/* what are their emails? */}
                    {/* </div> */}
                    {/* <Gifts groupData={groupData} setGroupData={setGroupData}/> */}


    
        </>
    )
}
