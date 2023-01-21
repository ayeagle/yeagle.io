import React, { Component, useState, useEffect, forceUpdate } from 'react'
import styles from '@components/xmas/Gifts.module.css'
import { getGroupObject, updateGroupObject } from './DB/curr_group_data';
import XMAS_GetGroupObject from './DB/XMAS_GetGroupObject';
import Spacer from '@components/bio/Spacer';
import XMAS_SetTaken from './DB/XMAS_SetTaken';
import { useRef } from 'react';

let curr_group = ''
let name = ''

let colors = [
    'rgba(238, 99, 82,',
    'rgba(89, 205, 144,',
    'rgba(63, 167, 214,',
    'rgba(250, 192, 94,',
    'rgba(247, 157, 132,',
    'rgba(100, 233, 238,',
    'rgba(100, 233, 238,',
    'rgba(35, 61, 77,',
    'rgba(137, 170, 230,',
    'rgba(252, 171, 100,',
    'rgba(217, 249, 165,',
    'rgba(98, 108, 102,'
]

function getRandomColor(input) {
    return colors[input % colors.length]
}

export default function Gifts({ prompt, claimed, oneOpen, setOneOpen, dataChange, setDataChange, setCurrPageName }) {

    const [data, setData] = useState('')
    const [runOnce, setRunOnce] = useState(0)
    const [singleGiftStyle, setSingleGiftStyle] = useState(styles.gift_box)
    const [singleGiftOpen, setSingleGiftOpen] = useState(false)
    const [singleGiftObject, setSingleGiftObject] = useState("")
    const [isClaiming, setIsClaiming] = useState(false)
    const [stale, setStale] = useState(false)
    const giftRef = useRef(null);
    const [sortVal, setSortVal] = useState('')
    const [onlyMe, setOnlyMe] = useState(true)
    const [one, setOne] = useState(0)
    const [searchVal, setSearchVal] = useState('')
    const [costMin, setCostMin] = useState(null)
    const [costMax, setCostMax] = useState(null)
    const [yOffSet, setYOffset] = useState('')
    const [bool, setBool] = useState(true)
    const [groupData, setGroupData] = useState('')


    useEffect(() => {
        getGroup()
    }, [])


    const getGroup = () => {
        console.log("current user")
        console.log(localStorage.getItem('current_user'))
        console.log("group_id")

        console.log(localStorage.getItem('group_id'))

        let promise = XMAS_GetGroupObject(localStorage.getItem('current_user'), localStorage.getItem('group_id'))

        promise.then((data) => {
            curr_group = data
            updateGroupObject(curr_group)
            setGroupData(data)
        }
        )
    }


    ///////////// functional responsive /////////////////////
    ///////////// functional responsive /////////////////////
    ///////////// functional responsive /////////////////////

    const giftClick = (gift_id) => {
        if (!oneOpen) {
            setSingleGiftStyle(styles.single_gift_box)
            setSingleGiftOpen(true)
            setOneOpen(true)
            setSingleGiftObject(groupData.gifts.find(gift => gift.gift_id === gift_id))
        }
    }

    const exitGiftClick = (gift_id) => {
        console.log("gift UNclicked")
        setSingleGiftStyle(styles.gift_box)
        setSingleGiftOpen(false)
        setIsClaiming(false)
        setOneOpen(false)
    }

    const doNothing = (event) => {
        event.stopPropagation();
    }

    const claimGiftCheck = (event) => {
        setIsClaiming(true)
        event.stopPropagation();
    }

    const claimYes = (takenVal) => {
        updateTaken(takenVal, singleGiftObject.gift_id)
        goAway()
        wait(setSingleGiftOpen(false), 3000)
        setIsClaiming(false)
        setOneOpen(false)
        setDataChange(true)
    }

    const claimNo = () => {
        setIsClaiming(false)
    }

    function wait(fn, delay) {
        setTimeout(fn, delay);
    }

    function goAway() {
        // if (giftRef && giftRef.current) {
        //     giftRef.current.style.top = "2000vw";
        //     giftRef.current.style.transition = "5s";
        //     giftRef.current.style.display = "none"
        // }
    }

    const updateTaken = (taken, gift_id) => {

        let userVal = ''
        if (taken) {
            userVal = localStorage.getItem('current_user')
        } else {
            userVal = null
        }

        let promise = XMAS_SetTaken(taken, gift_id, userVal)

        promise.then((data) => {
            setStale(true)
            location.href = '/giftly/home'
        }
        )
    }

    const handleSortChange = (e) => {
        let tempArray = groupData
        switch (e.target.value) {
            case "nameUp":
                tempArray.gifts.sort((a, b) => (a.requester > b.requester) ? 1 : -1)
                console.log(tempArray)
                break
            case "nameDown":
                tempArray.gifts.sort((a, b) => (a.requester < b.requester) ? 1 : -1)
                console.log(tempArray)
                break
            case "costUp":
                tempArray.gifts.sort((a, b) => (a.cost > b.cost) ? 1 : -1)
                console.log(tempArray)
                break
            case "costDown":
                tempArray.gifts.sort((a, b) => (a.cost < b.cost) ? 1 : -1)
                console.log(tempArray)
                break
            case "newest":
                tempArray.gifts.sort((a, b) => (a.gift_id > b.gift_id) ? 1 : -1)
                console.log(tempArray)
                break
            case "oldest":
                tempArray.gifts.sort((a, b) => (a.gift_id < b.gift_id) ? 1 : -1)
                console.log(tempArray)
                break
            default:
                break

        }
        setSortVal(e.target.value)
        setGroupData(tempArray)
        setBool(!bool)
    }

    const handleNameSearchChange = (e) => {
        setSearchVal(e.target.value)
    }

    const dispatchSearchVal = () => {

    }

    ///////////// functional responsive /////////////////////
    ///////////// functional responsive /////////////////////
    ///////////// functional responsive /////////////////////



    useEffect(() => {
        name = (localStorage.getItem('current_user'))
        setStale(false)
        setYOffset(window.pageYOffset)

        document.onkeydown = function (evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27) {
                // close the element
                exitGiftClick()
            }
        };

    }, [groupData, setGroupData, giftRef, setStale, stale, dataChange, setDataChange, singleGiftOpen])

    useEffect(() => {
        getGroup()
        window.addEventListener('scroll', function () {
            setYOffset(window.pageYOffset)
        })

    }, [])

    console.log("this is group data before main gift component loading")
    console.log(groupData)
    // console.log(groupData.gifts.length)



    return (
        <div>
            <br />
            <div style={{ fontSize: "4vw" }}  >{prompt}</div>

            <div className={styles.sort_container}>

                {claimed ? (
                    <div style={{ flexDirection: "column", width: "33%" }}>
                        <div className={styles.filters_title} style={{ marginTop: "-1vw" }} >Only show gifts <br />claimed by me</div>
                        <input type="checkbox" className={styles.checkbox} onClick={() => setOnlyMe(!onlyMe)} />
                    </div>
                ) : (
                    <div></div>
                )
                }
                <div style={{ flexDirection: "column", width: "33%" }}>
                    <div className={styles.filters_title} >Sort by...</div>
                    <select className={styles.filter_inputs} onChange={handleSortChange}>
                        <option value=""></option>
                        <option value="nameUp">     Ascending Name</option>
                        <option value="nameDown">   Descending Name</option>
                        <option value="costUp">     Ascending Cost</option>
                        <option value="costDown">   Descending Cost</option>
                        <option value="newest">     Newest First</option>
                        <option value="oldest">     Oldest First</option>
                    </select>
                </div>
                <div style={{ flexDirection: "column", width: "33%" }}>
                    <div className={styles.filters_title} >  For... </div>
                    <select className={styles.filter_inputs} onChange={handleNameSearchChange} style={{ width: "70%" }} >
                        <option value=""></option>
                        {groupData.group_members ? (
                            groupData.group_members.map(function (mapped_name, index) {
                                if (mapped_name == name) {
                                    return
                                } else {
                                    return <option key={index} value={mapped_name}>{mapped_name}</option>
                                }
                            })
                        ) : (<option>Something went wrong...</option>)
                        }
                    </select>
                </div>
                <div style={{ flexDirection: "column", width: "33%" }}>
                    <div className={styles.filters_title} >  Search </div>
                    <input
                        className={styles.filter_inputs}
                        placeholder=" WIP..."
                        onChange={(e) => {
                            dispatchSearchVal(e.target.value)
                        }}

                    />
                </div>
                <div style={{ flexDirection: "column", width: "17%" }}>

                    {/* <div style={{ flexDirection: "row" }}> */}
                    <div className={styles.filters_title}  >Min Price</div>
                    <input
                        className={styles.stack_filter_inputs}
                        type="number"
                        onChange={(e) => {
                            if (e.target.value.length === 0) {
                                setCostMin(null)
                            } else {
                                setCostMin(e.target.value)
                            }
                        }}

                    />
                </div>

                <div style={{ flexDirection: "column", width: "17%" }}>

                    <div className={styles.filters_title} >Max Price </div>
                    <input
                        className={styles.stack_filter_inputs}
                        type="number"
                        onChange={(e) => {
                            if (e.target.value.length === 0) {
                                setCostMax(null)
                            } else {
                                setCostMax(e.target.value)
                            }
                        }}

                    />
                    {/* </div> */}
                </div>
            </div>
            {groupData && (true || bool) ?
                (
                    <div className={styles.gift_container}>

                        {groupData.gifts.length === 0 ? (
                            <div>
                                Whoa looks like there's no gifts... let's change that!
                                <br />
                                <br />

                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}  >
                                    <button>Invite Others</button>
                                    <button onClick={() => setCurrPageName('add')}>Add Gifts</button>
                                </div>
                            </div>

                        ) : (
                            groupData.gifts.map(function (item) {
                                if (
                                    item.requester !== name
                                    && item.gift_id
                                    && item.taken === claimed
                                    && (
                                        onlyMe
                                        || item.giver == name
                                    ) && (
                                        searchVal == ''
                                        || searchVal == item.requester
                                    ) && (
                                        costMin == null
                                        // || costMin == '0'
                                        || costMin <= item.cost
                                    ) && (
                                        costMin == null
                                        // || +costMax === 0
                                        || costMax >= item.cost
                                    )


                                ) {
                                    item.color = getRandomColor(item.gift_id)
                                    return (
                                        <div className={styles.gift_box} id={`gift-${item.unique_id}`} ref={giftRef} key={item.unique_id} onClick={() => giftClick(item.gift_id)} style={{ backgroundColor: item.color + ".4)" }}>
                                            {/* <div className={styles.gift_detail}>{item.giver}</div> */}

                                            <div className={styles.gift_detail} style={{ borderBottom: "1px solid black" }}  >{item.requester}</div>
                                            {/* <div style={{ borderRight: "2.5px solid black", width: "0", minWidth: "0%" }} /> */}
                                            {item.gift_name.length <= 30 ?
                                                (
                                                    <div className={styles.gift_detail} >{item.gift_name}</div>
                                                ) : (
                                                    <div className={styles.gift_detail} >{item.gift_name.substring(0, 30) + `\n...`}</div>
                                                )
                                            }
                                        </div>
                                    )
                                } else return
                            })
                        )
                        }
                    </div>
                ) : (
                    // <><Spinner/></>
                    <div>Loading...</div>
                )
            }
            {singleGiftOpen ?
                (
                    <div
                        className={styles.single_gift_page_container}
                        style={{ top: window.pageYOffset }}
                        onClick={exitGiftClick}
                        onKeyDown={event => {
                            if (event.key === 'Escape') {
                                exitGiftClick()
                            }
                        }}
                    >
                        <div className={styles.single_gift_container} onClick={doNothing} style={{ border: "10px solid " + singleGiftObject.color + "1)" }} >
                            {/* <img src="/IMGassets/bow.png" className={styles.image} /> */}

                            <div className={styles.single_gift_header}>
                                <div>For: {singleGiftObject.requester}</div>
                                {singleGiftObject.url != '' ? (
                                    <a href={singleGiftObject.url} target="_blank"><button className={styles.product_button}>Link to product {"=>"}</button></a>
                                ) : (
                                    <div>No Link {":("}</div>
                                )}
                                <button className={styles.change_data_button} onClick={exitGiftClick}>
                                    <img className={styles.change_data_button_image} src='/IMGassets/exit.png' />
                                </button>
                            </div>
                            <br></br>
                            <div className={styles.single_gift_details}>
                                <div >
                                    "{singleGiftObject.gift_name}"
                                </div>
                            </div>
                            <div className={styles.single_gift_details}>
                                <div >
                                    {singleGiftObject.details == '' ? 'No details provided :(' : (`"` + singleGiftObject.details + `"`)}
                                </div>
                            </div>
                            <div className={styles.single_gift_details}>
                                <div >
                                    {singleGiftObject.cost == null ? 'No price provided :(' : singleGiftObject.cost}
                                </div>
                            </div>
                            {claimed ? (
                                <div className={styles.single_gift_details}>
                                    <div >
                                        Claimed by: {singleGiftObject.giver == null ? 'No name provided :(' : singleGiftObject.giver}
                                    </div>
                                </div>
                            ) : (
                                <div></div>
                            )
                            }
                            <Spacer height={"9vw"} />
                            {/* <div className={styles.claim_button} onClick={claimGiftCheck}>Claim this gift!</div> */}
                            {isClaiming ? (
                                singleGiftObject.taken === false ? (
                                    <div className={styles.claim_button_after}>

                                        Claiming this gift will remove it from the pool for others. Do you want to proceed?
                                        <br></br>                        <br></br>

                                        <div className={styles.single_gift_header}>
                                            <div />
                                            <div />

                                            <button className={styles.product_button2} onClick={() => claimYes(true)} >Yes</button>
                                            <button className={styles.product_button2} onClick={claimNo} >No</button>
                                            <div />
                                            <div />

                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.claim_button_after}>
                                        Un-claiming this gift will release it back to the pool for others. Do you want to proceed?
                                        <br></br>                        <br></br>
                                        <div className={styles.single_gift_header}>
                                            <div />
                                            <div />
                                            <button className={styles.product_button2} onClick={() => claimYes(false)} >Yes</button>
                                            <button className={styles.product_button2} onClick={claimNo} >No</button>
                                            <div />
                                            <div />

                                        </div>
                                    </div>
                                )
                            ) : (
                                singleGiftObject.taken === true ? (
                                    singleGiftObject.giver === name ? (
                                        <div className={styles.claim_button} onClick={claimGiftCheck}>Unclaim gift?</div>
                                    ) : (
                                        <div className={styles.no_claim_button} >Looks like you didn't gift this one...</div>
                                    )
                                ) : (
                                    <div className={styles.claim_button} onClick={claimGiftCheck}>Claim this gift!</div>
                                )
                            )}

                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
        </div>
    )
}


