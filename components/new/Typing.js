import React from "react"
import { useState, useEffect } from "react";

export default function Typing({ content }) {

    const [displayText, setDisplayText] = useState("")
    const [index, setIndex] = useState(0)
    const [spacer, setSpacer] = useState(`|`);
    const [indexPauser, setIndexPauser] = useState(0)

    const extra = `&nbsp;`


    //add another component or modify this one for typing and delete
    //then you can pass in an arg of all of the things to be typed
    // + another arg array of items to be typed/untyped/retyped infinitely
    

    useEffect(() => {
        if (indexPauser < 2 || index == content.length) {

            const interval = setInterval(() => {

                if (spacer == ` `) setSpacer(`\u00A0|`)
                else setSpacer(` `)

                setIndexPauser(indexPauser + 1)
                if (indexPauser == 2) {
                    clearInterval(interval)
                    setSpacer(`\u00A0|`)
                    // setIndex(0)
                }

            }, 550);
            return () => clearInterval(interval);



        } else if (index <= content.length) {
            const interval = setInterval(() => {
                if (content[index] == "<") {
                    setDisplayText(displayText)
                    setIndex(index + 5)
                } else {
                    setDisplayText(displayText + content[index])
                    setIndex(index + 1)
                }
                if (index == content.length) {
                    clearInterval(interval)
                    // setIndex(0)
                }
            }, 28);
            return () => clearInterval(interval);

        }
    }, [index, indexPauser]);



    return (
        <div  style={{display: "flex", flexDirection: "row", justifyContent: "left", width: "100%"}} >
        {/* <div dangerouslySetInnerHTML={{ __html: displayText + extra}}><span style={{position: "absolute"}}>{spacer}</span> */}
        <div style={{whiteSpace: "pre-line", width: "100%"}}>{displayText}<span style={{position: "absolute"}}>{spacer}</span></div>

        </div>

    )
}
