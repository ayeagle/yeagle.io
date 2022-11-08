
const Button = ( {handleClick,buttonName}) => { //args are called props
  return (
    <>
      <button id='button1' onClick= {handleClick}> {buttonName} </button>
    </>
  )
}

export default Button
