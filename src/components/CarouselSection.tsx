import img1 from "../assets/snow.jpg";
import img2 from "../assets/img.jpg";
import img3 from "../assets/aurora.jpg";

const CarouselSection = () => {
  return (
    <div className="section container-fluid mt-5 d-lg-flex d-md-flex align-items-center mb-5 flex-column flex-lg-row mt-5">
      
      <div className="container order-1 order-lg-2 col-lg-6 col-md-12 col-sm-12">
        <div id="carou" className="carousel slide" data-bs-ride="carousel">
         
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={img1}
                className="d-block w-100 rounded"
                alt="Snow"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={img2}
                className="d-block w-100 rounded"
                alt="Second Slide"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={img3}
                className="d-block w-100 rounded"
                alt="Aurora"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>

         
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carou"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carou"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>

         
          <div className="d-flex justify-content-center mt-3">
            <img
              src={img1}
              alt="Thumbnail 1"
              className="thumbnail mx-1"
              style={{
                width: "60px",
                cursor: "pointer",
                border: "none",
                boxShadow: "none",
              }}
              data-bs-target="#carou"
              data-bs-slide-to="0"
            />
            <img
              src={img2}
              alt="Thumbnail 2"
              className="thumbnail mx-1"
              style={{
                width: "60px",
                cursor: "pointer",
                border: "none",
                boxShadow: "none",
              }}
              data-bs-target="#carou"
              data-bs-slide-to="1"
            />
            <img
              src={img3}
              alt="Thumbnail 3"
              className="thumbnail mx-1"
              style={{
                width: "60px",
                cursor: "pointer",
                border: "none",
                boxShadow: "none",
              }}
              data-bs-target="#carou"
              data-bs-slide-to="2"
            />
          </div>
        </div>
      </div>

      
      <div className="order-2 order-lg-1 col-lg-6 col-md-12 col-sm-12 ms-lg-4 mt-sm-4 py-2 px-2">
        <h1 className="fs-3 fw-bold mb-3 mt-sm-5">Discover our new releases</h1>
        <p className="text-muted">The description goes here.The description goes here.The description goes here.The description goes here.The description goes here.The description goes here.</p>
      </div>
    </div>
  );
};

export default CarouselSection;
