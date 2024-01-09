import Header from '../components/header'
import Slider from '../components/slider'
import logo from '../assets/img/webp/logo-zeero.png'

const Home = () => {
    return <>
        <Header />
        <main>
            <Slider />
            <section className='h-[75vh] w-full bg-zeero-primary text-zeero-on-primary grid place-items-center px-zeero font-zeero'>
                <div className='text-center grid gap-8 max-w-zeero mx-auto'>
                    <h2 className='text-5xl font-light flex place-items-center justify-center gap-4'>
                        <img className='block' src={logo} alt="logo zeero" width={130} height={70} /> philosophy
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