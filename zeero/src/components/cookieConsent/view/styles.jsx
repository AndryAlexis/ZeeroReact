/**
 * Function to define the styles of components related to cookies.
 * @param {boolean} consent - Indicates whether the user has given consent for cookies.
 * @returns {object} - Object containing the styles of components related to cookies.
 */
const CookiesStyles = (consent) => {
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

export default CookiesStyles
