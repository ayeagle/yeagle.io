import { MetaHTMLAttributes } from "react"
import Footer from "@components/pomodomo/Footer"
import styles from 'components/bio/SVGSpacers.module.css'


export default function PNGSpacers({ spacer_type, width, height }) {


    console.log(spacer_type)
    console.log(spacer_type + "   " + width)
    if (spacer_type == "top") {
        return (
            <>
                <div>working in first case</div>
                <img width={width} src="/PNGSpacers/1.png" />
            </>
        )
    } else {
        return (
            <>
                <div>working2</div>
                <div width={width}>
                    <img src="/SVGSpacers/1.svg" width={width} height="100"/>
                </div>

            </>
        )
    }
}
