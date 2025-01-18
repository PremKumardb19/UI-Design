import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div
      className="outer-banner py-sm-2 px-sm-2 container-fluid mt-5 py-0  position-relative d-lg-flex justify-content-lg-center flex-col"
      style={{ height: "400px" }}
    >
      <div
        className="banner d-flex flex-column align-items-center justify-content-start
         w-100 my-0  top-0 container-fluid ps-0"
        style={{
          height: "50%",
          width: "100%",
        }}
      >
              <h3 className="text-center text-light">
            Scalable and Compatible with all devices
          </h3>
          <button
            className="btn button rounded-pill mt-lg-3 mb-lg-4 z-index-1 cursor-pointer"
            style={{backgroundColor:"orangered",color:"white"}}
          >
            Discover
          </button>
      </div>
     
      <img
        src={banner}
        alt="banner"
        className="banner-img position-absolute top-50 start-50 translate-middle pt-lg-5"
      />
    </div>
  );
};

export default Banner;
