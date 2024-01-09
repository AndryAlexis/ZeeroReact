import React, { useEffect, useRef, useState } from "react"
import data from './data'

const DOTS_KEY = 'slider_dots'
const BG_ZEERO_PRIMARY = 'bg-zeero-primary'
const BG_TRANSPARENT = 'bg-transparent'

const Dots = ({timeBtwnImages, timeTransitionImage}) => {
    const [currentPosDot, setCurrentPosDot] = useState(1)

    const dotsRef = useRef(data.map(() => React.createRef()))
    
    const [dots] = useState(
        data.map((d, i) => (
            <span
                ref={dotsRef.current[i]}
                key={`${DOTS_KEY}_${i}`}
                className={`w-[12px] h-[12px] border-[1px] transition-colors ease border-zeero-primary rounded-full ${i == 0 ? BG_TRANSPARENT : BG_ZEERO_PRIMARY}`}
                style={{transitionDuration: `${timeTransitionImage}ms`}}
            ></span>
        ))
    )

    useEffect(() => {
        const MAX = dots.length - 1

        const intervarID = setInterval(() => {

            if (currentPosDot > MAX) {
                dotsRef.current.map(dot => {
                    dot.current.classList.remove(BG_TRANSPARENT)
                    dot.current.classList.add(BG_ZEERO_PRIMARY)
                })

                dotsRef.current[0].current.classList.add(BG_TRANSPARENT)
                dotsRef.current[0].current.classList.remove(BG_ZEERO_PRIMARY)

                setCurrentPosDot(1)
            } else {            
                dotsRef.current[currentPosDot - 1].current.classList.toggle(BG_ZEERO_PRIMARY)
    
                dotsRef.current[currentPosDot].current.classList.toggle(BG_ZEERO_PRIMARY)
                dotsRef.current[currentPosDot].current.classList.toggle(BG_TRANSPARENT)
                setCurrentPosDot(currentPosDot + 1)
            }
        }, timeBtwnImages)

        // Clear the interval when unmounting the component or when a change occurs in currentPicture
        return () => clearInterval(intervarID)
    }, [currentPosDot])

    return <>
        <div className="flex flex-col justify-end gap-2 absolute w-full top-0 bottom-0 left-0 z-50 pl-zeero pb-zeero h-[100dvh] md:h-screen pointer-events-none">
            {
                dots.map(dot => dot)
            }
        </div>
    </> 
}

export default Dots