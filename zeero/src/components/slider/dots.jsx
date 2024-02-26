import React, { useEffect, useRef, useState } from "react";
import data from './data';

// Constants for class names
const DOTS_KEY = 'slider_dots';
const BG_ZEERO_PRIMARY = 'bg-zeero-primary';
const BG_TRANSPARENT = 'bg-transparent';

/**
 * Component for rendering the dots navigation for the slider.
 *
 * @param {number} timeBtwnImages - Time between image transitions.
 * @param {number} timeTransitionImage - Transition time for dot color change.
 */
const Dots = ({ timeBtwnImages, timeTransitionImage }) => {
  // State to track the current position of the active dot
  const [currentPosDot, setCurrentPosDot] = useState(1);

  // Refs for each dot element
  const dotsRef = useRef(data.map(() => useRef()));

  // Styles for the dots
  const styles = {
    div: 'flex flex-col justify-end gap-2 absolute w-full top-0 bottom-0 left-0 z-50 pl-zeero pb-zeero h-[100dvh] md:h-screen pointer-events-none',
    span: 'w-[12px] h-[12px] border-[1px] transition-colors ease border-zeero-primary rounded-full',
  };

  // Generate dots JSX elements
  const dots = data.map((d, i) => (
    <span
      ref={dotsRef.current[i]}
      key={`${DOTS_KEY}_${i}`}
      className={`${styles.span} ${i === 0 ? BG_TRANSPARENT : BG_ZEERO_PRIMARY}`}
      style={{ transitionDuration: `${timeTransitionImage}ms` }}
    ></span>
  ));

  // Effect to handle dot transitions
  useEffect(() => {
    const MAX = dots.length - 1;

    // Interval to change active dot
    const intervalID = setInterval(() => {
      if (currentPosDot > MAX) {
        // Reset dots to initial state
        dotsRef.current.forEach((dot) => {
          dot.current.classList.remove(BG_TRANSPARENT);
          dot.current.classList.add(BG_ZEERO_PRIMARY);
        });

        // Set first dot as active
        dotsRef.current[0].current.classList.add(BG_TRANSPARENT);
        dotsRef.current[0].current.classList.remove(BG_ZEERO_PRIMARY);
        
        // Reset to the first dot position
        setCurrentPosDot(1);
      } else {
        // Toggle classes for current and next dot
        dotsRef.current[currentPosDot - 1].current.classList.toggle(BG_ZEERO_PRIMARY);
        dotsRef.current[currentPosDot].current.classList.toggle(BG_ZEERO_PRIMARY);
        dotsRef.current[currentPosDot].current.classList.toggle(BG_TRANSPARENT);

        // Move to the next dot
        setCurrentPosDot((prevPos) => prevPos + 1);
      }
    }, timeBtwnImages);

    // Clean up the interval when unmounting or when currentPosDot changes
    return () => clearInterval(intervalID);
  }, [currentPosDot]);

  // Render the dots navigation
  return (
    <div className={styles.div}>
      {dots}
    </div>
  );
};

export default Dots;
