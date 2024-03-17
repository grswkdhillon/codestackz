import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import cszlogo from '/images/cszlogo.png'
const NavBar = () => {

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 40) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  setTimeout(() => {
    var offcanvasNavbar1 = document.getElementById('offcanvasNavbar');
    if (!offcanvasNavbar1.hasEventListener) {
      offcanvasNavbar1.hasEventListener = true;
      offcanvasNavbar1.addEventListener('click', function (event) {

        if (event.target.tagName == 'A') {
          offcanvasNavbar1.classList.remove('show');
          event.stopPropagation();
        }


      });
    }
  }, 2000)


  return (
    <>
      <nav className={`navbar navbar-expand-xl py-3 ltblue ${isNavbarFixed ? 'fixed-top' : ''}`}  >
        <div className="container">
          <Link className="navbar-brand fs-3 fw-bold text-white" id="brandName" to={'/'}><img src={cszlogo} style={{ width: "50px", height: "50px", marginRight: "5px" }}></img>CodeStack<span className="text-danger">Z</span></Link>
          <a className="btn ltblue me-3 ms-auto d-md-none navButton xxsHide" href='tel:8887777555' style={{ paddingInline: ".8rem " }}><i className="fa-solid fa-phone fs-5"></i></a>
          <Link className="btn ltblue px-3 me-4 d-md-none navButton xxsHide" to={'/contactus'}><i className="fa-solid fa-clipboard-question fs-4"></i></Link>
          <a className="btn px-3 me-3 ms-auto d-none d-md-block d-xl-none float-end ltblue navButton" href='tel:8887777555'>888 7777 555</a>
          <Link className="btn ltblue px-3 me-4 d-none d-md-block d-xl-none  float-end navButton" to={'/contactus'}>Quote on the housee</Link>
          <button className="navbar-toggler navButton  rounded-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <i className="fa-solid fa-bars fs-2" style={{ color: "#ffffff" }}></i>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><a className="navbar-brand fs-3 fw-bold text-white" id="brandName" href="#"><img src={cszlogo} style={{ width: "47px", height: "47px", marginRight: "5px" }}></img></a></h5>
              {/* <button type="button" className="btn-close" ></button> */}
              <button className="fa-solid fa-xmark border-0 bg-white fs-1" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body  ps-0 customCanvas" style={{ minWidth: "600px" }}>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item ms-xl-auto me-2 custombg">
                  <Link className="nav-link navLink" aria-current="page" to={'/'} >Home</Link>
                </li>
                <li className="nav-item me-2 custombg">
                  <a className="nav-link navLink" href="#">Link</a>
                </li>
                <li className="nav-item dropdown custombg">
                  <a className="nav-link dropdown-toggle navLink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <div className="dropdown-menu w-100 text-white servicesDropdownDiv" >
                    <ul type='none' className="p-0">
                      <li className="navLink cus">
                        Web Development
                      </li>
                      <li className="navLink">
                        Mobile App Development
                      </li>
                      <li className="navLink">
                        Web Maintenance
                      </li>
                      <li className="navLink">
                        Web Consultancy
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item me-2 custombg">
                  <Link className="nav-link navLink" aria-current="page" to={'/aboutus'}>About us</Link>
                </li>
                <li className="nav-item me-2 custombg">
                  <Link className="nav-link navLink" to={'/contactus'}>Contact us</Link>
                </li>

                <li className="ms-auto d-none d-xl-block">
                  <a className="btn ltblue px-4  d-none d-lg-block d-xl-block navButton" href='tel:8887777555'>888 7777 555</a>
                </li>
                <li className="ms-3 d-none d-xl-block">
                  <Link className="btn ltblue px-4  d-none d-lg-block d-xl-block navButton" to={'/contactus'}>Quote on the house</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className={`${isNavbarFixed ? 'd-block' : 'd-none'}`} style={{ height: "92px" }}>
      </div>
    </>
  )
}

export default NavBar;