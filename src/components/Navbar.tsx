const Navbar = () => {
    return (
      <header className="position-relative">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid d-flex align-items-center px-5">
            <h1>
              <a href="#" className="navbar-brand text-white">
                Design
              </a>
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarLinks"
              aria-controls="navbarLinks"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-lg-around"
              id="navbarLinks"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        One
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Two
                      </a>
                    </li>
                  </ul>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    About
                  </a>
                </li>
              </ul>
              <ul className=" justify-content-lg-between  align-items-center p-0 m-0">
              
              <button className= "nav-item btn btn-sm rounded-pill px-lg-4 w-auto text-white py-2"  style={{backgroundColor:" rgb(130, 6, 212)"}}>
                Explore
              </button>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Navbar;
  