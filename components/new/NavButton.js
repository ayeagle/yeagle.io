import styles from './NavButton.module.css'

//add addutuibak arguments for styling the buttons
//passing CSS attributes into through the JSX call


const NavButton = ( {handleClick,buttonName}) => { //args are called props
  return (
    <>
      <button className={styles.button} style={{ textAlign: "left"}} id='button1' onClick= {handleClick}><span>{buttonName} </span> </button>
    </>
  )
}

export default NavButton
