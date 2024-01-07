import React, { useEffect, useState, useRef } from 'react'
import data from './data'
import Dots from './dots'

const MILISECONDS = 3000 //Fade transition

const Slider = () => {
    const [currentPosPicture, setCurrentPosPicture] = useState(data.length - 1)
    const picturesRef = useRef(data.map(() => React.createRef()))
    const [pictures] = useState(
        data.map((d, i) => (
            <picture
                ref={picturesRef.current[i]}
                key={i}
                className='h-inherit w-inherit transition-opacity duration-[1.5s] ease'
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
                    className='h-inherit w-inherit block object-cover object-center' 
                    src={d.src} 
                    alt={d.alt} 
                />
            </picture>
        ))
    )

    useEffect(() => {
        const MAX = data.length - 1

        const intervarID = setInterval(() => {
            console.log('CAMBIO')
            picturesRef.current[currentPosPicture].current.classList.add('opacity-0')
            
            setCurrentPosPicture(currentPosPicture - 1)

            //Estamos en la PENULTIMA posición
            if (currentPosPicture == 1) {
                picturesRef.current[MAX].current.style.zIndex = -1
                picturesRef.current[MAX].current.classList.remove('opacity-0')
            }
            
            if (currentPosPicture < 1) {
                // console.log('VUELTA')
                const timeoutID = setInterval(() => {
                    // console.log('ANIM FINISH')

                    picturesRef.current[MAX].current.style.zIndex = MAX

                    picturesRef.current.map(pr => pr.current.classList.remove('opacity-0'))

                    clearTimeout(timeoutID)
                }, 1500)
                setCurrentPosPicture(MAX)
            }       

        }, MILISECONDS)

        // Clear the interval when unmounting the component or when a change occurs in currentPicture
        return () => clearInterval(intervarID)
    }, [currentPosPicture])

    return <>
        <div className='h-[115vh] w-full relative [&>picture:not(:first-child)]:absolute [&>picture:not(:first-child)]:top-0 [&>picture:not(:first-child)]:left-0'>
            {pictures}
            <Dots/>
        </div>
    </> 
}

export default Slider