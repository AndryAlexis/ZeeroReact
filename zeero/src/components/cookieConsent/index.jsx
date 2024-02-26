import { setWithExpiry, getWithExpiry } from "../localStorageController";

// Constants
const SHOW = '0%';
const HIDDEN = '100%';
const KEY_COOKIE_CONSENT = 'cookieConsented';

const CookieConsent = () => {
  // Get cookie consent status from localStorage
  const consent = getWithExpiry(KEY_COOKIE_CONSENT);

  // Function to handle setting cookie consent
  const handleCookieConsent = () => {
    const daysToExpire = 30;
    setWithExpiry(KEY_COOKIE_CONSENT, true, daysToExpire);
  };

  const styles = {
    input: "[&:checked+div>div]:!translate-y-[100%] [&:checked+div]:!pointer-events-none",
    divParent: {
      classes: "fixed bottom-0 left-0 z-[999] w-full overflow-hidden",
      css: { pointerEvents: `${consent === null ? 'auto' : 'none'}` } // Banner is not interactable if user has given consent
    },
    divChild: {
      classes: "will-change-transform transition-transform duration-400 flex justify-between items-center w-inherit text-md bg-zeero-primary gap-4 text-zeero-on-primary font-extralight py-4 p-zeero",
      css: { transform: `translateY(${consent === null ? SHOW : HIDDEN})` } // Banner is visible if user has not consented
    },
    strong: "font-bold",
    label: "py-2 cursor-pointer uppercase tracking-widest border px-4"
  };

  // Properties for JSX elements
  const properties = {
    input: {
      hidden: true,
      type: 'checkbox',
      name: 'cookieConsent',
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
      htmlFor: 'cookieConsent',
      onClick: handleCookieConsent,
      className: styles.label
    }
  };

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
  );
};

export default CookieConsent;
