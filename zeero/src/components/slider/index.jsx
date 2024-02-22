import React, { useEffect, useState, useRef } from 'react';
import data from './data';
import Dots from './dots';

const TIME_BETWEEN_IMAGES = 6000; // Fade transition in milliseconds
const TIME_TRANSITION_IMAGE = 2000;
const PICTURES_KEY = 'slider_pictures_key';
const SOURCES_KEY = 'slider_sources_key';
const IMGS_KEY = 'slider_img_key';

const Slider = () => {
  const [currentPosPicture, setCurrentPosPicture] = useState(data.length - 1);
  const picturesRef = useRef(data.map(() => React.createRef()));

  useEffect(() => {
    const MAX = data.length - 1;

    const intervalID = setInterval(() => {
      picturesRef.current[currentPosPicture].current.classList.add('opacity-0');

      setCurrentPosPicture(currentPosPicture - 1);

      if (currentPosPicture === 1) {
        picturesRef.current[MAX].current.style.zIndex = -1;
        picturesRef.current[MAX].current.classList.remove('opacity-0');
      }

      if (currentPosPicture < 1) {
        const timeoutID = setInterval(() => {
          picturesRef.current[MAX].current.style.zIndex = MAX;
          picturesRef.current.forEach((pr) => pr.current.classList.remove('opacity-0'));

          clearTimeout(timeoutID);
        }, TIME_TRANSITION_IMAGE);
        setCurrentPosPicture(MAX);
      }
    }, TIME_BETWEEN_IMAGES);

    // Clear the interval when unmounting the component or when a change occurs in currentPicture
    return () => clearInterval(intervalID);
  }, [currentPosPicture]);

  return <>
    <div className='h-[115vh] w-full relative [&>picture:not(:first-child)]:absolute [&>picture:not(:first-child)]:top-0 [&>picture:not(:first-child)]:left-0'>
        {
            data.map((d, i) => (
                <picture
                    ref={picturesRef.current[i]}
                    key={`${PICTURES_KEY}_${i}`}
                    className='h-inherit w-inherit transition-opacity ease'
                    style={{ transitionDuration: `${TIME_TRANSITION_IMAGE}ms` }}
                >
                    {d.source.map((source, j) => (
                        <React.Fragment key={`${SOURCES_KEY}_${i}_${j}`}>
                            {/* <link rel="preload" href={source.srcSet} as="image" /> */}
                            <source
                                media={source.media}
                                sizes={source.media}
                                srcSet={`${source.srcSet} ${source.size}`}
                                type={source.type}
                            />
                        </React.Fragment>
                    ))}
                    <img
                        key={`${IMGS_KEY}_${i}`}
                        className='h-inherit w-inherit block object-cover object-center'
                        src={d.img.src}
                        alt='Construcció modular'
                        ref={(img) => { // Ref callback to handle image loading
                            if (img && !img.dataset.loaded) { // Checking if the image is present and not loaded
                                img.dataset.loaded = true; // Setting a custom 'loaded' attribute to true
                                img.onload = () => { // Event handler for image load
                                    img.setAttribute('width', `${img.naturalWidth}`) // Setting the width attribute to natural width
                                    img.setAttribute('height', `${img.naturalHeight}`) // Setting the height attribute to natural height
                                }
                            }
                        }}
                    />
                </picture>
            ))
        }
      </div>
      <Dots timeBtwnImages={TIME_BETWEEN_IMAGES} timeTransitionImage={TIME_TRANSITION_IMAGE} />
    </>
};

export default Slider;
