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
        {/* Input used as main menu controller for mobile */}
        <input 
            hidden
            type="checkbox" 
            name="toggle-main-menu-mobile" 
            id="toggle-main-menu-mobile"
            className="[&:checked+header+label]:pointer-events-auto [&:checked+header+label]:bg-[#46464677] [&:checked+header_ul]:translate-x-[-100%] md:[&:checked+header_ul]:translate-x-0"
        />
        <header 
            ref={headerRef} 
            className="flex justify-center items-center bg-zeero-primary px-zeero py-4 relative z-[1]"
        >
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
        {/*  */}
        <label 
            htmlFor="toggle-main-menu-mobile"
            onClick={() => console.log('lol')}
            className="absolute w-full h-[100dvh] left-0 top-0 pointer-events-none transition-colors duration-500 ease"
        >
        </label>
    </>
}

export default Header