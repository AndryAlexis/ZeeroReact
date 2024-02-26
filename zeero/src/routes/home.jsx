import React from 'react'
import Header from '../components/header'
import Slider from '../components/slider'
import logoSrc from '../assets/img/webp/logo-zeero.png'

// TailwindCSS styles used in this component
const styles = {
    section: 'h-[75vh] w-full bg-zeero-primary text-zeero-on-primary grid place-items-center px-zeero font-zeero',
    div: 'text-center grid gap-8 max-w-zeero mx-auto',
    h2: 'text-5xl font-light flex items-baseline justify-center gap-4 flex-wrap',
    img: (width, height) => `block w-[${width}px] h-[${height}px]`,
    p: 'max-w-3xl font-extralight'
}

// Logo properties
const logoProperties = {
    src: logoSrc,
    width: 145,
    height: 90,
    alt: 'Logo ZEERO'
}

logoProperties.className = styles.img(logoProperties.width, logoProperties.height)

const Home = () => {
    // Generates the title with the logo
    const generateTitle = () => (
        <h2 className={styles.h2}>
            <img {...logoProperties} /> Philosophy
        </h2>
    )

    // Description content
    const description = (
        <p className={styles.p}>
            At Zeero Studio, we focus on creating architectural projects with an emphasis on sustainability and energy efficiency, aiming for nearly zero energy buildings. Our commitment extends beyond the external structure; we delve into the design of interior spaces, prioritizing the health and well-being of users to foster a substantial improvement in their quality of life. Every line drawn and every material chosen are decisions made to collectively generate a more sustainable future.
        </p>
    )

    return (
        <>
            <Header />
            <main>
                <Slider />
                <section className={styles.section}>
                    <div className={styles.div}>
                        {generateTitle()}
                        {description}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
