
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




let style1 = styles.left_element_wrapper
let style2 = styles.right_element_wrapper


export default function Home() {


    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)
    const [limiter, setLimiter] = useState(0)
    const [groupData, setGroupData] = useState(getGroupObject())
    const [moveToCreate, setMoveToCreate] = useState(false)

    useEffect(() => {
        // Update the height and width state when the component is mounted
        updateHeight(window.innerHeight)
        updateWidth(window.innerWidth)
        console.log("this is the height (useeffect) ==> " + height)
        console.log("this is the width (useeffect) ==> " + width)

        function handleWindowResize() {
            // Update the height and width state when the window is resized
            updateHeight(window.innerHeight)
            updateWidth(window.innerWidth)
        }
        // if (limiter <= 3) {
        //     setLimiter(limiter + 1)
        //     LogActivity(userId, "loaded contact page")
        // }

        // // Add the event listener
        window.addEventListener('resize', handleWindowResize)

        setGroupData(getGroupObject())

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }

    }, [groupData])

    

    if(!moveToCreate){
        style1 = styles.left_element_wrapper
        style2 = styles.right_element_wrapper

    } else {
        style1 = styles.left_element_wrapper2
        style2 = styles.right_element_wrapper2
    }
    



    console.log("HERE IT IS THIS IS IT")
    console.log(getGroupObject() )



    return (
        <>
            <div className={styles.page_container}>
                <div className={style1}>
                    <div className={styles.centering_unit}>
                        <Typing content={"Gift exchanges with friends and family made easy :D"} />
                    </div>
                </div>
                {/* <div className={styles.home_divider} />
                <div className={styles.home_divider2} /> */}

                <div className={style2}>
                    <div className={styles.centering_unit}>
                        <Login move={setMoveToCreate}/>
                    </div>
                    {/* <div className={styles.centering_unit}>
                        <UserSelect groupData={groupData} setGroupData={setGroupData}/>


                        <Gifts groupData={groupData} setGroupData={setGroupData}/>
                    </div> */}
                </div>
            </div>
        </>
    )
}
