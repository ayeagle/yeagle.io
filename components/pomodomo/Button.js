import styles from './Button.module.css'

//add addutuibak arguments for styling the buttons
//passing CSS attributes into through the JSX call


const Button = ( {handleClick,buttonName}) => { //args are called props
  return (
    <>
      <button className={styles.button} id='button1' onClick= {handleClick}><span>{buttonName} </span> </button>
    </>
  )
}

export default Button
