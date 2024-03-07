/**
 * Function to define the properties of components related to cookies.
 * @param {object} styles - Object containing classes and CSS styles for the components.
 * @param {function} handleCookieConsent - Control function to handle cookie consent.
 * @returns {object} - Object containing the properties of components related to cookies.
 */
const CookiesProperties = (styles, handleCookieConsent) => {
    const INPUT_TYPE = 'checkbox'
    const COOKIE_CONSENT = 'cookieConsent'

    return {
        input: {
            hidden: true,
            type: INPUT_TYPE,
            name: COOKIE_CONSENT,
            id : COOKIE_CONSENT,
            tabIndex: -1,
            className: styles.input
        },
        divParent: {
            style: styles.divParent.css,
            className: styles.divParent.classes
        },
        divChild: {
            style: styles.divChild.css,
            className: styles.divChild.classes
        },
        label: {
            htmlFor: COOKIE_CONSENT,
            onClick: handleCookieConsent,
            className: styles.label
        }
    }
}

export default CookiesProperties
