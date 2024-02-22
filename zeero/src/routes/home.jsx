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
                    <h2 className='text-5xl font-light flex items-baseline justify-center gap-4 flex-wrap'>
                        <img className='block w-[145px] h-[36px]' src={logo} alt="logo zeero" width={150} height={90} /> philosophy
                    </h2>
                    <p className='max-w-3xl font-extralight'>
                        A Zeero Studio ens dediquem a la creació de projectes arquitectònics amb un enfocament cap a la sostenibilitat i l’eficiència energètica, apostant per edificis de consum gairebé zero. El nostre compromís no s’atura en l’estructura externa; ens endinsem en el disseny d’espais interiors, prioritzant la salut i el benestar dels usuaris per a fomentar una millora substancial en la seva qualitat de vida. Cada línia traçada i cada material escollit son decisions preses per generar entre tots un futur més sostenible.
                    </p>
                </div>
            </section>
        </main>
    </>
}

export default Home