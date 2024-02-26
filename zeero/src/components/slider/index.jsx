import React, { useEffect, useState, useRef } from 'react';
import data from './data';
import Dots from './dots';

// Constants
const TIME = { // In miliseconds
  BETWEEN_IMAGES: 6000, // Time between image transitions
  TRANSITION_IMAGE: 2000, // Transition time for image fade
};

const KEY = {
  PICTURES : 'slider_pictures_key',
  SOURCES : 'slider_sources_key',
  IMGS : 'slider_img_key'
}

const OPACITY_0 = 'opacity-0'; // Class for hiding element

const Slider = () => {
  // State and Refs
  const [currentPosPicture, setCurrentPosPicture] = useState(data.length - 1);
  const picturesRef = useRef(data.map(() => React.createRef()));

  // Effect to handle automatic image transitions
  useEffect(() => {
    const MAX = data.length - 1;

    // Interval to change images
    const intervalID = setInterval(() => {
      // Fade out the current image
      picturesRef.current[currentPosPicture].current.classList.add(OPACITY_0);

      // Move to the next image
      setCurrentPosPicture(currentPosPicture - 1);

      // Handling when reaching the second image
      if (currentPosPicture === 1) {
        picturesRef.current[MAX].current.style.zIndex = -1;
        picturesRef.current[MAX].current.classList.remove(OPACITY_0);
      }

      // Handling when reaching the end of the images
      if (currentPosPicture < 1) {
        const timeoutID = setInterval(() => {
          picturesRef.current[MAX].current.style.zIndex = MAX;
          picturesRef.current.forEach((pr) => pr.current.classList.remove(OPACITY_0));

          clearTimeout(timeoutID);
        }, TIME.TRANSITION_IMAGE);
        setCurrentPosPicture(MAX);
      }
    }, TIME.BETWEEN_IMAGES);

    // Clean up the interval when unmounting or when currentPosPicture changes
    return () => clearInterval(intervalID);
  }, [currentPosPicture]);

  // Styles
  const styles = {
    div: 'h-[115vh] w-full relative [&>picture:not(:first-child)]:absolute [&>picture:not(:first-child)]:top-0 [&>picture:not(:first-child)]:left-0',
    picture: {
      classes : 'h-inherit w-inherit transition-opacity ease',
      css : { transitionDuration: `${TIME.TRANSITION_IMAGE}ms` }
    },
    img: 'h-inherit w-inherit block object-cover object-center',
  };

  const img = {
    properties : {
      alt : 'Construcción modular'
    },
    attributes : {
      name : {
        width : 'width',
        height : 'height'
      }
    }
  }

  // Function to handle image loading and set width/height attributes
  const handleImageLoad = (imgElement) => {
    // Check if the image element exists and has not been loaded
    if (imgElement && !imgElement.dataset.loaded) {
      // Mark the image as loaded
      imgElement.dataset.loaded = true;

      // Set an event handler for when the image loads
      imgElement.onload = () => {
        // Set the width attribute to the natural width of the image
        imgElement.setAttribute(img.attributes.name.width, `${imgElement.naturalWidth}`);
        // Set the height attribute to the natural height of the image
        imgElement.setAttribute(img.attributes.name.height, `${imgElement.naturalHeight}`);
      };
    }
  };

  return (
    <>
      <div className={styles.div}>
        {data.map((d, i) => (
          <picture
            ref={picturesRef.current[i]}
            key={`${KEY.PICTURES}_${i}`}
            className={styles.picture.classes}
            style={styles.picture.css}
          >
            {d.source.map((source, j) => (
              <React.Fragment key={`${KEY.SOURCES}_${i}_${j}`}>
                <source
                  media={source.media}
                  sizes={source.media}
                  srcSet={`${source.srcSet} ${source.size}`}
                  type={source.type}
                />
              </React.Fragment>
            ))}
            <img
              key={`${KEY.IMGS}_${i}`}
              className={styles.img}
              src={d.img.src}
              alt={img.properties.alt}
              ref={handleImageLoad}
            />
          </picture>
        ))}
      </div>
      <Dots timeBtwnImages={TIME.BETWEEN_IMAGES} timeTransitionImage={TIME.TRANSITION_IMAGE} />
    </>
  )
}

export default Slider