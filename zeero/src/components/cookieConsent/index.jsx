

const CookieConsent = () => {
    // Function to save data in localStorage with expiry date
    const setWithExpiry = (key, value, expiryDays) => {
        const now = new Date()
        const expiryDate = new Date(now.getTime() + expiryDays * 24 * 60 * 60 * 1000)
        const item = {
            value: value,
            expiry: expiryDate.getTime()
        }
        localStorage.setItem(key, JSON.stringify(item))
    }

    // Function to retrieve data from localStorage and check expiry date
    const getWithExpiry = key => {
        const itemStr = localStorage.getItem(key)
        // If the item doesn't exist, return null
        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        const now = new Date().getTime()
        
        if (item?.expiry === undefined) 
            return null
        // Check if the expiry date has passed
        if (now > item.expiry) {
            // If it has expired, remove the item from localStorage
            localStorage.removeItem(key)
            return null
        }
        return item.value
    }

    const consent = getWithExpiry(KEY_COOKIE_CONSENT)
    const SHOW = '0%'
    const HIDDEN = '100%'

    const handleCookieConsent = () => {
        const daysToExpire = 30
        setWithExpiry(KEY_COOKIE_CONSENT, true, daysToExpire)
    }

    return <>
        <input className="[&:checked+div>div]:!translate-y-[100%] [&:checked+div]:pointer-events-none" hidden type="checkbox" name="cookieConsent" id="cookieConsent" tabIndex={-1} />
        <div className="fixed bottom-0 left-0 z-[999] w-full overflow-hidden">
            <div 
                className="will-change-transform transition-transform duration-400 flex justify-between items-center w-inherit text-md bg-zeero-primary gap-4 text-zeero-on-primary font-extralight py-4 p-zeero"
            style={{transform: `translateY(${consent === null ? SHOW : HIDDEN})`}}
            >
                <p>
                    Este sitio web <strong className="font-bold">NO</strong> utiliza cookies propias ni de terceros.
                </p>
                <label htmlFor="cookieConsent" className="py-2 cursor-pointer uppercase tracking-widest" onClick={handleCookieConsent}>
                    Aceptar
                </label>
            </div>
        </div>
    </>
}

export const KEY_COOKIE_CONSENT = 'cookieConsented'
export default CookieConsent