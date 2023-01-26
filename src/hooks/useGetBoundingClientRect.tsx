import { useState, useMemo, useEffect } from "react"


const useGetBoundingClientRect = (ref: any) => {
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const [visible, setVisible] = useState(false)

    const handleScroll = () => {
        if (ref?.current?.getBoundingClientRect().top > 0) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    return visible
}

export default useGetBoundingClientRect