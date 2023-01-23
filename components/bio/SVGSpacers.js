// import { MetaHTMLAttributes } from "react"
import Footer from "@components/pomodomo/Footer"
import styles from 'components/bio/SVGSpacers.module.css'


export default function SVGSpacers({ type, num, width, height }) {

        if (type == "top"){
        return (
            <>
                {/* <img className={styles.svg} src={`/SVGSpacers/${num}.svg`} width="100%" /> */}
            </>

        )
        } else {
            return (
                <>
                    {/* <img className={styles.svg} src={`/SVGSpacers/${num}.svg`} width="100%" style={{ transform: 'rotate(180deg)' }} /> */}
                </>

            )

        }

}
