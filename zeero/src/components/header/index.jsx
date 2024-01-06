import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"

import Navbar from "./navbar"

const Header = () => {
    const [headerHeight, setHeaderHeight] = useState(0)
    const headerRef = useRef()

    useEffect(() => {
        setHeaderHeight(headerRef.current.offsetHeight)
    }, []) //Empty dependency array so it only runs once at render

    return <>
        <header ref={headerRef} className="flex justify-center items-center bg-zeero-primary px-zeero py-4 relative z-[1]">
            <div className="flex justify-between items-center flex-1 max-w-zeero">
                <Link to='/'>
                    <h1>
                        <img 
                            src="https://picsum.photos/130/70" 
                            alt="Zeero logo" 
                            width={130} 
                            height={70}
                            className="min-h-[70px]"
                        />
                    </h1>
                </Link>
                <Navbar className="relative z-[1]" headerHeight={headerHeight}/>
            </div>
        </header>
        <div className="absolute w-full h-[100dvh] bg-[#ff0000da] left-0 top-0">

        </div>
    </>
}

export default Header