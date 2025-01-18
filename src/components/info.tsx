const Info = () => {
    return (
      <div className="container-fluid">
        <h1 className="container-title text-center mb-5 mt-3">How it works</h1>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center text-center mb-4">
            <i
              className="icon fa-solid fa-crown p-4 rounded-circle cursor-pointer"
              style={{
                fontSize: "24px",
                color: "white"
              }}
            ></i>
            <h5 className="mt-3">Be a King</h5>
            <p>Our design layouts are standalone and highly adored by top firms</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center text-center mb-4">
            <i
              className="icon fa-solid fa-circle-info p-4 rounded-circle cursor-pointer"
              style={{
                fontSize: "24px",
                color: "white"
              }}
            ></i>
            <h5 className="mt-3">Informative</h5>
            <p>Our design layouts provide a highly informative UI, to understand things easily</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center text-center mb-4">
            <i
              className="icon fa-solid fa-cloud p-4 rounded-circle cursor-pointer"
              style={{
                fontSize: "24px",
                color: "white"
              }}
            ></i>
            <h5 className="mt-3">Cloud Storage</h5>
            <p>Our devices come up with a large amount of storage options with cloud too.</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column align-items-center text-center mb-4">
            <i
              className="icon fa-solid fa-tv p-4 rounded-circle cursor-pointer"
              style={{
                fontSize: "24px",
                color: "white"
              }}
            ></i>
            <h5 className="mt-3">Quality</h5>
            <p>Our design of pixels are often being updated and maintained for better clarity.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Info;
  