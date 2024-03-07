// Function to define properties for the navbar components.
/**
 * @param {object} styles - Object containing styles for the navbar components.
 * @param {object} routes - Object containing route paths for navigation.
 * @returns {object} - Object containing properties for the navbar components.
 */
const NavbarProperties = (styles, routes) => {
    // Return an object containing properties for navbar components
    return {
        // Properties for the label element
        label: {
            htmlFor: 'toggle-main-menu-mobile', // ID of the input to control the menu on mobile devices
            className: styles.label // CSS class for styling
        },
        // Properties for the hamburger icon
        hamburger: {
            size: 30, // Size of the hamburger icon
            duration: 0.4, // Duration of the animation
            color: 'white', // Color of the hamburger icon
            label: 'Show main menu mobile', // Text for accessibility
            hideOutline: true, // Hides the outline on click
            className: styles.hamburger // CSS class for styling
        },
        // Properties for the navigation container
        nav : {
            style : styles.nav.css, // CSS styles for the navigation container
            className : styles.nav.classes // CSS class for styling
        },
        // Properties for the navigation list
        ul : {
            className : styles.ul // CSS class for styling
        },
        // Properties for list items
        liEnable : {
            className : styles.li // CSS class for styling
        },
        // Properties for the "Home" navigation link
        linkToHome : {
            to : routes.home // Route path for the "Home" link
        },
        // Properties for the "Projects" navigation link
        linkToProjects : {
            to : routes.projects, // Route path for the "Projects" link
            className : styles.link  // CSS class for styling
        },
        // Properties for the "About Us" navigation link
        linkToAboutUs : {
            to : routes.aboutUs, // Route path for the "About Us" link
            className : styles.link  // CSS class for styling
        },
        // Properties for the "Contact" navigation link
        linkToContact : {
            to : routes.contact, // Route path for the "Contact" link
            className : styles.link  // CSS class for styling
        }
    }
}

export default NavbarProperties
