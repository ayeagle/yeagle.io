import React from "react"
import styles from './Lines.module.css'


export default function Lines({ content }) {

    return (
        <div>
            {content.map(function (item) {
                return (
                    <div key={item.id} className={styles.lines}>
                        {item.url !== 0 ? (
                            <a href={item.url} style={{color:"white"}}>{item.words}</a>
                        ) : (
                            <div>{item.words}</div>
                        )}
                    </div>
                )

            }
            )
            }
        </div>
    )
}
