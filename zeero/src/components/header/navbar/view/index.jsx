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
  // Get styles and properties for the navbar
  const styles = NavbarStyles(headerHeight)
  const properties = NavbarProperties(styles, routes)

  // Render the navbar
  return (
    <>
      {/* Label to control the menu on mobile devices */}
      <label {...properties.label}>
        <Hamburger {...properties.hamburger} />
      </label>
      <nav {...properties.nav}>
        <ul {...properties.ul}>
          {/* Link to Home */}
          <li {...properties.liEnable}>
            <Link {...properties.linkToHome}>
              Home
            </Link>
          </li>
          {/* Link to Projects */}
          <li>
            <Link {...properties.linkToProjects}>
              Projects
            </Link>
          </li>
          {/* Link to About Us */}
          <li>
            <Link {...properties.linkToAboutUs}>
              About Us
            </Link>
          </li>
          {/* Link to Contact */}
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
