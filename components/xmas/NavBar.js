
import Resizer from "@components/functional/Resizer";
import { useEffect, useState } from "react";
import styles from './NavBar.module.css'
import Spacer from "@components/bio/Spacer";




export default function NavBar({ currPageName, setCurrPageName }) {

    const [activeHeader, setActiveHeader] = useState('explore')

    const headerClick = (val) => {
        setActiveHeader(val)
        setCurrPageName(val)
    }


    useEffect(() => {
        setActiveHeader(currPageName)
    }, [currPageName])


    return (
        <>
            <div className={styles.container}>
                <div
                    className={styles.nav_unit}
                    onClick={() => headerClick('explore')}
                    style={{ color: activeHeader == 'explore' ? 'white' : 'black', background: activeHeader == 'explore' ? "black" : "white" }}>
                    Explore
                </div>
                <div
                    className={styles.nav_unit}
                    onClick={() => headerClick('add')}
                    style={{ color: activeHeader == 'add' ? 'white' : 'black', background: activeHeader == 'add' ? "black" : "white" }}>
                    Add Gifts
                </div>
                <div
                    className={styles.nav_unit}
                    onClick={() => headerClick('profile')}
                    style={{ color: activeHeader == 'profile' ? 'white' : 'black', background: activeHeader == 'profile' ? "black" : "white" }}>
                    Your Profile
                </div>
            </div>
        </>
    )
}
