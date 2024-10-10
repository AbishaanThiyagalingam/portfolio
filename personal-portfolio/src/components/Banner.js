import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/BannerPic.png";
import { ArrowDownCircle, ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150); // Faster typing speed
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer.", "Web Developer.", "Web Designer."];
  const period = 2000;
  const deleteSpeed = 100; // Uniform speed for deletion

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      // When the full text is typed, pause before deleting
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      // When text is fully deleted, move to the next word
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150); // Reset to typing speed
    } else {
      if (isDeleting) {
        setDelta(deleteSpeed); // Set a uniform deletion speed
      } else {
        setDelta(150); // Faster typing speed
      }
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hi! I'm Abishaan`} <br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Web Developer", "Web Designer"]'><span className="wrap">{text}</span></span></h1>
                  <p>Welcome to my portfolio! I specialize in building modern web applications, focusing on both front-end and back-end 
                    technologies. My passion for problem-solving drives me to create efficient solutions that enhance user experiences. 
                    I'm committed to delivering high-quality, user-friendly applications that meet the needs of both clients and users alike.
                     Explore my work to see how I combine creativity and technical expertise to bring ideas to life.</p>
            
                  <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>
                    Let’s Dive In <ArrowDownCircle size={25} />
                  </button>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
                <div className="HomePic">
                  <img src={headerImg} alt="Header Img"/>
                </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
