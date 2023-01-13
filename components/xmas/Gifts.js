import React, { Component, useState, useEffect, forceUpdate } from 'react'
import styles from '@components/xmas/Gifts.module.css'

// import { useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router';
import About from 'pages/about';
import XMAS_CheckUser from './DB/XMAS_CheckUser';
import XMAS_ValidateLogin from './DB/XMAS_ValidateLogin';
import XMAS_AddNewUser from './DB/XMAS_AddNewUser';

import UserPreferences from '@components/bio/UserPreferences';
// import LogActivity from '@components/DBcomponents/LogActivity';
import { getGroupObject } from './DB/curr_group_data';
import XMAS_GetGroupObject from './DB/XMAS_GetGroupObject';

let curr_group = getGroupObject()

// let name = '';
export default function Gifts({ groupData, setGroupData, user }) {

    const [data, setData] = useState(curr_group)

    // let curr_group = getGroupObject()

    // const forceUpdate = React.useCallback(() => updateState({}), []);

    // name = user
    console.log("this is from within the gifts component")


    //DATA NOT LOADING BEFORE THE RENDER
    // console.log(curr_group)

    useEffect(() => {

        setData(getGroupObject())
        // forceUpdate()
    }, [])


    return (
        <>
            <div className={styles.gift_container}>
                {data[0].gifts.map(function (item) {
                    if (item.requester !== name && item.taken === false) {
                        return (
                            <div className={styles.gift_box} key={item.unique_id}>
                                {/* <div className={styles.gift_detail}>{item.giver}</div> */}
                                <div className={styles.gift_detail}>{item.requester}</div>
                                <div className={styles.gift_detail}>{item.details}</div>
                                <div className={styles.gift_detail}>{item.url}</div>
                            </div>

                        )
                    } else return
                })
                }
            </div>
        </>
    )
}


