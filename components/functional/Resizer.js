import { useEffect } from "react"



export default function Resizer() {

    // const [height, updateHeight] = useState(0)
    // const [width, updateWidth] = useState(0)

    // const dispatch = useDispatch();
    // const state = useSelector((state) => state);


    useEffect(() => {

        let height =(document.documentElement.scrollHeight)
        let width =(document.documentElement.scrollWidth)

        function handleWindowResize() {
            //   updateHeight(window.innerHeight)
            //   updateWidth(window.innerWidth)
            height = document.documentElement.scrollHeight
            width = document.documentElement.scrollWidth
            return {height, width}
        }

        window.addEventListener('resize', handleWindowResize)
    }, [])

    // return {height, width}


}
