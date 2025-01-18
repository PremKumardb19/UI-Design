const Footer = () => {
  return (
    <div className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-2">
            <h5 className="text-light">Social</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="#" className="hover-white">
                  <i className="fab fa-facebook-f fa-lg hover-facebook" style={{ color: "gray" }}></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="hover-white">
                  <i className="fab fa-twitter fa-lg hover-twitter" style={{ color: "gray" }}></i>
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="hover-white">
                  <i className="fab fa-linkedin-in fa-lg hover-linkedin" style={{ color: "gray" }}></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h5 className="text-light">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="nav-link hover-white" style={{ color: "gray" }}>About Us</a></li>
              <li><a href="#" className="nav-link hover-white" style={{ color: "gray" }}>Careers</a></li>
              <li><a href="#" className="nav-link hover-white" style={{ color: "gray" }}>Press</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h5 className="text-light">Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="nav-link hover-white" style={{ color: "gray" }}>Web Development</a></li>
              <li><a href="#" className="nav-link hover-white" style={{ color: "gray" }}>App Development</a></li>
              <li><a href="#" className="nav-link hover-white" style={{ color: "gray" }}>Services</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h5 className="text-light">Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="nav-link hover-white" style={{ color: "gray" }}>Help Center</a></li>
              <li><a href="#" className="nav-link hover-white" style={{ color: "gray" }}>FAQ</a></li>
              <li><a href="#" className="nav-link hover-white" style={{ color: "gray" }}>Contact Us</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h5 className="text-light">Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="nav-link hover-white" style={{ color: "gray" }}>Privacy Policy</a></li>
              <li><a href="#" className="nav-link hover-white" style={{ color: "gray" }}>Terms of Service</a></li>
              <li><a href="#" className="nav-link hover-white" style={{ color: "gray" }}>Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
