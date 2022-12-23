import React from "react"

export default function Lines({ content }) {

    return (
        <ul>
            {content.map(function (item) {
                return (
                    <li key={item.id}>
                        {item.url !== 0 ? (
                            <a href={item.url} style={{color:"white"}}>{item.words}</a>
                        ) : (
                            <span>{item.words}</span>
                        )}
                    </li>
                )

            }
            )
            }
        </ul>
    )
}
