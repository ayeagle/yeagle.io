import styles from '../components/pomodomo/Meteor.module.css'


export default function Meteor () {

    return (
        // <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
        // <svg url="/Meteor.svg">
        //     <g mask="url(&quot;#SvgjsMask1000&quot;)" fill="none">
        //         <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
        //         <path d="M373 467L372 120" stroke-width="8" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //         <path d="M1166 62L1165 457" stroke-width="10" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //         <path d="M23 484L22 692" stroke-width="6" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //         <path d="M850 240L849 16" stroke-width="8" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M543 386L542 230" stroke-width="10" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M1216 393L1215 560" stroke-width="10" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M1363 510L1362 344" stroke-width="10" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M703 503L702 208" stroke-width="10" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M1139 82L1138 252" stroke-width="8" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M220 261L219 20" stroke-width="6" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //         <path d="M441 218L440 513" stroke-width="6" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M1242 76L1241 -282" stroke-width="6" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //         <path d="M104 140L103 410" stroke-width="8" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M68 162L67 335" stroke-width="10" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //         <path d="M214 268L213 36" stroke-width="8" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //         <path d="M1311 389L1310 747" stroke-width="6" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M879 344L878 552" stroke-width="8" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M1374 445L1373 603" stroke-width="6" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M826 507L825 286" stroke-width="10" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M946 470L945 185" stroke-width="8" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //         <path d="M623 356L622 -3" stroke-width="6" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M84 35L83 379" stroke-width="8" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M134 351L133 574" stroke-width="10" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //         <path d="M145 80L144 410" stroke-width="8" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M785 543L784 875" stroke-width="10" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M126 489L125 826" stroke-width="10" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M493 151L492 -110" stroke-width="8" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M819 273L818 683" stroke-width="10" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M1 271L0 92" stroke-width="6" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M501 425L500 730" stroke-width="8" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //         <path d="M427 336L426 146" stroke-width="10" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //         <path d="M533 116L532 -289" stroke-width="10" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //         <path d="M39 305L38 -25" stroke-width="10" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M844 199L843 34" stroke-width="8" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M292 456L291 92" stroke-width="10" stroke="url(#SvgjsLinearGradient1002)" stroke-linecap="round" class="Down"></path>
        //         <path d="M1401 414L1400 210" stroke-width="10" stroke="url(#SvgjsLinearGradient1001)" stroke-linecap="round" class="Up"></path>
        //     </g>
        //     <defs>
        //         <mask id="SvgjsMask1000">
        //             <rect width="1440" height="560" fill="#ffffff"></rect>
        //         </mask>
        //         <linearGradient x1="0%" y1="100%" x2="0%" y2="0%" id="SvgjsLinearGradient1001">
        //             <stop stop-color="rgba(28, 83, 142, 0)" offset="0"></stop>
        //             <stop stop-color="#1c538e" offset="1"></stop>
        //         </linearGradient>
        //         <linearGradient x1="0%" y1="0%" x2="0%" y2="100%" id="SvgjsLinearGradient1002">
        //             <stop stop-color="rgba(28, 83, 142, 0)" offset="0"></stop>
        //             <stop stop-color="#1c538e" offset="1"></stop>
        //         </linearGradient>
        //     </defs>
        // </svg>
        <div className={styles.svggg}> </div>

    )
}
