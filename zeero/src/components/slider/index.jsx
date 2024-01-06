import data from './data'

const Slider = () => {
    return <div className='h-[115dvh]'>
        {data.map(d => (
            <picture className='h-inherit'>
                {d.source.map(source => (
                    <source
                        media={source.media}
                        srcSet={source.srcSet}
                        type={source.type}
                    />)
                )}
                <img className='h-inherit object-cover object-center' src={d.src} alt={d.alt} />
            </picture>
        ))}
        {/* <picture>
            <source 
                media="(min-width: 0px)" 
                srcSet="https://picsum.photos/id/1/2000/1000"
                type="image/webp"
            />
            <img 
                src="https://picsum.photos/id/1/2000/1000" 
                alt="Estructura de madera en cielo despejado"
            />
        </picture> */}

        {/* <picture>
            <source
            type="image/avif"
            srcSet="image-url-300.avif 300w, image-url-768.avif 768w, image-url-1280.avif 1280w"
            sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
            />
            <source
            type="image/jpeg"
            srcSet="image-url-300.jpg 300w, image-url-768.jpg 768w, image-url-1280.jpg 1280w"
            sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
            />
            <img src="image-url-1280.jpg" />
        </picture> */}
    </div>
}

export default Slider