// Import statements
import { setWithExpiry, getWithExpiry } from "../localStorageController"
import View from "./view"

/**
 * Functional component to manage cookie consent.
 * @returns {JSX.Element} - Rendered component.
 */
const CookieConsent = () => {
  // Constants for cookie consent
  const KEY_COOKIE_CONSENT = 'cookieConsented'
  const COOKIE_CONSENT = getWithExpiry(KEY_COOKIE_CONSENT)   // Get cookie consent status from localStorage

  // Function to handle setting cookie consent
  const handleCookieConsent = () => {
    const daysToExpire = 30
    setWithExpiry(KEY_COOKIE_CONSENT, true, daysToExpire)
  }

  // Render the View component with cookie consent props
  return <View 
          cookieConsent={COOKIE_CONSENT}
          handleCookieConsent={handleCookieConsent} />
}

export default CookieConsent
