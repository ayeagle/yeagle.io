import React, { useState, useEffect, useRef } from 'react';
import styles from './DragDrop.module.css'
import Button from '@components/pomodomo/Button';



// let initialX = 0
// let initialY = 0

export default function DragDrop({ startX, startY, content }) {


    ///////////////////////////////////////////////////////////////////////////////////////////////

    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)

    useEffect(() => {
        // Update the height and width state when the component is mounted
        updateHeight(document.documentElement.scrollHeight)
        updateWidth(document.documentElement.scrollWidth)

        function handleWindowResize() {
            //   updateHeight(window.innerHeight)
            //   updateWidth(window.innerWidth)
            updateHeight(document.documentElement.scrollHeight)
            updateWidth(document.documentElement.scrollWidth)
        }

        // Add the event listener
        window.addEventListener('resize', handleWindowResize)

        // Clean up the event listener when the component unmounts
        // return () => {
        //     window.removeEventListener('resize', handleWindowResize)
        // }

    }, [])


    ///////////////////////////////////////////////////////////////////////////////////////////////

    const [isDragging, setIsDragging] = useState(false);
    const [initialX, setInitX] = useState(0)
    const [initialY, setInitY] = useState(0)
    // const initialX = useRef(0);
    // const initialY = useRef(0);

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)





    console.log("states set")

    console.log("x coor: " + x)
    console.log("y coor: " + y)

    const handleMouseDown = (event) => {
        const element = event.currentTarget;
        setIsDragging(true);

        setInitX(event.clientX - initialX)
        setInitY(event.clientY - initialY)
        console.log("mouse do be clicked")

    };

    const handleMouseMove = (event) => {
        console.log("mouse move")

        const element = event.currentTarget;

        if (isDragging) {
            // setX(event.clientX - initialX);
            // setY(event.clientY - initialY);
            const element = event.currentTarget;
            const parent = element.parentElement;

            const minX = 0;
            const maxX = parent.offsetWidth - element.offsetWidth;
            const minY = 0;
            const maxY = parent.offsetHeight - element.offsetHeight;

            let newX = event.clientX - initialX;
            let newY = event.clientY - initialY;

            newX = Math.min(newX, maxX);
            newX = Math.max(newX, minX);
            newY = Math.min(newY, maxY);
            newY = Math.max(newY, minY);

            setX(newX);
            setY(newY);

        }
    };

    const handleMouseUp = () => {
        const element = event.currentTarget;
        setInitX(x)
        setInitY(y)
        setIsDragging(false);
        console.log("mouse do NOT NOT NOT be clicked")

    };

    console.log(`${125*y/height}%`)
    console.log(`${125*x/width}%`)
    console.log(`${y}%`)
    console.log(`${x}%`)
    console.log(`${height}%`)
    console.log(`${125*x/width}%`)

    return (
        <>
            <div className={styles.item}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                // onMouseLeave={handleMouseLeave}
                style={{ cursor: isDragging ? 'grabbing' : 'grab', top: `${y}px`, left: `${125*x/width}%` }}>{content}</div>
        </>
    );

}
