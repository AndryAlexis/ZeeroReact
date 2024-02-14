import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import logo from '../../assets/img/webp/logo-zeero-architecture-studio.png'


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
            className="[&:checked+header_ul]:translate-x-[-100%] md:[&:checked+header_ul]:translate-x-0"
            // className="[&:checked+header+div]:pointer-events-auto [&:checked+header+div]:bg-[#46464677] [&:checked+header_ul]:translate-x-[-100%] md:[&:checked+header_ul]:translate-x-0"
        />
        <header 
            ref={headerRef} 
            className="flex justify-center items-center bg-zeero-primary px-zeero py-4 relative z-[999] uppercase tracking-widest"
        >
            <div className="flex justify-between items-center flex-1">
                <Link to='/'>
                    <h1>
                        <img 
                            src={logo}
                            alt="Zeero logo" 
                            width={146} 
                            height={60}
                            className="w-[146px] h-[60px]"
                        />
                    </h1>
                </Link>
                <Navbar 
                    className="relative z-1" 
                    headerHeight={headerHeight}
                />
            </div>
        </header>
    </>
}

export default Header