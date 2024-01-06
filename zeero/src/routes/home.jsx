import Header from '../components/header'
import Slider from '../components/slider'

const Home = () => {
    return <>
        <Header/>
        <main>
            <Slider />
            <section className='h-[75dvh]'>
                <h2>
                    Zeero philosophy
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, cupiditate saepe odit veniam voluptate placeat a, totam esse, vel delectus dicta autem vitae perspiciatis porro iusto quidem nihil velit iure non minus nemo consequuntur. Saepe, sunt? Quos eaque quas eligendi voluptatibus nihil maiores cupiditate molestias, similique repudiandae ad reiciendis quidem!
                </p>
            </section>
        </main>
    </>
}

export default Home