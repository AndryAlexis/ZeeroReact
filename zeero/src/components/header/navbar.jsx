import { Link } from 'react-router-dom'
import { Turn as Hamburger } from 'hamburger-react'

/**
 * Navbar component that displays a navigation menu.
 * @param {number} headerHeight - Height of the header to adjust the menu below.
 */
const Navbar = ({ headerHeight }) => {
  const ROOT_PATH = '/' // Root path for the "Home" link

  // Styles for the Navbar
  const styles = {
    label: 'md:hidden', // Style for hamburger label on mobile devices
    hamburger: 'relative z-10', // Style for the hamburger icon
    nav: {
      classes: 'text-white absolute justify-end top-0 right-0 overflow-hidden md:static md:!h-inherit md:w-inherit grid md:bg-transparent md:!translate-y-0 md:overflow-auto shadow-blue', // Styles for the navigation container
      css: {
        transform: `translateY(${headerHeight}px)`, // Positions the menu just below the header
        height: `calc(100vh - ${headerHeight}px)` // Full screen height from below the header
      }
    },
    ul: '[box-shadow:0_-5px_0_0_#383736] h-fit pb-10 font-zeero font-extralight relative top-0 left-full translate-x-0 gap-6 flex flex-col md:pb-0 md:flex-row w-1/3 min-w-48 bg-zeero-primary pl-6 pr-0 md:w-inherit md:static md:min-w-inherit md:!h-inherit md:px-0 md:bg-transparent md:gap-16 md:translate-x-[initial] will-change-transform transition-transform duration-500 ease', // Styles for the navigation list
    li: 'text-zeero-on-primary-1', // Styles for list items
    link: 'pointer-events-none opacity-20' // Styles for navigation links
  }

  // Properties for Navbar elements
  const properties = {
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
    }
  }

  return (
    <>
      {/* Label to control the menu on mobile devices */}
      <label {...properties.label}>
        <Hamburger {...properties.hamburger} />
      </label>
      {/* Navigation container */}
      <nav
        className={styles.nav.classes}
        style={styles.nav.css}
      >
        {/* List of navigation items */}
        <ul className={styles.ul}>
          {/* List item "Home" */}
          <li className={styles.li}>
            <Link to={ROOT_PATH}>
              Home
            </Link>
          </li>
          {/* List item "Projects" */}
          <li>
            <Link to='#' className={styles.link}>
              Projects
            </Link>
          </li>
          {/* List item "About Us" */}
          <li>
            <Link to='#' className={styles.link}>
              About Us
            </Link>
          </li>
          {/* List item "Contact" */}
          <li>
            <Link to='#' className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
