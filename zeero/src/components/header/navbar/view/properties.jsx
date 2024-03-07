// Function to define properties for the navbar components.
/**
 * @param {object} styles - Object containing styles for the navbar components.
 * @param {object} routes - Object containing route paths for navigation.
 * @returns {object} - Object containing properties for the navbar components.
 */
const NavbarProperties = (styles, routes) => {
    return {
        label: {
            htmlFor: 'toggle-main-menu-mobile', // ID of the input to control the menu on mobile devices
            className: styles.label // Class for the hamburger label
        },
        hamburger: {
            size: 30, // Size of the hamburger icon
            duration: 0.4, // Duration of the animation
            color: 'white', // Color of the hamburger icon
            label: 'Show main menu mobile', // Text for accessibility
            hideOutline: true, // Hides the outline on click
            className: styles.hamburger // Class for the hamburger icon
        },
        nav : {
            style : styles.nav.css,
            className : styles.nav.classes
        },
        ul : {
            className : styles.ul
        },
        liEnable : {
            className : styles.li
        },
        linkToHome : {
            to : routes.home
        },
        linkToProjects : {
            to : routes.projects,
            className : styles.link 
        },
        linkToAboutUs : {
            to : routes.aboutUs,
            className : styles.link 
        },
        linkToContact : {
            to : routes.contact,
            className : styles.link 
        }
    }
}

export default NavbarProperties
