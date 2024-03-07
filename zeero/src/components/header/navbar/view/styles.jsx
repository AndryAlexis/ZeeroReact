/**
 * Navbar component that displays a navigation menu.
 * @param {number} headerHeight - Height of the header to adjust the menu below.
 * @returns {object} - Object containing styles for the navbar components.
 */
const NavbarStyles = (headerHeight) => {
    // Define breakpoints for responsive styling
    const breakpoints = {
        // Styles for navigation container at different breakpoints
        nav : {
            default : `
                text-white absolute grid justify-end 
                top-0 right-0 overflow-hidden shadow-blue
            `,
            md : `
                md:static md:!h-inherit md:w-inherit 
                md:bg-transparent md:!translate-y-0 md:overflow-auto
            `
        },
        // Styles for navigation list at different breakpoints
        ul : {
            default : `
                flex flex-col h-fit w-1/3 min-w-48 pb-10 pl-6 pr-0 gap-6
                font-zeero font-extralight relative top-0 left-full translate-x-0 will-change-transform 
                transition-transform duration-500 ease bg-zeero-primary [box-shadow:0_-5px_0_0_#383736]
            `,
            md : `
                md:flex-row md:!h-inherit md:w-inherit md:min-w-inherit md:static 
                md:px-0 md:pb-0 md:gap-16 md:translate-x-[initial] md:bg-transparent
            `
        }
    }

    return {
        // Style for hamburger label on mobile devices
        label: 'md:hidden',
        // Style for the hamburger icon
        hamburger: 'relative z-10',
        // Styles for the navigation container
        nav: {
            // Concatenate styles for different breakpoints
            classes: `${breakpoints.nav.default} ${breakpoints.nav.md}`,
            // CSS properties for navigation container
            css: {
                // Position the menu just below the header
                transform: `translateY(${headerHeight}px)`,
                // Set full screen height from below the header
                height: `calc(100vh - ${headerHeight}px)`
            }
        },
        // Styles for the navigation list
        ul: `${breakpoints.ul.default} ${breakpoints.ul.md}`,
        // Styles for list items
        li: 'text-zeero-on-primary-1',
        // Styles for navigation links
        link: 'pointer-events-none opacity-20'
    }
}

export default NavbarStyles
