import React from "react"
import * as icons from 'react-icons/fa';
import styles from './Flood2.module.css'
import SVGSpacers from "./SVGSpacers";
import { useEffect, useState } from "react";

export default function Flood2() {


    const [currStyle, setCurrStyle] = useState(styles.flood_down_start)
    const [svgStyle, setSvgStyle] = useState(styles.svg_down_start)
    const [fillStyle, setFillStyle] = useState(styles.fill_down_start)


    useEffect(function () {

        // window.beforeunload = function() {
        //     setCurrStyle(styles.main_two)
        // }
        // console.log(currStyle)
        window.beforeunload = function () {
            setCurrStyle(styles.flood_down_end)
            setSvgStyle(styles.svg_down_end)
            setFillStyle(styles.fill_down_end)

            console.log("onload is being triggered")

            setTimeout(function() {
                setCurrStyle(styles.flood_down_final)
                setSvgStyle(styles.svg_down_final)
                setFillStyle(styles.fill_down_final)
              }, 800);
        }
    }, [currStyle])

    return (
        <>
            <div className={currStyle}>
                <div className={fillStyle}>  </div>
                <SVGSpacers className={svgStyle} type="bot" num="5" />
            </div>
        </>
    )
}
