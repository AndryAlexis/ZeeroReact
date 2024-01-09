import home01 from '../../assets/img/webp/home/Imagen-home_01.webp'
import home02 from '../../assets/img/webp/home/Imagen-home_02.webp'
import home03 from '../../assets/img/webp/home/Imagen-home_03.webp'
import home04 from '../../assets/img/webp/home/Imagen-home_04.webp'


const data = [
    {
        source : [
            {
                media : '(min-width: 0px)',
                srcSet : home01,
                type : 'image/webp'
            },
        ],
        img : {
            src : home01, 
            alt : 'Estructura de madera en cielo despejado'
        }
    },
    // {
    //     source : [
    //         {
    //             media : '(min-width: 0px)',
    //             srcSet : home02,
    //             type : 'image/webp'
    //         },
    //     ],
    //     img : {
    //         src : home02, 
    //         alt : 'Estructura de madera en cielo despejado'
    //     }
    // },
    {
        source : [
            {
                media : '(min-width: 0px)',
                srcSet : home03,
                type : 'image/webp'
            },
        ],
        img : {
            src : home03, 
            alt : 'Estructura de madera en cielo despejado'
        }
    },
    {
        source : [
            {
                media : '(min-width: 0px)',
                srcSet : home04,
                type : 'image/webp'
            },
        ],
        img : {
            src : home04, 
            alt : 'Estructura de madera en cielo despejado'
        }
    },
]

export default data