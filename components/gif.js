import styles from './Table.module.css'

export default function GIF() {

    //would likely make the most sense to pass in an array here
    //need to learn more about flexbox fasho

    return (
        <><caption>{name}</caption>
            <table className={styles.table} title={name}>
                <tr>
                    <td className={styles.table}>{name1}</td>
                    <td>{val1}</td>
                </tr>
                <tr>
                    <td>{name2}</td>
                    <td>{val2}</td>
                </tr>
                <tr>
                    <td>{name3}</td>
                    <td>{val3}</td>
                </tr>
            </table>
        </>
    )
}
