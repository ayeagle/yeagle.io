import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css'
import Button from '@components/pomodomo/Button';


// export default function Carousel() {
//     const [currentQuote, setCurrentQuote] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentQuote((currentQuote + 1) % quotes.length);
//         }, 3000);
//         return () => clearInterval(interval);
//     }, [currentQuote]);

//     return (
//         <div className={styles.caro}>
//             {quotes[currentQuote]}
//         </div>
//     );
// }


export default function Carousel() {

  const elements = [
    {
      id: 1,
      content: "I think Alex is currently one of the thought leaders on our team. He drives insightful conversation and provides thoughtful feedback. Alex is at a point where he could be a mentor to other colleagues and help those around him reach his level of product knowledge",
      author: "Nic Gochis",
      role: "Product Solutions Manager @ CaptivateIQ",
      size: "1.0em",

      position: 0,
    },
    {
      id: 7,
      content: "I'm really impressed with Alex's progress in such a short time and grateful to have him on the team. All of [his work] helps us build much better products for users that are more likely to be successful sooner… Super importantly, he knows our products well and has done a great job getting to know the team and constantly reinforcing the value of [product testing].",
      author: "Erin Connolly",
      role: "Director of Product Management @ Facebook",
      size: ".9em",

      position: 0,
    },
    {
      id: 5,
      content: "Alex is a pillar of excellence and without him our department would crumble and the roof cave in. I know he stresses about CIQ as much as I do. He is fixated on getting better and making everyone better. He is a clear leader and leads from behind. I am proud to be in the same department as him.",
      author: "Richard Demke",
      role: "Product Solutions Manager @ CaptivateIQ",
      size: "1.0em",

      position: 0,
    },
    {
      id: 6,
      content: "Something that stood out to me during the [FB Neighborhoods deprecation] was Alex's understanding of the product and user experiences. He can effectively draw the relations between product experiences and engineering complexities. He also led lot of post launch analysis to determine the impact of the launched flows... I am confident that he would be a very good PM and I would be excited to work with him as a product manager. ",
      author: "Chetan Ambekar",
      role: "Senior SWE @ Facebook",
      size: ".9em",
      position: 0,
    },
    {
      id: 2,
      content: "I chose Alex because he contains all of the ingredients for a strong team member... I am confident he will be a valuable addition to any product teams solving tough problems.",
      author: "Marcus Lowe",
      role: "Head of Product @ Resource.io",
      size: "1.2em",
      position: 0,
    }

  ];


  const [currQuote, setCurrQuote] = useState(0)
  const [mover, setMover] = useState(1000)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [caroLive, setCaroLive] = useState(false)



  const preStyle = {
    left: '100%',
    color: 'rgb(0,0,0)',
    backgroundColor: 'rgb(0,0,0)',
    transition: '.5s',
    borderColor: 'rgb(0,0,0)'
  }


  const currStyle = {
    left: "12.5%",
    color: "white",
    backgroundColor: "#7c4455",
    transition: "1s",
    borderColor: "#eb5c00"
  }

  const postStyle = {
    left: '-100%',
    color: 'rgb(0,0,0)',
    backgroundColor: 'rgb(0,0,0)',
    transition: '.5s',
    borderColor: 'rgb(0,0,0)'
  }



  // console.log(elements.length + "this is the element length")

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (mover == 1000 * elements.length) {
  //       console.log("mover reset to 0")
  //       setMover(0)
  //     } else {
  //       console.log("mover incrementing up")
  //       setMover((mover + 800));
  //     }
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [mover]);

  // console.log("here is the curr index: " + currentIndex)

  const forwardClick = () => {
    // console.log("e index changed up by 1 from this: " + currentIndex)
    setCurrentIndex(Math.min(currentIndex + 1, elements.length - 1))
  }

  const backClick = () => {
    // console.log("e index changed down by 1 from this: " + currentIndex)
    setCurrentIndex(Math.max(currentIndex - 1, 0))
  }

  useEffect(() => {
    if (!caroLive) {
      setCurrentIndex((currentIndex + 1))
      setCaroLive(true)
    }
    const interval = setInterval(() => {

      setCurrentIndex((currentIndex + 1) % elements.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className={styles.carousel}>
    
        {/* <rect style={{height:"200px", top:"200px"}}/> */}
        {/* <div className={styles.carousel}> */}
        {elements.map((element, index) => (
          <div
            key={element.id}
            className={styles.carousel_element}
            style={{ ...(index === currentIndex ? currStyle : (index < currentIndex ? preStyle : postStyle)), fontSize: element.size, zIndex: ((Math.abs(index - currentIndex) * (-5)) + 1000) }}
          >
            "{element.content}"
            <br></br>
            <br></br>
            {element.author}
            <br></br>
            {element.role}
          </div>

        ))}
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", position: "relative", margin: "0 auto", top: "10vw"}}>
          
          <button className={styles.buttonr} buttonName={"\u25c0"} onClick={forwardClick}><span>{`\u25c0`}</span></button>
   
          <button className={styles.buttonl} buttonName={"\u25b6"} onClick={backClick} ><span>{`\u25b6`}</span></button>
      </div>
      {/* </div> */}
      {/* </rect> */}
    </>
  );

}


//elements[currentIndex].size 