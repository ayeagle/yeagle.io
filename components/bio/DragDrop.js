import React, { useState, useEffect, useRef } from 'react';
import styles from './DragDrop.module.css'
import Button from '@components/pomodomo/Button';
import DragElement from '@components/bio/DragElement';



export default function DragDrop({ dropjects }) {

    return (
        <>
            <div className={styles.wrapper}>
                {dropjects.map(function (item) {
                    return (
                            <DragElement key={item.id} content={item.content} />
                    )

                }
                )
                }
            </div>
        </>
    )
}
