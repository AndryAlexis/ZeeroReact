import CookiesProperties from './properties'
import CookiesStyles from './styles'

/**
 * Functional component to render the cookie consent banner.
 * @param {object} props - Props passed to the component.
 * @param {boolean} props.cookieConsent - Indicates whether the user has given consent for cookies.
 * @param {function} props.handleCookieConsent - Function to handle cookie consent.
 * @returns {JSX.Element} - Rendered component.
 */
const View = ({cookieConsent, handleCookieConsent}) => {
    // Get styles for the cookie consent banner
    const styles = CookiesStyles(cookieConsent)
    // Get properties for the cookie consent components
    const properties = CookiesProperties(styles, handleCookieConsent)

    return (
        <>
            {/* Input element to dismiss the cookie banner */}
            <input {...properties.input} />
            {/* Cookie banner */}
            <div {...properties.divParent}>
                <div {...properties.divChild}>
                    <p>
                        Este sitio web <strong className={styles.strong}>NO</strong> utiliza cookies propias ni de terceros.
                    </p>
                    <label {...properties.label}>
                        Aceptar
                    </label>
                </div>
            </div>
        </>
    )
}

export default View
