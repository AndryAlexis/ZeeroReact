import { setWithExpiry, getWithExpiry } from "../localStorageController"

import View from "./view"

const CookieConsent = () => {

  const KEY_COOKIE_CONSENT = 'cookieConsented'
  const COOKIE_CONSENT = getWithExpiry(KEY_COOKIE_CONSENT)   // Get cookie consent status from localStorage

  // Function to handle setting cookie consent
  const handleCookieConsent = () => {
    const daysToExpire = 30
    setWithExpiry(Model.KEY_COOKIE_CONSENT, true, daysToExpire)
  }

  return <View 
          cookieConsent={COOKIE_CONSENT}
          handleCookieConsent={handleCookieConsent}/>
}

export default CookieConsent
