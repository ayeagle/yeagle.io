
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateBreakTime, updateIterations, updateReady, updatePage, updateWorkTime, updateTotalTime, updateTimeRemain, updateTimeActive, updateIterationsRemain } from 'src/actions/cartAction'
import Break from '@components/pomodomo/Break'
import styles from './Waves.module.css'




export default function Waves({ w, h }) {

    const [height, updateHeight] = useState(h)
    const [width, updateWidth] = useState(w)

    const dispatch = useDispatch();
    const state = useSelector((state) => state);


    useEffect(() => {
        if (typeof h === 'undefined') {
            updateHeight(document.documentElement.scrollHeight)
            updateWidth(document.documentElement.scrollWidth)
        }

        function handleWindowResize() {
            //   updateHeight(window.innerHeight)
            //   updateWidth(window.innerWidth)
            updateHeight(document.documentElement.scrollHeight)
            updateWidth(document.documentElement.scrollWidth)
        }

        if (typeof w === 'undefined') {
            window.addEventListener('resize', handleWindowResize)
        }
    }, [])
    // handleWindowResize()


    const ModulatingSineWave = (y_add, color, period, modulation, height) => {
        const [phase, setPhase] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setPhase(prevPhase => prevPhase + modulation);
            }, period);

            return () => clearInterval(interval);
        }, []);

        const pathData = [
            `M 0 ${y_add + 50 + Math.sin(phase) * 1}`,
            ...Array(100)
                .fill()
                .map((_, i) => {
                    const x = i * 200 + 80;
                    const y = y_add + 50 + Math.sin(phase + x / 1) * height;
                    return `T ${x} ${y}`;
                }),
        ].join(' ');

        return (
            <svg width={10000} height={2000}>
                <path d={pathData} stroke="white" fill={color} strokeWidth={2} />
                {/* <rect x='100' y='48' width={1000} height={48} fill={color}/> */}
            </svg>
        );
    };

    const level1 = .70
    const level2 = .45
    const level3 = .20
    const color1 = '#45b1d1'
    const color2 = '#6170c9'
    const color3 = '#50597d'



    return (
        <>
            <svg className={styles.waves_svg} width={width} height={height}>
                <rect x='0' y='0' width={width} height={height} fill='#a3eaff' />
                <rect x='0' y={height * (1 - level1) + 40} width={10000} height={2} fill='#45b1d1' stroke='white' strokeWidth={3} />

                {ModulatingSineWave((height - (height * level1)), color1, 88, .05, 40)}
                {ModulatingSineWave((height - (height * level1)), color1, 130, .2, 40)}
                {ModulatingSineWave((height - (height * level1)), color1, 80, .2, 40)}

                <rect x='0' y={height * (1 - level1) + 40} width={width} height={height} fill={color1} />
                <rect x='0' y={height * (1 - level2) + 40} width={10000} height={2} fill={color1} stroke='white' strokeWidth={3} />

                {ModulatingSineWave((height - (height * level2)), color2, 50, .05, 30)}
                {ModulatingSineWave((height - (height * level2)), color2, 200, .2, 30)}
                {ModulatingSineWave((height - (height * level2)), color2, 140, .2, 30)}
                {ModulatingSineWave((height - (height * level2)), color2, 135, .2, 30)}
                {ModulatingSineWave((height - (height * level2)), color2, 95, .05, 30)}
                <rect x='0' y={height * (1 - level2) + 40} width={width} height={height} fill={color2} />
                <rect x='0' y={height * (1 - level3) + 40} width={10000} height={2} fill={color2} stroke='white' strokeWidth={3} />

                {ModulatingSineWave((height - (height * level3)), color3, 150, .2, 20)}
                {ModulatingSineWave((height - (height * level3)), color3, 150, .2, 20)}
                {ModulatingSineWave((height - (height * level3)), color3, 80, .08, 25)}
                {ModulatingSineWave((height - (height * level3)), color3, 100, .1, 25)}
                {ModulatingSineWave((height - (height * level3)), color3, 10, .005, 20)}
                <rect x='0' y={height * (1 - level3) + 40} width={width} height={height} fill={color3} />
            </svg>


        </>
    )

}
