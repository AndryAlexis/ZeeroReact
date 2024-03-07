// Function to define styles for the navbar components.
/**
 * @param {number} headerHeight - Height of the header to adjust the menu below.
 * @returns {object} - Object containing styles for the navbar components.
 */
const NavbarStyles = (headerHeight) => {
    return {
        label: 'md:hidden', // Style for hamburger label on mobile devices
        hamburger: 'relative z-10', // Style for the hamburger icon
        nav: {
            classes: 'text-white absolute justify-end top-0 right-0 overflow-hidden md:static md:!h-inherit md:w-inherit grid md:bg-transparent md:!translate-y-0 md:overflow-auto shadow-blue', // Styles for the navigation container
            css: {
                transform: `translateY(${headerHeight}px)`, // Positions the menu just below the header
                height: `calc(100vh - ${headerHeight}px)` // Full screen height from below the header
            }
        },
        ul: '[box-shadow:0_-5px_0_0_#383736] h-fit pb-10 font-zeero font-extralight relative top-0 left-full translate-x-0 gap-6 flex flex-col md:pb-0 md:flex-row w-1/3 min-w-48 bg-zeero-primary pl-6 pr-0 md:w-inherit md:static md:min-w-inherit md:!h-inherit md:px-0 md:bg-transparent md:gap-16 md:translate-x-[initial] will-change-transform transition-transform duration-500 ease', // Styles for the navigation list
        li: 'text-zeero-on-primary-1', // Styles for list items
        link: 'pointer-events-none opacity-20' // Styles for navigation links
    };
};

export default NavbarStyles;
