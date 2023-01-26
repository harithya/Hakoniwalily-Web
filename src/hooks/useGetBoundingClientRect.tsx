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
        const bounc = ref?.current?.getBoundingClientRect().top;
        if (bounc > 0 && bounc < 500) {
            setVisible(true)
        } else {
            setVisible(false)
        }

        // if (ref?.current?.getBoundingClientRect().top > 50 && ref?.current?.getBoundingClientRect().top < 100) {
        //     setVisible(true)
        // } else {
        //     setVisible(false)
        // }
    }

    return visible
}

export default useGetBoundingClientRect