import React, { useEffect, useState, useRef } from 'react'
import data from './data'

const MILISECONDS = 3000 //Fade transition

const Slider = () => {
    const [currentPosPicture, setCurrentPosPicture] = useState(data.length - 1)
    const picturesRef = useRef(data.map(() => React.createRef()))
    const [pictures] = useState(
        data.map((d, i) => (
            <picture
                ref={picturesRef.current[i]}
                key={i}
                className='h-inherit transition-opacity duration-[1.5s] ease'
                style={{zIndex: i}}
            >
                {d.source.map((source, i) => (
                    <source
                        key={i}
                        media={source.media}
                        srcSet={source.srcSet}
                        type={source.type}
                    />)
                )}
                <img 
                    className='h-inherit block object-cover object-center' 
                    src={d.src} 
                    alt={d.alt} 
                />
            </picture>
        ))
    )

    useEffect(() => {
        const MAX = data.length - 1
        let timeoutID = null

        const intervarID = setInterval(() => {
            console.log('CAMBIO')
            picturesRef.current[currentPosPicture].current.classList.add('opacity-0')
            // picturesRef.current[currentPosPicture - 1].current.style.zIndex = 1
            
            
            setCurrentPosPicture(currentPosPicture - 1)

            //Estamos en la PENULTIMA posición
            if (currentPosPicture == 1) {
                picturesRef.current[MAX].current.style.zIndex = -1
                picturesRef.current[MAX].current.classList.remove('opacity-0')
            }
            
            if (currentPosPicture < 1) {
                console.log('VUELTA')
                timeoutID = setInterval(() => {
                    console.log('ANIM FINISH')
                    clearTimeout(timeoutID)

                    picturesRef.current[MAX].current.style.zIndex = MAX

                    picturesRef.current.map(pr => pr.current.classList.remove('opacity-0'))
                }, 1500)
                setCurrentPosPicture(MAX)
            }       

        }, MILISECONDS)
        // Clear the interval when unmounting the component or when a change occurs in currentPicture
        return () => {
            clearInterval(intervarID)
            // clearTimeout(timeoutID)
        } 
    }, [currentPosPicture])

    return <>
        <div className='h-[115dvh] w-full relative [&>picture:not(:first-child)]:absolute [&>picture:not(:first-child)]:top-0 [&>picture:not(:first-child)]:left-0'>
            {pictures}
        </div>
    </> 
}

export default Slider