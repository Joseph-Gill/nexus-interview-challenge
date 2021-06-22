import {useEffect, useState} from 'react'

// Returns current height / width of the window
export const useWindowDimensions = () => {
    const getWindowDimensions = () => {
        const {innerWidth: width, innerHeight: height} = window
        return {
            width,
            height
        }
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowDimensions
}
