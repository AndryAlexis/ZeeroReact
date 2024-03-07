import View from './view'

/**
 * Navbar component that displays a navigation menu.
 * @param {number} headerHeight - Height of the header to adjust the menu below.
 * @returns {JSX.Element} - View of component
 */
const Navbar = ({ headerHeight }) => {
    const routes = {
        home : '/',
        projects : '#',
        aboutUs : '#',
        contact : '#'
    }

    return <View headerHeight={headerHeight} routes={routes}/>
}

export default Navbar
