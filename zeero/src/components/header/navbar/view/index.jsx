import { Link } from 'react-router-dom'
import { Turn as Hamburger } from 'hamburger-react'
import NavbarStyles from './styles'
import NavbarProperties from './properties'

/**
 * Functional component to render the navbar.
 * @param {number} headerHeight - Height of the header to adjust the menu below.
 * @param {object} routes - Object containing route paths for navigation.
 * @returns {JSX.Element} - HTML elements
 */
const View = ({ headerHeight, routes }) => {
  // Calculate styles for the navbar
  const styles = NavbarStyles(headerHeight)
  // Get properties for the navbar components
  const properties = NavbarProperties(styles, routes)

  return (
    <>
      <label {...properties.label}> {/* Label to control the menu on mobile devices */}
        <Hamburger {...properties.hamburger} />
      </label>
      <nav {...properties.nav}>
        <ul {...properties.ul}>
          <li {...properties.liEnable}>
            <Link {...properties.linkToHome}>
              Home
            </Link>
          </li>
          <li>
            <Link {...properties.linkToProjects}>
              Projects
            </Link>
          </li>
          <li>
            <Link {...properties.linkToAboutUs}>
              About Us
            </Link>
          </li>
          <li>
            <Link {...properties.linkToContact}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default View
