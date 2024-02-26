import React from 'react'
import Header from '../components/header'
import Slider from '../components/slider'
import logoSrc from '../assets/img/webp/logo-zeero.png'

const Home = () => {
    // TailwindCSS styles used in this component
    const styles = {
        section: 'h-[75vh] w-full bg-zeero-primary text-zeero-on-primary grid place-items-center px-zeero font-zeero',
        div: 'text-center grid gap-8 max-w-zeero mx-auto',
        h2: 'text-5xl font-light flex items-baseline justify-center gap-4 flex-wrap',
        img: 'block w-[145px] h-[36px]',
        p: 'max-w-3xl font-extralight'
    }

    // Logo properties
    const logo = {
        src: logoSrc,
        width: 150,
        height: 90,
        alt: 'Logo ZEERO'
    }

    // Generates the title with the logo
    const generateTitle = () => (
        <h2 className={styles.h2}>
            <img
                {...logo}
                className={styles.img}
            /> Philosophy
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
