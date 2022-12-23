import { useEffect, useState } from "react";

export default function Iceland() {

    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)

    // console.log("this is the height (start) ==> " + height)
    //     console.log("this is the width (start) ==> " + width)


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

        // Add the event listener
        window.addEventListener('resize', handleWindowResize)

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    console.log(width + "this is from within Iceland")

    return (
        <>
        <iframe width={"100%"} height={width*.6}  src="https://www.youtube.com/embed/vNF94UrluYg?autoplay=1&mute=1&controls=0&vq=highres&modestbranding=1&start=20" align-content={"center"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>
    )
}