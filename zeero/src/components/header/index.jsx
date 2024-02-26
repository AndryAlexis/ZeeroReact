import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import logoSrc from '../../assets/img/webp/logo-zeero-architecture-studio.png'

import Navbar from './navbar'

// Root path for the home link
const ROOT_PATH = '/'

// Define styles for header elements using TailwindCSS classes
const styles = {
    header: 'flex justify-center items-center bg-zeero-primary px-zeero py-4 relative z-[999] uppercase tracking-widest',
    div: 'flex justify-between items-center flex-1',
    input: '[&:checked+header_ul]:-translate-x-full md:[&:checked+header_ul]:translate-x-0',
    navbar: 'relative z-1',
    img: (width, height) => `w-[${width}px] h-[${height}px]`
}

// Logo properties for the image element
const logoProperties = {
    src: logoSrc,
    alt: 'Logo ZEERO',
    width: 146,
    height: 60,
}

// Dynamically assign className using styles.img function
logoProperties.className = styles.img(logoProperties.width, logoProperties.height)

// Properties for the input element
const inputProperties = {
    hidden: true,
    type: 'checkbox',
    name: 'toggle-main-menu-mobile',
    id: 'toggle-main-menu-mobile',
    className: styles.input
}

const Header = () => {
    // State to track the height of the header
    const [headerHeight, setHeaderHeight] = useState(0)
    const headerRef = useRef()

    // Effect to update header height on mount
    useEffect(() => {
        setHeaderHeight(headerRef.current.offsetHeight)
    }, [])

    return (
        <>
            {/* Input used as main menu controller for mobile */}
            <input {...inputProperties}/>
            <header
                ref={headerRef}
                className={styles.header}
            >
                <div className={styles.div}>
                    {/* Logo with Link to home */}
                    <Link to={ROOT_PATH}>
                        <h1>
                            <img {...logoProperties} />
                        </h1>
                    </Link>
                    <Navbar
                        className={styles.navbar}
                        headerHeight={headerHeight}
                    />
                </div>
            </header>
        </>
    )
}

export default Header
