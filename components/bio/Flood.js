import React from "react"
import * as icons from 'react-icons/fa';
import styles from './Flood.module.css'
import SVGSpacers from "./SVGSpacers";
import { useEffect, useState } from "react";

export default function Flood() {


    const [currStyle, setCurrStyle] = useState(styles.flood_down_start)
    const [svgStyle, setSvgStyle] = useState(styles.svg_down_start)
    const [fillStyle, setFillStyle] = useState(styles.fill_down_start)


    useEffect(function () {

        // window.onpopstate = function() {
        //     setCurrStyle(styles.main_two)
        // }
        // console.log(currStyle)s
        window.onload = function () {
            setCurrStyle(styles.flood_down_end)
            setSvgStyle(styles.svg_down_end)
            setFillStyle(styles.fill_down_end)

            console.log("onload is being triggered")

            setTimeout(function() {
                setCurrStyle(styles.flood_down_final)
                setSvgStyle(styles.svg_down_final)
                setFillStyle(styles.fill_down_final)
              }, 1500);
        }
    }, [currStyle])

    return (
        <>
            <div className={currStyle}>
                <SVGSpacers className={svgStyle} type="top" num="5" />
                <div className={fillStyle}>  </div>
            </div>
        </>
    )
}
