import pdf from "../pdf/Rahul giri resume 2.pdf";
import img1 from "../assets/image/hero.avif";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const typedElement = useRef();

  useEffect(() => {
    const options = {
      strings: [
        "Welcome To My Profile",
        "My Name Is Rahul Giri",
        "I Am Full Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="res3 container home d-flex justify-content-between align-items-center"
        id="home"
      >
        <div
          className="res-5 left"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <h1 ref={typedElement}>hello</h1>
          <a
            href={pdf}
            download="resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>

        <div
          className="right res4"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <div className="img">
            <img src={img1} className="rounded-pill" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
