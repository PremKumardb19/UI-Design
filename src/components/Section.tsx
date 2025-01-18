import img3 from "../assets/aurora.jpg";

const Section = () => {
  return (
    <div className="section container-fluid mt-5 d-lg-flex d-md-flex align-items-center px-4 mb-5"  style={{ backgroundColor: "#f8f9fa", borderRadius: "12px" }}>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <img
          src={img3}
          alt="Aurora"
          className="img-fluid rounded shadow-lg w-100"
          style={{ maxHeight: "800px", objectFit: "cover" }}
        />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 ms-lg-4 mt-sm-4 py-2 px-2">
        <h1 className="fs-3 fw-bold mb-3 mt-sm-5">This is the Heading of the content</h1>
        <p className="text-muted">The description goes here.The description goes here.The description goes here.The description goes here.The description goes here.The description goes here.</p>
      </div>
    </div>
  );
};

export default Section;
