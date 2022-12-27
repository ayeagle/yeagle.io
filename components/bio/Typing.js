import React from "react"
import { useState, useEffect } from "react";

export default function Typing({ content }) {

    const [displayText, setDisplayText] = useState("")
    const [index, setIndex] = useState(0)
    const [spacer, setSpacer] = useState("|");
    const [indexPauser, setIndexPauser] = useState(0)

    const extra = `&nbsp;`

    useEffect(() => {
        if (indexPauser < 3 || index == content.length) {

            const interval = setInterval(() => {

                if (spacer == `&nbsp;`) setSpacer("|")
                else setSpacer(`&nbsp;`)

                setIndexPauser(indexPauser + 1)
                if (indexPauser == 2) {
                    clearInterval(interval)
                    setSpacer("|")
                    // setIndex(0)
                }

            }, 550);
            return () => clearInterval(interval);



        } else if (index <= content.length) {
            const interval = setInterval(() => {
                console.log("this is the index: " + index)
                console.log("this is the index val: " + content[index])
                console.log("this is the diplaytext (before)" + displayText)

                if (content[index] == "<") {
                    setDisplayText(displayText + content[index] + content[index+1] + content[index+2] + content[index+3])
                    setIndex(index + 4)
                } else {
                    setDisplayText(displayText + content[index])
                    setIndex(index + 1)
                }
                if (index == content.length) {
                    clearInterval(interval)
                    // setIndex(0)
                }
            }, 35);
            return () => clearInterval(interval);

        }
    }, [index, indexPauser]);



    return (
        <div dangerouslySetInnerHTML={{ __html: displayText + extra + spacer }}>

        </div>
    )
}
