import img1 from "../assets/snow.jpg";
import img2 from "../assets/img.jpg";
import img3 from "../assets/aurora.jpg";

const Landing = () => {
  return (
    <div className="container-fluid">
      <div className="content text-center">
        <h1 className="container-title mt-5 mb-3">Landing Page</h1>
        <p className="container-content">
          This is just the description of the landing pages which incorporates
          the themes and design of our webpages.
        </p>
      </div>

      <div className="gallery d-flex flex-column flex-lg-row justify-content-center gap-3">
        <div className="image-container position-relative mb-3 col-sm-12 col-md-12 col-lg-3">
          <img
            src={img1}
            alt="Image 1"
            className="img-fluid opacity-75"
            style={{ width: "90%", height: "auto", objectFit: "cover" }}
          />
          <div
            className="image-content position-absolute bottom-0 start-0 p-3 text-white bg-dark bg-opacity-50"
            style={{ width: "90%", height: "auto" }}
          >
            <h6>Heading</h6>
            <p>This is the Content</p>
          </div>
        </div>

        <div className="image-container position-relative mb-3 col-sm-12 col-md-12 col-lg-3">
          <img
            src={img2}
            alt="Image 2"
            className="img-fluid opacity-75"
            style={{ width: "90%", height: "auto", objectFit: "cover" }}
          />
          <div
            className="image-content position-absolute bottom-0 start-0 p-3 text-white bg-dark bg-opacity-50"
            style={{ width: "90%", height: "auto" }}
          >
            <h6>Heading</h6>
            <p>This is the Content</p>
          </div>
        </div>

        <div className="image-container position-relative mb-3 col-sm-12 col-md-12 col-lg-3">
          <img
            src={img3}
            alt="Image 3"
            className="img-fluid opacity-75"
            style={{ width: "90%", height: "auto", objectFit: "cover" }}
          />
          <div
            className="image-content position-absolute bottom-0 start-0 p-3 text-white bg-dark bg-opacity-50"
            style={{ width: "90%", height: "auto" }}
          >
            <h6>Heading</h6>
            <p>This is the Content</p>
          </div>
        </div>

        <div className="image-container position-relative mb-3 col-sm-12 col-md-12 col-lg-3">
          <img
            src={img1}
            alt="Image 4"
            className="img-fluid opacity-75"
            style={{ width: "90%", height: "auto", objectFit: "cover" }}
          />
          <div
            className="image-content position-absolute bottom-0 start-0 p-3 text-white bg-dark bg-opacity-50"
            style={{ width: "90%", height: "auto" }}
          >
            <h6>Heading</h6>
            <p>This is the Content</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn text-light rounded-pill px-5 py-2"
          style={{ backgroundColor: "rgb(130, 6, 212)" }}
        >
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Landing;
