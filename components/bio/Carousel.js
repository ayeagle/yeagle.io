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


  const quotesArray = ["Quotesadf  sdfafsda fdasf dsf dsaf sdf sdaf asdf sd f ds f 1",
    "Quote sdfsdsdfdssdsd sdfsdfdfdfd ffddsasddfass adsda asd2",
    "Quot asd df sasdfdfdf5hjhtyjufjkfghj fghj fhgj ghfgh f gjghj fghjghf jhgj ghfj ghgh jj  3"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const elements = [
    {
      id: 1,
      content: "I chose Alex because he contains all of the ingredients for a strong team member... I am confident he will be a valuable addition to any product teams solving tough problems.",
      author: "Marcus Lowe, Head of Product @ Resource.io"
    },
    { id: 2, content: 'ElQuote sdfsdsdfdssdsd sdfsdfdfdfd ffddsasddfass adsda asd' },
    { id: 3, content: 'Elemot asd df sasdfdfdf5hjhtyjufjkfghj fghj fhgj ghfgh f gjghj fghjghf jhgent 3' },
    {
      id: 1,
      content: "I chose Alex because he contains all of the ingredients for a strong team member... I am confident he will be a valuable addition to any product teams solving tough problems.",
      author: "Marcus Lowe, Head of Product @ Resource.io"
    },
    {
      id: 1,
      content: "I chose Alex because he contains all of the ingredients for a strong team member... I am confident he will be a valuable addition to any product teams solving tough problems.",
      author: "Marcus Lowe, Head of Product @ Resource.io"
    },
    {
      id: 1,
      content: "I chose Alex because he contains all of the ingredients for a strong team member... I am confident he will be a valuable addition to any product teams solving tough problems.",
      author: "Marcus Lowe, Head of Product @ Resource.io"
    },
    {
      id: 1,
      content: "I chose Alex because he contains all of the ingredients for a strong team member... I am confident he will be a valuable addition to any product teams solving tough problems.",
      author: "Marcus Lowe, Head of Product @ Resource.io"
    },
    {
      id: 1,
      content: "I chose Alex because he contains all of the ingredients for a strong team member... I am confident he will be a valuable addition to any product teams solving tough problems.",
      author: "Marcus Lowe, Head of Product @ Resource.io"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % elements.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      {/* <rect style={{height:"200px", top:"200px"}}> */}
      <div className={styles.carousel}>
        {elements.map((element, index) => (
          <div
            key={element.id}
            className={styles.carousel_element}
            style={{
              left: index === currentIndex ? "50vw" : index < currentIndex ? '100vw' : '-100vw',
            }}
          >
            {element.content}
            <br></br>
            <br></br>
            {element.author}
          </div>
        ))}
      </div>
      <Button buttonName={"Button"} />
    {/* </rect> */}
    </>
  );



  // return (
  //   <div className={styles.carousel}>

  //     <div
  //       key="0"
  //       className={styles.carousel_element}
  //       style={{
  //         left: +"0" === currentIndex ? 0 : +"0" < currentIndex ? '100%' : '-100%',
  //       }}
  //     >
  //       {elements[0].content}
  //       <br></br>
  //       <br></br>
  //       {elements[0].author}
  //     </div> <div
  //       key="1"
  //       className={styles.carousel_element}
  //       style={{
  //         left: +"1" === currentIndex ? 0 : +"1" < currentIndex ? '100%' : '-100%',
  //       }}
  //     >
  //       {elements[1].content}
  //       <br></br>
  //       <br></br>
  //       {elements[1].author}
  //     </div> <div
  //       key="2"
  //       className={styles.carousel_element}
  //       style={{
  //         left: +"2" === currentIndex ? 0 : +"2" < currentIndex ? '100%' : '-100%',
  //       }}
  //     >
  //       {elements[2].content}
  //       <br></br>
  //       <br></br>
  //       {elements[2].author}
  //     </div>
  //   </div>
  // );
}
