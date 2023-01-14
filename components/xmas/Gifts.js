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

let curr_group = ''
let name = ''

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return `rgba(${parseInt(color.substring(1, 3), 16)}, ${parseInt(color.substring(3, 5), 16)}, ${parseInt(color.substring(5, 7), 16)}`;
  }


export default function Gifts({ groupData, setGroupData, user }) {

    const [data, setData] = useState('')
    const [runOnce, setRunOnce] = useState(0)

    // let curr_group = await getGroupObject();


    if (runOnce === 0) {
        // validate()
        setRunOnce(2)
        console.log('fetching object')
        curr_group = getGroupObject();
        console.log('retrieved object')
        console.log(curr_group)
    }

    // let curr_group = getGroupObject()

    // const forceUpdate = React.useCallback(() => updateState({}), []);

    // name = user
    console.log("this is from within the gifts component")


    //DATA NOT LOADING BEFORE THE RENDER
    // console.log(curr_group)

    useEffect(() => {
        name = localStorage.getItem('current_user')
    }, [])
    console.log(curr_group)
    console.log("object just before render")

    //add a span to the claim button to make it more dynamic, something like a checkmark or soemthing


    return (
        <>
            {curr_group != '' ? (
                <div className={styles.gift_container}>
                    {curr_group.gifts.map(function (item) {
                        if (item.requester !== name && item.taken === false) {
                            let color = getRandomColor()
                            return (
                                <div className={styles.gift_box} key={item.unique_id} style={{border: "10px solid " + color + "1)", backgroundColor: color + ",.1)"}}>
                                    {/* <div className={styles.gift_detail}>{item.giver}</div> */}
                                    <div className={styles.gift_detail} >{item.requester}</div>
                                    <div style={{borderRight: "2.5px solid black"}} />
                                    <div className={styles.gift_detail} >{item.details}</div>
                                    
                                    {item.url != '' ? <> <div style={{borderRight: "2.5px solid black"}} /> <div className={styles.gift_detail} ><a href={item.url}>Link to product</a></div> </>: <div/>}
                                    <div className={styles.claim_button}>Claim!</div>

                                </div>

                            )
                        } else return
                    })
                    }
                </div>) : (
                <div>Loading...</div>)}
        </>
    )
}


