import { useEffect } from "react"



export default function Resizer() {
    useEffect(() => {

        let height =(document.documentElement.scrollHeight)
        let width =(document.documentElement.scrollWidth)

        function handleWindowResize() {
            height = document.documentElement.scrollHeight
            width = document.documentElement.scrollWidth
            return {height, width}
        }

        window.addEventListener('resize', handleWindowResize)
    }, [])
}
