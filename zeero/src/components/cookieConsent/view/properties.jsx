/**
 * Function to define the properties of components related to cookies.
 * @param {object} styles - Object containing classes and CSS styles for the components.
 * @param {function} handleCookieConsent - Control function to handle cookie consent.
 * @returns {object} - Object containing the properties of components related to cookies.
 */
const CookiesProperties = (styles, handleCookieConsent) => {
    // Define the type of input element
    const INPUT_TYPE = 'checkbox'
    // Define the name for the cookie consent
    const COOKIE_CONSENT = 'cookieConsent'

    // Return an object containing properties for various components related to cookies
    return {
        // Properties for the input element
        input: {
            hidden: true, // Input element is hidden
            type: INPUT_TYPE, // Type of input element
            name: COOKIE_CONSENT, // Name of the input element
            id : COOKIE_CONSENT, // ID of the input element
            tabIndex: -1, // Set tabIndex to -1 to prevent focus
            className: styles.input // CSS class for styling
        },
        // Properties for the parent div
        divParent: {
            style: styles.divParent.css, // CSS styles for the parent div
            className: styles.divParent.classes // CSS class for styling
        },
        // Properties for the child div
        divChild: {
            style: styles.divChild.css, // CSS styles for the child div
            className: styles.divChild.classes // CSS class for styling
        },
        // Properties for the label element
        label: {
            htmlFor: COOKIE_CONSENT, // Associate label with input element
            onClick: handleCookieConsent, // Function to handle click event
            className: styles.label // CSS class for styling
        }
    }
}

export default CookiesProperties
