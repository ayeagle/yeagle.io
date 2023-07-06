import React from "react"

//hopefully this will upload now

export default function Spacer({height="15vh"} : {height: string}) {
    return (
        <>
            <div style={{ height: height, fill: "black", zIndex: 1, transition: ".5s"}} />
        </>
    )
}
