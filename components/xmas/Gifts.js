import React, { Component, useState, useEffect } from 'react'
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

// let curr_group = getGroupObject()

export default function Gifts({ groupData, setGroupData }) {

    useEffect(() => {

    },[groupData])

    return (
        <>
            {groupData[0].gifts.map(function (item) {
                    return (
                        <div className={styles.gift_box}>
                            <div key={item.unique_id}>
                                <div>{item.details}</div>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}


