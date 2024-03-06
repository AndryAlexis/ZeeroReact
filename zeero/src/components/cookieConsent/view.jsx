const View = ({cookieConsent, handleCookieConsent}) => {
    const styles = CookieStyle(cookieConsent)
    const properties = CookieProperty(styles, handleCookieConsent)

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

const CookieProperty = (styles, handleCookieConsent) => {
    return {
        input: {
            hidden: true,
            type: 'checkbox',
            name: 'cookieConsent',
            id : 'cookieConsent',
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
    }
}

const CookieStyle = (consent) => {
    const SHOW = '0%'
    const HIDDEN = '100%'

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
    }

    return styles
}

export default View