import Header from '../components/header'
import Slider from '../components/slider'

const Home = () => {
    return <>
        <Header />
        <main>
            <Slider />
            <section className='h-[75vh] max-w-zeero mx-auto bg-zeero-primary text-zeero-on-primary grid place-items-center px-zeero font-zeero'>
                <div className='text-center grid gap-8'>
                    <h2 className='text-5xl font-light'>
                        Zeero philosophy
                    </h2>
                    <p className='max-w-3xl font-extralight'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, cupiditate saepe odit veniam voluptate placeat a, totam esse, vel delectus dicta autem vitae perspiciatis porro iusto quidem nihil velit iure non minus nemo consequuntur. Saepe, sunt? Quos eaque quas eligendi voluptatibus nihil maiores cupiditate molestias, similique repudiandae ad reiciendis quidem!
                    </p>
                </div>
            </section>
        </main>
    </>
}

export default Home