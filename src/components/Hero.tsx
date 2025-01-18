import Navbar from "./Navbar";
import img1 from "../assets/snow.jpg";
import img2 from "../assets/img.jpg";
import img3 from "../assets/aurora.jpg";

const Hero = () => {
  return (
    <div className="hero position-relative">
      <Navbar />
      <div
        id="carou-item"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000" 
      >
       
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carou-item"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carou-item"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carou-item"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              alt="Snowy Mountain"
              style={{ opacity: 0.7 }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              alt="Beautiful Landscape"
              style={{ opacity: 0.7 }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="Northern Lights"
              style={{ opacity: 0.7 }}
            />
          </div>
        </div>

      
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carou-item"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carou-item"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <a
          href="#carou-item"
          className="text-decoration-none text-dark mx-2"
          data-bs-slide-to="0"
          role="button"
        >
          First Slide
        </a>
        <a
          href="#carou-item"
          className="text-decoration-none text-dark mx-2"
          data-bs-slide-to="1"
          role="button"
        >
          Second Slide
        </a>
        <a
          href="#carou-item"
          className="text-decoration-none text-dark mx-2"
          data-bs-slide-to="2"
          role="button"
        >
          Third Slide
        </a>
      </div>

    
      <div className="content position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1>Welcome to Our Hero Section</h1>
        <p>This is some content overlaying the background carousel.</p>
        <button className="btn text-light" style={{backgroundColor:" rgb(130, 6, 212)"}}>Discover Now</button>
      </div>
    </div>
  );
};

export default Hero;
