import img1 from "../assets/snow.jpg";
import img2 from "../assets/img.jpg";
import img3 from "../assets/aurora.jpg";

const Cards = () => {
  return (
    <div className="container-fluid my-5 py-2">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-5">Awesome Design</h1>
        </div>
        <div className="col-md-4 mb-4 mb-md-3">
          <div className="card h-100 shadow-lg custom-card">
            <div className="row g-0 h-100">
              <div className="col-4 h-100">
                <img
                  src={img1}
                  className="img-fluid h-100"
                  style={{ objectFit: "cover" }}
                  alt="Snow"
                />
              </div>
              <div className="col-8">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Card 1</h5>
                  <p className="card-text d-sm-block d-md-none">
                   This is card with less text
                  </p>
                  <p className="card-text d-none d-md-block">
                  This is a larger card filled with many content being contained inside of it
                  </p>
                  <p className="card-text mt-auto">
                    <small className="text-body-secondary">Peter Parker</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 mb-md-3">
          <div className="card h-100 shadow-lg custom-card">
            <div className="row g-0 h-100">
              <div className="col-4 h-100">
                <img
                  src={img2}
                  className="img-fluid h-100"
                  style={{ objectFit: "cover" }}
                  alt="Image"
                />
              </div>
              <div className="col-8">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Card 2</h5>
                  <p className="card-text d-sm-block d-md-none">
                    This is card with less text
                  </p>
                  <p className="card-text d-none d-md-block">
                  This is a larger card filled with many content being contained inside of it
                  </p>
                  <p className="card-text mt-auto">
                    <small className="text-body-secondary">Peter Parker</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4 mb-md-3">
          <div className="card h-100 shadow-lg custom-card">
            <div className="row g-0 h-100">
              <div className="col-4 h-100">
                <img
                  src={img3}
                  className="img-fluid h-100"
                  style={{ objectFit: "cover" }}
                  alt="Aurora"
                />
              </div>
              <div className="col-8">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Card 3</h5>
                  <p className="card-text d-sm-block d-md-none">
                   This is card with less text
                  </p>
                  <p className="card-text d-none d-md-block">
                    This is a larger card filled with many content being contained inside of it
                  </p>
                  <p className="card-text mt-auto">
                    <small className="text-body-secondary">Peter Parker</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
