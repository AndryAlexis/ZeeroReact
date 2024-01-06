import { Link } from "react-router-dom"
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react"

const Navbar = ({headerHeight}) => {
    const hamburgerIcon = {
        size : 30,
        duration : .4,
        color : 'white',
        label : 'Show main menu mobile',
        hideOutline : true
    }

    const [isOpen, setOpen] = useState(false)

    const navStyle = {
        transform: `translateY(${headerHeight}px)`
    }

    return <>
        <input hidden type="checkbox" name="toggle-main-navbar" id="toggle-main-navbar" />
        <label htmlFor="toggle-main-navbar" className="md:hidden">
            <Hamburger 
                size={hamburgerIcon.size}
                duration={hamburgerIcon.duration}
                color={hamburgerIcon.color}
                label={hamburgerIcon.label}
                hideOutline={hamburgerIcon.hideOutline}
                toggled={isOpen} 
                toggle={setOpen}
                className='relative z-10'
            />
        </label>
        <nav 
            className='
                text-white bg-[#01e1ff59] absolute w-screen h-[100dvh] top-0 right-0 overflow-hidden
                md:static md:h-inherit md:w-inherit grid place-items-center md:bg-transparent md:!translate-y-0 md:overflow-auto
            ' 
            style={navStyle}
        >
            <ul className='gap-6 flex flex-col md:flex-row w-1/3 min-w-48 bg-[black] pl-6 pr-zeero h-inherit md:w-inherit md:min-w-inherit md:px-0 md:bg-transparent md:gap-10'>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='/about-us'>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>

    </>
}

export default Navbar