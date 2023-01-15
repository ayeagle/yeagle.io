import React from "react"
import styles from './Lines.module.css'


export default function Lines({ content }) {

    return (
        <div>
            {content.map(function (item) {
                return (
                    <div key={item.id} className={styles.lines}>
                        {item.url !== 0 ? (
                            <div style={{paddingTop: "1vw"}}><a href={item.url} style={{color:"white"}}>{item.words}</a></div>
                        ) : (
                            <div style={{paddingTop: "1vw"}}>{item.words}</div>
                        )}
                    </div>
                )

            }
            )
            }
        </div>
    )
}
