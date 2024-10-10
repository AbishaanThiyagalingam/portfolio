import React, { useRef, useEffect } from 'react';
import lang1 from "../assets/img/lang1.png";
import lang2 from "../assets/img/lang2.webp";
import lang3 from "../assets/img/lang3.webp";
import lang4 from "../assets/img/lang4.png";
import lang5 from "../assets/img/lang5.png";
import lang6 from "../assets/img/lang6.png";
import lang7 from "../assets/img/lang7.png";
import lang8 from "../assets/img/lang8.webp";
import lang9 from "../assets/img/lang9.png";
import lang10 from "../assets/img/lang10.png";
import lang11 from "../assets/img/lang11.png";
import lang12 from "../assets/img/lang12.png";
import colorSharp from "../assets/img/color-sharp.png"; 
import colorSharp2 from "../assets/img/color-sharp2.png"; // Background image

export const Skills = () => {
  const scrollRef = useRef(null);

  const languages = [
    { img: lang1, name: "JavaScript" },
    { img: lang12, name: "TypeScript" },
    { img: lang2, name: "Java" },
    { img: lang3, name: "Python" },
    { img: lang4, name: "ReactJs" },
    { img: lang5, name: "NodeJs" },
    { img: lang6, name: "C" },
    { img: lang7, name: "C++" },
    { img: lang8, name: "PHP" },
    { img: lang9, name: "Kotlin" },
    { img: lang10, name: "HTML" },
    { img: lang11, name: "CSS" }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollStep = 1; // Pixels to scroll on each frame
    const scrollSpeed = 25; // Interval time (ms) between each scroll

    // Duplicate the scroll content to create an infinite scroll effect
    const totalContentWidth = scrollContainer.scrollWidth;
    scrollContainer.innerHTML += scrollContainer.innerHTML; // Duplicate content

    const loopScroll = () => {
      // Scroll a small amount to the left
      scrollContainer.scrollLeft += scrollStep;

      // Reset scroll position when reaching the end
      if (scrollContainer.scrollLeft >= totalContentWidth) {
        scrollContainer.scrollLeft = 0; // Reset scroll position to the beginning
      }
    };

    // Start auto-scrolling using setInterval
    const intervalId = setInterval(loopScroll, scrollSpeed);

    return () => {
      // Cleanup interval on component unmount
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="stacks" id="stacks">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="stack-bx wow zoomIn">
              <h2>Stacks</h2>
              <h3>Programming Languages</h3>
              <p>Here are the programming languages I use regularly in my projects:</p>

              <div className="lang-grid" ref={scrollRef}>
                {languages.map((language, index) => (
                  <div className="lang-item" key={index}>
                    <img src={language.img} alt={`${language.name} logo`} />
                    <h5>{language.name}</h5>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  );
}
