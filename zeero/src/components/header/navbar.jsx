import { Link } from "react-router-dom"
import { Turn as Hamburger } from 'hamburger-react'

const Navbar = ({headerHeight}) => {

    //Params for hamburger package
    const hamburgerIcon = {
        size : 30,
        duration : .4, //Animation
        color : 'white',
        label : 'Show main menu mobile', //For accesibility
        hideOutline : true
    }
    //React styles for nav element
    const navStyle = {
        transform: `translateY(${headerHeight}px)`, //It places it just below the header
        height: `calc(100dvh)` //Full screen height from below the header
    }

    return <>
        <label htmlFor="toggle-main-menu-mobile" className="md:hidden">
            <Hamburger 
                size={hamburgerIcon.size}
                duration={hamburgerIcon.duration}
                color={hamburgerIcon.color}
                label={hamburgerIcon.label}
                hideOutline={hamburgerIcon.hideOutline}
                className='relative z-10'
            />
        </label>
        <nav 
            className='text-white absolute justify-end top-0 right-0 overflow-hidden md:static md:!h-inherit md:w-inherit grid md:bg-transparent md:!translate-y-0 md:overflow-auto shadow-blue' 
            style={navStyle}
        >
            <ul 
                className='[box-shadow:0_-5px_0_0_#383736] h-fit pb-10 font-zeero font-extralight relative top-0 left-full translate-x-0 gap-6 flex flex-col md:pb-0 md:flex-row w-1/3 min-w-48 bg-zeero-primary pl-6 pr-zeero md:w-inherit md:static md:min-w-inherit md:!h-inherit md:px-0 md:bg-transparent md:gap-16 md:translate-x-[initial] will-change-transform transition-transform duration-500 ease'
            >
                <li className="text-zeero-on-primary-1">
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='#' className="pointer-events-none opacity-10">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='#' className="pointer-events-none opacity-10">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to='#' className="pointer-events-none opacity-10">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>

    </>
}

export default Navbar