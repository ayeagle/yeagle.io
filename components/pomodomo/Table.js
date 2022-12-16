import styles from './Table.module.css'

export default function Table({ name, name1, name2, name3, val1, val2, val3 }) {

    //would likely make the most sense to pass in an array here
    //need to learn more about flexbox fasho

    return (
        <>
            <h3>{name}</h3>
            <table className={styles.table} title={name}>
                <tr>
                    <td>{name1}</td>
                    <td>{val1}</td>
                </tr>
                <tr >
                    <td>{name2}</td>
                    <td>{val2}</td>
                </tr>
                <tr >
                    <td>{name3}</td>
                    <td>{val3}</td>
                </tr>
            </table>
        </>
    )
}
