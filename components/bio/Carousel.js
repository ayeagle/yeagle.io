import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css'


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

    const [currQuote, setCurrQuote] = useState(quotesArray[0])
    // const [slideIndex, setSlideIndex] = useState(0)
    let slideIndex = 0

    // function showSlides() {
    //     const newSlides = {};
    //     Object.keys(mySlides).forEach(number => {
    //         if (number !== slideIndex) {
    //             newSlides[number] = React.cloneElement(mySlides[number], {
    //                 style: { display: 'none' }
    //             });
    //         } else {
    //             newSlides[number] = React.cloneElement(mySlides[number], {
    //                 style: { display: 'block' }
    //             });
    //         }
    //     });
    //     slideIndex = (slideIndex + 1);
    //     if (slideIndex > Object.keys(mySlides).length) {
    //         slideIndex = 1;
    //     }
    //     // setMySlides(newSlides);
    //     setCurrSlide(newSlides[slideIndex].jsx)
    //     setTimeout(showSlides, 2000);
    //     // return Object.values(newSlides);
    // }
    function quotes() {
        console.log("slideindex before: " + slideIndex)
        if (slideIndex >= quotesArray.length) slideIndex = (0);
        else slideIndex = (slideIndex + 1);
        console.log("slideindex after: " + slideIndex)

        console.log("this quopte length " + quotesArray.length)

        console.log("this is slideindex " + slideIndex)

        console.log("this is the quotes function before timeout " + quotesArray[slideIndex])
        setTimeout(quotes, 2000);
        console.log("this is the quotes function after timeout " + quotesArray[slideIndex])
        console.log("-----> " + currQuote)


        return (
            <div className={styles.mySlides}>
                <div className={styles.numbertext}>2 / 3</div>
                {quotesArray[slideIndex]}
                {/* <img src="img2.jpg" style={{width:"100%"}} /> */}
                <div className={styles.text}>Caption Two</div>
            </div>
        )



    }



    // useEffect(() => {

    //     setCurrQuote(quotes())

    // }, [currQuote])

    return (
        <>
            <div className={styles.slideshow_container}>
                <div>{currQuote}</div>
                {/*
                <div className={styles.mySlides}>
                    <div className={styles.numbertext}>1 / 3</div>
                    <div>{quotes[1]}</div>
                    <img src="img1.jpg" style={{width:"100%"}} />
                    <div className={styles.text}>Caption Text</div>
                </div>

                <div className={styles.mySlides}>
                    <div className={styles.numbertext}>2 / 3</div>
                    {quotes[1]}
                    <img src="img2.jpg" style={{width:"100%"}} />
                    <div className={styles.text}>Caption Two</div>
                </div>

                <div className={styles.mySlides}>
                    <div className={styles.numbertext}>3 / 3</div>
                    {quotes[1]}
                    <img src="img3.jpg" style={{width:"100%"}} />
                    <div className={styles.text}>Caption Three</div>
                </div>

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a> */}
            </div>
            <br></br>

            {/* <div >
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div> */}
        </>
    )
}


// style="text-align:center"






















// let slideIndex = 0;
// const [currSlide, setCurrSlide] = useState()

// // const [slideIndex, setSlideIndex] = useState(0)
// const [mySlides, setMySlides] = useState([
//     {
//         jsx: (
//             <div className={styles.mySlides}>
//                 <div className={styles.numbertext}>1 / 3</div>
//                 <img src="bagel.png" style={{ width: '100%' }} />
//                 <div className={styles.text}>Caption Text</div>
//             </div>
//         )
//     },
//     {
//         jsx: (
//             <div className={styles.mySlides}>
//                 <div className={styles.numbertext}>2 / 3</div>
//                 {quotes[1]}
//                 <div className={styles.text}>Caption Two</div>
//             </div>
//         )
//     },
//     {
//         jsx: (
//             <div className={styles.mySlides}>
//                 <div className={styles.numbertext}>3 / 3</div>
//                 {quotes[1]}
//                 <div className={styles.text}>Caption Three</div>
//             </div>
//         )
//     }
// ])


// // function showSlides() {
// //   let i;
// //   let slides = myslides
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].jsx.value.style.display = "none";
// //   }
// //   slideIndex++;
// //   if (slideIndex > slides.length) {slideIndex = 1}
// //   slides[slideIndex-1].style.display = "block";
// //   setTimeout(showSlides, 2000); // Change image every 2 seconds
// // }



// useEffect (() => {
// function showSlides() {
//     const newSlides = {};
//     Object.keys(mySlides).forEach(number => {
//         if (number !== slideIndex) {
//             newSlides[number] = React.cloneElement(mySlides[number], {
//                 style: { display: 'none' }
//             });
//         } else {
//             newSlides[number] = React.cloneElement(mySlides[number], {
//                 style: { display: 'block' }
//             });
//         }
//     });
//     slideIndex = (slideIndex + 1);
//     if (slideIndex > Object.keys(mySlides).length) {
//         slideIndex = 1;
//     }
//     // setMySlides(newSlides);
//     setCurrSlide(newSlides[slideIndex].jsx)
//     setTimeout(showSlides, 2000);
//     // return Object.values(newSlides);
// }

// showSlides()

// },[])
